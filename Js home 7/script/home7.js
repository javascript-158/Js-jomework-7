// 1. შექმენით გვერდი, სადაც იქნება წარმოდგენილი:
// 1. რაიმე ფოტო <img> ტეგში.
// 2 სხვადასხვა ღილაკი, 1. ფოტოს ზომის გადიდების; 2. ფოტოს ზომის შემცირების;

// DOM-ის მეშვეობით გააკეთეთ ისე, რომ ფოტოს ზომის გაზრდისა და ზომის შემცირების ღილაკებზე დაჭერით არსებული სურათის ზომა (width) შეიცვალოს.
// რაღაც ესეთი


function biggerImg () {
let khidi = document.querySelector("#khidi")
let bigger = document.querySelector(".bigger")
 if (bigger) {
    khidi.style.width = "1000px"
    khidi.style.height = "500px"
    khidi.style.transition = "2s ease-in-out"
 }
}

function smallerImg () {
let khidi = document.querySelector("#khidi")
let smaller = document.querySelector(".smaller")
if (smaller) {
    khidi.style.width = "500px"
    khidi.style.height = "300px"
    khidi.style.transition = "2s ease-in-out"
}
}
// 2. შექმენით ვებგვერდი რომელზეც იქნება მოცემული ტექსტის ფერის შემცვლელი ღილაკი. მოცემულობა ესეთია:
// 1. მომხმარებელი აჭერს ღილაკზე, ღილაკი ცვლის ფერს.
// 2. ეკრანზე მოცემული ტექსტი იცვლება იმ ფერის სახელით რა ფერის ტექსტიცაა ეკრანზე გამოტანილი. ნახეთ მაგალითი ფოტოზე.

function colourChanger () {
    let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "grey"]
    let colorP = document.querySelector(".colorP")
    let colorIndex = [Math.floor(Math.random() * colors.length)]
    let randomColor = colors[colorIndex]
    colorP.style.color = randomColor
    if (randomColor) {
        colorP.innerHTML = colors[colorIndex]
    }
}

// 3. შექმენით ვებგვერდი რომელზეც იქნება მოცემული კონტენტის ჩვენებისა და დამალვის ღილაკი. 
// მოცემულ ღილაკზე დაჭერისას უნდა მოხდეს კონტენტის გამოტანა ეკრანზე თუ კონტენტი დამალულია.
//  ხოლო თუ კონტენტი ჩანს ეკრანზე ამ შემთხვევაში მისი დამალვა.

function show () {
let show = document.querySelector(".show")
let sergiaDiv = document.querySelector (".sergiaDiv")
if (show) {
    sergiaDiv.style.display = "block"
}}

function hide() {
    let hide = document.querySelector(".hide")
    let sergiaDiv = document.querySelector (".sergiaDiv")
    if (hide) {
        sergiaDiv.style.display = "none"
    }
}

