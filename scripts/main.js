var myHeading = document.querySelector('h1');

var myCating = document.querySelector('p1');
    myHeading.textContent = 'КОТ ЗЕВАЕТ ЫАААА!';
  
    var myImage = document.querySelector('img');

   myImage.onclick = function() {
var MySrc = myImage.getAttribute('src');
if(MySrc === 'images/kot.png') {
    myImage.setAttribute ('src','images/bruh-cat.png');
myCating.textContent = 'Кот зевнул, нажмите на кота чтобы зевнул кот зевнул снова';
} else {
    myImage.setAttribute ('src','images/kot.png');
    myCating.textContent = 'КОТ ЗЕВАЕТ ЫААААААА!';
}
   }
// Personalized welcome message code

   var myButton = document.querySelector('button');
   
   var myHeading = document.querySelector('h1');
   
function setUserName() {
    let myName = prompt('Введите своё имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Че, пришёл на зевающего кота посмотреть, мистер ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
 } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Че, пришёл на зевающего кота посмотреть, мистер ' + storedName;
 }
 myButton.onclick = function() {
    setUserName();
 }