import { gsap } from "gsap";

export const backTypeWriter = (i, targetEl, speed = 50) => {
  document.querySelector(".typing-block").remove();

  const runAnimation = () => {
    if (i > 0) {
      const value = targetEl.innerHTML.substring(
        0,
        targetEl.innerHTML.length - 1
      );
      targetEl.innerHTML = value;
      i--;
      setTimeout(runAnimation, speed);
    }
  };

  runAnimation();
};

export const typeWriter = ({
  targetEl,
  txt = "",
  speed = 200,
  typingBlock = false,
  backTypeAfterAnimation = {
    isActive: false,
    wait: 1000,
  },
}) => {
  let i = 0;
  let isFinished = false;

  const runAnimation = () => {
    if (i === txt.length && typingBlock) {
      targetEl.innerHTML += "<div class='typing-block'>|</div>";

      gsap.to(".typing-block", { opacity: 0, duration: 1, repeat: -1 });

      if (backTypeAfterAnimation.isActive) {
        setTimeout(() => {
          backTypeWriter(i, targetEl);
        }, backTypeAfterAnimation.wait + speed);
      }
    }

    if (i < txt.length && !isFinished) {
      targetEl.innerHTML += txt.charAt(i);
      i++;
      setTimeout(runAnimation, speed);
    }
  };
  return runAnimation();
};
