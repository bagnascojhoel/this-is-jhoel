<script lang="ts">
  import GithubIcon from 'svelte-icons/go/GoMarkGithub.svelte';
  import Icon from '../Icon/Icon.svelte';

  export let title: string;
  export let tags: string[] = [];
  export let description: string;
  export let githubUrl: string;
  export let websiteUrl: string = null;
</script>

<div class="w-11/12 p-4 rounded-3xl bg-gray-500">
  <div class="flex flex-row justify-between">
    <ul class="flex flex-row flex-wrap">
      {#each tags as tag}
        <li
          class="bg-yellow-300 rounded-full mb-2 mr-2 px-2 font-mono text-gray-600 font-bold"
        >
          {tag}
        </li>
      {/each}
    </ul>

    <div class="grid gap-3 col-start-2 grid-flow-col-dense">
      {#if websiteUrl}
        <a href={websiteUrl}>
          <Icon name="out-link" tailwindSize={6} />
        </a>
      {/if}
      <a href={githubUrl}>
        <Icon name="github" tailwindSize={6} />
      </a>
    </div>
  </div>

  <h3 class="mt-6 text-2xl text-white font-mono font-bold">{title}</h3>
  <p class="mt-3 font-sans text-white">{description}</p>
</div>
