$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required:  true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome', 
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Este campo é obrigatório',
            cpf: 'Por favor, insira seu cpf',
            endereco: 'Por favor, informe seu endereço',
            cep: 'Por favor, informe seu cep'
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(form, validador) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})