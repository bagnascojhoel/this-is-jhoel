<script>
  import { Card } from '@components';
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis metus morbi sit phasellus lectus aliquam pellentesque. Tempor neque sed augue eget posuere aliquet. Rhoncus, nisi pellentesque egestas lacinia facilisi ut enim, egestas pulvinar. Purus, sagittis nibh tincidunt sit tempus.`;
</script>

<main
  class="
    h-screen 
    w-screen 
    relative
    bg-gradient-to-br 
    from-gray-900 
    to-gray-600
    overflow-scroll
    "
>
  <h1
    class="my-32 px-6 leading-relaxed font-mono text-gray-50 text-4xl font-bold text-center "
  >
    Hello there! <br />I am Jhoel, a brazilian Software Developer
  </h1>

  <div class="flex flex-row justify-center">
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
  </div>

  <h2 class="px-6 mt-20 font-mono text-white text-xl font-bold">
    These are some of the projects I have been working on
  </h2>

  <div class="my-10 grid sm:grid-cols-1 gap-6 place-items-center">
    <Card
      title="This Is Jhoel"
      {description}
      tags={['front-end', 'svelte', 'tailwindcss']}
    />
    <Card
      title="This Is Jhoel"
      {description}
      tags={['front-end', 'svelte', 'tailwindcss']}
    />
    <Card
      {description}
      title="This Is Jhoel"
      websiteUrl="http://localhost:5000/"
      tags={['front-end', 'svelte', 'tailwindcss']}
    />
  </div>
</main>
