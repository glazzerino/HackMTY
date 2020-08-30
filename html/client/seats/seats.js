
function draw() {
    var w = document.getElementById("w_config").value;
    var h = document.getElementById("h_config").value;
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
            square.style.backgroundColor="white";
            square.style.padding="2%";
            square.style.borderRadius="2px";
            // square.style.border
            square.id = row +"_"+ column;
            square.style.border="none";
            newrow.appendChild(square);
            // console.log(square);
        }
        var mind = document.getElementById("safe_distance").value;
        var container = document.getElementById("container");
        var seat_distance = document.getElementById("seat_distance").value;
        var mat = get_plan(w,h,seat_distance,mind)[0];
        console.log(newrow);
        container.appendChild(newrow);
    }

    for (var j=0;j<h; j++) {
        for (var i=0; i<w; i++) {
            //Seat slot recoloring
            if (mat[j][i] == 'O') {
                console.log("hi")
                var square = document.getElementById(j+"_"+i);
             
                if (j == 0) {
                var square = document.getElementById(j+"_"+i);
                square.style.backgroundColor = "blue";
                square.title = "Handicap seat";
                }
                else {
                    square.style.backgroundColor = "#F77F00";
                }   
            }
        }
    }
}
function confirm_redirect() {
    window.location.replace("./confirmation/confirmation.html")
}


function readFile(input) {
    // console.log("dwad")
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
