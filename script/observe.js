/*--- Variables skills ----*/
const skillsLeft = document.querySelector(".skillsLeft");
const skillsMid = document.querySelector(".skillsMid");
const skillsRight = document.querySelector(".skillsRight");

/*----- Variables Folio -----*/
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

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
//**** Observe Card1 */

const observeCard1 = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.4s";
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.3,
  }
);

observeCard1.observe(card1);

//**** Observe Card2 */

const observeCard2 = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.6s";
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.3,
  }
);

observeCard2.observe(card2);

//**** Observe Card3 */

const observeCard3 = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.5s";
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.3,
  }
);

observeCard3.observe(card3);

//**** Observe Card4 */

const observeCard4 = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.7s";
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.3,
  }
);

observeCard4.observe(card4);
/*----- Observer Translate Y ------*/
