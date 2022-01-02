<script lang="ts">
  import { GithubApiErrorStore } from '@stores';

  const MILISECONDS_DURATION = 5000;

  let text: string = null;
  let visible: boolean = false;

  function tearDown() {
    console.log('tearDown');

    visible = false;
    text = null;
  }

  function setUp(newText) {
    console.log('setUp with', newText);
    visible = true;
    text = newText;
  }

  GithubApiErrorStore.subscribe((value) => {
    if (!value) return;

    setUp(value);
    setTimeout(tearDown, MILISECONDS_DURATION);
  });
</script>

<div
  class={`z-50 absolute inset-10 overflow-visible ${visible ? '' : 'hidden'}`}
>
  <div
    class={`
    bg-red-700
      p-2
      rounded-md 
      inline-block 
      border-red-900 
      border-2 
    `}
  >
    <p class="text-white">{text}</p>
  </div>
</div>
