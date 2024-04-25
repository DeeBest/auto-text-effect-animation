const footerParagraph = document.getElementById('footer-paragraph');
const year = new Date().getFullYear();
footerParagraph.textContent = `Created By \xA9Simphiwe ${year}`;

const main = document.getElementById('main');

const careers = ['Web Developer', 'Freelancer', 'Forex Trader', 'Truck Driver'];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  main.innerHTML = `<h2>I am a ${careers[careerIndex].slice(
    0,
    characterIndex
  )}</h2>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
