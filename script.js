const divgrid = [];
const container = document.querySelector("#container");
const wipe = document.querySelector("#wipe");

//Create 16 divs and add to array
for (let i = 0; i < 16; i++) {
    const newdiv = document.createElement("div");
    divgrid.push(newdiv);
}

for (let square of divgrid) {
    square.classList.add("square");
    container.append(square);
    square.addEventListener("mouseover", function () {
        square.classList.add("squarefill");
    })
}

wipe.addEventListener("click", function () {
    for (let square of divgrid) {
        square.classList.remove("squarefill");
    }
})