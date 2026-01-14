import React from 'react';

const NRCard = ({ nr, title, desc }: { nr: string, title: string, desc: string }) => (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
        <span className="text-xs font-bold text-blue-500 mb-1 block">NR-{nr}</span>
        <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
);

const IntroducaoSSTContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl text-center border border-blue-100 dark:border-blue-800">
                <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">Saúde e Segurança no Trabalho</h1>
                <p className="text-blue-700 dark:text-blue-200 max-w-2xl mx-auto">
                    Conjunto de normas e procedimentos exigidos legalmente para proteger a integridade física e mental do trabalhador.
                </p>
            </div>

            <section>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-[var(--accent)] mb-4">O que é SST?</h2>
                        <ul className="space-y-3">
                            {[
                                'Minimizar ou eliminar riscos no ambiente.',
                                'Reduzir custos com acidentes e afastamentos.',
                                'Promover saúde e qualidade de vida.',
                                'Cumprir exigências legais (MTE, Previdência).'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6 mt-8 border-b pb-2">Principais Normas Regulamentadoras</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NRCard
                        nr="01"
                        title="Disposições Gerais e GRO"
                        desc="Estabelece as diretrizes para o Gerenciamento de Riscos Ocupacionais (PGR)."
                    />
                    <NRCard
                        nr="05"
                        title="CIPA"
                        desc="Comissão Interna de Prevenção de Acidentes e Assédio. Obrigatória conforme dimensionamento."
                    />
                    <NRCard
                        nr="07"
                        title="PCMSO"
                        desc="Programa de Controle Médico de Saúde Ocupacional. Define os exames (ASO)."
                    />
                    <NRCard
                        nr="15"
                        title="Insalubridade"
                        desc="Atividades que expõem a danos à saúde (químico, físico, biológico). Gera adicional."
                    />
                    <NRCard
                        nr="16"
                        title="Periculosidade"
                        desc="Atividades com risco iminente de morte (explosivos, eletricidade, etc). Gera adicional."
                    />
                    <NRCard
                        nr="17"
                        title="Ergonomia"
                        desc="Adaptação do trabalho às características psicofisiológicas dos trabalhadores."
                    />
                    <NRCard
                        nr="35"
                        title="Trabalho em Altura"
                        desc="Requisitos e medidas de proteção para trabalho acima de 2,00m."
                    />
                </div>
            </section>
        </div>
    );
};

export default {
    content: IntroducaoSSTContent
};
