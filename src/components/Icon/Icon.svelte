<script lang="ts">
  import * as source from '@assets/icons/index';

  export let name: string;
  export let tailwindSize: number = 5;

  $: fixedName = fixName(name);

  function fixName(name: string) {
    const sections = name.split('-');
    return sections
      .map((value, index) => {
        return index <= 0 ? value : value[0].toUpperCase() + value.substring(1);
      })
      .join('');
  }
</script>

<svelte:component
  this={source[fixedName]}
  class={`w-${tailwindSize} h-${tailwindSize}`}
  {...$$props}
/>
