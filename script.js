const SECTION_NAMES = {
  SectionSorpresas: "section-sorpresas",
  SectionHistoria: "section-historia",
  SectionAventura: "section-aventuras",
  SectionTeAmo: "section-te-amo",
};

const rules = {
  sections: [
    {
      name: SECTION_NAMES.SectionSorpresas,
      active: true,
      next: {
        yes: SECTION_NAMES.SectionHistoria,
        no: SECTION_NAMES.SectionTeAmo,
      },
    },
    {
      name: SECTION_NAMES.SectionHistoria,
      active: false,
      next: {
        yes: SECTION_NAMES.SectionAventura,
        no: SECTION_NAMES.SectionTeAmo,
      },
    },
    {
      name: SECTION_NAMES.SectionAventura,
      active: false,
      next: {
        yes: SECTION_NAMES.SectionTeAmo,
        no: SECTION_NAMES.SectionTeAmo,
      },
    },
    {
      name: SECTION_NAMES.SectionTeAmo,
      active: false,
      next: null,
    },
  ],
};

const elSectionSorpresas = document.querySelector("#section-sorpresas");
const elSectionHistoria = document.querySelector("#section-historia");
const elSectionAventuras = document.querySelector("#section-aventuras");
const elSectionTeAmo = document.querySelector("#section-te-amo");
const btnAnswerNo = document.querySelector("#answer-no");
const btnAnswerSi = document.querySelector("#answer-si");

const getActiveSection = () => rules.sections.find((section) => section.active);

const setActiveSection = (sectionName) => {
  for (const section of rules.sections) {
    if (section.active) {
      section.active = false;
      break;
    }
  }

  for (const section of rules.sections) {
    if (section.name === sectionName) {
      section.active = true;
      break;
    }
  }
};

const moveBtnRandom = (btn) => {
  btn.style.fontWeight = "bolder";
  btn.style.position = "absolute";
  btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const handleBtnAnswerNoClick = () => {
  const activeSection = getActiveSection();

  switch (activeSection.name) {
    case SECTION_NAMES.SectionSorpresas:
      alert("Esa opción no esta disponible");
      break;

    case SECTION_NAMES.SectionHistoria:
      alert("Esa opción no esta disponible");
      break;

    case SECTION_NAMES.SectionAventura:
      break;

    default:
      break;
  }
};

const handleBtnAnswerSiClick = () => {
  const activeSection = getActiveSection();

  switch (activeSection.name) {
    case SECTION_NAMES.SectionSorpresas: {
      elSectionSorpresas.classList.add("hidden");
      elSectionHistoria.classList.remove("hidden");
      setActiveSection(activeSection.next.yes);
      break;
    }

    case SECTION_NAMES.SectionHistoria: {
      elSectionHistoria.classList.add("hidden");
      elSectionAventuras.classList.remove("hidden");
      setActiveSection(activeSection.next.yes);
      break;
    }

    case SECTION_NAMES.SectionAventura: {
      elSectionAventuras.classList.add("hidden");
      elSectionTeAmo.classList.remove("hidden");
      btnAnswerNo.classList.add("hidden");
      btnAnswerSi.classList.add("hidden");
      setActiveSection(activeSection.next.yes);
      break;
    }

    default:
      break;
  }
};

const handleBtnAnswerNoMouseEnter = (event) => {
  const activeSection = getActiveSection();
  
  if(activeSection.name === SECTION_NAMES.SectionAventura) {
    moveBtnRandom(event.target)
  }
}

// Buttons events
btnAnswerNo.addEventListener("click", handleBtnAnswerNoClick);
btnAnswerSi.addEventListener("click", handleBtnAnswerSiClick);
btnAnswerNo.addEventListener("mouseenter", handleBtnAnswerNoMouseEnter)