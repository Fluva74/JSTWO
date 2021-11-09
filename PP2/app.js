const container = document.querySelector(".container");
const h2 = document.querySelector("#hex");

function changeBg() {
    randomColor = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    container.style.background = randomColor;
    h2.innerHTML = `Hex Color: ${randomColor}`;
}