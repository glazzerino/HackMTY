
function draw() {
    var h_config = document.getElementById("h_config");
    var w_config = document.getElementById("w_config");
    var w = w_config.textContent;
    var h = h_config.textContent;
    var container = document.getElementById("main");
    for (var row=0; row<h; row++) {
        var newrow = document.createElement("div");
        newrow.id = "row_" + i;
        for (var column=0; column<w;column++) {
            var square = document.createElement("button");
            square.type= "button";
            square.class = "seat";
            square.style.width = "5%";
            square.style.backgroundColor="#F77F00";
            square.style.padding="2%";
            square.id = row +"_"+ column;
            newrow.appendChild(square);
        }
        console.log(newrow);
        container.appendChild(newrow);
    }
}