<script lang="ts">
  import * as source from '@assets/icons/index';

  export let name: string;
  export let htmlClass: string = 'fill-white';
  export let size: number = 36;
  export let viewBox: string = null;

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
  class={htmlClass}
  width={size}
  heigth={size}
/>
