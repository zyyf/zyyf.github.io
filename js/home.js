"use strict";

(function () {
	function errorCheck() {
		var errornum = document.getElementById('errornum');

		switch (errornum.innerHTML) {
			case "1":
				var signupaccount = document.getElementById('signup__form--account');
				var signuperror = document.getElementById('signup__form--error');
				var signUpForm = document.querySelectorAll(".form-hidden")[0];

				signupaccount.style.border = "2px solid #f00";
				signuperror.style.display = "inline";
				signUpForm.className = "form-visible";
				break;
			case "3":
				var signinaccount = document.getElementById('signinaccount');
				var signinerrorA = document.getElementById('signin__form--accounterror');
				var signInForm = document.querySelectorAll(".form-hidden")[1];

				signinaccount.style.border = "2px solid #f00";
				signinerrorA.style.display = "inline";
				signInForm.className = "form-visible";
				break;
			case "2":
				var signinpassword = document.getElementById('signinpassword');
				var signinerrorP = document.getElementById('signin__form--passworderror');
				var signInForm = document.querySelectorAll(".form-hidden")[1];

				signinpassword.style.border = "2px solid #f00";
				signinerrorP.style.display = "inline";
				signInForm.className = "form-visible";
				break;
		}
	}
	function renderSignForm() {
		var signInBtn = document.getElementById("head__login--signin");
		var signUpBtn = document.getElementById("head__login--signup");
		var signInForm = document.querySelectorAll(".form-hidden")[1];
		var signUpForm = document.querySelectorAll(".form-hidden")[0];
		var floatBack = document.querySelectorAll(".close");
		var signInLink = document.getElementById("signup__form--signin");
		var signUpLink = document.getElementById("signin__form--signup");

		signInBtn.onclick = function () {
			signUpForm.className = "form-hidden";
			signInForm.className = "form-visible";
		};
		signInLink.onclick = function () {
			signUpForm.className = "form-hidden";
			signInForm.className = "form-visible";
		};
		signUpBtn.onclick = function () {
			signInForm.className = "form-hidden";
			signUpForm.className = "form-visible";
		};
		signUpLink.onclick = function () {
			signInForm.className = "form-hidden";
			signUpForm.className = "form-visible";
		};
		Array.from(floatBack).forEach(function (element) {  //in Chrome can use floatback.foreach
			element.onclick = function () {
				signInForm.className = "form-hidden";
				signUpForm.className = "form-hidden";
			};
		});
	}
	function checkInputData() {
		var passwordInput = document.getElementById("singnup__form--password");
		var passwordSubmit = document.getElementById("signup__form--button");
		var passwordWarning = document.getElementById("signup__form--warning");
		var signUpForm = document.getElementById("signup__form");
		var signInForm = document.getElementById("signin__form");
		var dataInput = document.querySelectorAll("input[type=\"text\"]");
		var signInPassword = document.querySelector("#signin__form input[type=\"password\"]");

		function resumeInput() {
			Array.from(dataInput).forEach(function (element) {
				element.className = "";
			})
			passwordInput.className = "";
			signInPassword.className = "";
		}

		signUpForm.onsubmit = function () {
			resumeInput();
			if (!dataInput[0].value.trim()) {
				dataInput[0].className = "signup__form--wrong";
				return false;
			}else if (!dataInput[1].value.trim()) {
				dataInput[1].className = "signup__form--wrong";
				return false;
			}else if (!passwordInput.value.match(/^\S{5}\S+$/)) {
				passwordInput.className = "signup__form--wrong";
				passwordWarning.className = "signup__form--wrong-notice";
				return false;
			}else {
				passwordInput.className = "";
				passwordWarning.className = "";
				Array.from(dataInput).forEach(function (input) {
					input.value = input.value.trim();
				})
			}
		}

		signInForm.onsubmit = function () {
			resumeInput();
			if (!dataInput[2].value.trim()) {
				dataInput[2].className = "signup__form--wrong";
				return false;
			}
			Array.from(dataInput).forEach(function (input) {
				input.value = input.value.trim();
			})
		}
	}
	function renderLogo() {
		var logoBtn = document.getElementById("head__logo--img");
		logoBtn.onclick = function () {
			window.location.href = "#";
		};
	}

	renderSignForm();
	checkInputData();
	renderLogo();
	errorCheck();
})();