import React from 'react';

const ProcessoFaturamentoContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-3 text-[var(--accent)]">Processo de Faturamento</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Fluxo completo de cobrança empresarial: do cadastro do contrato até a emissão da Nota Fiscal.
                </p>
            </div>

            <section className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl border-l-4 border-yellow-400">
                <h2 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">Conceito e Atenção</h2>
                <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div>
                        <p className="text-sm mb-2">
                            O faturamento consolida todos os procedimentos e serviços do mês em uma cobrança única (Boleto + NFSe).
                        </p>
                        <p className="font-bold text-red-600 text-sm">
                            ⚠️ Uma vez confirmado o faturamento, não é possível desfazer a operação em lote. Revise os relatórios antes!
                        </p>
                    </div>
                    <img src="/assets/images/financeiro/faturamento/Screenshot_1.png" alt="Conceito Faturamento" className="rounded shadow-sm max-h-40 object-cover" />
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6 border-b pb-2">1. Configurações Iniciais</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="font-bold text-lg text-blue-600 mb-2">A. Configurar Impostos da Unidade</h3>
                        <p className="text-sm mb-3">Defina as alíquotas de ISS e outros tributos na unidade faturadora.</p>
                        <img src="/assets/images/financeiro/faturamento/Screenshot_2.png" alt="Config Unidade" className="rounded shadow-sm border mb-2" />
                        <p className="text-xs text-gray-500">Menu {'>'} Configurações {'>'} Unidades {'>'} Adm</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-blue-600 mb-2">B. Configurar Financeiro da Empresa</h3>
                        <p className="text-sm mb-3">Cada cliente pode ter retenções específicas dependendo do regime tributário.</p>
                        <img src="/assets/images/financeiro/faturamento/Screenshot_3.png" alt="Config Empresa" className="rounded shadow-sm border mb-2" />
                        <p className="text-xs text-gray-500">Menu {'>'} Empresas {'>'} Financeiro</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6 border-b pb-2">2. Faturamento de Contrato (Recorrente)</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="font-bold text-lg text-green-600 mb-2">Parametrizar Cobrança</h3>
                        <p className="text-sm mb-3">
                            Defina o dia de vencimento, dia de corte (fechamento) e a conta bancária.
                        </p>
                        <img src="/assets/images/financeiro/faturamento/Screenshot_4.png" alt="Parametros Cobranca" className="rounded shadow-sm border mb-2" />
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-green-600 mb-2">Executar o Faturamento</h3>
                        <p className="text-sm mb-3">
                            Gere o demonstrativo, confira os valores e confirme.
                        </p>
                        <ol className="list-decimal pl-5 mb-4 text-sm space-y-1">
                            <li>Acesse <strong>Faturamento {'>'} Faturamento de Contrato</strong>.</li>
                            <li>Gere o Demonstrativo.</li>
                            <li>Compare com o "Relatório de Funcionários para Cobrança".</li>
                            <li>Clique em Faturar.</li>
                        </ol>
                        <img src="/assets/images/financeiro/faturamento/Screenshot_5.png" alt="Tela Faturamento" className="rounded shadow-sm border mb-2" />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6 border-b pb-2">3. Faturamento de Pedidos (Avulso)</h2>
                <p className="mb-4">Para vendas pontuais (Ex: PPRA avulso, Treinamento in-company).</p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1">
                        <ul className="space-y-2 text-sm">
                            <li>1. Crie o Pedido no módulo <strong>Comercial</strong>.</li>
                            <li>2. O pedido deve ser <strong>Aprovado</strong>.</li>
                            <li>3. Vá em <strong>Faturamento {'>'} Faturamento de Pedidos</strong>.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img src="/assets/images/financeiro/faturamento/Screenshot_6.png" alt="Fat Pedido" className="rounded shadow-sm border" />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] mb-4">Pós-Faturamento: O que acontece?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
                        <strong className="block text-purple-600 mb-2">RPS (Nota Fiscal)</strong>
                        <p className="text-sm">O sistema gera um lote de RPS. Você deve ir em <strong>Faturamento {'>'} Gerar NFS-e</strong> para transmitir à prefeitura.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
                        <strong className="block text-green-600 mb-2">CNAB (Boleto)</strong>
                        <p className="text-sm">O título é criado no Contas a Receber. Gere a remessa em <strong>Financeiro {'>'} Remessa CNAB</strong>.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: ProcessoFaturamentoContent
};
