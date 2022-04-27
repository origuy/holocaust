const sixMil = document.querySelector(".six")
const oneMil = document.querySelector(".one")
const custom = document.querySelector(".custom")
const personal = document.querySelector(".personal")
const candle = document.querySelector(".candle")
const magen = document.querySelector(".magen")
const tile = document.querySelector(".tile")
sixMil.addEventListener("click", () => {
    candle.innerHTML = '';
    for (let index = 0; index <= 600; index++) {
        candle.innerHTML += `<img src="assets/2xu2.gif" alt="candle">`;

        
    }
})
oneMil.addEventListener("click", () => {
    candle.innerHTML = '';
    for (let index = 0; index <= 100; index++) {
        candle.innerHTML += `<img src="assets/2xu2.gif" alt="candle">`;

        
    }
})
personal.addEventListener("click", () => {
    candle.innerHTML = '';
    let honor = prompt("למי תרצה להקדיש את הנר ?")
        candle.innerHTML += `<img src="assets/2xu2.gif" alt="candle"><br><br><br><br>
        <p >${honor} יהי זכרו/ה ברוך </p>
       
        `;
})
custom.addEventListener("click", () => {
    candle.innerHTML = '';
    let num = +prompt("כמה נרות תרצה/י להדליק ?")
    for (let index = 0; index < num; index++) {
        candle.innerHTML += `<img src="assets/2xu2.gif" alt="candle">`;

        
    }
})
