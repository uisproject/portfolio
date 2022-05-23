<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const tl = gsap.timeline();
    tl.from("li", { opacity: 0, stagger: 0.3 }, 0).from(
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
      <li><a href="">Home</a></li>
      <li><a href="#profile">Profile</a></li>
      <li><a href="">Work Experience</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Projects</a></li>
    </ul>
    <div class="logo-text">UISPROJECT</div>
  </div>
</nav>
