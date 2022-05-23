<script>
  import GithubIcon from "../assets/Icons/GithubIcon.svelte";
  import PreviewIcon from "../assets/Icons/PreviewIcon.svelte";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const projectItemArr = gsap.utils.toArray(".project-item");
    projectItemArr.forEach((item) => {
      const projectTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          markers: false,
          start: "top center",
        },
      });
      projectTL.from(item, { y: 50, opacity: 0 });
    });
  });
</script>

<link rel="stylesheet" href="./styles/project.css" />

<section class="project-wrapper">
  <div class="project">
    <div class="project-container">
      <h1 class="project-title">Selected Projects</h1>
      <div class="project-list">
        <div class="project-item">
          <div class="project-img">
            <img src="./assets/image/kewan-project.jpg" alt="" />
            <div class="img-cover-hide" />
          </div>
          <div class="project-info project-trans">
            <div class="project-info-header project-trans">
              <h1 class="project-item--title">Kewan</h1>
              <div class="project-item-icons">
                <div class="project-item--icon">
                  <a href="https://github.com/uisproject/kewan" target="_blank">
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
            <p class="project-trans">
              Creating a web learning application using PHP framework
              Codeigniter 4 for kindergarten about animals, this app was also
              supported by javascript and was created with MVC Model
            </p>
            <p class="project-trans">
              <strong>CodeIgniter4, MySQL, PHP</strong>
            </p>
          </div>
        </div>
        <div class="project-item">
          <div class="project-img">
            <img src="./assets/image/healthycart.png" alt="" />
            <div class="img-cover-hide" />
          </div>
          <div class="project-info project-trans">
            <div class="project-info-header project-trans">
              <h1 class="project-item--title">Healthy Cart</h1>
              <div class="project-item-icons">
                <div class="project-item--icon">
                  <a
                    href="https://github.com/uisproject/healthycart/tree/development"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </div>
                <div class="project-item--icon">
                  <a
                    href="https://aquamarine-blini-7d0774.netlify.app/"
                    target="_blank"
                  >
                    <PreviewIcon />
                  </a>
                </div>
              </div>
            </div>
            <p class="project-trans">
              Creating a simple shopping cart system using ReactJS, able to
              distinguish the item's category, add or remove item, and find item
              by search input
            </p>
            <p class="project-trans"><strong>React17</strong></p>
          </div>
        </div>
        <div class="project-item">
          <div class="project-img">
            <img src="./assets/image/fake-store-ecommerce.jpg" alt="" />
            <div class="img-cover-hide" />
          </div>
          <div class="project-info project-trans">
            <div class="project-info-header project-trans">
              <h1 class="project-item--title">Fake Store Ecommerce</h1>
              <div class="project-item-icons">
                <div class="project-item--icon">
                  <a
                    href="https://github.com/uisproject/fake_store_ecommerce"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </div>
                <div class="project-item--icon">
                  <a
                    href="https://fake-store-ecommerce-six.vercel.app/"
                    target="_blank"
                  >
                    <PreviewIcon />
                  </a>
                </div>
              </div>
            </div>
            <p class="project-trans">
              Creating an e-commerce app using next.js as CSR, and focused on
              using @redux/toolkit for the state management, there are other
              supported library as Skeleton Components. you can check those
              libraries in package.json. The data of this app is powered by Fake
              Store API
            </p>
            <p class="project-trans">
              <strong>React17, Next.js, @redux/toolkit</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="project-coming-soon">
        More Exciting Projects Are Coming Out Soon! <br /> Or you can check my Github
      </div>
    </div>
  </div>
</section>
