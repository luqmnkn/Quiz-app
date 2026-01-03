let percentage = document.querySelector(".percentage");
let progressBar = document.getElementById("progressBar");
let scores = document.querySelectorAll(".score");
const firstQuizLock = document.querySelector("#firstQuizLock")
const secondQuizLock = document.querySelector("#secondQuizLock")
const thirdQuizLock = document.querySelector("#thirdQuizLock")
const passFailBox = document.querySelectorAll(".passFailBox")
const userName = document.querySelector(".name")
const logout = document.querySelector(".logout")
const profilePic = document.querySelector(".profilePic")


let usersArr = JSON.parse(localStorage.getItem("user1"))

let currentUser = JSON.parse(localStorage.getItem("currentUser"))
if(!currentUser){
  window.location = "index.html"
}

let currentUserIndex = usersArr.findIndex((elm)=>{
    return elm.email == currentUser.email
})



userName.innerText += `${currentUser.firstName} ${currentUser.SecondName}`
profilePic.innerHTML = `<i class="fa-solid fa-user"></i>`



currentUser.progress.forEach((score ,indx) => {
if(typeof(score) == "number"){
    if(score >= 70){
      passFailBox[indx].innerText = "pass"
      passFailBox[indx].style.backgroundColor = "#4aa84a" // Green for pass 
  } else if (score <= 69 ){
    passFailBox[indx].innerText = "fail"
      passFailBox[indx].style.backgroundColor = "#dc3545" // Red for fail
      console.log(passFailBox)
  }}else if (typeof(score) != "number"){
    scores[indx].innerText = ""
  }



})

scores.forEach((score , indx)=>{
  if(currentUser.progress[indx] == undefined){
    scores[indx].innerText = 0
  }else{
    scores[indx].innerText = currentUser.progress[indx]

  }
})




  if(currentUser.progress){
    firstQuizLock.classList.add("fa-lock-open")
  }

  
  if(currentUser.progress[0] >= 70){
    secondQuizLock.classList.add("fa-lock-open")
    secondQuizLock.parentElement.setAttribute("onclick", "startQuiz('CSS')");

  }else{
    secondQuizLock.classList.add("fa-lock")
    secondQuizLock.style.color = "#ffffff" 
    secondQuizLock.parentElement.style.color = "#ffffff" 
    secondQuizLock.parentElement.style.backgroundColor = "transparent" 

  }

   
  if(currentUser.progress[1] >= 70){
    thirdQuizLock.parentElement.setAttribute("onclick", "startQuiz('JavaScript')");
    thirdQuizLock.classList.add("fa-lock-open")
  }else{
    thirdQuizLock.classList.add("fa-lock")
    thirdQuizLock.style.color = "#ffffff" 
    thirdQuizLock.parentElement.style.color = "#ffffff" 
    thirdQuizLock.parentElement.style.backgroundColor = "transparent" 
  }



function userLogout(){
  localStorage.removeItem("currentUser")
  window.location = "login.html"
}

  //QuizRulesAlert

function startQuiz(quizName) {
  
  alert(
    "📢 QUIZ RULES:\n\n" +
    "1. You have 2 chances if you switch tabs.\n" +
    "2. Do not refresh the page.\n" +
    "3. Your answers will automatically be saved.\n" +
    "4. Do not minimize or close your browser.\n\n" +
    "Click OK to start the quiz."
  )
  currentUser.Quiz = quizName
  localStorage.setItem("currentUser", JSON.stringify(currentUser))
  window.location = "quizPage.html"
};




const arr = currentUser.progress

const totalMarks = arr.reduce((sum, value) => sum + value, 0);

// console.log(totalMarks);



if(usersArr[currentUserIndex].progress.length == 0){
  percentage.innerText = "0%"
}else{
percentage.innerText = Math.ceil(totalMarks /((arr.length)*100) * 100 ) + "%"
progressBar.style.width = totalMarks /((arr.length)*100) * 100 + "%"
}



//Result


