// Bloquear caracteres especiais e letras maiúsculas
//let texto = document.querySelector('#texto')
function Init() {
  var textoA = document.getElementById("texto");
  textoA.addEventListener("keypress", checkChar);
}

function checkChar(e) {
  // nao aceitar caracteres especiais e letras maiúsculas e emite um alerta
  var charCode = e.keyCode;

  if (charCode >= 65 && charCode <= 90) {
    alert("Não é permitido letras maiúsculas!");
    e.preventDefault();
    // numeros
  } else if (charCode >= 48 && charCode <= 57) {
    alert("Não é permitido!");
    e.preventDefault();
    // ACENTOS
  } else if (charCode >= 192 && charCode <= 255) {
    alert("Não é permitido !");
    e.preventDefault();
  } else {
    return true;
  }
}


function criptografar(texto) {
  // substituir as letras
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  texto = texto.replace(/mes/g, "");

  if (checkChar(texto)) {
    console.log(texto);
  } else {
    alert("Não é permitido caracteres especiais e letras maiúsculas!");
  }
  // retornar a versão criptografada
  return texto;
}

function descriptografar(texto) {
  // substituir as letras
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  texto = texto.replace(/mes/g, "");

  if (checkChar(texto)) {
    console.log(texto);
  } else {
    alert("Não é permitido caracteres especiais e letras maiúsculas!");
  }
  // retornar a versão descriptografada
  return texto;
}

function copiarTexto() {
  var texto = document.getElementById("resultado").innerHTML;
  copiarValorCampo(texto);
  alert("Texto copiado para a área de transferência!");
}

function copiarValorCampo(valorCampo) {
  var inputTemp = document.createElement("input");
  inputTemp.style = "position: absolute; left: -1000px; top: -1000px";
  inputTemp.value = valorCampo;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemp);
}
