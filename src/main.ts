import "./style.css";

const addButton = document.getElementById("addButton");
const input1 = document.getElementById("input1")! as HTMLInputElement;
const input2 = document.getElementById("input2")! as HTMLInputElement;

if (addButton) {
  addButton.addEventListener("click", () => {
    console.log(parseFloat(input1.value) + parseFloat(input2.value));
  });
}