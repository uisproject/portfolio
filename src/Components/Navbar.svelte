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
  });
</script>

<link rel="stylesheet" href="./styles/navbar.css" />

<nav>
  <div class="nav-wrapper">
    <ul>
      <li class="li-navbar"><a href="">Home</a></li>
      <li class="li-navbar"><a href="#profile">Profile</a></li>
      <li class="li-navbar"><a href="">Work Experience</a></li>
      <li class="li-navbar"><a href="">Projects</a></li>
      <li class="li-navbar"><a href="">Projects</a></li>
    </ul>
    <div class="logo-text">UISPROJECT</div>
  </div>
</nav>
