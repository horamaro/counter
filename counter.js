(() => {
  const $buttons = document.querySelectorAll(".js-button");
  const $countNumber = document.getElementById("js-counter");

  if (!$buttons || !$countNumber) return;
  //console.log($buttons);

  $buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      count = parseInt($countNumber.textContent);
      if (btn.textContent === "+") {
        $countNumber.textContent = count + 1;
        color();
      } else {
        $countNumber.textContent = count - 1;
        color();
      }
      //console.log(btn);
    });
  });

  const color = () => {
    if (parseInt($countNumber.textContent) > 0) {
      $countNumber.closest(".counter").classList.add("red");
    } else if (parseInt($countNumber.textContent) < 0) {
      $countNumber.closest(".counter").classList.add("blue");
    } else {
      $countNumber.closest(".counter").classList.remove("blue", "red");
    }
  };
})();
