import { encriptarTexto, descriptogafarTexto } from "./codificador.js";

//   let textoPuro = "Bolo de cenoura";
let textoEncriptado =
  "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!";

const textoRecebido = document.querySelector("[data-input-text]");
const btnEncriptaTexto = document.querySelector("[data-criptografar]");
const btnDesencriptaTexto = document.querySelector("[data-descriptografar]");
const areaResposta = document.querySelector("[data-resposta]");
let btnCopiar;

const copiarTexto = async (texto) => {
  await navigator.clipboard.writeText(texto);
  alert("texto copiado com sucesso");
};

const inserirResposta = (texto) => {
  areaResposta.innerHTML = `

            <p class="resposta__text" data-resposta-texto>${texto}</p>
            <button class="resposta__button" data-copiar>Copiar</button>

      `;

  areaResposta.className = "resposta resposta__column";
  btnCopiar = document.querySelector("[data-copiar]");
  btnCopiar.addEventListener("click", (evento) => {
    evento.preventDefault();
    copiarTexto(texto);
  });
};

const inserirConteudoSemResposta = () => {
  textoRecebido.value = "";
  areaResposta.className = "resposta";
  areaResposta.innerHTML = `
          <div class="resposta__content">
              <div class="resposta__image">
                  <img src="High quality products 1 1.svg" alt="" srcset="">
              </div>
              <div class="resposta__messsage">
                  <h2 class="message__title">Nenhuma mensagem encontrada</h2>
                  <p class="message__text">Digite um texto que você deseja criptografar ou descriptografar.</p>
              </div>
          </div>
    `;
};

//   event listeners
btnEncriptaTexto.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (textoRecebido.value.trim() != "") {
    let novoTexto = encriptarTexto(textoRecebido.value);
    inserirResposta(novoTexto);
  } else {
    inserirConteudoSemResposta();
  }
});
btnDesencriptaTexto.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (textoRecebido.value.trim() != "") {
    let novoTexto = descriptogafarTexto(textoRecebido.value);
    inserirResposta(novoTexto);
  } else {
    inserirConteudoSemResposta();
  }
});
