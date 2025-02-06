const encodeEl = document.querySelector("#encode");
const decodeEl = document.querySelector("#decode");

const encodeFormEl = document.querySelector("#encode form");
const decodeFormEl = document.querySelector("#decode form");

const encodeFormInputEl = document.querySelector("#encode input");
const decodeFormInputEl = document.querySelector("#decode input");

const resultCard = document.querySelector("#result");
const resultInputEl = document.querySelector("#result input");

const resetBtn = document.querySelector("#reset");
const encodeBtn = document.querySelector("#encodeBtn");
const decodeBtn = document.querySelector("#decodeBtn");

const errEl = document.querySelector("#err");

const resetToDefault = () => {
  resultCard.style.display = "none";
  encodeEl.style.display = "none";
  decodeEl.style.display = "none";

  encodeFormInputEl.value = "";
  decodeFormInputEl.value = "";
  resultInputEl.value = "";

  errEl.style.display = "none";
};

document.addEventListener("DOMContentLoaded", (e) => {
  resetToDefault();
});

encodeBtn.addEventListener("click", (e) => {
  resetToDefault();
  encodeEl.style.display = "block";
});

decodeBtn.addEventListener("click", (e) => {
  resetToDefault();
  decodeEl.style.display = "block";
});

const validateInput = (inputStr, action) => {
  if (inputStr === "") {
    let errMessage =
      action === "encode"
        ? "Enter the text to encode"
        : "Enter the scret to decode";
    errEl.innerHTML = errMessage;
    errEl.style.color = "red";

    errEl.style.display = "block";
    return false;
  }
  return true;
};

encodeFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let txt = encodeFormInputEl.value;

  if (!validateInput(txt, "encode")) return;

  let encodedValue = btoa(txt);

  resultInputEl.value = encodedValue;

  encodeEl.style.display = "none";
  resultCard.style.display = "block";
});

decodeFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let txt = decodeFormInputEl.value;

  if (!validateInput(txt, "decode")) return;

  let decodedValue = atob(txt);

  resultInputEl.value = decodedValue;

  decodeEl.style.display = "none";
  resultCard.style.display = "block";
});

resetBtn.addEventListener("click", (e) => {
  resetToDefault();
});
