<script>
  import Navbar from "./Components/Navbar.svelte";
  import Home from "./Components/Home.svelte";
  import Profile from "./Components/Profile.svelte";
  import WorkExperience from "./Components/WorkExperience.svelte";
  import Project from "./Components/Project.svelte";
  import Contact from "./Components/Contact.svelte";
  import Footer from "./Components/Footer.svelte";
</script>

<main>
  <div class="main-wrapper">
    <header>
      <Navbar />
    </header>

    <Home />
    <Profile />
    <WorkExperience />
    <Project />
    <Contact />
  </div>

  <Footer />
</main>
