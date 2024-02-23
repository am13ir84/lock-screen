let selectedDots = [];
let confirmedPattern = false;
let repeatPassword = false;
let newPassword;
document.querySelectorAll(".pattern-dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    const dotIndex = dot.getAttribute("data-index");
    if (!confirmedPattern) {
      if (!selectedDots.includes(dotIndex)) {
        selectedDots.push(dotIndex);
        dot.style.backgroundColor = "#8b4513";
      } else {
        selectedDots.pop();
        dot.style.backgroundColor = "#fada5e";
      }
    }
  });
});

const resetPatternDots = () => {
  document.querySelectorAll(".pattern-dot").forEach((dot) => {
    dot.style.backgroundColor = "#fada5e";
    dot.classList.remove("confirmed", "wrong");
  });
};

document.getElementById("confirmBtn").addEventListener("click", () => {
  const storedPattern = localStorage.getItem("pattern");
  if (storedPattern) {
    if (selectedDots.join("") === storedPattern) {
      confirmedPattern = true;
      console.log("confirmedPattern", confirmedPattern);
      document.querySelectorAll(".pattern-dot").forEach((dot) => {
        dot.classList.add("confirmed");
      });
      setTimeout(() => {
        if (confirmedPattern) {
          window.location.href = "./NewPage/new.html";
        }
      }, 1500);
    } else {
      document.querySelectorAll(".pattern-dot").forEach((dot) => {
        dot.classList.add("wrong");
        setTimeout(() => {
          dot.classList.remove("wrong");
          resetPatternDots();
        }, 1000);
      });
    }
  } else {
    if (repeatPassword) {
      if (newPassword === selectedDots.join("")) {
        localStorage.setItem("pattern", selectedDots.join(""));
        selectedDots = [];
        confirmedPattern = false;
        resetPatternDots();
        alert("your pattern is set");
      } else {
        alert("pattern not match");
      }
    } else {
      alert("Repeat your pattern");
      newPassword = selectedDots.join("");
      repeatPassword = true;
      selectedDots = [];
      resetPatternDots();
    }
  }
});

document.getElementById("forgetBtn").addEventListener("click", () => {
  localStorage.removeItem("pattern");
  selectedDots = [];
  confirmedPattern = false;
  resetPatternDots();
  window.location.href = "./Pin/forget.html";
});
