<script>
  import EmailIcon from "../assets/Icons/EmailIcon.svelte";
  import GithubIcon from "../assets/Icons/GithubIcon.svelte";
  import LinkedinIcon from "../assets/Icons/LinkedinIcon.svelte";
  import WhatsappIcon from "../assets/Icons/WhatsappIcon.svelte";
  import Universe2Svg from "../assets/images/Universe2Svg.svelte";
  import RocketSvg from "../assets/images/Rocket.svelte";

  export let github;
  export let linkedin;
  export let whatsapp;
  export let email;
  export let resume;
</script>

<link rel="stylesheet" href="./styles/contact.css" />

<section class="contact-wrapper">
  <div class="contact">
    <div class="contact-container">
      <div class="contact-info">
        <h1 class="contact-title">Thanks for checking out my portfolio!</h1>
        <p>
          If you have something to say or wanna say hi!, just let me know by
          clicking one of these below
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
      <div class="contact-img">
        <Universe2Svg />
      </div>
    </div>
  </div>
</section>
