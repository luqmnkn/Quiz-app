const loginPassword = document.querySelector("#loginPassword");
const loginEmail = document.querySelector("#loginEmail")
const loginBtn = document.querySelector("#loginBtn")




let loginUsers = JSON.parse(localStorage.getItem("user1")) || [];

let thisUser = JSON.parse(localStorage.getItem("currentUser"))

loginBtn.addEventListener("click" , (e) => {

    e.preventDefault

    let checkemail = loginUsers.find((user) => {
       return user.email === loginEmail.value
    })


    let checkpassword = loginUsers.find((user) => {
        return user.password === loginPassword.value
    })

    if(checkpassword && checkemail !== undefined){
        localStorage.setItem("currentUser" ,JSON.stringify(checkemail))
        console.log("user exist")
        window.location = "dashboard.html"
    } else if (checkpassword || checkemail== undefined){
        alert("user not exist Please sign up")
        
    }



})








