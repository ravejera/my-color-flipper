const colors = ["red", "blue", "#fff", "purple", "violet"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const numbers = getRandomNumber();
    console.log(numbers);
    document.body.style.backgroundColor = colors[numbers];
    color.textContent = colors[numbers];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}



