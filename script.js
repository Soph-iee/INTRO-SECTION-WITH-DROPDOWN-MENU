"use strict";
const featureMenu = document.querySelector(".featured-dropdown"),
  companyMenu = document.querySelector(".company-dropdown"),
  featuredBar = document.querySelector("#featured"),
  companyBar = document.querySelector(".company"),
  dropDownIcon1 = document.querySelectorAll(".feature-icon"),
  dropDownIcon2 = document.querySelectorAll(".company-icon");

//  //////functions

featuredBar.addEventListener("click", function () {
  featureMenu.classList.toggle("display");
  for (let i = 0; i < dropDownIcon1.length; i++) {
    const element = dropDownIcon1[i];
    element.classList.toggle("display");
  }
});

companyBar.addEventListener("click", function () {
  companyMenu.classList.toggle("display");
  for (let i = 0; i < dropDownIcon2.length; i++) {
    const element = dropDownIcon2[i];
    element.classList.toggle("display");
  }
});
