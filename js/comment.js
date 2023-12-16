const QUESTIONS = [
    "What is the best part you like in this site?",
    "What color of cat would you like the most?",
    "What would you do if you own a cat?",
    "Which part of our web site could be improved?",
    "Will you come back in the future?"
]

const ANSWER = [
    {btnA: "GRAPHIC", btnB: "STYLE", btnC: "WORDS", btnD: "VIDEO"},
    {btnA: "WHITE", btnB: "ORANGE", btnC: "BLACK", btnD: "LOCAL BROWN"},
    {btnA: "PLAYING WITH IT ALL DAY", btnB: "FEEDING IT TONS OF FOODS", btnC: "SLEEPING WITH IT", btnD: "TAKING A LOT OF PHOTOS"},
    {btnA: "ADD MORE VIDEOS", btnB: "ADD MORE PHOTOS ", btnC: "BE SERIOUS PLEASE", btnD: "PUT MORE CAT IN..."},
    {btnA: "YES", btnB: "YES", btnC: "YES", btnD: "YES"}
]

const CHOICE = []

let container = document.querySelector('.comment-container')
let question = document.createElement('p')
question.classList.add('show-area')

//let input = document.querySelector('input')

let buttonList = document.querySelectorAll('.block')

container.append(question)

let i = 0

const changeButtonLabel = (opt) =>{
    if (i < QUESTIONS.length){
        buttonList[0].textContent = ANSWER[opt].btnA
        buttonList[1].textContent = ANSWER[opt].btnB
        buttonList[2].textContent = ANSWER[opt].btnC
        buttonList[3].textContent = ANSWER[opt].btnD
    }
}

changeButtonLabel(i)
question.textContent = QUESTIONS[i]

buttonList.forEach((button) => {
    button.addEventListener('click', () =>{
        if (i < QUESTIONS.length){
            console.log("testing")
            i++
            console.log(i)
            CHOICE.push(button.textContent)
            if (i != QUESTIONS.length){
                question.textContent = QUESTIONS[i]
                changeButtonLabel(i)
            }else{
                console.log("finished")
                let welcome = document.querySelector('h2')
                welcome.textContent = 'THANK YOU!'
                document.getElementsByClassName('buttons')[0].style.visibility = 'hidden'
                console.table(CHOICE)
                question.innerHTML = `You think the best part is <span style="color:Tomato; display: inline-block;">${CHOICE[0]}</span>. 
                The favourite color of cat you like is <span style="color:Green; display: inline-block;">${CHOICE[1]}</span>.
                And seriously you would like to <span style="color:Blue; display: inline-block;">${CHOICE[2]}</span>!?
                I don't think it's necessary but I will look into <span style="color:Tomato; display: inline-block;">${CHOICE[3]}</span> 
                and THANKS for the big <span style="color:Red; display: inline-block;">${CHOICE[4]}</span>!`
            }
        }
    })
})