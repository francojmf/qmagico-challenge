function contador() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("conta").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("conta").innerHTML = 0;
    }
}
