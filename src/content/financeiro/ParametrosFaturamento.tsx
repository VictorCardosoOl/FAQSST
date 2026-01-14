import React from 'react';

const ParamCard = ({ title, desc }: { title: string, desc: string }) => (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-green-500">
        <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
);

const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-xl font-bold text-[var(--accent)] border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 mt-8">
        {title}
    </h2>
);

const ParametrosFaturamentoContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl text-center border border-green-100 dark:border-green-800">
                <h1 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Parâmetros de Faturamento</h1>
                <p className="text-green-700 dark:text-green-200">
                    Guia de configurações para cobrança de exames, contratos e serviços adicionais.
                </p>
            </div>

            <section>
                <SectionHeader title="Cobrança de Exames" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ParamCard
                        title="Sem Resultado"
                        desc="Fatura pela data de atendimento (cadastro), independente da realização do exame."
                    />
                    <ParamCard
                        title="Todos com Resultado"
                        desc="Fatura pela data de realização (baixa). Exames de meses anteriores realizados agora entram na cobrança atual."
                    />
                    <ParamCard
                        title="Com Resultado + Liberado"
                        desc="Fatura apenas quando o ASO estiver liberado. Baseia-se na data do atendimento para definir a competência."
                    />
                </div>
            </section>

            <section>
                <SectionHeader title="Tipos de Cobrança" />
                <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Per Capita</h3>
                        <p className="mb-4 text-sm">Cobrança baseada no número de vidas ativas (funcionários ativos no sistema).</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm bg-gray-50 dark:bg-gray-900/50 p-4 rounded text-gray-600 dark:text-gray-400">
                            <li><strong>Cobrar Demitidos:</strong> Opção para incluir demitidos do mês.</li>
                            <li><strong>Exceções:</strong> Funcionários marcados com "Não Cobrar" são excluídos.</li>
                            <li><strong>Exames:</strong> Geralmente inclusos ("Coberto"), mas podem ser cobrados à parte.</li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Pacotes e Descontos</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <strong className="block text-gray-700 dark:text-gray-300">Tabela de Desconto</strong>
                                <p className="text-sm">Valor unitário reduzido conforme faixa de vidas (Volume).</p>
                            </div>
                            <div>
                                <strong className="block text-gray-700 dark:text-gray-300">Pacote Fechado</strong>
                                <p className="text-sm">Valor fixo até X vidas + Valor excedente por vida adicional.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionHeader title="Configurações Especiais" />
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg">
                        <strong className="block text-yellow-800 dark:text-yellow-200">Carência na Cobrança</strong>
                        <p className="text-sm text-yellow-900/80 dark:text-yellow-100/80">Permite estender a cobrança por X meses após a demissão do funcionário.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                        <strong className="block text-blue-800 dark:text-blue-200">Vidas Mínimas</strong>
                        <p className="text-sm text-blue-900/80 dark:text-blue-100/80">Gera faturamento apenas se a empresa atingir um número mínimo de funcionários ativos.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: ParametrosFaturamentoContent
};
