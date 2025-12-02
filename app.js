const Question = document.querySelector("#Qstn")
const a = document.querySelector("#optiona")
const b = document.querySelector("#optionb")
const c = document.querySelector("#optionc")
const d = document.querySelector("#optiond")
const btnNext = document.querySelector(".btn")
const ScoreDisplay = document.querySelector(".options")
const quizNum = document.querySelector(".quizNumber")
const winnerBox = document.querySelector(".winner-box")
const loserBox = document.querySelector(".loser-box")
const MainBox = document.querySelector(".main")
const totalScore = document.querySelector(".totalScore")
const scoreContainer = document.querySelector(".score")
const userName = document.querySelector(".name")


let usersArr = JSON.parse(localStorage.getItem("user1"))

let thisUser = JSON.parse(localStorage.getItem("currentUserEmail"))
if(!thisUser){
  window.location = "signup.html"
}
currentUserIndex = usersArr.findIndex((indx)=>{
    return indx.email == thisUser.email
})





const QstnArray = [
    {Question: "Pakistan came into being on______", a: "14 Aug 1947", b: "14 Dec 1947", c: "14 Jan 1947", d: "14 Feb 1947", answer: "a"},
    
    {Question: "Capital of Pakistan is______", a: "Karachi", b: "Lahore", c: "Islamabad", d: "Quetta", answer: "c"},

    {Question: "National language of Pakistan is______", a: "Punjabi", b: "Urdu", c: "Sindhi", d: "Pashto", answer: "b"},

    {Question: "Holy Quran was revealed in the month of______", a: "Rajab", b: "Ramadan", c: "Muharram", d: "Safar", answer: "b"},

    {Question: "The first Prophet was______", a: "Ibrahim", b: "Musa", c: "Adam", d: "Nuh", answer: "c"},

    {Question: "The last Prophet is______", a: "Isa", b: "Musa", c: "Dawood", d: "Muhammad ﷺ", answer: "d"},

    {Question: "National bird of Pakistan is______", a: "Chakor", b: "Sparrow", c: "Eagle", d: "Pigeon", answer: "a"},

    {Question: "Largest city of Pakistan is______", a: "Karachi", b: "Lahore", c: "Islamabad", d: "Multan", answer: "a"},

    {Question: "2 + 2 = ______", a: "3", b: "4", c: "5", d: "6", answer: "b"},

    {Question: "The book of Muslims is______", a: "Bible", b: "Torah", c: "Quran", d: "Zaboor", answer: "c"},

    {Question: "Which gas do plants absorb?______", a: "Oxygen", b: "Nitrogen", c: "Carbon Dioxide", d: "Hydrogen", answer: "c"},

    {Question: "Sun rises from the______", a: "East", b: "West", c: "North", d: "South", answer: "a"},

    {Question: "Father of Pakistan is______", a: "Liaquat Ali", b: "Allama Iqbal", c: "Quaid-e-Azam", d: "Sir Syed", answer: "c"},

    {Question: "Area of Pakistan is about______", a: "700,000 km²", b: "796,096 km²", c: "600,000 km²", d: "900,000 km²", answer: "b"},

    {Question: "First revelation came in cave______", a: "Safa", b: "Hira", c: "Thawr", d: "Arafat", answer: "b"},

    {Question: "Fastest land animal is______", a: "Lion", b: "Tiger", c: "Cheetah", d: "Leopard", answer: "c"},

    {Question: "Largest ocean is______", a: "Atlantic", b: "Indian", c: "Arctic", d: "Pacific", answer: "d"},

    {Question: "H₂O is the chemical name of______", a: "Oxygen", b: "Water", c: "Hydrogen", d: "Salt", answer: "b"},

    {Question: "Which is the closest planet to the Sun?______", a: "Earth", b: "Mars", c: "Mercury", d: "Venus", answer: "c"},

    {Question: "Which is the hottest planet?______", a: "Earth", b: "Venus", c: "Mars", d: "Jupiter", answer: "b"},

    {Question: "How many hours in a day?______", a: "10", b: "24", c: "12", d: "18", answer: "b"},

    {Question: "1 week = ______ days", a: "5", b: "6", c: "7", d: "8", answer: "c"},

    {Question: "National flower of Pakistan is______", a: "Rose", b: "Tulip", c: "Jasmine", d: "Lily", answer: "c"},

    {Question: "National animal of Pakistan is______", a: "Markhor", b: "Lion", c: "Horse", d: "Tiger", answer: "a"},

    {Question: "Which country gifted Pakistan the Bab-e-Pakistan?______", a: "China", b: "Turkey", c: "Saudi Arabia", d: "Iran", answer: "b"},

    {Question: "Largest continent is______", a: "Asia", b: "Africa", c: "Europe", d: "Australia", answer: "a"},

    {Question: "The Earth is shaped like a______", a: "Square", b: "Flat", c: "Sphere", d: "Triangle", answer: "c"},

    {Question: "The biggest planet is______", a: "Mars", b: "Jupiter", c: "Earth", d: "Venus", answer: "b"},

    {Question: "Computer brain is______", a: "Mouse", b: "Monitor", c: "Keyboard", d: "CPU", answer: "d"},

    {Question: "RAM stands for______", a: "Read At Memory", b: "Random Access Memory", c: "Run Access Machine", d: "Rapid Area Memory", answer: "b"},

    {Question: "Which device prints paper?______", a: "Scanner", b: "Printer", c: "Mouse", d: "CPU", answer: "b"},

    {Question: "A triangle has ______ sides", a: "2", b: "3", c: "4", d: "5", answer: "b"},

    {Question: "A square has ______ sides", a: "2", b: "3", c: "4", d: "6", answer: "c"},

    {Question: "The largest desert is______", a: "Sahara", b: "Arabian", c: "Gobi", d: "Thar", answer: "a"},

    {Question: "Which animal is known as king of the jungle?______", a: "Elephant", b: "Lion", c: "Tiger", d: "Jaguar", answer: "b"},

    {Question: "The first month of Islamic calendar is______", a: "Ramadan", b: "Muharram", c: "Safar", d: "Rabi-ul-Awwal", answer: "b"},

    {Question: "How many surahs in Quran?______", a: "100", b: "114", c: "120", d: "99", answer: "b"},

    {Question: "Shortest surah is______", a: "Ikhlas", b: "Kausar", c: "Falaq", d: "Nas", answer: "b"},

    {Question: "Longest surah is______", a: "Baqarah", b: "Nisa", c: "Aal-Imran", d: "Maidah", answer: "a"},

    {Question: "How many prayers daily?______", a: "3", b: "4", c: "5", d: "6", answer: "c"},

    {Question: "Zakat is ____ pillar of Islam", a: "1st", b: "2nd", c: "3rd", d: "4th", answer: "c"},

    {Question: "Eid-ul-Fitr comes after______", a: "Hajj", b: "Ramadan", c: "Muharram", d: "Rabi-ul-Awwal", answer: "b"},

    {Question: "Hajj is performed in month of______", a: "Muharram", b: "Safar", c: "Dhul Hijjah", d: "Ramadan", answer: "c"},

    {Question: "Which is the biggest river in the world?______", a: "Nile", b: "Amazon", c: "Indus", d: "Yangtze", answer: "a"},

    {Question: "Smallest continent is______", a: "Asia", b: "Australia", c: "Africa", d: "Europe", answer: "b"},

    {Question: "Which is the fastest bird?______", a: "Falcon", b: "Pigeon", c: "Crow", d: "Eagle", answer: "a"},

    {Question: "Computer input device is______", a: "Monitor", b: "Keyboard", c: "Printer", d: "Speaker", answer: "b"},

    {Question: "Monitor is an______ device", a: "Input", b: "Output", c: "Storage", d: "Memory", answer: "b"},

    {Question: "Which planet is called Red Planet?______", a: "Earth", b: "Venus", c: "Mars", d: "Jupiter", answer: "c"},

    {Question: "Which is the coldest place on Earth?______", a: "Antarctica", b: "Greenland", c: "Iceland", d: "Siberia", answer: "a"},

    {Question: "Who invented the telephone?______", a: "Edison", b: "Newton", c: "Bell", d: "Tesla", answer: "c"},

    {Question: "Earth has ______ moon(s)", a: "1", b: "2", c: "3", d: "4", answer: "a"},

    {Question: "Which is the largest organ of human body?______", a: "Heart", b: "Skin", c: "Liver", d: "Lungs", answer: "b"},

    {Question: "Blood is pumped by______", a: "Liver", b: "Brain", c: "Heart", d: "Lungs", answer: "c"},

    {Question: "Water freezes at______°C", a: "50", b: "0", c: "100", d: "25", answer: "b"},

    {Question: "Water boils at______°C", a: "50", b: "25", c: "0", d: "100", answer: "d"},

    {Question: "Pakistan shares border with______", a: "Turkey", b: "China", c: "Japan", d: "Indonesia", answer: "b"},

    {Question: "Who wrote Pakistan’s national anthem?______", a: "Hafeez Jalandhari", b: "Allama Iqbal", c: "Faiz", d: "Josh", answer: "a"},

    {Question: "Google was founded in______", a: "1998", b: "2000", c: "1990", d: "2004", answer: "a"},

    {Question: "Facebook was created by______", a: "Bill Gates", b: "Mark Zuckerberg", c: "Steve Jobs", d: "Larry Page", answer: "b"},

    {Question: "Which is a programming language?______", a: "HTML", b: "C++", c: "CSS", d: "HTTP", answer: "b"},

    {Question: "HTML stands for______", a: "Hyper Text Markup Language", b: "Home Tool Markup Language", c: "Hyperlink Model Language", d: "None", answer: "a"},

    {Question: "CSS is used for______", a: "Structure", b: "Design", c: "Database", d: "Logic", answer: "b"},

    {Question: "JS stands for______", a: "JavaSystem", b: "JavaStone", c: "JavaScript", d: "JustScript", answer: "c"},

    {Question: "CPU speed measured in______", a: "MB", b: "GHz", c: "GB", d: "TB", answer: "b"},

    {Question: "Keyboard has______ function keys", a: "10", b: "12", c: "15", d: "8", answer: "b"},

    {Question: "Which is not a browser?______", a: "Chrome", b: "Firefox", c: "Opera", d: "Android", answer: "d"},

    {Question: "RAM is______", a: "Permanent", b: "Temporary", c: "External", d: "Optical", answer: "b"},

    {Question: "ROM is______", a: "Temporary", b: "Permanent", c: "External", d: "Cache", answer: "b"},

    {Question: "Mouse is an______ device", a: "Input", b: "Output", c: "Memory", d: "Storage", answer: "a"},

    {Question: "Earth revolves around______", a: "Moon", b: "Mars", c: "Sun", d: "Jupiter", answer: "c"},

    {Question: "We breathe in______", a: "CO₂", b: "Nitrogen", c: "Oxygen", d: "Hydrogen", answer: "c"},

    {Question: "Human body has ______ bones", a: "100", b: "206", c: "300", d: "150", answer: "b"},

    {Question: "Number of days in leap year______", a: "364", b: "365", c: "366", d: "360", answer: "c"},

    {Question: "Which is an odd number?______", a: "6", b: "8", c: "10", d: "7", answer: "d"},

    {Question: "Surah Ikhlas has ______ ayat", a: "4", b: "3", c: "5", d: "6", answer: "a"},

    {Question: "How many Kalimas in Islam?______", a: "5", b: "6", c: "7", d: "3", answer: "b"},

    {Question: "First Islamic month is______", a: "Shawwal", b: "Muharram", c: "Safar", d: "Rajab", answer: "b"},

    {Question: "Roza becomes fard in age of______", a: "5", b: "7", c: "Puberty", d: "60", answer: "c"},

    {Question: "Namaz is fard ______ times a day", a: "3", b: "4", c: "5", d: "6", answer: "c"},

    {Question: "Prophet Muhammad ﷺ was born in______", a: "Madina", b: "Makkah", c: "Taif", d: "Jerusalem", answer: "b"},

    {Question: "Pakistan flag has ______ colors", a: "2", b: "3", c: "4", d: "1", answer: "a"},

    {Question: "Largest province of Pakistan (area)______", a: "Sindh", b: "Punjab", c: "Balochistan", d: "KPK", answer: "c"},

    {Question: "Smallest province (area)______", a: "Sindh", b: "Punjab", c: "Balochistan", d: "KPK", answer: "a"},

    {Question: "Pakistan national sport______", a: "Hockey", b: "Cricket", c: "Football", d: "Tennis", answer: "a"},

    {Question: "Ramadan is the ______ pillar of Islam", a: "1st", b: "2nd", c: "3rd", d: "4th", answer: "d"},

    {Question: "Prophet Nuh built the______", a: "Masjid", b: "Ark", c: "House", d: "Well", answer: "b"},

    {Question: "Which animal gives us milk?______", a: "Goat", b: "Lion", c: "Wolf", d: "Snake", answer: "a"},

    {Question: "Which sense organ helps us see?______", a: "Ear", b: "Nose", c: "Eye", d: "Skin", answer: "c"},

    {Question: "Which is the smallest prime number?______", a: "1", b: "2", c: "3", d: "5", answer: "b"},

    {Question: "Which device stores data?______", a: "Monitor", b: "Hard Disk", c: "Keyboard", d: "Mouse", answer: "b"},

    {Question: "Mosquito has ______ legs", a: "2", b: "4", c: "6", d: "8", answer: "c"},

    {Question: "Spider has ______ legs", a: "4", b: "6", c: "8", d: "10", answer: "c"},

    {Question: "Which metal is liquid at room temp?______", a: "Iron", b: "Gold", c: "Mercury", d: "Silver", answer: "c"},

    {Question: "Urdu was developed in______", a: "Delhi", b: "Lahore", c: "Karachi", d: "Hyderabad", answer: "a"},

    {Question: "Which Surah is called Heart of Quran?______", a: "Ikhlas", b: "Yaseen", c: "Rahman", d: "Mulk", answer: "b"},

    {Question: "Surah Fatiha has ______ ayat", a: "7", b: "5", c: "6", d: "8", answer: "a"}
];



