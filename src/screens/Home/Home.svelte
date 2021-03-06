<script lang="ts">
  import { onMount } from 'svelte';
  import { Card, Icon } from '@components';
  import { GithubService } from '@services';
  import type { Project } from '@types';

  const INTRO_TITLE = 'Hi, my name is Jhoel';
  const INTRO_DESCRIPTION =
    "I'm a software developer from Brazil. Coding has been a passion of mine since I learned how a computer program is structured, back in 2015 at my technical course. From then, I've been improving my skills for web development in both front and back-end; I also have been working in the area since 2021.";
  const PROJECTS_SECTION_TITLE =
    "These are some of the projects I've been working on";
  const CONTACT_SECTION_TITLE = 'If you would like to contact me :)';
  const AUTHOR_FOOTER_BEFORE_ICON = 'made with';
  const AUTHOR_FOOTER_AFTER_ICON = 'by me';

  const myEmail = 'bagnascojhoel@gmail.com';
  const myGithub = 'https://github.com/bagnascojhoel';
  const myLinkedin = 'https://www.linkedin.com/in/jhoel-galeano';
  const emailSubject = "Hey! I'm sending this from your website!";

  let projects: Project[] = [];

  $: isLoading = projects.length === 0;

  onMount(async () => {
    const portfolioIterator = GithubService.findMyPortfolio();

    let hasNext: boolean = true;
    do {
      let { done, value } = await portfolioIterator.next();
      hasNext = !done;
      projects = value;
    } while (hasNext);
  });
</script>

<div
  class="
    bg-gradient-to-br 
  from-gray-900 
  to-gray-500
"
>
  <main
    class="
      container
      m-auto 
      min-h-screen
      pt-32 md:pt-48 lg:pt-60 2xl:pt-72
      pb-16
      relative
    "
  >
    <div
      class="
      mb-32 
      md:mb-48 
      lg:mb-60 
      2xl:mb-72 
      px-6 
    "
    >
      <h1
        class="
        mb-5
        leading-relaxed 
        font-mono 
        text-gray-50 
        text-3xl 
        lg:text-5xl 
        font-bold 
      "
      >
        {INTRO_TITLE}
      </h1>
      <p class="text-base text-gray-50 max-w-3xl">
        {INTRO_DESCRIPTION}
      </p>
    </div>

    <div class="flex flex-row justify-center items-center">
      <div class="h-3 w-3 mx-2 bg-yellow-300 rounded-full" />
      <div class="h-5 w-5 mx-2 bg-yellow-300 rounded-full" />
      <div class="h-3 w-3 mx-2 bg-yellow-300 rounded-full" />
    </div>

    <h2 class="mt-32 px-6 font-mono text-white text-2xl lg:text-3xl font-bold">
      {PROJECTS_SECTION_TITLE}
    </h2>

    {#if isLoading}
      <div class="mt-10 flex justify-center items-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-l-transparent"
          role="status"
        >
          <span class="invisible">Loading...</span>
        </div>
      </div>
    {:else}
      <section
        class="container mx-auto mt-10 px-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-stretch"
      >
        {#each projects as project}
          <Card
            githubUrl={project.githubUrl}
            title={project.title}
            description={project.description}
            tags={project.tags}
            websiteUrl={project.websiteUrl}
          />
        {/each}
      </section>
    {/if}

    <section class="mt-40">
      <h3
        class="text-xl lg:text-2xl px-7 text-center text-white font-bold font-mono"
      >
        {CONTACT_SECTION_TITLE}
      </h3>

      <ul class="mt-7 flex flex-row justify-center">
        <li class="px-2">
          <a href={myLinkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" />
          </a>
        </li>
        <li class="px-2">
          <a href={myGithub} target="_blank" rel="noopener noreferrer">
            <Icon name="github" />
          </a>
        </li>
        <li class="px-2">
          <a href={`mailto:${myEmail}?subject=${emailSubject}`} target="_blank">
            <Icon name="gmail" />
          </a>
        </li>
      </ul>
    </section>
  </main>
</div>

<footer class="py-1 flex justify-center relative bg-orange-600">
  <p class="text-white text-sm font-mono">
    {AUTHOR_FOOTER_BEFORE_ICON}
    <Icon name="coffee" size={16} class="mx-1" />
    {AUTHOR_FOOTER_AFTER_ICON}
  </p>
</footer>
