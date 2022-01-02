<script lang="ts">
  import { HomeScreen } from '@screens';
  import { ErrorToast } from '@components';
</script>

<ErrorToast />
<HomeScreen />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Lato:wght@900&display=swap');

  body {
    position: relative;
  }
</style>
