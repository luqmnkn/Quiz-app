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
const userInfo = document.querySelector(".user-info")
const QuizName = document.querySelector(".quizName")
const timerBox = document.querySelector(".timer");
const timerText = document.querySelector(".timer p:last-child");

//Users Data
let usersArr = JSON.parse(localStorage.getItem("user1"))


//Current User
let currentUser = JSON.parse(localStorage.getItem("currentUser"))
if (!currentUser) {
    window.location = "index.html"
}

//Current User Index
let currentUserIndex = usersArr.findIndex((indx) => {
    return indx.email == currentUser.email
})


//user information
userInfo.innerHTML = `<p><strong>Name:</strong> ${currentUser.firstName} ${currentUser.SecondName}</p>
        <p><strong>Quiz Name:</strong> ${currentUser.Quiz}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>`


//Questions Array        
const QstnArray = [

    { Question: "HTML stands for ________", a: "Hyper Text Markup Language", b: "High Text Machine Language", c: "Hyper Tool Markup Language", d: "Hyperlinks Text Mark Language", answer: "a" },

    { Question: "Which tag is used to create a hyperlink?", a: "<link>", b: "<a>", c: "<href>", d: "<url>", answer: "b" },

    { Question: "Which tag is used to insert an image?", a: "<image>", b: "<img>", c: "<src>", d: "<picture>", answer: "b" },

    { Question: "Which attribute provides alternate text for image?", a: "title", b: "alt", c: "src", d: "href", answer: "b" },

    { Question: "HTML is a ______ language.", a: "Programming", b: "Scripting", c: "Markup", d: "Styling", answer: "c" },

    { Question: "Which tag creates an ordered list?", a: "<ul>", b: "<ol>", c: "<li>", d: "<list>", answer: "b" },

    { Question: "Which tag is used for the largest heading?", a: "<h6>", b: "<h4>", c: "<h2>", d: "<h1>", answer: "d" },

    { Question: "Which tag is used to create a form?", a: "<input>", b: "<form>", c: "<field>", d: "<submit>", answer: "b" },

    { Question: "Which input type hides the text?", a: "text", b: "password", c: "email", d: "hidden", answer: "b" },

    { Question: "Which tag is used for table row?", a: "<td>", b: "<th>", c: "<tr>", d: "<table>", answer: "c" },

    { Question: "Which tag defines table header?", a: "<td>", b: "<tr>", c: "<thead>", d: "<th>", answer: "d" },

    { Question: "Which attribute is used to open link in new tab?", a: "href", b: "target", c: "open", d: "new", answer: "b" },

    { Question: "Which tag is semantic?", a: "<div>", b: "<span>", c: "<section>", d: "<b>", answer: "c" },

    { Question: "Which tag is used to play video?", a: "<media>", b: "<movie>", c: "<video>", d: "<play>", answer: "c" },

    { Question: "Which tag is used to play audio?", a: "<sound>", b: "<audio>", c: "<music>", d: "<mp3>", answer: "b" },

    { Question: "Which attribute is mandatory for <img>?", a: "alt", b: "width", c: "height", d: "src", answer: "d" },

    { Question: "Which tag is used to create checkbox?", a: "<check>", b: "<input>", c: "<box>", d: "<option>", answer: "b" },

    { Question: "Which tag is used for dropdown?", a: "<input>", b: "<list>", c: "<select>", d: "<option>", answer: "c" },

    { Question: "HTML comments are written as?", a: "// comment", b: "/* */", c: "<!-- -->", d: "#", answer: "c" },

    { Question: "Which tag is used to embed another webpage?", a: "<iframe>", b: "<embed>", c: "<object>", d: "<frame>", answer: "a" },

    { Question: "CSS stands for ________", a: "Creative Style Sheets", b: "Cascading Style Sheets", c: "Computer Style Sheets", d: "Colorful Style Sheets", answer: "b" },

    { Question: "Which property changes text color?", a: "font-color", b: "color", c: "text-color", d: "fgcolor", answer: "b" },

    { Question: "Which property changes background color?", a: "bgcolor", b: "background", c: "background-color", d: "color", answer: "c" },

    { Question: "Which property controls text size?", a: "font-size", b: "text-size", c: "size", d: "font-style", answer: "a" },

    { Question: "Which unit is relative?", a: "px", b: "cm", c: "%", d: "mm", answer: "c" },

    { Question: "Which property makes text bold?", a: "font-style", b: "font-weight", c: "bold", d: "text-weight", answer: "b" },

    { Question: "Which property aligns text?", a: "align", b: "text-align", c: "position", d: "float", answer: "b" },

    { Question: "Which property hides overflow content?", a: "display", b: "visibility", c: "overflow", d: "hidden", answer: "c" },

    { Question: "Which display value hides element?", a: "block", b: "none", c: "inline", d: "flex", answer: "b" },

    { Question: "Which property adds space inside element?", a: "margin", b: "border", c: "padding", d: "gap", answer: "c" },

    { Question: "Which property adds space outside element?", a: "padding", b: "margin", c: "gap", d: "space", answer: "b" },

    { Question: "Which position value is default?", a: "relative", b: "absolute", c: "fixed", d: "static", answer: "d" },

    { Question: "Which property makes element flexible?", a: "grid", b: "flex", c: "display", d: "box", answer: "c" },

    { Question: "Which display creates flexbox?", a: "block", b: "inline", c: "grid", d: "flex", answer: "d" },

    { Question: "Which property changes font?", a: "font-family", b: "font-style", c: "font-weight", d: "font-size", answer: "a" },

    { Question: "Which pseudo-class selects hover state?", a: ":active", b: ":focus", c: ":hover", d: ":visited", answer: "c" },

    { Question: "Which selector targets class?", a: "#", b: ".", c: "*", d: "&", answer: "b" },

    { Question: "Which selector targets id?", a: ".", b: "*", c: "#", d: "@", answer: "c" },

    { Question: "Which property rounds corners?", a: "corner", b: "border-style", c: "border-radius", d: "radius", answer: "c" },

    { Question: "Which property adds shadow?", a: "shadow", b: "box-shadow", c: "text-shadow", d: "border-shadow", answer: "b" },

    { Question: "JavaScript is a ______ language.", a: "Markup", b: "Styling", c: "Programming", d: "Database", answer: "c" },

    { Question: "Which keyword declares variable?", a: "var", b: "let", c: "const", d: "All", answer: "d" },

    { Question: "Which symbol is used for comments?", a: "#", b: "//", c: "<!-- -->", d: "**", answer: "b" },

    { Question: "Which method shows alert?", a: "alert()", b: "msg()", c: "popup()", d: "notify()", answer: "a" },

    { Question: "Which operator compares value & type?", a: "==", b: "=", c: "===", d: "!=", answer: "c" },

    { Question: "Which data type is true/false?", a: "string", b: "number", c: "boolean", d: "object", answer: "c" },

    { Question: "Which function converts string to number?", a: "parseInt()", b: "Number()", c: "Both", d: "String()", answer: "c" },

    { Question: "Which loop runs fixed times?", a: "while", b: "for", c: "do while", d: "foreach", answer: "b" },

    { Question: "Which keyword stops loop?", a: "stop", b: "end", c: "break", d: "exit", answer: "c" },

    { Question: "Which keyword skips iteration?", a: "skip", b: "continue", c: "break", d: "pass", answer: "b" },

    { Question: "Which array method adds element at end?", a: "push()", b: "pop()", c: "shift()", d: "unshift()", answer: "a" },

    { Question: "Which method removes last element?", a: "push()", b: "shift()", c: "pop()", d: "remove()", answer: "c" },

    { Question: "Which method selects element by id?", a: "query()", b: "getElement()", c: "getElementById()", d: "select()", answer: "c" },

    { Question: "Which event runs on button click?", a: "hover", b: "submit", c: "onclick", d: "onchange", answer: "c" },

    { Question: "Which object accesses HTML?", a: "BOM", b: "DOM", c: "Window", d: "Screen", answer: "b" },

    { Question: "Which keyword defines function?", a: "method", b: "function", c: "def", d: "fn", answer: "b" },

    { Question: "Which keyword returns value?", a: "break", b: "stop", c: "return", d: "send", answer: "c" },

    { Question: "Which value means no value?", a: "null", b: "undefined", c: "Both", d: "false", answer: "c" },

    { Question: "Which method converts object to JSON?", a: "JSON.parse()", b: "JSON.stringify()", c: "toJSON()", d: "convert()", answer: "b" },

    { Question: "Which storage saves data permanently?", a: "sessionStorage", b: "cookie", c: "localStorage", d: "cache", answer: "c" }

];


