"use strict";
const dropdownForm = document.querySelector(".drowpdown");
const dropdownBtn = document.querySelector(".dropdown-toggle");
const menuList = document.querySelector(".dropdown-menu");
const itemList = document.querySelector(".dropdown-item");
const optionBtn = document.querySelectorAll(".dropdown-option");
const submit = document.querySelector(".next-button");

// dropdownBtn 클릭하면, menuList 나온다
dropdownBtn.addEventListener("click", function () {
  menuList.classList.toggle("show");
});

// menuList는 사라진다
dropdownBtn.addEventListener("blur", function () {
  menuList.classList.remove("show");
});

// menuList 중 하나를 클릭하면,
optionBtn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // 선택한 값 지정
    const selectValue = e.currentTarget.textContent.trim();
    // 지정 값 출력
    dropdownBtn.textContent = selectValue;
    // 색깔 변화
    dropdownBtn.classList.add("selected");
    // 버튼 생성
    submit.removeAttribute("disabled");
  });
});

/* 
optionBtn.forEach(function (item) {
  item.addEventListener('click', selectOption)
})

function selectOption() {
  const value = this.textContent.trim()
  toggleButton.textContent = value
  toggleButton.classList.add('selected')
  nextButton.removeAttribute('disabled')
}
*/
