<script>
  import IntroLoading from "./IntroLoading.svelte";
  import Scene1 from "./Scene1.svelte";
  import Skip from "./Skip.svelte";

  export let isLoading;

  const animatingIntro = () => {};
</script>

<link rel="stylesheet" href="./styles/intro.css" />

<div class="intro-wrapper">
  <div class="intro-container">
    <Skip {isLoading} />
    <div class="intro-loading">
      <IntroLoading {isLoading} />
    </div>
    <Scene1 />
  </div>
</div>
