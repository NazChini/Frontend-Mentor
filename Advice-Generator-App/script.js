const $adviceNumber = document.querySelector(".advice-number");
const $advice = document.querySelector(".advice");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      $adviceNumber.textContent = data.slip.id;
      $advice.textContent = data.slip.advice;
    })
    .catch((error) => {
      //Use a default advice to display
      $adviceNumber.textContent = `52`;
      $advice.textContent = `Don't promise what you can't deliver.`;
    });
}

//Placeholder text on page load
$adviceNumber.textContent = `52`;
$advice.textContent = `Don't promise what you can't deliver.`;
document.querySelector(".btn-submit").addEventListener("click", getAdvice);