let selectOption = false

let totalQuestions = 15;

let index;
let qstns;
let qstnN0 = 0
let currentUserProgressIndex;
if (currentUser.Quiz == "HTML") {
    currentUserProgressIndex = 0
    index = 0
    qstns = 15
} else if (currentUser.Quiz == "CSS") {
    currentUserProgressIndex = 1
    index = 20
    qstns = 15
} else if (currentUser.Quiz == "JavaScript") {
    currentUserProgressIndex = 2
    index = 40
    qstns = 15
}

let userScore = 0

let answer = false
function displayHandler(index) {

    Question.innerText = QstnArray[index].Question
    a.innerText = QstnArray[index].a
    b.innerText = QstnArray[index].b
    c.innerText = QstnArray[index].c
    d.innerText = QstnArray[index].d

    quizNum.innerHTML = `<h1>${++qstnN0}</h1>`
    winnerBox.style.display = "none"
    loserBox.style.display = "none"
}

displayHandler(index)




a.addEventListener("click", () => {



    a.classList.add("active")
    b.classList.remove("active")
    c.classList.remove("active")
    d.classList.remove("active")

    if (QstnArray[index].answer == "a") {
        answer = true
        ++userScore
        selectOption = true

    } else {
        answer = false
        selectOption = true
    }

})
b.addEventListener("click", () => {
    a.classList.remove("active")
    b.classList.add("active")
    c.classList.remove("active")
    d.classList.remove("active")

    if (QstnArray[index].answer == "b") {
        answer = true
        ++userScore
        selectOption = true
    } else {
        answer = false
        selectOption = true
    }
})
c.addEventListener("click", () => {
    a.classList.remove("active")
    b.classList.remove("active")
    c.classList.add("active")
    d.classList.remove("active")

    if (QstnArray[index].answer == "c") {
        answer = true
        ++userScore
        selectOption = true
    } else {
        answer = false
        selectOption = true
    }
})
d.addEventListener("click", () => {
    a.classList.remove("active")
    b.classList.remove("active")
    c.classList.remove("active")
    d.classList.add("active")

    if (QstnArray[index].answer == "d") {
        answer = true
        ++userScore
        selectOption = true
    } else {
        answer = false
        selectOption = true
    }
})



