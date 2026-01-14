import React from 'react';

const ECAC_eSocialContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <section>
                <h2>O que é o e-CAC?</h2>
                <p>
                    O <strong>e-CAC (Centro Virtual de Atendimento)</strong> é a plataforma da Receita Federal que centraliza serviços fiscais. Para o eSocial, ele é fundamental pois é através dele que se gerencia a <strong>Procuração Eletrônica</strong>, permitindo que contabilidades e empresas de SST enviem eventos em nome do empregador.
                </p>

                <h3>Principais Serviços para SST</h3>
                <ul>
                    <li><strong>Procurações:</strong> Gerenciamento de poderes para terceiros.</li>
                    <li><strong>Consulta Pendências:</strong> Verificação de situação fiscal.</li>
                    <li><strong>Situação Fiscal:</strong> Diagnóstico completo do contribuinte.</li>
                    <li><strong>Caixa Postal:</strong> Mensagens oficiais da Receita.</li>
                </ul>
            </section>

            <section>
                <h2>Fluxo de Procuração</h2>
                <p>
                    Para que a Wise System possa enviar os eventos de SST, é necessário seguir o fluxo abaixo:
                </p>
                <ol>
                    <li>
                        <strong>Empresa (Empregador):</strong> Acessa o e-CAC com Certificado Digital (e-CNPJ).
                    </li>
                    <li>
                        <strong>Cadastro Procuração:</strong> Autoriza a Wise System (ou Contabilidade) a enviar eventos SST.
                    </li>
                    <li>
                        <strong>Envio dos Eventos:</strong> A Wise System transmite XMLs assinados digitalmente.
                    </li>
                </ol>
            </section>

            <section>
                <h3>Importante: Validade do Certificado</h3>
                <p>
                    A procuração eletrônica <strong>não</strong> substitui a necessidade do empregador possuir um Certificado Digital válido para o primeiro acesso.
                    Porém, uma vez cadastrada a procuração, a Wise System utiliza o <strong>próprio certificado</strong> para assinar os envios, facilitando a operação diária.
                </p>
            </section>
        </div>
    );
};

export default {
    content: ECAC_eSocialContent
};
