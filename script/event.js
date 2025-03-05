const skillsLeft = document.querySelector(".skillsLeft");
const skillsMid = document.querySelector(".skillsMid");
const skillsRight = document.querySelector(".skillsRight");
const skills = document.getElementById("skills");
const folio = document.getElementById("folio");
console.log(skillsLeft, skillsMid, skillsRight);

/*------ Observer translate X ------*/

const observer = new IntersectionObserver(
  (entrer) => {
    for (const entry of entrer) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
        entry.target.style.right = "0px";
      }
    }
  },
  {
    threshold: 0.2,
  }
);

/*--------- Observer Skills -----------*/

//**** Observer Left */

const observeLeft = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.4s";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.2,
  }
);

observeLeft.observe(skillsLeft);

//**** Observer Mid */

const observeMid = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.6s";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.2,
  }
);

observeMid.observe(skillsMid);

//**** Observer Right */

const observeRight = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.9s";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.2,
  }
);

observeRight.observe(skillsRight);

/*----- Observer Translate Y ------*/

const observerII = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.3,
  }
);

// observerII.observe(skills);
observerII.observe(folio);
