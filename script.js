const modeLD = document.getElementById("modeLD");
const darkMode = document.getElementById("darkMode");
const droptext = document.getElementById("droptext");
const dropVous = document.getElementById("dropVous");
const lightMode = document.getElementById("lightMode");
const body = document.getElementById("bgBody");
const boxBg = document.querySelector(".darkModeBox");
const boxbgI = document.querySelector(".darkModeBoxI");
const boxbgIb = document.querySelector(".darkModeBoxIb");
const boxbgN = document.querySelector(".darkModeBoxN");
const boxbgC = document.querySelector(".darkModeBoxC");
const bgCardI = document.getElementById("darkModeCard");
const bgCardIb = document.getElementById("darkModeCardb");
const bgCardIc = document.getElementById("darkModeCardc");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");

// dark mode
darkMode.addEventListener("click", () => {
  modeLD.classList.toggle("darkModeNav");
  modeLD.classList.toggle("bg-white");
  droptext.classList.toggle("textDrop");
  droptext.classList.toggle("textMenu");
  dropVous.classList.toggle("textDrop");
  dropVous.classList.toggle("textMenu");
  body.classList.toggle("bg-light");
  body.classList.toggle("bg-darkB");
  boxBg.classList.toggle("bg-white");
  boxBg.classList.toggle("bg-box");
  boxbgI.classList.toggle("bg-white");
  boxbgI.classList.toggle("bg-box");
  boxbgIb.classList.toggle("bg-white");
  boxbgIb.classList.toggle("bg-box");
  boxbgN.classList.toggle("bg-white");
  boxbgN.classList.toggle("bg-boxNet");
  boxbgC.classList.toggle("bg-white");
  boxbgC.classList.toggle("bg-boxNet");
  bgCardI.classList.toggle("bg-innerI");
  bgCardIb.classList.toggle("bg-innerI");
  bgCardIc.classList.toggle("bg-innerI");

  let mode = lightMode;
  if (mode.textContent == "Dark Mode") {
    lightMode.innerHTML = "Light Mode";
    iconMoon.classList.add("hide");
    iconSun.classList.remove("hide");
  } else if (mode.textContent == "Light Mode") {
    lightMode.innerHTML = "Dark Mode";
    iconSun.classList.add("hide");
    iconMoon.classList.remove("hide");
  }
});
