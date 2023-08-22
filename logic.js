const End_Date = "1 january 2024 10:00 PM";
document.getElementById('End_Date').innerHTML = End_Date;
const inputs = document.querySelectorAll('input');
function clock() {
    const end = new Date(End_Date);
    const now = new Date();
    const diff = (end - now) / 1000;
   

    if (diff < 0) return;
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value= Math.floor(diff )%60;
   
}
clock()
setInterval(
    () => {
        clock()
    },
    1000

)