const originInput = document.querySelector('[name="origin"]');
const destinationInput = document.querySelector('[name="destination"]');
const swapButton = document.querySelector(".route__swap");

swapButton.addEventListener("click", () => {
  const temp = originInput.value;
  originInput.value = destinationInput.value;
  destinationInput.value = temp;
});
