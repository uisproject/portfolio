<script>
  import { TimelineMax } from "gsap/gsap-core";
  import { onMount } from "svelte";
  import { typeWriter } from "../services/typewriter";

  export let isLoading;

  onMount(() => {
    const tlLogo = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });
    const ilItems = document.querySelectorAll(".il-item");

    for (let i = ilItems.length - 1; i >= 0; i--) {
      tlLogo.to(ilItems[i], { y: "-50px" }).to(ilItems[i], {
        y: "0",
        ease: "bounce",
        stagger: 1,
      });
    }

    const introLoadingLabel = document.querySelector(".intro-loading-label");
    typeWriter({
      targetEl: introLoadingLabel,
      txt: "Loading",
      typingBlock: true,
      backTypeAfterAnimation: {
        isActive: true,
        wait: 1000,
      },
    });
  });
</script>

<link rel="stylesheet" href="./styles/intro-loading.css" />

<div class="intro-loading-wrapper {isLoading === false ? 'hide' : null}">
  <div class="intro-loading-animation">
    <div class="il-item il1">U</div>
    <div class="il-item il2">I</div>
    <div class="il-item il3">S</div>
    <div class="il-item il4">P</div>
    <div class="il-item il5">R</div>
    <div class="il-item il6">O</div>
    <div class="il-item il7">J</div>
    <div class="il-item il8">E</div>
    <div class="il-item il9">C</div>
    <div class="il-item il10">T</div>
  </div>
  <div class="intro-loading-label" />
</div>

<style>
  .hide {
    opacity: 0;
    transition: all 1s;
  }
</style>
