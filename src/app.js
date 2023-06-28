/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let primera_excusa = ["The dog", "My grandma", "His turtle", "My bird"];
  let segunda_excusa = ["ate", "peed", "crushed", "broke"];
  let tercera_excusa = ["my homework", "the keys", "the car"];
  let cuarta_excusa = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excusa =
    who[Math.floor(Math.random() * who.length)] + " " +
    action[Math.floor(Math.random() * action.length)] + " " +
    what[Math.floor(Math.random() * what.length)] + " " +
    when[Math.floor(Math.random() * when.length)];

  document.getElementById("excuse").innerHTML = excusa;
};
