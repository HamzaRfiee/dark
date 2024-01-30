let light = document.getElementById("light");
let dark = document.getElementById("dark");
let box = document.querySelector(".container");
let moon = document.querySelector(".moon");
let motion = document.querySelector(".anima");

dark.onclick = () => {
  box.style.backgroundColor = "#25232D";
  moon.style.background = "linear-gradient(30deg, #8f97f8, #a3dafb 60%)";
  motion.style.cssText = "top: 0px; right: 0px; transform: scale(1)";
  document.body.style.background = "#25232d";
};

light.onclick = () => {
  box.style.backgroundColor = "white";
  moon.style.background = "linear-gradient(30deg, #ff8c00, #ff6523, #ff2b58)";
  motion.style.cssText = " top: -100px; right: -55px; transform: scale(0)";
  document.body.style.background = "#fff";
};
