function validation(){
	var email = document.getElementById("email-id").value;
	var password = document.getElementById("pass").value;
	var rePassword = document.getElementById("re-pass").value;
	var textArea = document.getElementById("txtarea").value;


	if (email == "") {
		document.getElementById("email-error").innerText = "This Field is Required";
		return false;
	}
	if (email.indexOf("@") <= 0) {
		document.getElementById("email-error").innerText = "@ not in a valid position";
		return false;
	}
	if ((email.charAt(email.length-4) != ".") && (email.charAt(email.length-3) != ".")) {
		document.getElementById("email-error").innerText = ". not in a valid position";
		return false;
	}
	if (password == "") {
		document.getElementById("pass-error").innerText = "This Field is Required";
		return false;
	}
	if (password.length < 8) {
		document.getElementById("pass-error").innerText = "password should be min 8 char";
		return false;
	}
	if (rePassword == "") {
		document.getElementById("re-pass-error").innerText = "This Field is Required";
		return false;
	}
	if (rePassword != password) {
		document.getElementById("re-pass-error").innerText = "Password does not match";
		return false;
	}
	if (textArea == "") {
		document.getElementById("txtarea-error").innerText = "This Field is Required";
		return false;
	}
	if (textArea.length <=40 ) {
		document.getElementById("txtarea-error").innerText = "Text should be more than 40 char";
		return false;
	}
	localStorage.setItem('emailInput', email)
	localStorage.setItem('passwordInput', password)
	localStorage.setItem('rePasswordInput', rePassword)
	localStorage.setItem('textInput', textArea)



}

// const storageInput = document.querySelector('.ls');
// const button = document.querySelector('.button');

// storageInput.addEventListener('input', letter => {
// 	storageInput.textContent = letter.target.value
// })

// const saveToLocalStorage = () => {
// 	localStorage.setItem('textInput', storageInput.textContent)
// }

// button.addEventListener('click', saveToLocalStorage);