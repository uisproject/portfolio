<script>
  import { gsap } from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  const currentAge = new Date().getFullYear() - 2000;

  // show more and less button
  let showMore = true;
  let isRunning = false;
  const text =
    "tech industry such as how to make a diagram before making an application, analyzing documents, requirements gathering and also develop some programs. Not to mention that I also like to do my own research about tech from Youtube, Udemy, Stackoverflow, etc.";

  onMount(() => {
    gsap.to(".block-type", { opacity: 0, duration: 1, delay: 1, repeat: -1 });

    const profileTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".profile-container",
        start: "top center",
        markers: false,
      },
    });

    profileTL
      .from(".profile-trans", {
        x: -50,
        opacity: 0,
        stagger: 0.1,
      })
      .from(".profile-image", {
        opacity: 0,
        ease: "Power3.easeOut",
        duration: 3,
      });
  });

  const showMoreHandle = () => {
    const el = document.querySelector(".more-txt");

    isRunning = true;

    let letterIndex = 0;
    let moreTextLength = el.innerHTML.length;

    const runShowMore = () => {
      setTimeout(() => {
        if (letterIndex >= text.length) {
          isRunning = false;
          return;
        }

        el.innerHTML += text.charAt(letterIndex);
        letterIndex += 1;

        runShowMore();
      }, 2);
    };

    const runShowLess = () => {
      setTimeout(() => {
        if (moreTextLength === 0) {
          isRunning = false;
          return;
        }

        moreTextLength--;
        const updatedText = text.substring(0, moreTextLength);
        el.innerHTML = updatedText;
        runShowLess();
      }, 2);
    };

    if (!showMore) {
      showMore = true;
      return runShowLess();
    }

    showMore = false;
    return runShowMore();
  };
</script>

<link rel="stylesheet" href="./styles/profile.css" />

<section class="profile-wrapper" id="profile">
  <div class="profile">
    <div class="profile-container">
      <div class="profile-info">
        <div class="general-info">
          <h1 class="profile-title">Profile</h1>
          <p class="profile-trans">Louis Leonardo</p>
          <p class="profile-trans">
            Bornt at <strong> 15 January 2000 ({currentAge}yrs old)</strong> in
            <strong>Jakarta, Indonesia</strong>
          </p>
          <p class="profile-trans">
            Studied at <strong>Bina Nusantara</strong> with
            <strong>Information System Degree</strong>
          </p>

          <div class="education-story profile-trans">
            At the year of 2018 I applied into Bina Nusantara University to
            study more about
            <span class="more-txt" />
            <div class="block-type">|</div>
          </div>
          <button
            class="profile-trans"
            style="margin-top: 20px;"
            on:click={!isRunning ? showMoreHandle : null}
            >Show {showMore ? "More" : "Less"}</button
          >
        </div>
        <br />
        <div class="skills-info">
          <h1 class="profile-title profile-trans">Skills I have worked with</h1>
          <p class="profile-trans">HTML & CSS, JavaScript, Java, PHP</p>
          <br />
          <p class="profile-trans">
            CodeIgniter4, Express.js, SASS, React.JS, MySQL, Webpack, Joomla,
            Wordpress, GIT, Next.js, @reduxjs/toolkit, ANTD, axios, TailwindCSS
          </p>
        </div>
      </div>
      <div class="profile-image">
        <div class="profile-image--wrapper">
          <img src="./assets/image/profile-pict.jpg" alt="" />
          <div class="img-cover" />
        </div>
      </div>
    </div>
  </div>
</section>
