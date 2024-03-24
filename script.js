let result = document.querySelector(".input-screen");
let history = document.querySelector("#history");

const n8 = document.querySelector("#n-8");
const n9 = document.querySelector("#n-9");
const n7 = document.querySelector("#n-7");
const n4 = document.querySelector("#n-4");
const n5 = document.querySelector("#n-5");
const n6 = document.querySelector("#n-6");
const n1 = document.querySelector("#n-1");
const n2 = document.querySelector("#n-2");
const n3 = document.querySelector("#n-3");
const nDot = document.querySelector("#n-dot");
const n0 = document.querySelector("#n-0");

const clr = document.querySelector("#clr");
const devide = document.querySelector("#devide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
n7.addEventListener("click", () => {
  //   output.innerHTML = eval();
  result.innerHTML += n7.innerHTML;
});
n8.addEventListener("click", () => {
  result.innerHTML += n8.innerHTML;
});
n9.addEventListener("click", () => {
  result.innerHTML += n9.innerHTML;
});
n4.addEventListener("click", () => {
  result.innerHTML += n4.innerHTML;
});
n5.addEventListener("click", () => {
  result.innerHTML += n5.innerHTML;
});
n6.addEventListener("click", () => {
  result.innerHTML += n6.innerHTML;
});
n1.addEventListener("click", () => {
  result.innerHTML += n1.innerHTML;
});
n2.addEventListener("click", () => {
  result.innerHTML += n2.innerHTML;
});
n3.addEventListener("click", () => {
  result.innerHTML += n3.innerHTML;
});
nDot.addEventListener("click", () => {
  result.innerHTML += nDot.innerHTML;
});
n0.addEventListener("click", () => {
  result.innerHTML += n0.innerHTML;
});
equal.addEventListener("click", () => {
  let num = eval(result.innerHTML);
  history.innerHTML = result.innerHTML;
  if (num == "Infinity") {
    result.innerHTML = "Math Error";
  } else {
    result.innerHTML = Math.round(num * 100) / 100;
  }
});

clr.addEventListener("click", () => {
  output.innerHTML = "";
  history.innerHTML = "";
  result.innerHTML = "";
});
devide.addEventListener("click", () => {
  result.innerHTML += devide.innerHTML;
});
multiply.addEventListener("click", () => {
  result.innerHTML += multiply.innerHTML;
});
minus.addEventListener("click", () => {
  result.innerHTML += minus.innerHTML;
});
plus.addEventListener("click", () => {
  result.innerHTML += plus.innerHTML;
});
