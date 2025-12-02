let percentage = document.querySelector(".percentage");
let progressBar = document.getElementById("progressBar");
let scores = document.querySelectorAll(".score");
const firstQuizLock = document.querySelector("#firstQuizLock")
const secondQuizLock = document.querySelector("#secondQuizLock")
const thirdQuizLock = document.querySelector("#thirdQuizLock")
const passFailBox = document.querySelectorAll(".passFailBox")





let totalMarks = 0;





const userName = document.querySelector(".name")


let usersArr = JSON.parse(localStorage.getItem("user1"))

let currentUserEmail = JSON.parse(localStorage.getItem("currentUserEmail"))

if(!currentUserEmail){
  window.location = "signup.html"
}
       
userName.innerText += `${currentUserEmail.firstName} ${currentUserEmail.SecondName}`
    
let thisUser = JSON.parse(localStorage.getItem("currentUserEmail"))

currentUserIndex = usersArr.findIndex((indx)=>{
    return indx.email == thisUser.email
})



usersArr[currentUserIndex].progress.forEach((score ,indx) => {
if(typeof(score) == "number"){
    if(score >= 70){
      passFailBox[indx].innerText = "pass"
      passFailBox[indx].style.backgroundColor = "#4aa84a"
    console.log("pass")
  }else if (score <= 69 ){
    passFailBox[indx].innerText = "fail"
      passFailBox[indx].style.backgroundColor = "red"
    console.log("fail")
  }}else{
    
  }



scores[indx].innerText += score
})

// scores.forEach((elm, index) => {

  



//   // elm.innerText = `Score: ${usersArr[currentUserIndex].progress[index]}`
// })






  if(usersArr[currentUserIndex].progress){
    firstQuizLock.classList.add("fa-lock-open")
  }

  
  if(usersArr[currentUserIndex].progress[1] >= 70){
    secondQuizLock.classList.add("fa-lock-open")
    secondQuizLock.setAttribute("onclick", "startQuiz()");

  }else{
    secondQuizLock.classList.add("fa-lock")
    secondQuizLock.style.color = "#ea580c"
    secondQuizLock.parentElement.style.color = "black"
    secondQuizLock.parentElement.style.backgroundColor = "#fce4c7ff"

  }

   
  if(usersArr[currentUserIndex].progress[2] >= 70){
    thirdQuizLock.setAttribute("onclick", "startQuiz()");
    thirdQuizLock.classList.add("fa-lock-open")
  }else{
    thirdQuizLock.classList.add("fa-lock")
    thirdQuizLock.style.color = "#ea580c"
    thirdQuizLock.parentElement.style.color = "black"
    thirdQuizLock.parentElement.style.backgroundColor = "#fce4c7ff"
  }




  //QuizRulesAlert

function startQuiz() {
  window.location = "index.html"
  alert(
    "📢 QUIZ RULES:\n\n" +
    "1. You have 2 chances if you switch tabs.\n" +
    "2. Do not refresh the page.\n" +
    "3. Your answers will automatically be saved.\n" +
    "4. Do not minimize or close your browser.\n\n" +
    "Click OK to start the quiz."
  )

};


//ProgressBar


// if(usersArr[currentUserIndex].progress.length === 0){
//   percentage.innerText = "0%"
// }else{
// percentage.innerText = totalMarks /((usersArr[currentUserIndex].progress.length)*100) * 100
// }
// progressBar.style.width = percentage.innerText



//Result



