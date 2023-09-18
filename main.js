const firstName = "Yauheni";
const age = 17;

console.log(
  `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
);

const heading = document.querySelector(".navigation");

//*heading.innerHTML =
 //* "`Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`"; */

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

const humanOne = {
  name: 'Maciek',
  age:32,
  address: {
    street:'Warszawska',
    city: 'Białystok'
  }
}

const humanTwo = {
  name: 'Stefan',
  age: 35,
  adress: humanOne.address
}

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent('.day-summary__description--js', 'Siema siema');

console.log(typeof 2);
console.log(typeof '2');

if (2=='2') {
  console.log('Java to nie JavaScript')
}
if (!('JavaScript' == 'Java')) {
  console.log('to sie nie wykona')
}
if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy')
} else if (humanOne.age=== humanTwo.age){
  console.log('są równolatkami')
}
else {
  console.log('Human two jest starszy')
}
const myNumber = {name: 'Maciek'}

switch (myNumber) {
  case 7:
    console.log('jestem siódemką');
  break;
  case 9:
    console.log('jestem dziewiątką');
  break;
  default:
    console.log('jestem czymś innym')
    console.log(myNumber)  
}

(32>20) ? console.log('to prawda'): console.log('to nieprawda');