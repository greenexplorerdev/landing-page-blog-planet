let currentPage = "pagina-homePage";

const tornaSu = document.getElementById("torna-su");
const homepage = document.getElementById("pagina-homePage");

const modal = document.getElementById("exampleModal");
modal.addEventListener("hidden.bs.modal", function () {
  navigateTo("articoliCard");
});

//strutturata così, evito l'errore Cannot Get
function navigateTo(page) {
  console.log("Navigazione verso:", page);
  try {
    const main = document.querySelector("main");
    const sections = main.querySelectorAll("section");

    window.location.hash = page;
    currentPage = page;

    const homepage = document.getElementById("pagina-homePage");
    if (page === "homePage") {
      homepage.classList.remove("d-none");
    } else {
      homepage.classList.add("d-none");
    }

    for (let section of sections) {
      if (section.id === `pagina-${page}`) {
        section.classList.remove("d-none");
      } else {
        section.classList.add("d-none");
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function handleHashChange() {
  const hash = window.location.hash.substring(1); // Rimuove il #
  const page = hash || "homePage"; // Default a homePage
  navigateTo(page);
}

window.addEventListener("hashchange", handleHashChange);

window.addEventListener("DOMContentLoaded", handleHashChange);

function handleScrollTop() {
  console.log("sono entrato nella funzione di scroll per il bottone");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const allSections = document.querySelectorAll(
  "main section:not(#pagina-articoliCard)"
);

window.addEventListener("scroll", function () {
  console.log(currentPage);
  if (currentPage !== "pagina-articoliCard") {
    let altezzaTotale = 0;
    allSections.forEach((section) => (altezzaTotale += section.clientHeight));
    const percentualeScroll = (window.scrollY / altezzaTotale) * 100;

    console.log(percentualeScroll);

    if (percentualeScroll >= 35) {
      tornaSu.classList.remove("d-none");
    } else {
      tornaSu.classList.add("d-none");
    }
  } else {
    console.log("Non sei in una pagina scrollabile");
  }
});

//parte del form pagina contattacidocument.addEventListener
const form = document.querySelector("form");
const alertContainer = document.createElement("div");
alertContainer.className =
  "alert alert-success d-none d-flex flex-column justify-content-center align-items-center align-content center";
alertContainer.role = "alert";

const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
    </svg>
  `;

alertContainer.innerHTML = `
    Ottimo lavoro, la tua richiesta ci è giunta, nel ringraziarti per il tuo interesse e tempo ti assicuriamo che leggeremo il prima possibile!
    ${svgIcon}
    <button class="btn btn-outline-success mt-3" onclick="navigateTo('homePage')">
      Torniamo alla schermata principale! ;)
    </button>
  `;
form.appendChild(alertContainer);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    alertContainer.classList.remove("d-none");
    setTimeout(() => {
      alertContainer.classList.add("d-none");
    }, 15000);
  }

  Array.from(form.elements).forEach((input) => {
    if (input.checkValidity()) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
    }
  });
});
