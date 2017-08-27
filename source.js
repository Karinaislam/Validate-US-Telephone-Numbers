function input(){

	var str = document.getElementById('input').value;
	var output = telephoneCheck(str);
	document.getElementById('output').innerHTML= output;


}



function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}