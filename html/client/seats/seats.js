var table = new Object;
function draw(w,h,matrix) {
    
    var container = document.getElementById("container");
    container.innerHTML="";
    // console.log(h)
    var row = 0;
    for (row=0; row<h; row++) {

        var newrow = document.createElement("div");
        newrow.id = "row_" + row;
        newrow.style.padding="1%"

        for (var column=0; column<w; column++) {

            var square = document.createElement("button");
            square.type= "button";
            square.class = "seat";
            // square.style.width = "5%";
            square.style.marginLeft="1%";
            square.style.backgroundColor="#F77F00";
            square.style.padding="2%";
            square.style.borderRadius="2px";
            // square.style.border
            square.id = row +"_"+ column;
            square.style.border="none";
            newrow.appendChild(square);
            // console.log(square);
        }
        console.log(newrow);
        container.appendChild(newrow);
    }
}

function confirm_redirect() {
    window.location.replace("./confirmation/confirmation.html")
}


function readFile(input) {
    console.log("dwad")
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        console.log(reader.result);

    };

    reader.onerror = function() {
        console.log(reader.error);
    };
    table = JSON.parse(reader.result);
}
