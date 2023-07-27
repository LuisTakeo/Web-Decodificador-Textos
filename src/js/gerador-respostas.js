export const copiarTexto = async () => {
  const respostaTexto = document.querySelector("[data-resposta-texto]");
  await navigator.clipboard.writeText(respostaTexto.textContent);
  alert("texto copiado com sucesso");
};

export function inserirResposta(texto) {
  areaResposta.innerHTML = `

                <p class="resposta__text" data-resposta-texto>${texto}</p>
                <button class="resposta__button" data-copiar>Copiar</button>

        `;

  areaResposta.className = "resposta resposta__column";
  btnCopiar = document.querySelector("[data-copiar]");
  btnCopiar.addEventListener("click", (evento) => {
    evento.preventDefault();
    copiarTexto();
  });
}

export const inserirConteudoSemResposta = () => {
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
