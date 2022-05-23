<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const tl = gsap.timeline();
    tl.from(".li-navbar", { opacity: 0, stagger: 0.3 }, 0).from(
      ".logo-text",
      {
        x: 50,
        opacity: 0,
      },
      1
    );

    const mobileLi = document.querySelectorAll(".mobile-li-navbar");
    for (let i = 0; i < mobileLi.length; i++) {
      mobileLi[i].addEventListener("click", () => {
        document
          .querySelector(".nav-mobile-panel-isActive")
          .classList.toggle("nav-mobile-panel-isActive");
        document
          .querySelector(".mobile-nav-button")
          .classList.toggle("menuIsActive");
      });
    }
  });
</script>

<link rel="stylesheet" href="./styles/navbar.css" />

<nav>
  <div class="nav-wrapper">
    <ul>
      <li class="li-navbar"><a href="#home">Home</a></li>
      <li class="li-navbar"><a href="#profile">Profile</a></li>
      <li class="li-navbar"><a href="#work-experience">Work Experience</a></li>
      <li class="li-navbar"><a href="#projects">Projects</a></li>
      <li class="li-navbar"><a href="#contact">Contact</a></li>
    </ul>
    <button
      class="mobile-nav-button"
      on:click={() => {
        document
          .querySelector(".mobile-nav-button")
          .classList.toggle("menuIsActive");
        document
          .querySelector(".nav-mobile-panel")
          .classList.toggle("nav-mobile-panel-isActive");
      }}>&#62;</button
    >
    <div class="logo-text">UISPROJECT</div>
  </div>
</nav>

<div class="nav-mobile-panel">
  <ul>
    <li class="mobile-li-navbar"><a href="#home">Home</a></li>
    <li class="mobile-li-navbar"><a href="#profile">Profile</a></li>
    <li class="mobile-li-navbar">
      <a href="#work-experience">Work Experience</a>
    </li>
    <li class="mobile-li-navbar"><a href="#projects">Projects</a></li>
    <li class="mobile-li-navbar"><a href="#contact">Contact</a></li>
  </ul>
</div>
