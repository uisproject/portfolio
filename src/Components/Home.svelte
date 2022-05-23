<script>
  import PlanetSvg from "../assets/images/PlanetSvg.svelte";
  import Asteroid1Svg from "../assets/images/Asteroid1Svg.svelte";
  import MiniAsteroid from "../assets/images/MiniAsteroidSvg.svelte";
  import EmailIcon from "../assets/Icons/EmailIcon.svelte";
  import GithubIcon from "../assets/Icons/GithubIcon.svelte";
  import LinkedinIcon from "../assets/Icons/LinkedinIcon.svelte";
  import WhatsappIcon from "../assets/Icons/WhatsappIcon.svelte";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  export let github;
  export let linkedin;
  export let whatsapp;
  export let email;
  export let resume;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const windowWidth = window.innerWidth;
    // mini asteroid
    gsap.to("#mini-asteroid", {
      x: -windowWidth - 200,
      repeat: -1,
      duration: 20,
      rotate: 180,
      delay: 2,
    });

    // opening animation
    const openingTL = gsap.timeline({ delay: 1.4 });
    const homeText = document.querySelectorAll(".home-trans");

    openingTL
      .fromTo(
        "#planet",
        { scale: 0 },
        { scale: 1, ease: "Elastic.easeOut", duration: 3 },
        0
      )
      .fromTo(
        "#asteroid1",
        { scale: 0 },
        { scale: 1, ease: "Elastic.easeOut", duration: 3 },
        0
      )
      .to(
        "#asteroid1",
        { rotate: 360, duration: 10, repeat: -1, ease: "linear" },
        0
      )
      .from(homeText, { y: -50, opacity: 0, stagger: 0.2 }, 1);

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.fromTo("#planet", { x: -250, y: 250 }, { x: -200, y: 240, duration: 5 });
  });
</script>

<link rel="stylesheet" href="./styles/home.css" />

<section class="home-wrapper" id="home">
  <div class="home">
    <div class="home-container">
      <div class="home-info home-trans">
        <h2 class="home-trans">Hi, I am</h2>
        <h1 class="home-name home-trans">Louis Leonardo 🚀</h1>
        <br />
        <p class="home-para home-trans">
          A Web Developer that <span class="highlight"
            >specialized in front-end development using vanilla and various
            frameworks with some experiences in backend field.
          </span>
        </p>
        <br />
        <p class="home-trans">
          My current focus is to create awesome product using my skill i've
          learnt so far and becoming better and better😁.
        </p>
        <div class="social-media-list home-trans">
          <a href={github} target="_blank">
            <GithubIcon />
          </a>
          <a href={linkedin} target="_blank">
            <LinkedinIcon />
          </a>
          <a href={whatsapp} target="_blank">
            <WhatsappIcon />
          </a>
          <a href={email}>
            <EmailIcon />
          </a>
          <a href={resume} target="_blank">
            <button>My Resume</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <MiniAsteroid />
  <PlanetSvg />
  <Asteroid1Svg />
</section>
