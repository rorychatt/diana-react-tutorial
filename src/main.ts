import "./style.css";

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const input1 = document.getElementById("input1")! as HTMLInputElement;
const input2 = document.getElementById("input2")! as HTMLInputElement;
const result = document.getElementById("result")!;

if (addButton) {
  addButton.addEventListener("click", () => {
    result.innerText = (parseFloat(input1.value) + parseFloat(input2.value)).toString();
  });
}
if (subtractButton) {
  subtractButton.addEventListener("click", () => {
      result.innerText = (parseFloat(input1.value) - parseFloat(input2.value)).toString();
  });
}