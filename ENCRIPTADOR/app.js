//reglas para encriptar//
function encriptar(texto) {
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = '';
    for (let letra of texto) {
        if (reglas[letra]) {
            textoEncriptado += reglas[letra];
        } else {
            textoEncriptado += letra;
        }
    }

    return textoEncriptado;
}
//reglas para desencriptar//
function desencriptar(texto) {
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = texto;
    for (let clave in reglas) {
        const valor = reglas[clave];
        const regex = new RegExp(clave, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, valor);
    }

    return textoDesencriptado;
}

function procesarTexto(accion) {
    const texto = document.getElementById('texto').value;
    let resultado = '';

    if (accion === 'encriptar') {
        resultado = encriptar(texto);
    } else if (accion === 'desencriptar') {
        resultado = desencriptar(texto);
    }

    document.getElementById('resultado').innerText = resultado;

    // Mostrar el botón de copiar si hay resultado
    const botonCopiar = document.getElementById('copiar');
    if (resultado) {
        botonCopiar.style.display = 'inline';
    } else {
        botonCopiar.style.display = 'none';
    }
}
// funcion para copiar el resultado//
function copiarTexto() {
    const textoResultado = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(textoResultado).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Error al copiar el texto: ', err);
    });
}
const boton = document.getElementById("encriptar")
const boton2 = document.getElementById("desencriptar")
const span = document.getElementById("resultado") 
const imagen = document.getElementById("muneco")
const parrafo = document.getElementById("parrafo")
const texto = document.getElementById('texto')

boton.addEventListener("click",function(){
    
    span.style.marginTop ="32px"
    span.style.marginLeft ="32px"
    span.style.marginRight ="32px"
    span.style.fontSize ="24px"; 
         
    imagen.style.display ="none";
    parrafo.style.display ="none";
   
}

);

boton2.addEventListener("click",function(){
    span.style.marginTop ="32px"
    span.style.marginLeft ="32px"
    span.style.marginRight ="32px"
    

    imagen.style.display ="none";
    parrafo.style.display ="none";  
}
)
//Funcion para que el input crezca segun la cantidad de texto ingresada//
texto.addEventListener('input', () => {
    texto.style.height = 'auto';
    texto.style.height = texto.scrollHeight + 'px';
  });
