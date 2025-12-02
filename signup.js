let Name = document.querySelector("#firstName")
let secondName = document.querySelector("#secondName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")
let text = document.querySelector("#text")
let btn = document.querySelector("button")






let usersArr = JSON.parse(localStorage.getItem("user1"))  || [];







btn.addEventListener("click" , (e) => {
e.preventDefault

    let objUser = {
        "firstName" : Name.value,
        "SecondName" : secondName.value,
        "email" : email.value,
        "password" : password.value,
        "attemps" :0,
        "progress" : []
    }



if(password.value !== confirmPassword.value){
   return alert("your password doesn't match")
}


let checkEmail = usersArr.filter((user) => {
    return user.email === objUser.email
})

console.log(checkEmail , "exist email" , checkEmail.length)


if(checkEmail.length >= 1){
   return alert("user's email exist ")
}else{
    usersArr.push(objUser)
}

    localStorage.setItem("user1" ,JSON.stringify(usersArr))

    window.location = "login.html"
})

