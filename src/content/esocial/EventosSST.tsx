import React, { useState } from 'react';

const EventCard = ({ code, title, desc, deadline, mandatory }: { code: string, title: string, desc: string, deadline: string, mandatory: string }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
        <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <span className="font-bold text-xl">{code}</span>
            <span className="text-xs bg-blue-500 px-2 py-1 rounded-full uppercase tracking-wider">{mandatory}</span>
        </div>
        <div className="p-6">
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {desc}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 border-t pt-4">
                <span className="font-semibold">Prazo:</span>
                <span>{deadline}</span>
            </div>
        </div>
    </div>
);

const ObligationsTable = () => (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800 text-[var(--accent)]">
                <tr>
                    <th className="px-4 py-3">Categoria</th>
                    <th className="px-4 py-3">S-2210</th>
                    <th className="px-4 py-3">S-2220</th>
                    <th className="px-4 py-3">S-2240</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {[
                    { cat: 'CLT', s2210: 'Sim', s2220: 'Sim', s2240: 'Sim' },
                    { cat: 'Rural', s2210: 'Sim', s2220: 'Sim', s2240: 'Sim' },
                    { cat: 'Doméstico', s2210: 'Sim', s2220: 'Sim', s2240: 'Sim' },
                    { cat: 'Estagiário', s2210: 'Não', s2220: 'Não', s2240: 'Não' },
                    { cat: 'Autônomo', s2210: 'Não', s2220: 'Não', s2240: 'Não' },
                    { cat: 'Servidor (RPPS)', s2210: 'Sim*', s2220: 'Sim*', s2240: 'Sim*' },
                ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-4 py-3 font-medium">{row.cat}</td>
                        <td className="px-4 py-3">{row.s2210}</td>
                        <td className="px-4 py-3">{row.s2220}</td>
                        <td className="px-4 py-3">{row.s2240}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-2 text-xs text-gray-500 text-center">
            * Dependente de norma específica ou legislação local
        </div>
    </div>
);

const EventosSSTContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-[var(--accent)]">Eventos de SST</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Conheça os eventos que substituem a CAT e o PPP, compondo o histórico laboral digital do trabalhador.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                <EventCard
                    code="S-2210"
                    title="Comunicação de Acidente de Trabalho"
                    desc="Substitui a CAT física. Deve ser enviado para qualquer acidente de trabalho, trajeto ou doença ocupacional, mesmo sem afastamento."
                    deadline="1 dia útil após o acidente"
                    mandatory="Imediato"
                />
                <EventCard
                    code="S-2220"
                    title="Monitoramento da Saúde"
                    desc="Substitui o PPP (Perfil Profissiográfico Previdenciário) na parte médica. Registra todos os exames (ASO) realizados pelo trabalhador."
                    deadline="Dia 15 do mês subsequente"
                    mandatory="Mensal"
                />
                <EventCard
                    code="S-2240"
                    title="Condições Ambientais"
                    desc="Informa a exposição a agentes nocivos (Físicos, Químicos, Biológicos) e descreve as medidas de proteção (EPI/EPC). Base para Aposentadoria Especial."
                    deadline="Dia 15 do mês subsequente"
                    mandatory="Mensal/Carga Inicial"
                />
                <EventCard
                    code="S-2221"
                    title="Exame Toxicológico"
                    desc="Exclusivo para motoristas profissionais (CLT). O envio é obrigatório na admissão e demissão."
                    deadline="Dia 15 do mês subsequente"
                    mandatory="Por evento"
                />
            </div>

            <section>
                <h2 className="text-xl font-bold mb-6 text-[var(--accent)] border-b pb-2">Tabela de Obrigatoriedade</h2>
                <ObligationsTable />
            </section>

            <section className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-800">
                <h2 className="text-xl font-bold text-red-800 dark:text-red-300 mb-6 flex items-center gap-2">
                    ⚠️ Penalidades e Multas
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <strong className="block text-red-600 mb-2">Atraso na CAT</strong>
                        <p className="text-sm">Multa variável entre os limites mínimo e máximo do salário de contribuição, podendo dobrar em reincidência.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <strong className="block text-red-600 mb-2">Omissão de Exames</strong>
                        <p className="text-sm">Multas por trabalhador não informado, variando de R$ 402,53 a R$ 4.025,33.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <strong className="block text-red-600 mb-2">Dados Incorretos</strong>
                        <p className="text-sm">Informar riscos inexistentes ou omitir riscos reais pode gerar ações regressivas do INSS.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: EventosSSTContent
};