let userPercentage;
function pushdata() {
    currentUser.progress[currentUserProgressIndex] = userPercentage

    usersArr[currentUserIndex] = currentUser
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    localStorage.setItem("user1", JSON.stringify(usersArr))
}
btnNext.addEventListener("click", () => {

    if (selectOption == true) {
        selectOption = false
    }
    else {
        return alert("select any one of options")

    }
    index++
    displayHandler(index)
    a.classList.remove("active")
    b.classList.remove("active")
    c.classList.remove("active")
    d.classList.remove("active")
    if (qstnN0 > 15) {

        hideWarning()
        userPercentage = Math.ceil((userScore / totalQuestions) * 100)
        if (userScore >= 10) {
            pushdata()
            winnerBox.style.display = "block"
            userInfo.parentElement.style.display = "none"
            timerBox.parentElement.style.display = "none"
            winnerBox.innerHTML = `<div style="font-size: 60px;">🏆</div>
        <span>Victory!</span>
        <div class="score">
        <h1 class="totalScore">${userPercentage}</h1>
    </div>
        <a href="dashboard.html" class="dashboard-btn">Go to Dashboard</a>`
            loserBox.style.display = "none"
            MainBox.style.display = "none"

        } else {
            userInfo.parentElement.style.display = "none"
            timerBox.parentElement.style.display = "none"
            loserBox.style.display = "block"
            loserBox.innerHTML = `<div style="font-size: 60px;">🙁</div>
        <span>Try Again!</span>
        <div class="score">
        <h1 class="totalScore">${userPercentage}</h1>
    </div>
        <a href="dashboard.html" class="dashboard-btn">Go to Dashboard</a>`
            winnerBox.style.display = "none"
            MainBox.style.display = "none"
            userPercentage = Math.ceil((userScore / totalQuestions) * 100)
            pushdata()

        }
    }

})


//timerHandler


let time = 300;



const timer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerText.innerText = `${minutes}:${seconds}`;


    if (time <= 60) {

        timerBox.parentElement.classList.add("danger");
        timerBox.style.color = "white"
        timerText.classList.add("blink");
    }

    if (time <= 0) {
        clearInterval(timer);
        alert("Time Up!");
        currentUser.attemps += 1;
        pushdata()

        window.location = "dashboard.html";
    }

    time--;
}, 1000);

//tabChangerHandler

function showWarning(msg) {
    const bar = document.getElementById("tabWarning");
    bar.innerText = msg;
    bar.parentElement.style.display = "block";
}

function hideWarning() {
    const bar = document.getElementById("tabWarning");
    bar.style.display = "none";
    warningCount = 0
}

localStorage.setItem("check", JSON.stringify())

let warningCount = 0;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        warningCount++;

        if (warningCount === 1) {
            showWarning("⚠ You changed the tab! This is your LAST CHANCE. If you switch again, the quiz will be submitted.");
        }

        if (warningCount >= 2) {
            currentUser.attemps += 1;
            userPercentage = Math.ceil((userScore / totalQuestions) * 100)
            console.log(userPercentage)
            pushdata()

            window.location = "dashboard.html";
        }

    }
});


