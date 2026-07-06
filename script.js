// 1. Lógica do botão Copiar (sem mexer no seu HTML)
function copyToPastebin() {
  // Captura o texto do parágrafo e remove a palavra do botão "Copiar"
  const elementoIp = document.querySelector(".IP p");
  if (!elementoIp) return;
  
  const textoParaCopiar = elementoIp.innerText.replace("Copiar", "").trim();

  // Executa a cópia para a área de transferência
  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
      // Feedback visual opcional mudando o texto do botão por 1.5 segundos
      const botao = elementoIp.querySelector("button");
      if (botao) {
        const textoOriginal = botao.innerText;
        botao.innerText = "Copiado!";
        setTimeout(() => botao.innerText = textoOriginal, 1500);
      }
    })
    .catch(erro => console.error("Erro ao copiar:", erro));
}

// 2. Define a variável global que o seu botão "Loja" está procurando
const test = "Teste da Loja funcionando!"; 

// 3. Garante que as funções fiquem visíveis para o HTML (escopo global)
window.copyToPastebin = copyToPastebin;
window.test = test;

function notAvaliable() {
    alert("Ainda não disponivel")
}