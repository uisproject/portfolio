<script>
  import PlanetSvg from "../assets/images/PlanetSvg.svelte";
  import AsteroidsSvg from "../assets/images/AsteroidsSvg.svelte";
  import EmailIcon from "../assets/Icons/EmailIcon.svelte";
  import GithubIcon from "../assets/Icons/GithubIcon.svelte";
  import LinkedinIcon from "../assets/Icons/LinkedinIcon.svelte";
  import WhatsappIcon from "../assets/Icons/WhatsappIcon.svelte";

  export let github;
  export let linkedin;
  export let whatsapp;
  export let email;
  export let resume;
</script>

<link rel="stylesheet" href="./styles/home.css" />

<section class="home-wrapper">
  <div class="home">
    <div class="home-container">
      <div class="home-info">
        <h2>Hi, I am</h2>
        <h1 class="home-name">Louis Leonardo 🚀</h1>
        <br />
        <p class="home-para">
          A Web Developer that <span class="highlight"
            >specialized in front-end development using vanilla and various
            frameworks.</span
          >
          But i also want to tell you that
          <span class="highlight"
            >i have some experiences in backend field.</span
          >
          <br /><br />

          My current focus is to create awesome product using my skill i've
          learnt so far and becoming better and better😁.
        </p>
        <div class="social-media-list">
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
  <PlanetSvg />
  <AsteroidsSvg />
</section>
