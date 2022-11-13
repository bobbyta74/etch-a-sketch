let divgrid = [];
const container = document.querySelector("#container");
const wipe = document.querySelector("#wipe");
const changegrid = document.querySelector("#changegrid");

function addsquares2dom() {
    for (let square of divgrid) {
        square.classList.add("square");
        container.append(square);
        square.addEventListener("mouseover", function () {
            square.classList.add("squarefill");
        })
    }
}

//Create 16 divs and add to array
for (let i = 0; i < 16; i++) {
    const newdiv = document.createElement("div");
    divgrid.push(newdiv);
}
addsquares2dom();

//Makes all squares blank
wipe.addEventListener("click", function () {
    for (let square of divgrid) {
        square.classList.remove("squarefill");
    }
});

changegrid.addEventListener("click", function () {
    //Remove all squares from the container and empty the list of squares
    for (let square of divgrid) {
        square.remove();
    }
    divgrid = [];

    //Get new size
    let newsize = prompt("Enter length of new grid");
    for (let i = 0; i < newsize**2; i++) {
        const newdiv = document.createElement("div");
        divgrid.push(newdiv);
    }
    let str = " auto";
    let containerstyle = str.repeat(newsize);
    container.style.gridTemplateColumns = containerstyle;
    addsquares2dom();
});
