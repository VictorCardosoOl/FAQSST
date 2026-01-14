import React from 'react';

const SolicitacaoBancoDadosContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center border border-purple-100 dark:border-purple-800">
                <h1 className="text-2xl font-bold text-purple-800 dark:text-purple-300">Solicitações Técnicas via Banco de Dados</h1>
                <p className="text-purple-700 dark:text-purple-200">
                    Protocolo para solicitações que exigem intervenção direta no DB.
                </p>
            </div>

            <section className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl border-l-8 border-yellow-400">
                <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Análise Prévia Obrigatória</h2>
                <p className="mb-4">
                    Antes de solicitar intervenção no banco, o analista <strong>deve</strong> garantir que o problema não é funcional ou de configuração.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-900 dark:text-yellow-100 opacity-90">
                    <li>Realizar diagnóstico completo.</li>
                    <li>Sondar o cliente sobre a causa-raiz.</li>
                    <li>Documentar tentativas de resolução.</li>
                    <li>Confirmar se o cliente entende o impacto.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">Informações Obrigatórias</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                        <strong className="block text-gray-700 dark:text-gray-300 mb-1">DADOS BÁSICOS</strong>
                        <ul className="text-sm space-y-2">
                            <li className="flex justify-between border-b border-dashed pb-1">
                                <span>Destino:</span>
                                <span className="font-mono text-blue-600">suporte@wisesystem.com.br</span>
                            </li>
                            <li className="flex justify-between border-b border-dashed pb-1">
                                <span>Nº Protocolo:</span>
                                <span className="font-mono text-gray-500">Obrigatório no Assunto</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-bold mb-3">Modelo de E-mail Padronizado</h3>
                    <div className="bg-gray-800 text-gray-200 p-6 rounded-lg font-mono text-sm leading-relaxed overflow-x-auto relative group">
                        <button
                            className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs transition-colors"
                            onClick={() => navigator.clipboard.writeText("Assunto: Solicitação Banco de Dados - [N° Protocolo]\n\nDescrição detalhada da ocorrência:\n\nIDs envolvidos:\n- Empresa ID: \n- Funcionário ID: \n- Tabela/Registro: ")}
                        >
                            Copiar Modelo
                        </button>
                        <p className="text-blue-400 mb-2">Assunto: Solicitação Banco de Dados - [N° Protocolo]</p>
                        <p className="text-gray-400 mb-4">Para: suporte@wisesystem.com.br</p>
                        <p>
                            Prezados,<br /><br />
                            Solicito análise e intervenção via banco de dados para a seguinte ocorrência:<br /><br />
                            <strong>[Descrição detalhada do problema e diagnóstico prévio]</strong><br /><br />
                            <strong>IDs Envolvidos:</strong><br />
                            - ID da Empresa: 0000<br />
                            - ID do Funcionário: 0000 (se houver)<br />
                            - ID do Registro/Tabela: 0000<br /><br />
                            Atenciosamente,<br />
                            [Seu Nome]
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: SolicitacaoBancoDadosContent
};
