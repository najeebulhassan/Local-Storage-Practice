function validation(){


	// if (email == "") {
	// 	document.getElementById("email-error").innerText = "This Field is Required";
	// 	return false;
	// }
	// if (email.indexOf("@") <= 0) {
	// 	document.getElementById("email-error").innerText = "@ not in a valid position";
	// 	return false;
	// }
	// if ((email.charAt(email.length-4) != ".") && (email.charAt(email.length-3) != ".")) {
	// 	document.getElementById("email-error").innerText = ". not in a valid position";
	// 	return false;
	// }
	// if (password == "") {
	// 	document.getElementById("pass-error").innerText = "This Field is Required";
	// 	return false;
	// }
	// if (password.length < 8) {
	// 	document.getElementById("pass-error").innerText = "password should be min 8 char";
	// 	return false;
	// }
	// if (rePassword == "") {
	// 	document.getElementById("re-pass-error").innerText = "This Field is Required";
	// 	return false;
	// }
	// if (rePassword != password) {
	// 	document.getElementById("re-pass-error").innerText = "Password does not match";
	// 	return false;
	// }
	// if (textArea == "") {
	// 	document.getElementById("txtarea-error").innerText = "This Field is Required";
	// 	return false;
	// }
	// if (textArea.length <=5 ) {
	// 	document.getElementById("txtarea-error").innerText = "Text should be more than 5 char";
	// 	return false;
	// }
	// var email = document.getElementById("email-id").value;
	// var password = document.getElementById("pass").value;
	// var rePassword = document.getElementById("re-pass").value;
	// var textArea = document.getElementById("txtarea").value;
	// var data = {"email": email, "password": password, "rePassword": rePassword, "textArea": textArea};
    // var datas =[];
    // datas.push(data);


    // localStorage.setItem('formData', JSON.stringify(data));
    var emails = !!localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : [];
    var email= document.getElementById('email-id').value;
    emails.push(email);
    localStorage.setItem('email', JSON.stringify(emails));

    var passwords = !!localStorage.getItem('password') ? JSON.parse(localStorage.getItem('password')) : [];
    var password = document.getElementById('pass').value;
    passwords.push(password);
    localStorage.setItem('password', JSON.stringify(passwords));

    var rePasswords = !!localStorage.getItem('repassword') ? JSON.parse(localStorage.getItem('repassword')) : [];
    var repassword = document.getElementById('pass').value;
    rePasswords.push(repassword);
    localStorage.setItem('repassword', JSON.stringify(rePasswords));

    var textAreas = !!localStorage.getItem('textArea') ? JSON.parse(localStorage.getItem('textArea')) : [];
    var textArea = document.getElementById('pass').value;
    textAreas.push(textArea);
    localStorage.setItem('textArea', JSON.stringify(textAreas));

// 	function addToCSVFile() {
//     // Collecting the names
//     var name = document.getElementById('firstName').value;
//     var middlename = document.getElementById('middleName').value;
//     var lastname = document.getElementById('lastName').value;
//     var data = {name: name, middlename: middlename, lastName: lastname};
//     console.log('Data is', data);
//     // alldata.push(data);
//     localStorage.setItem('Data', JSON.stringify(data));
//     clearData();
//     alert("Data Added Successfully", JSON.stringify(data));

// }

	
// 	localStorage.setItem('emailInput', emails);
	// emails.push(localStorage.getItems('emailInput'));
	// localStorage.setItem('passwordInput', password)
	// localStorage.setItem('rePasswordInput', rePassword)
	// localStorage.setItem('textInput', textArea)



}
