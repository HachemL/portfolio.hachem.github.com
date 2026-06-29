

// MENU MOBILE

const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

if (burger) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// FORMULAIRE CONTACT

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {

    form.addEventListener("submit", function (event) {

      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {

        alert("Merci de remplir tous les champs.");

      } else {

        alert("Votre message a été envoyé avec succès.");

        form.reset();
      }
    });
  }
});

// CHATBOT INTERACTIF

const chatbotToggle = document.createElement("div");
chatbotToggle.classList.add("chatbot-toggle");
chatbotToggle.innerHTML = "💬";

document.body.appendChild(chatbotToggle);

const chatbot = document.createElement("div");
chatbot.classList.add("chatbot");

chatbot.innerHTML = `
  <div class="chatbot-header">
    Assistant IA
  </div>

  <div class="chatbot-body" id="chatBody">
    <div class="bot-message">
      Bonjour 👋 Je suis l'assistant du portfolio de Hachem.
    </div>
  </div>

  <div class="chatbot-options">
    <button onclick="sendQuestion('compétences')">Compétences</button>

    <button onclick="sendQuestion('projets')">Projets</button>

    <button onclick="sendQuestion('contact')">Contact</button>

    <button onclick="sendQuestion('cv')">CV</button>
  </div>
`;

document.body.appendChild(chatbot);

// OUVERTURE / FERMETURE

chatbotToggle.addEventListener("click", () => {
  chatbot.classList.toggle("active");
});

// QUESTIONS

function sendQuestion(question) {

  const chatBody = document.getElementById("chatBody");

  // Message utilisateur

  const userMessage = document.createElement("div");

  userMessage.classList.add("user-message");

  userMessage.textContent = question;

  chatBody.appendChild(userMessage);

  // Réponse bot

  const botMessage = document.createElement("div");

  botMessage.classList.add("bot-message");

  if (question === "compétences") {

    botMessage.textContent =
      "Hachem possède des compétences en HTML, CSS, JavaScript, UX, webmarketing et IA.";

  } else if (question === "projets") {

    botMessage.textContent =
      "Découvrez les projets modernes dans la section portfolio.";

  } else if (question === "contact") {

    botMessage.textContent =
      "Vous pouvez contacter Hachem via le formulaire de contact.";

  } else if (question === "cv") {

    botMessage.innerHTML =
      'Télécharger le CV : <a href="CV-Hachem-Laamiri.pdf" download>Télécharger</a>';
  }

  chatBody.appendChild(botMessage);

  // Scroll automatique

  chatBody.scrollTop = chatBody.scrollHeight;
}