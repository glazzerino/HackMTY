
function get_plan(w, h,seatd, mind) {
    var mat = new Array(h);
    for (var i=0;i<h; i++) {
        mat[i] = new Array(w);
        for(var x=0; x<w; x++) {
          mat[i][x] = 1;
        }
    }   
    
    var seat_distance = seatd;
    var distance = mind;
    var intervalo = Math.trunc( distance / seat_distance)
    n = 10;
    m = 10;
    i = 0;
    j = 0;
    var mat = get_plan(n,m);
    // console.log(mat)
    counter = 0;
    while(j < n) {
    while(i < m) {
        mat[i][j] = 'O';
        counter++;
        i+= intervalo
    }
    j+=intervalo
    }

    console.log(mat)
    console.log(counter)
    for (var j=0; j<n; j++) {
    console.log(mat[j])
    }
}



