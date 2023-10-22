// Variáveis

const cookie = document.querySelector("#cookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const tryAgain = document.querySelector("#tryAgain")
let luckyNote = document.querySelector("#luckyNote")
let randomIndex = Math.floor(Math.random() * 7)

let phrases = [
    "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
    "O conhecimento é a única virtude e a ignorância é o único vício.",
    "O nosso primeiro e último amor é o amor-próprio.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Espere pelo mais sábio dos conselhos: o tempo.",
    "São os nossos amigos que nos ensinam as mais valiosas lições.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "A sorte favorece a mente bem preparada."
]

// Eventos

cookie.addEventListener('click', openTheCookie)
tryAgain.addEventListener('click', changeScreen)

// Funções

function changeScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function openTheCookie() {
    changeScreen()

    luckyNote.textContent = phrases[randomIndex];

    changePhrase()
}

function changePhrase() {
    randomIndex = Math.floor(Math.random() * 8)
    return
}


