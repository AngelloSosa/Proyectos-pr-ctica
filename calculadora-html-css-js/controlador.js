const pantalla =  document.querySelector('#pantalla');
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener("mouseover", () => {
        boton.style.backgroundColor = "rgba(40, 40, 40, 0.9)";
        boton.style.color = "rgb(255, 255, 255)";
    });

    boton.addEventListener("mouseout", () => {
        boton.style.backgroundColor = ""; 
        boton.style.color = ""; 
    });

    boton.addEventListener("click", () => {
        const botonusado = boton.textContent;
        if (botonusado== "C") {
         pantalla.textContent = 0;
        }
        else if (botonusado == ".") {
            if (!pantalla.textContent.includes(".")){
                pantalla.textContent += botonusado;
            }
        }
        else if (botonusado == "←" && pantalla.textContent.length === 1){
            pantalla.textContent = pantalla.textContent = "0";
        }
        else if (botonusado == "←") {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        else if (botonusado == "%"){
            pantalla.textContent = parseFloat(pantalla.textContent) / 100;
        }
        else if (botonusado == "^") {
            pantalla.textContent += "**";
        }
        else if (botonusado == "√") {
            let resultado = Math.sqrt(parseFloat(pantalla.textContent)).toFixed(6);
            pantalla.textContent = parseFloat(resultado);
        }
        else if (botonusado == "=") {
            pantalla.textContent = Number(eval(pantalla.textContent).toFixed(6));
        }
        else if (pantalla.textContent == "0") {
            pantalla.textContent = botonusado;
        }
        else {
            pantalla.textContent += botonusado;
        }
    })
});




