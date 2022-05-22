<script>
  import EmailIcon from "../assets/Icons/EmailIcon.svelte";
  import GithubIcon from "../assets/Icons/GithubIcon.svelte";
  import LinkedinIcon from "../assets/Icons/LinkedinIcon.svelte";
  import WhatsappIcon from "../assets/Icons/WhatsappIcon.svelte";
  import Universe2Svg from "../assets/images/Universe2Svg.svelte";
  import RocketSvg from "../assets/images/Rocket.svelte";
</script>

<link rel="stylesheet" href="./styles/contact.css" />

<section class="contact-wrapper">
  <div class="contact">
    <div class="contact-container">
      <div class="contact-info">
        <h1 class="contact-title">Thanks for checking out my portfolio!</h1>
        <p>
          If you have something to say or wanna say hi!, just let me know by
          clicking on of these below
        </p>
        <div class="social-media-list">
          <a href="https://github.com/uisproject" target="_blank">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/louis-leonardo-a64a6b171/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://wa.me/081288035811?text=Hi!%20This%20is%20Louis%20Thank%20you%20for%20reaching%20me%20out%2C%20I%20will%20respond%20to%20your%20message%20as%20soon%20as%20possible"
            target="_blank"
          >
            <WhatsappIcon />
          </a>
          <a href="mailto:leonardolouis2@gmail.com">
            <EmailIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/12SAIHD3Xe69iNsbED8cZiBAPXwZ3a0xI/view?usp=sharing"
            target="_blank"
          >
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
