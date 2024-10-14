// Слайдер преподавателей
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let slides = document.querySelectorAll(".instructors-item")
let shiftIndex = slides[0].offsetWidth + Number(window.getComputedStyle(slides[0], null).getPropertyValue("margin-right").slice(0, -2))
let slidesCount = 0
// Функция отображения слайдов
function slidesShow() {
    if (slidesCount < 0) {
        slidesCount = 3
    } else if (slidesCount > 3) {
        slidesCount = 0
    }
    slides.forEach(element => {
        element.style.cssText = `transform: translateX(-${slidesCount * shiftIndex}px)`
    })
}
// Функция изменения слайдов
function slidesChange(n) {
    slidesCount += n
    slidesShow()
}
prev.addEventListener("click", () => {
    slidesChange(-1)
})
next.addEventListener("click", () => {
    slidesChange(1)
})
slidesShow()
// Выпадающий список
let dropdownButton = document.querySelector(".dropdown-button")
let dropdownContent = document.querySelector(".dropdown-content")
let dropdownBar = document.querySelector(".dropdown-button-image>img:last-child")
let dropdownShift = dropdownContent.offsetHeight
let dropdownActive = false
// Функция переключения выпадающего списка
function dropdownCheck() {
    if (dropdownActive == false) {
        dropdownContent.style.cssText = `transform: translateY(-105%); margin-bottom: -${dropdownShift}px;`
        dropdownBar.style.cssText = "transform: rotate(90deg);"
        dropdownButton.style.cssText = "margin-bottom: 0px;"
        dropdownActive = true
    } else if (dropdownActive == true) {
        dropdownContent.style.cssText = "transform: translateY(0%);"
        dropdownBar.style.cssText = "transform: rotate(0deg);"
        if (dropdownShift < 422) {
            dropdownButton.style.cssText = "margin-bottom: 24px;"
        } else {
            dropdownButton.style.cssText = "margin-bottom: 12px;"
        }
        dropdownActive = false
    }
}
// Отследивание нажатия кнопки выпадающего списка
dropdownButton.addEventListener("click", dropdownCheck)
dropdownCheck()
// Настоящие блоки направлений
let items = document.querySelectorAll(".directions-item")
let itemImages = document.querySelectorAll(".directions-item>div>img")
// Тригеры блоков направлений, позволяющие избежать наложение их изображений и неудобный выбор направления 
let itemTriggers = document.querySelectorAll(".directions-item-trigger")
// Функция изменения состояния при наведении
function stateChange() {
    for (let i = 0; i < 4; i++) {
        itemTriggers[i].addEventListener("mouseover", () => {
            items[i].style.cssText = "background: #7027e2; border-radius: 10px; border: none;"
            itemImages[i].style.cssText = "opacity: 1;"
            console.log[1]
        })
        itemTriggers[i].addEventListener("mouseout", () => {
            items[i].style.cssText = ""
            itemImages[i].style.cssText = ""
        })
    }
}
// Вызов функции для устройств, где возможно наведение 
if (window.innerWidth > 776) {
    stateChange()
}
// Изменение содержимого текста блока при определённом разрешении экрана
if (window.innerWidth <= 1032) {
    document.querySelector(".header-item:first-child>div>p:last-child").innerHTML = "01.04 - 28.06"
}
