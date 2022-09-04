
function converter(){
    let km = document.getElementById("data").value;
    let factor = 0.621371;
    let miles = km * factor;
    document.getElementById("result").innerHTML = `${miles} Miles`
}