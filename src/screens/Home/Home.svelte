<script>
  import { onMount } from 'svelte';
  import { Card, Icon } from '@components';
  import { GithubApi } from '@data';

  let user = null;

  async function fetchMyData() {
    const userData = await GithubApi.findMyData();
    user = userData;
  }

  onMount(async () => {
    await fetchMyData();
  });
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis metus morbi sit phasellus lectus aliquam pellentesque. Tempor neque sed augue eget posuere aliquet. Rhoncus, nisi pellentesque egestas lacinia facilisi ut enim, egestas pulvinar. Purus, sagittis nibh tincidunt sit tempus.`;
  const myEmail = 'bagnascojhoel@gmail.com';
  const myGithub = 'https://github.com/bagnascojhoel';
  const myLinkedin = 'https://www.linkedin.com/in/jhoel-galeano';
  const emailSubject = "Hey! I'm sending this from your website!";
</script>

<main
  class="
    min-h-screen 
    min-w-screen 
    pt-32 md:pt-48 lg:pt-60 2xl:pt-72
    pb-16
    relative
    bg-gradient-to-br 
    from-gray-900 
    to-gray-500
    "
>
  <h1
    class="
    xl:w-3/6
    lg:w-4/6
    lg:m-auto 
    mb-32 
    md:mb-48 
    lg:mb-60 
    2xl:mb-72 
    px-6 
    leading-relaxed 
    font-mono 
    text-gray-50 
    text-4xl 
    lg:text-5xl 
    font-bold 
    text-center
    "
  >
    Hello there! <br /><br />I am Jhoel, a brazilian Software Developer
  </h1>

  <div class="flex flex-row justify-center">
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
    <div class="h-3 w-3 mx-1 bg-yellow-300 rounded-full" />
  </div>

  <h2
    class="mt-20 px-6 font-mono text-white text-2xl lg:text-3xl font-bold text-center"
  >
    These are some of the projects I have been working on
  </h2>

  <section
    class="container mx-auto mt-10 px-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-stretch"
  >
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
  </section>

  <section class="mt-40">
    <h3 class="text-xl lg:text-2xl text-center text-white font-bold font-mono">
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
  </section>
</main>

<footer class="py-1 flex justify-center relative bg-orange-600">
  <p class="text-white text-sm font-mono">
    made with <Icon name="coffee" size={16} class="mx-1" /> by me
  </p>
</footer>
