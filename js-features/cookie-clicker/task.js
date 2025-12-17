   

const img  = document.getElementById("cookie");
const span = document.getElementById("clicker__counter");
span.textContent = Number(span.textContent);
let counter = 0; 

function clicker() {
        counter += 1;
        span.textContent = counter;
        img.width = 180;
        setTimeout(() => {img.width = 200;}, 50);
}
img.onclick = clicker;













  




    

    
    
        
 
    