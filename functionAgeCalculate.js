//******************************************/
// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob
//   console.log(`${name}'s age is ${age}`)
// }

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  return `${name}'s age is ${age}`;
}

//? Ornek olmasi icin yazildi.
// function x(s1, s2) {
//   return (s1 + s2) / (s1 * s2)
// }

const elif = calculate("elif", 2000);
console.log(elif);
console.log(calculate("Rose", 1990));
