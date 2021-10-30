"use strict";

//element 선언 (재료를 구하기)
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  console.log(btnOpenModal);
  modal.classList.remove("hidden"); //기능을 없앨 때 클래스 . 삭제
  overlay.classList.remove("hidden");
  modal.style.display.remove = "block";
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// 'esc' keyboard function
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape") {
    closeModal();
  }
});
