"use strict";

let users = [
    {
        "lg" : "admin",
        "ps" : "admin",
        "role": "admin"
    },
    {
        "lg" : "user",
        "ps" : "user",
        "role": "user"
    }
];

let btnlog = document.querySelector(".btnlog");
let logScreen = document.querySelector(".blform");
let content = document.querySelector(".content");
let recover = document.querySelector(".recoverpass");
let recoverPage = document.querySelector(".recoverpage");
let loginField = document.querySelector("#authlogin");
let passwordField = document.querySelector("#authpass");
let logoutButton = document.querySelector("#logoutbutton");
let buttonAuth = document.querySelector(".buttonauth");
let authForm = document.querySelector(".authform");
let slider = document.querySelector(".userslider");
let slider_2 = document.querySelector(".adminslider");

logoutButton.style.display = "none";
recover.style.display = "block";
slider_2.style.display = "none";

btnlog.addEventListener("click", formwrap);

function formwrap() {
    logScreen.style.display = "block";
    authForm.style.display = "none";
    recoverPage.style.display = "none";
    let frmbut = document.querySelector(".frmbut");
    frmbut.addEventListener("click", getLogPass);
}

function getLogPass() {
    let frmlog = document.querySelector("#frmlog").value;
    let frmpass = document.querySelector("#frmpass").value;
    checkLogPass(frmlog, frmpass);
}

function checkLogPass(login, password) {
    if(checkChars(login)){
        for (const user of users) {
            if(user.lg == login && user.ps == password){

                if(user.role == 'admin'){
                    adminsContent();
                }
                else{
                    usersContent();
                    
                }
                logScreen.style.display = "none";
                authForm.style.display = "none";
                btnlog.style.display = "none";
                buttonAuth.style.display = "none";
                recover.style.display = "none";
                logoutButton.style.display = "block";
                logoutButton.addEventListener("click", logOutEvent);
                
                

                return;
            }
        }

        alert("Error login/pass");
    }
}

function logOutEvent(){
    logScreen.style.display = "none";
    logoutButton.style.display = "none";
    slider.style.display = "none";
    slider_2.style.display = "none";
    btnlog.style.display = "inline-block";
    buttonAuth.style.display = "inline-block";
    recover.style.display = "inline-block";
    content.innerHTML = "";
}

function adminsContent(){
    slider_2.style.display = "flex";
    let photoFive = document.querySelectorAll(".photo5");
    let photoSix = document.querySelectorAll(".photo6");
    let photoSeven = document.querySelectorAll(".photo7");
    let photoEight = document.querySelectorAll(".photo8");

    for(let i = 0; i < photoFive.length; i++){
        photoFive[i].addEventListener("click", photoFiveEvent);
    }
    for (let i = 0; i < photoSix.length; i++) {
        photoSix[i].addEventListener("click", photoSixEvent);
    }
    for(let i = 0; i < photoSeven.length; i++){
        photoSeven[i].addEventListener("click", photoSevenEvent);
    }
    for(let i = 0; i < photoEight.length; i++){
        photoEight[i].addEventListener("click", photoEightEvent);
    }
}

function photoFiveEvent(){
    content.innerHTML = "Курсы английского ждут вас! Приобретайте курсы в местной школе и самосовершенствуйтесь!";
}

function photoSixEvent(){
    content.innerHTML = "Не знаете где найти хорошие курсы и знания? Скиллбокс ваш выбор!";
}

function photoSevenEvent(){
    content.innerHTML = "Ускоренное обучение программирование за один год!";
}

function photoEightEvent(){
    content.innerHTML = "Ускоренная доставка продуктов в ваш дом не больше 15 минут!";
}

function usersContent(){
    slider.style.display = "flex";
    let photoOne = document.querySelectorAll(".photo1");
    let photoTwo = document.querySelectorAll(".photo2");
    let photoThree = document.querySelectorAll(".photo3");
    let photoFour = document.querySelectorAll(".photo4");

    
    for(let i = 0; i < photoOne.length; i++){
        photoOne[i].addEventListener("click", photoOneEvent);
    }
    for (let i = 0; i < photoTwo.length; i++) {
        photoTwo[i].addEventListener("click", photoTwoEvent);
    }
    for(let i = 0; i < photoThree.length; i++){
        photoThree[i].addEventListener("click", photoThreeEvent);
    }
    for(let i = 0; i < photoFour.length; i++){
        photoFour[i].addEventListener("click", photoFourEvent);
    }
}

function photoOneEvent(){
    content.innerHTML = "С 19 сентября по 15 октября, проходит ярмарка посуды, скидка на неё 30%";
}

function photoTwoEvent(){
    content.innerHTML = "В магазине Арма скидка на колбасу Банкетная (0,24 кг) на 31 рубль!";
}

function photoThreeEvent(){
    content.innerHTML = "В магазине одежды и аксессуаров скидка на каждый приобретенный товар растет на 10%!";
}

function photoFourEvent(){
    content.innerHTML = "Ура! Сыр и яблоки имеют скидку в 38% в магазине";
}

buttonAuth.addEventListener("click", authFormWrap);

function authFormWrap(){
    recoverPage.style.display = "none";
    authForm.style.display = "block";
    logScreen.style.display = "none";
    let createAccountEvent = document.querySelector(".accessauth");
    createAccountEvent.addEventListener("click", accountCreationProcess);
}

function accountCreationProcess(){
    if(checkChars(loginField.value) && checkEmptinessOfFields(passwordField.value)){
		for(const user of users){
			if(user.lg == loginField.value){
				alert("Error login!");
				return;
			}
		}
        
        authForm.style.display = "none";
        btnlog.style.display = "inline-block";
        buttonAuth.style.display = "inline-block";
        recover.style.display = "inline-block";
        logScreen.style.display = "none";

		users.push({
			"lg" : loginField.value,
			"ps" : passwordField.value,
			"role": "user",
		});
	}
}

function checkEmptinessOfFields(str){
    if(str.length == 0){ alert("Input password!"); return false; }
	for(let i = 0; i < str.length; i++){
		if(str.charAt(i) == ' '){ alert("No use spaces in password!"); return false; }
	}

	return true
}

function checkChars(str){
    if(str.length == 0){ alert("Input login!"); return false; }
	for(let i = 0; i < str.length; i++){
		if(!(
		 str.charAt(i) >= 'a' && str.charAt(i) <= 'z' ||
		 str.charAt(i) >= 'A' && str.charAt(i) <= 'Z' ||
		 str.charAt(i) >= '0' && str.charAt(i) <= '9'
		 )){ alert("Use only english chars and numbers!"); return false; }
	}
    return true;
}

function checkPositionLogin(log){
    for (const user of users) {
        if(user.lg == log){
            return true;
        }
    }
    return false;
}

recover.addEventListener("click", openFormOfRecoverLogin);

function openFormOfRecoverLogin(){
    recoverPage.style.display = "block";
    let accessRecover = document.querySelector(".buttonrecover");
    accessRecover.addEventListener("click", recoverPasswordEvent);
}

function recoverPasswordEvent(){
    let login = document.querySelector("#logininfo").value;
	for(const user of users){
		if(user.lg == login){
			content.innerHTML = user.ps;
			return;
		}
	}
}