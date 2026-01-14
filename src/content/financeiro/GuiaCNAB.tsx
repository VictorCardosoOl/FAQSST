import React from 'react';

const Step = ({ number, title, desc, img }: { number: string, title: string, desc: string, img?: string }) => (
    <div className="relative pl-12 pb-8 border-l-2 border-green-200 dark:border-green-900 last:border-0">
        <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow-sm">
            {number}
        </div>
        <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{desc}</p>

        {img && (
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg border border-gray-200 dark:border-gray-700 inline-block max-w-full">
                <img
                    src={img}
                    alt={title}
                    className="rounded shadow-sm max-h-[300px] w-auto hover:scale-105 transition-transform cursor-pointer"
                />
            </div>
        )}
    </div>
);

const GuiaCNABContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="text-center bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">CNAB: Remessa e Retorno</h1>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                    Guia completo para automatizar a cobrança bancária: gere remessas, envie ao banco e processe os retornos.
                </p>
            </div>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Conceitos Básicos</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="mb-4">
                            O <strong>CNAB</strong> (Centro Nacional de Automação Bancária) é o padrão de comunicação entre sua empresa e o banco.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border-l-4 border-blue-500">
                            <strong>Para que serve?</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                                <li>Registrar boletos no banco.</li>
                                <li>Informar alterações (vencimento, abatimento).</li>
                                <li>Baixar títulos pagos automaticamente (Retorno).</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <img src="/assets/images/financeiro/cnab/Screenshot_1.png" alt="Fluxo CNAB" className="rounded w-full" />
                        <p className="text-center text-xs text-gray-500 mt-2">Diagrama de fluxo de dados CNAB</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Tipos de Layout (240 vs 400)</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">Layout 400</h3>
                        <img src="/assets/images/financeiro/cnab/Screenshot_2.png" alt="Layout 400" className="rounded mb-2 w-full opacity-80" />
                        <p className="text-xs text-gray-500">Arquivo mais simples, com menos detalhes. Padrão antigo mas muito utilizado.</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">Layout 240</h3>
                        <img src="/assets/images/financeiro/cnab/Screenshot_3.png" alt="Layout 240" className="rounded mb-2 w-full opacity-80" />
                        <p className="text-xs text-gray-500">Arquivo mais segmentado e detalhado. Permite serviços mais complexos (Custódia de Cheques, etc).</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-8">Passo a Passo: Gerar Remessa</h2>
                <div className="ml-4">
                    <Step
                        number="1"
                        title="Verificar Títulos"
                        desc="Certifique-se que o título está no 'Contas a Receber' com status 'Em Carteira'."
                        img="/assets/images/financeiro/cnab/Screenshot_4.png"
                    />
                    <Step
                        number="2"
                        title="Acessar Gerador"
                        desc="Vá em Financeiro > Remessa CNAB. Use os filtros para encontrar os títulos pendentes."
                        img="/assets/images/financeiro/cnab/Screenshot_5.png"
                    />
                    <Step
                        number="3"
                        title="Gerar Arquivo"
                        desc="Selecione os boletos e clique em 'Gerar Remessa'. O sistema criará um arquivo .REM ou .TXT."
                        img="/assets/images/financeiro/cnab/Screenshot_6.png"
                    />
                    <Step
                        number="4"
                        title="Enviar ao Banco"
                        desc="Faça o upload deste arquivo no Internet Banking do seu banco. Aguarde a validação."
                        img="/assets/images/financeiro/cnab/Screenshot_7.png"
                    />
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-[var(--accent)] mb-4">Processando o Retorno</h2>
                <p className="mb-4">
                    O arquivo de <strong>Retorno</strong> é o inverso: você baixa do banco e sobe no sistema para atualizar os boletos.
                </p>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Baixe o arquivo de retorno no site do Banco.</li>
                            <li>Vá em <strong>Financeiro {'>'} Retorno CNAB</strong>.</li>
                            <li>Selecione a Conta Bancária.</li>
                            <li>Faça o upload do arquivo.</li>
                            <li>O sistema baixará automaticamente os títulos pagos.</li>
                        </ol>
                    </div>
                    <div className="flex-1">
                        <img src="/assets/images/financeiro/cnab/Screenshot_8.png" alt="Tela Retorno" className="rounded shadow-sm" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: GuiaCNABContent
};
