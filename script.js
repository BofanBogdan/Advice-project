document.addEventListener("click", getAdvice);
const num = document.querySelector(".nrAdvice");
const advice = document.querySelector(".advice");
const change = document.querySelector(".change");
async function getAdvice() {
  try {
    const dataApi = await fetch("https://api.adviceslip.com/advice");
    const data = await dataApi.json();

    num.textContent = "ADVICE #" + data.slip.id;
    advice.textContent = '"' + data.slip.advice + '"';
  } catch (error) {
    console.error("Eroare:", error);
  }
}
