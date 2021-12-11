<script>
  import { Card, Icon } from '@components';
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis metus morbi sit phasellus lectus aliquam pellentesque. Tempor neque sed augue eget posuere aliquet. Rhoncus, nisi pellentesque egestas lacinia facilisi ut enim, egestas pulvinar. Purus, sagittis nibh tincidunt sit tempus.`;
  const myEmail = 'bagnascojhoel@gmail.com';
  const myGithub = 'https://github.com/bagnascojhoel';
  const myLinkedin = 'https://www.linkedin.com/in/jhoel-galeano';
  const emailSubject = "Hey! I'm sending this from your website!";
</script>

<main
  class="
    h-screen 
    w-screen 
    relative
    bg-gradient-to-br 
    from-gray-900 
    to-gray-500
    overflow-scroll
    "
>
  <h1
    class="my-32 md:my-48 lg:my-60 2xl:my-72 px-6 leading-relaxed font-mono text-gray-50 text-4xl lg:text-5xl 2xl:text-7xl font-bold text-center"
  >
    Hello there! <br />I am Jhoel, a brazilian Software Developer
  </h1>

  <div class="flex flex-row justify-center">
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
  </div>

  <h2
    class="px-6 mt-20 2xl:mt-36 font-mono text-white text-xl lg:text-3xl 2xl:text-5xl font-bold text-center"
  >
    These are some of the projects I have been working on
  </h2>

  <div
    class="container mx-auto mt-10 2xl:mt-20 px-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-stretch"
  >
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

  <div class="my-16">
    <h3
      class="text-xl lg:text-2xl 2xl:text-4xl text-center text-white font-bold "
    >
      If you want to contact me, here :)
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
  </div>
</main>
