<script>
  import Navbar from "./Components/Navbar.svelte";
  import Home from "./Components/Home.svelte";
  import Profile from "./Components/Profile.svelte";
  import WorkExperience from "./Components/WorkExperience.svelte";
  import Project from "./Components/Project.svelte";
  import Contact from "./Components/Contact.svelte";
  import Footer from "./Components/Footer.svelte";

  const socialMediaURL = {
    github: "https://github.com/uisproject",
    linkedin: "https://www.linkedin.com/in/louis-leonardo-a64a6b171/",
    whatsapp:
      "https://wa.me/081288035811?text=Hi!%20This%20is%20Louis%20Thank%20you%20for%20reaching%20me%20out%2C%20I%20will%20respond%20to%20your%20message%20as%20soon%20as%20possible",
    email: "mailto:leonardolouis2@gmail.com",
    resume:
      "https://drive.google.com/file/d/12SAIHD3Xe69iNsbED8cZiBAPXwZ3a0xI/view?usp=sharing",
  };
</script>

<svelte:head>
  <title>Uisproject Portfolio</title>
</svelte:head>

<main>
  <div class="main-wrapper">
    <header>
      <Navbar />
    </header>

    <Home {...socialMediaURL} />
    <Profile />
    <WorkExperience />
    <Project />
    <Contact {...socialMediaURL} />
  </div>

  <Footer />
</main>
