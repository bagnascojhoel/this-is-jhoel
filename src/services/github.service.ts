import { GithubApi, HttpStatus } from './data';
import type { Project } from '@types';

const PROJECT_STORAGE_KEY: string = 'projects';
let hasLoggedNotFoundMessage: boolean = false;

async function* findProjects(repositories: any[]): AsyncGenerator<Project> {
  for (const aRepository of repositories) {
    let response;
    try {
      response = await GithubApi.findMyRepositoryDescription(aRepository.name);
    } catch (error) {
      if (error.response.status === HttpStatus.NOT_FOUND) {
        logNotFoundBehaviorMessage();
        continue;
      } else throw error;
    }

    const project = JSON.parse(atob(response.data.content));
    project.githubUrl = aRepository.html_url;
    project.name;
    yield project;
  }
}

export async function* findMyPortfolio(): AsyncGenerator<Project[]> {
  let projects: Project[] = retrieveSessionProjects();
  if (projects.length > 0) {
    return projects;
  }

  let repositories: any[];
  try {
    repositories = (await GithubApi.findMyPublicRepositories()).data;
  } catch (error) {
    return retrieveLocalProjects();
  }

  const projectsFoundIterator = findProjects(repositories);

  let hasNext: boolean = true;
  while (hasNext) {
    const { done, value } = await projectsFoundIterator.next();
    hasNext = !done;

    if (value) {
      projects = [...projects, value];
      yield projects;
    }
  }

  persistProjects(projects);
}

function retrieveLocalProjects(): Project[] {
  const retrievedValue = localStorage.getItem(PROJECT_STORAGE_KEY);

  if (retrievedValue) return JSON.parse(retrievedValue);
  else return [];
}

function retrieveSessionProjects(): Project[] {
  const retrievedValue = sessionStorage.getItem(PROJECT_STORAGE_KEY);

  if (retrievedValue) return JSON.parse(retrievedValue);
  else return [];
}

function persistProjects(projects: Project[]): void {
  localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(projects));
  sessionStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(projects));
}

function logNotFoundBehaviorMessage() {
  if (!hasLoggedNotFoundMessage) {
    console.info(
      `Since this front-end is communicating directly with GitHub's REST API, when a public projects
does not have the 'this-is-jhoel.json' description file, a 404 (Not Found) is returned. Some 
browsers may log the 404 as errors.`
    );
    hasLoggedNotFoundMessage = true;
  }
}
