import React from 'react';

const GuiaAberturaProtocolosContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            {/* Welcome Banner */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-100 dark:border-blue-800">
                <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Guia de Abertura e Tratativa de Protocolos</h1>
                <p className="text-blue-700 dark:text-blue-200">
                    Este guia foi criado para padronizar o processo de atendimento através de protocolos, garantindo organização, responsabilidade e um retorno claro ao cliente.
                </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">1. Início da Abertura</h2>
                <p>
                    <strong>Ao atender um cliente:</strong> deve-se abrir um protocolo imediatamente no sistema <strong>W-GSC</strong>, detalhando a dúvida ou problema no campo de ocorrência.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <strong>Importante:</strong> O protocolo é de responsabilidade do agente que o abriu. Esse agente deve manter o cliente atualizado diariamente (máximo duas vezes ao dia) mesmo que não haja solução definitiva. Sempre agende o retorno no sistema.
                </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">2. Campos Obrigatórios</h2>
                <p>Os seguintes campos devem ser corretamente preenchidos no momento da abertura do protocolo:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cliente/Empresa</strong></li>
                    <li><strong>Nome do Supervisor Sigo</strong></li>
                    <li><strong>Ocorrência:</strong> Classifique conforme o tipo de solicitação.</li>
                    <li><strong>Atendente – Abertura</strong></li>
                    <li><strong>Detalhamento da ocorrência:</strong> Todas as informações fornecidas pelo cliente.</li>
                    <li><strong>Meio de contato:</strong> (telefone, WhatsApp, e-mail, site)</li>
                    <li><strong>Resolução:</strong> O que foi feito/testado, com datas e nomes.</li>
                    <li><strong>Status</strong></li>
                    <li><strong>Atendente Executor:</strong> Se houver repasse.</li>
                    <li><strong>Aguardando</strong></li>
                    <li><strong>Retorno</strong></li>
                    <li><strong>Encerramento:</strong> Somente após contato com o cliente.</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <strong>Dica:</strong> Quando o cliente não for claro, faça as perguntas certas (abertas e fechadas) para levantar as informações corretamente.
                </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">Como estruturar o Protocolo</h2>
                <p>O corpo do protocolo deve conter:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Dúvida ou questão:</strong> Tudo o que o cliente relatou.</li>
                    <li><strong>Campos de resolução:</strong> Ações tomadas, análises, datas e quem executou.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">Modelo de Preenchimento do protocolo:</h3>
                <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-blue-500 p-6 rounded font-mono text-sm leading-relaxed overflow-x-auto">
                    <p>
                        Empresa: xxxxxx ID: 000<br />
                        Funcionário: xxxxxx ID: 000<br />
                        O que ocorreu: [Descrição detalhada]<br /><br />
                        "Se houver necessidade de análise do desenvolvimento do caso, devemos implementar na planilha e disponibilizar o caminho no protocolo.
                        Fornecendo, assim, o caminho da pasta: W:\Transfer\_x\Exemplo"
                    </p>
                </div>

                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 text-center rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-gray-500 dark:text-gray-400 italic">[Imagem: Layout de tabela de IDs com exemplos preenchidos]</p>
                </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">Resolução enviada ao cliente</h2>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg italic">
                    <p>
                        "Wise System – Suporte, (Seu nome). Bom dia, Sr.(a) xxxx, tudo bem?<br /><br />
                        Sobre o chamado de protocolo nº xxxx, informamos que (Situação)<br /><br />
                        Se ainda precisar de algo, conte com a gente, estaremos por aqui para ajudar no que for necessário. Ah, e se puder deixar sua opinião sobre o atendimento, ficaremos muito gratos! Sua avaliação é essencial para seguirmos melhorando sempre.<br /><br />
                        Um ótimo dia pra você!"
                    </p>
                </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">3. Encaminhamento e Níveis</h2>
                <p>Após análise inicial (N1), se não houver solução:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Consultar o N2 para orientação.</li>
                    <li>Se necessário, registrar tarefa na aba <strong>Evoluções e Tarefas</strong> atribuindo ao N2.</li>
                    <li>Comunicar verbalmente e registrar <strong>data/motivo/departamento ou pessoa encaminhada</strong>.</li>
                </ul>
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <strong>Importante:</strong> Mesmo que o caso seja transferido para o N2 ou Desenvolvimento, o protocolo segue sob responsabilidade de quem abriu.
                </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">4. Qualidade das Informações</h2>
                <p><strong>Informações incompletas podem gerar:</strong></p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>Erros de interpretação e conclusões incorretas.</li>
                    <li>Retrabalho e atrasos na solução.</li>
                    <li>Dificuldade na reprodução de testes e análises.</li>
                </ol>
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <strong>Recomendação:</strong> Seja minucioso! Preencha o protocolo com todas as informações relevantes para que qualquer analista consiga entender e dar continuidade.
                </div>
            </section>
        </div>
    );
};

export default {
    content: GuiaAberturaProtocolosContent
};
