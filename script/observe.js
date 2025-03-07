/*--- Variables skills ----*/
const skillsLeft = document.querySelector(".skillsLeft");
const skillsMid = document.querySelector(".skillsMid");
const skillsRight = document.querySelector(".skillsRight");

/*----- Variables Folio -----*/
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

/*-------- Variables Folio Description --------*/

const description = document.querySelectorAll(".effect");
console.log(description);

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

/*---------- Observe Folio -----------*/
//**** Observe Card */

const observeCard = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.3s";
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.4,
  }
);

observeCard.observe(card1);
observeCard.observe(card2);
observeCard.observe(card3);

/*----- Observer Opacity ------*/

const opacity = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.4s";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.4,
  }
);

description.forEach((enter) => {
  opacity.observe(enter);
});

/*------ Scroll Logo ------*/

const scroll = document.querySelector(".scroll");
console.log(scroll);
