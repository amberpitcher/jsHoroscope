var displayHoroscope = document.getElementById('dispHoroscopeDiv');
var chooseZodiac = document.getElementById('dispZodiacInput');

function loadDoc() {

  var zodiac = chooseZodiac.value;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("dispHoroscopeDiv").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", zodiac + ".html", true);
  xhttp.send();
}

function changeZodiacName(){
	var zodiacName = chooseZodiac.value;
	document.getElementById('zodiacName').innerHTML = zodiacName;
}

chooseZodiac.addEventListener('change', function(){
	if (chooseZodiac.value == "Please Select Your Zodiac Sign") {
		document.getElementById("zodiacName").style.visibility = "hidden";
		document.getElementById("dispHoroscopeDiv").style.visibility = "hidden";
	}
	else{
		document.getElementById("zodiacName").style.visibility = "visible";
		document.getElementById("dispHoroscopeDiv").style.visibility = "visible";
		changeZodiacName();
		loadDoc();
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

var birthDateInput = document.getElementById('calcDate');
var calcButton = document.getElementById('calcBtn');

calcBtn.addEventListener('click', function() {

	var birthDate = birthDateInput.value;

	var dateParts = birthDate.split("/");
	var birthMonth = dateParts[0];
	var birthDay = dateParts[1];

console.log(birthMonth);
console.log(birthDay);

	var calcZodiac = document.getElementById('calcZodiac');

	if (birthMonth == 01 & 20 <= birthDay && birthDay<=31) {
		calcZodiac.innerHTML = "You are an Aquarius!";
	}
	else if (birthMonth == 02 & 01 <= birthDay && birthDay <= 18) {
		calcZodiac.innerHTML = "You are an Aquarius!";
	}
	else if (birthMonth == 02 & 19 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Pisces!";
	}
	else if (birthMonth == 03 & 01 <= birthDay && birthDay <=20) {
		calcZodiac.innerHTML = "You are a Pisces!";
	}
	else if (birthMonth == 03 & 21 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are an Aries!";
	}
	else if (birthMonth == 04 & 01 <= birthDay && birthDay <=19) {
		calcZodiac.innerHTML = "You are an Aries!";
	}
	else if (birthMonth == 04 & 20 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Taurus!";
	}
	else if (birthMonth == 05 & 01 <= birthDay && birthDay <=20) {
		calcZodiac.innerHTML = "You are a Taurus!";
	}
	else if (birthMonth == 05 & 21 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Gemini!";
	}
	else if (birthMonth == 06 & 01 <= birthDay && birthDay <=20) {
		calcZodiac.innerHTML = "You are a Gemini!";
	}
	else if (birthMonth == 06 & 21 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Cancer!";
	}
	else if (birthMonth == 07 & 01<= birthDay && birthDay <=22) {
		calcZodiac.innerHTML = "You are a Cancer!";
	}
	else if (birthMonth == 07 & 23 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Leo!";
	}
	else if (birthMonth == 08 & 01 <= birthDay && birthDay <=20) {
		calcZodiac.innerHTML = "You are a Leo!";
	}
	else if (birthMonth == 08 & 21 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Virgo!";
	}
	else if (birthMonth == 09 & 01 <= birthDay && birthDay <=22) {
		calcZodiac.innerHTML = "You are a Virgo!";
	}
	else if (birthMonth == 09 & 23 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Libra!";
	}
	else if (birthMonth == 10 & 01 <= birthDay && birthDay <=22) {
		calcZodiac.innerHTML = "You are a Libra!";
	}
	else if (birthMonth == 10 & 23 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Scorpio!";
	}
	else if (birthMonth == 11 & 01 <= birthDay && birthDay <=21) {
		calcZodiac.innerHTML = "You are a Scorpio!";
	}
	else if (birthMonth == 11 & 22 <= birthDay && birthDay <=31) {
		calcZodiac.innerHTML = "You are a Sagittarius!";
	}
	else if (birthMonth == 12 & 01 <= birthDay && birthDay <=21) {
		calcZodiac.innerHTML = "You are a Sagittarius!";
	}
	else {
		calcZodiac.innerHTML = "You are a Capricorn!";
	}
	
});



