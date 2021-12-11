<script lang="ts">
  import * as source from '@assets/icons/index';

  export let name: string;
  export let size: number = 36;

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
  class={`inline-block ${$$props.class}`}
  fill="white"
  width={size}
  heigth={size}
/>
