//Seu JavaScript de validação aqui

const formulario = document.querySelector('form');
const aviso = 'Esta seção é apenas ilustrativa. Para entrar em contato comigo, use minhas redes sociais no topo da página. Obrigado!'

formulario.addEventListener('click', function(evento) {
    evento.preventDefault();
    alert(aviso);
});