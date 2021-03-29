var x = 1;
var y = 3;
var z = x + y;
console.log(z);

var firstName = "Jesica";
var lastName = "Viola";
var completeName = firstName + lastName;
console.log(completeName);

var text1 = "Java".length;
var text2 = "Script".length;
var text1and2 = text1 + text2;
console.log(text1and2);

var text3 = "Convert to uppercase";
var textConverted = text3.toUpperCase();
console.log(textConverted);

var text4 = "create a new string";
var newString = text4.substring(0, 5);
console.log(newString);

var text5 = "create a new string last 3";
var newString2 = text5.substring(text5.length-3);
console.log(newString2);

var text6 = "create a new string capitalize";
var newString3 = text6.charAt(0).toUpperCase() + text6.substring(1).toLowerCase();
console.log(newString3);

var text7 = "create a new string";
var newString4 = text7.indexOf(" ");
console.log(newString4);

var text8 = "uppercase lowercase";
var space = text8.indexOf(" ");
var text8a = text8.substring(0,space);
var text8b = text8.substring(space+1);
var text8a1 = text8a.charAt(0).toUpperCase() + text8a.substring(1).toLowerCase()
var text8b1 = text8b.charAt(0).toUpperCase() + text8b.substring(1).toLowerCase()
var newString5 = text8a1 + " " + text8b1;
console.log(newString5);

var months = [
  "Enero", 
  "Febrero", 
  "Marzo", 
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(months[5],months[11]);

var original = months.slice();

months.sort();
console.log(months);

months.unshift(2020);
months.push(2021);
console.log(months);

months.shift(2020);
months.pop(2021);
console.log(months);

months.reverse();
console.log(months);

var monthsString = original.join("-");
console.log(monthsString);

var original2 = original.slice (4,11);
console.log(original2);

var number = Math.random();
console.log(number);

var message = (number >= 0.5) ? "Greater than 0,5":"Lower than 0,5";
console.log(message);

var message2
if (number >= 0.5) {
  message2 = "Greater than 0,5";
} else {
  message2 = "Lower than 0,5";
}

var age = Math.floor(Math.random() * 100);
console.log(age);

var range
if (age < 2) {
  range = "Bebe";
} else if (age < 12) {
  range = "Niño";
} else if (age < 19) {
  range = "Adolescente";
} else if (age < 30) {
  range = "Joven";
} else if (age < 60) {
  range = "Adulto";
} else if (age < 75) {
  range = "Adulto mayor";
} else {
  range = "Anciano";
}
console.log(age, range);

var animals = [
  "jirafa",
  "mono",
  "leon",
  "vaca",
  "gallina",
];

for (i = 0; i<animals.length; i++)
console.log(animals[i]);

