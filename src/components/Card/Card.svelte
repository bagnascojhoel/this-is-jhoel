<script lang="ts">
  import Icon from '../Icon/Icon.svelte';

  export let title: string;
  export let tags: string[] = [];
  export let description: string;
  export let githubUrl: string;
  export let websiteUrl: string = null;
</script>

<div class="p-5 rounded-3xl bg-gray-500">
  <div class="flex flex-row justify-between">
    <ul class="flex flex-row flex-wrap">
      {#each tags as tag}
        <li
          class="mb-2 mr-2 px-2 bg-yellow-300 rounded-full 2xl:text-xl font-mono text-gray-600 font-bold"
        >
          {tag}
        </li>
      {/each}
    </ul>

    <div class="grid gap-3 col-start-2 grid-flow-col-dense">
      {#if websiteUrl}
        <a href={websiteUrl}>
          <Icon name="out-link" size={24} htmlClass="fill-yellow-300" />
        </a>
      {/if}
      <a href={githubUrl}>
        <Icon name="github" size={24} htmlClass="fill-yellow-300" />
      </a>
    </div>
  </div>

  <h3 class="mt-6 text-2xl lg:text-4xl text-white font-mono font-bold">
    {title}
  </h3>
  <p class="mt-3 text-base 2xl:text-2xl font-sans text-white">{description}</p>
</div>
