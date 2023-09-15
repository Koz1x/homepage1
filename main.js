const firstName = "Yauheni";
const age = 17;

console.log(
  `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
);

const heading = document.querySelector(".navigation");

heading.innerHTML =
  "`Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`";

const emptyParagraph = document.querySelector(".day-summary__description--js");

emptyParagraph.innerHTML = `Nawet uzupełniłem treść JavaScriptem`;

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}
const myResult = calculate(age);
console.log(myResult);

function greet(age, firstName) {
  console.log(
    `Witaj drogi odwiedzający, nazywam sie ${firstName} i mam ${age} lat.`
  );
}

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent('.day-summary__description--js', 'Siema siema');