let selectOption = false

let totalQuestions = 5

let indx = 0

let userScore = 0

let answer = false
function displayHandler(indx) {


Question.innerText = QstnArray[indx].Question
a.innerText = QstnArray[indx].a
b.innerText = QstnArray[indx].b
c.innerText = QstnArray[indx].c
d.innerText = QstnArray[indx].d

quizNum.innerHTML = `<h1>${++indx}</h1>`



winnerBox.style.display = "none"
loserBox.style.display = "none"
scoreContainer.style.display = "none"

}

displayHandler(indx)




a.addEventListener("click" , () => {



a.classList.add("active")
b.classList.remove("active")
c.classList.remove("active")
d.classList.remove("active")

if(QstnArray[indx].answer == "a"){
    answer = true
    ++userScore
    selectOption = true
    
}else{
    answer = false
    selectOption = true
}

})
b.addEventListener("click" , () => {
a.classList.remove("active")
b.classList.add("active")
c.classList.remove("active")
d.classList.remove("active")

if(QstnArray[indx].answer == "b"){
    answer = true
    ++userScore
    selectOption = true
}else{
    answer = false
    selectOption = true
}
})
c.addEventListener("click" , () => {
a.classList.remove("active")
b.classList.remove("active")
c.classList.add("active")
d.classList.remove("active")

if(QstnArray[indx].answer == "c"){
   answer = true
   ++userScore
   selectOption = true
}else{
    answer = false
    selectOption = true
}
})
d.addEventListener("click" , () => {
a.classList.remove("active")
b.classList.remove("active")
c.classList.remove("active")
d.classList.add("active")

if(QstnArray[indx].answer == "d"){
    answer = true
    ++userScore
    selectOption = true
}else{
    answer = false
    selectOption = true
}
})
btnNext.addEventListener("click" , ()=>{

    if(selectOption == true){
selectOption = false
}
else{
   return alert("select any one of options")
    
}
    indx++
    displayHandler(indx)
console.log(answer)
a.classList.remove("active")
b.classList.remove("active")
c.classList.remove("active")
d.classList.remove("active")

let userPercentage = 0;

if(indx == 5){
    hideWarning()
    if(userScore >= 3){
winnerBox.style.display = "block"
loserBox.style.display = "none"
MainBox.style.display = "none"
scoreContainer.style.display = "block"
userPercentage = Math.ceil((userScore/totalQuestions)*100)
totalScore.innerText = userPercentage
if(usersArr[currentUserIndex].progress.length <= 3){
    usersArr[currentUserIndex].progress.push(userPercentage)
    
}else{
usersArr[currentUserIndex].progress[2] += userPercentage
}

localStorage.setItem("user1" , JSON.stringify(usersArr))
console.log(userPercentage)
    } else {
winnerBox.style.display = "none"
loserBox.style.display = "block"
MainBox.style.display = "none"
scoreContainer.style.display = "block"
userPercentage = Math.ceil((userScore/totalQuestions)*100)
totalScore.innerText = userPercentage
usersArr[currentUserIndex].progress.push(userPercentage)
localStorage.setItem("user1" , JSON.stringify(usersArr))
console.log(userPercentage)
    }
}
    
})



let warningCount = 0;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    warningCount++;

    if (warningCount === 1) {
      showWarning("⚠ You changed the tab! This is your LAST CHANCE. If you switch again, the quiz will be submitted.");
    }

    if (warningCount >= 2) {
        console.log("hi")
        usersArr[currentUserIndex].attemps += 1;
        usersArr[currentUserIndex].progress.push(Math.ceil((userScore/totalQuestions)*100) + "%")
        localStorage.setItem("user1" , JSON.stringify(usersArr))
      window.location = "dashboard.html";
  }

}});

function showWarning(msg) {
  const bar = document.getElementById("tabWarning");
  bar.innerText = msg;
  bar.style.display = "block";
}

function hideWarning() {
    const bar = document.getElementById("tabWarning");
     bar.style.display = "none";
     warningCount = 0
}
    