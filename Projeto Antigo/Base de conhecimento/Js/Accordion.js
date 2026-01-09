document.querySelectorAll('.accordion-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

       
        const allMenus = document.querySelectorAll('.menu-item');
        allMenus.forEach(menu => {
            if (menu !== this.parentElement) {
                menu.classList.remove('active');
            }
        });


        const parentItem = this.parentElement;
        parentItem.classList.toggle('active');
    });
});

document.querySelectorAll('.content-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const target = this.getAttribute('data-target');
        const columns = document.querySelectorAll('.column');

        if (target === 'new') {
            columns[0].innerHTML = `<h3>Atendimento</h3>
                            <a href="Manuais/Manual sigoWEB/Atendimento/Sigo Web - Agendamentos/Agendamento.pdf" target="_blank">Agendamentos</a>
                            <a href="Manuais/Manual sigoWEB/Atendimento/Sigo Web - Atendimentos/Exame_Toxicologico.pdf" target="_blank">Toxicológico</a>
                            <a href="Manuais/Manual sigoWEB/Atendimento/Sigo Web - Assinatura de ASO Digitalmente/Assinatura de ASO Digitalmente.pdf" target="_blank">Assinatura ASO digital</a>
                            <a href="Manuais/Manual sigoWEB/Atendimento/Sigo Web - Agendamentos/Agendamento.pdf" target="_blank">Valores dos atendimentos</a>`;
            columns[1].innerHTML = `<h3>Comercial</h3>
                            <a href="Manuais/Manual sigoWEB/Comercial/Sigo Web - Empresa - Comercial/Orcamento_para_novos_clientes.pdf" target="_blank">Orçamento novos clientes</a>`;
            columns[2].innerHTML = `<h3>Financeiro</h3>
                            <a href="Manuais/Manual sigoWEB/Faturamento/Fincanceiro/Sigo Web - Contrato Comercial - Parametrizar Cobrança/Financeiro.pdf" target="_blank">Parametrizar cobrança</a>
                            <a href="Manuais/Manual sigoWEB/Faturamento/Fincanceiro/Sigo Web - Faturamento/Faturamento.pdf" target="_blank">Faturamento</a>
                            <a href="Manuais/Manual sigoWEB/Faturamento/Fincanceiro/Sigo Web - Faturamento/Faturamento_Sem_Valores_Cobrados.pdf" target="_blank">Faturamento sem valor</a>`;
            columns[3].innerHTML = `<h3>E-social</h3>
                            <a href="Manuais/Manual sigoWEB/E-social/Sigo Web - Introdução SST/Treinamento_Introducao.pdf" target="_blank">Introdução SST</a>
                            <a href="Manuais/Manual sigoWEB/E-social/Sigo Web - Portal - eSocial Web/manual do usuario esocial web geral.pdf" target="_blank">Portal e-social web</a>`;    
            columns[4].innerHTML = `<h3>Geral</h3>
                            <a href="Manuais/Manual sigoWEB/Plug-ins/Sigo Web - Cores/Cores.pdf" target="_blank">SigoWeb cores</a>
                            <a href="Manuais/Manual sigoWEB/Plug-ins/Sigo Web - Instalação do Plugin (Biometria)/Plugin Sigo Web.pdf" target="_blank">Plug-in biometria</a>`;           
        } else if (target === 'new1') {
            columns[0].innerHTML = `<h3>Processos</h3>
                            <a href="Manuais/Processos/Fluxograma de atendimento.pdf" target="_blank">Fluxograma Atendimento</a>
                            <a href="Manuais/Processos/Processo de abertura e tratativa de protocolo.pdf" target="_blank">Abertura tratativa</a>
                            <a href="Manuais/Processos/Processo Solicitações via Banco de dados.pdf" target="_blank">Solicitação Banco de dados</a>`;      
            columns[1].innerHTML = ``;
            columns[2].innerHTML = ``;
            columns[3].innerHTML = ``;    
            columns[4].innerHTML = ``;                       
        } else if (target === 'new2') {
            columns[0].innerHTML = `<h3>Ponto</h3>
                            <a href="Manuais/Pontos/Escala.jpg" target="_blank">Horário colaboradores</a>`;       
            columns[1].innerHTML = ``;
            columns[2].innerHTML = ``;
            columns[3].innerHTML = ``;    
            columns[4].innerHTML = ``;
            
        } else if (target === 'new3') {
            columns[0].innerHTML = `<h3>Sup. Geral</h3>
                            <a>Rodrigo Cardoso</a>`;       
            columns[1].innerHTML = `<h3>Sup. Projeto</h3>
                            <a>Guilherme Villa</a>`;
            columns[2].innerHTML = `<h3>Desenvolvedores</h3>
                            <a>Guilherme Villa</a>
                            <a>Pedro Bittencourt</a>`;
            columns[3].innerHTML = `<h3>Colaboradores</h3>
                            <a>Victor Cunha</a>`;   
            columns[4].innerHTML = ``; 

        } else {
            columns[0].innerHTML = `<h3>Mensageria</h3>
                            <a href="Manuais/Manual sigoW3/Sigo w3 - Mensageria/Mensageria Manual Tutorial.pdf" target="_blank">Tutorial mensageria</a>
                            <a href="Manuais/Manual sigoW3/Sigo w3 - Mensageria/Tutorial_Analise_de_erro_Mensageria.pdf" target="_blank">Análise de erros</a>`;
            columns[1].innerHTML = `<h3>E-social</h3>
                            <a href="Manuais/Manual sigoW3/Sigo w3 - eSocial/e-Book_eSocial_Software_Sigo_ Versao_ S_1_0_RC_Oficial (1).pdf" target="_blank">E-book e-social</a>`;
            columns[2].innerHTML = `<h3>Funcionários</h3>
                            <a href="Manuais/Manual sigoW3/Sigo w3 - Upload de Funcionários/Colunas - Upload de Dados.pdf" target="_blank">Upload de dados</a>
                            <a href="Manuais/Manual sigoW3/Sigo w3 - Upload de Funcionários/Tutorial - Sigo® Upload.pdf" target="_blank">Upload</a>`;
             columns[3].innerHTML = `<h3>Comercial</h3>
                            <a href="Manuais/Manual sigoW3/Sigo w3 - comercial/Comercial.pdf" target="_blank">Comercial empresa</a>`;              
            columns[4].innerHTML = `<h3>Cores</h3>
                            <a href="Manuais/Manual sigoW3/Sigo w3 - Cores/Cores.pdf" target="_blank">Cores W3</a>`;   
        }
    });
});