console.log("Script is working!");

// Enkel funksjonalitet for testing
document.querySelectorAll(".letter").forEach((letter, index) => {
  setTimeout(() => {
    letter.style.color = "yellow";
  }, index * 500);
});
