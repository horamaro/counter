(() => {
  const $countNumber = document.getElementById("js-counter");
  const $reset = document.getElementById("js-reset");

  $reset.addEventListener("click", () => {
    $countNumber.textContent = 0;
    $countNumber.closest(".counter").classList.remove("blue", "red");
  });
})();
