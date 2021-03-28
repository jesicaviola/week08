var x = 1;
var y = 3;
var z = x + y;
console.log(z);

var firstname = "Jesica";
var lastname = "Viola";
var CompleteName = firstname + lastname;
console.log(CompleteName);

var text1 = "Java".length;
var text2 = "Script".length;
var text1and2 = text1 + text2;
console.log(text1and2);

var text3 = "Convert to uppercase";
var TextConverted = text3.toUpperCase();
console.log(TextConverted);

var text4 = "create a new string";
var NewString = text4.substring(0, 5);
console.log(NewString);

var text5 = "create a new string last 3";
var NewString2 = text5.substring(text5.length-3);
console.log(NewString2);

var text6 = "create a new string capitalize";
var NewString3 = text6.charAt(0).toUpperCase() + text6.substring(1).toLowerCase();
console.log(NewString3);

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

months.sort();
console.log(months);

months.unshift(2020);
months.push(2021);
console.log(months);

months.shift(2020);
months.pop(2021);
console.log(months);

