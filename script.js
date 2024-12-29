const aanaInp = document.getElementById("aanaInp");
const paisaInp = document.getElementById("paisaInp");
const _2bhk2b = document.getElementById("2bhk2b");
const _2bhkb = document.getElementById("2bhkb");
const _3bhkb = document.getElementById("3bhkb");
const _2bhkbd = document.getElementById("2bhkbd");
const planShowContain = document.querySelector(".planShow");

const restrictInput = () => {
  if (aanaInp.value < 5) {
    _3bhkb.disabled = true;
    _2bhkbd.disabled = true;
    _2bhkb.disabled = false;
  } else if (aanaInp.value >= 5) {
    _3bhkb.disabled = false;
    _2bhkbd.disabled = false;
    _2bhkb.disabled = true;
  }
};
document.addEventListener("DOMContentLoaded", restrictInput);
aanaInp.addEventListener("change", restrictInput);

const genBtn = document.querySelector(".generate");
genBtn.addEventListener("click", () => {
  let aana = aanaInp.value;
  let paisa = paisaInp.value;
  let noOfRooms = document
    .querySelector('input[name="noOfRooms"]:checked')
    .value.toUpperCase();
  let areaFolder = `${aana}aana${paisa}Paisa`;
  let planNumber = Math.floor(Math.random() * 3) + 1;
  let planSrc = `houseplanData/${areaFolder}/${noOfRooms}/plan${planNumber}.png`;
  
  let planImg = document.createElement("img");
  planImg.src = planSrc;
  planImg.alt = "House Plan";
  planImg.classList.add("planImg");
  planImg.onerror = () => {
    planImg.src = `houseplanData/${areaFolder}/${noOfRooms}/plan1.png`; // Fallback to default
};
  planShowContain.innerHTML = ""; // Clear existing content
  planShowContain.appendChild(planImg);
});
