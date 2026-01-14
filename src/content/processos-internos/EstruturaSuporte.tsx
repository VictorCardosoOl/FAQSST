import React from 'react';

const StructureCard = ({ title, responsibilities, color }: { title: string, responsibilities: string[], color: string }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border-t-4 ${color} p-6 h-full`}>
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white border-b pb-2">{title}</h3>
        <ul className="space-y-2">
            {responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-main)]">
                    <span className="text-[var(--accent)] mt-1">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const EstruturaSuporteContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-100 dark:border-blue-800">
                <h1 className="text-2xl font-bold text-sky-800 dark:text-sky-300">Estrutura da Operação de Suporte</h1>
                <p className="text-sky-600 dark:text-sky-200">Organização hierárquica e responsabilidades</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="col-span-full mb-4">
                    <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300">Níveis de Atendimento</h2>
                </div>

                <StructureCard
                    title="Relacionamento"
                    color="border-purple-500"
                    responsibilities={[
                        'Coordenação geral e gestão de processos',
                        'Agendamentos e reuniões com clientes',
                        'Monitoramento da equipe',
                        'Registro de sugestões de melhorias',
                        'Elaboração de documentações',
                        'Gestão de supervisores Sigo'
                    ]}
                />

                <StructureCard
                    title="Nível 1 (N1)"
                    color="border-blue-500"
                    responsibilities={[
                        'Suporte direto aos clientes (Estágio 1 & 2)',
                        'Análise de casos (SLA 1h - 2h)',
                        'Feedbacks aos clientes',
                        'Coleta de dados para tratativas',
                        'Suporte em migrações e homologações (Estágio 2)',
                        'Ministração de treinamentos (Estágio 2)'
                    ]}
                />

                <StructureCard
                    title="Nível 2 (N2)"
                    color="border-indigo-500"
                    responsibilities={[
                        'Suporte técnico avançado',
                        'Análise de casos em planilha de erros',
                        'Estruturação de queries de banco',
                        'Tratativas de W3 server e migração',
                        'Testes de sistema',
                        'Homologações bancárias/NFSe',
                        'Redirecionamento para Desenvolvimento'
                    ]}
                />
            </div>

            <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-bold mb-4 text-[var(--accent)]">Detalhes do Nível 1</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-blue-600 mb-2">Estágio 1</h3>
                        <p className="text-sm opacity-80 mb-2">Foco em triagem rápida e N1 básico.</p>
                        <ul className="list-disc pl-4 text-sm space-y-1">
                            <li>Suporte direto</li>
                            <li>Direcionamento financeiro/comercial</li>
                            <li>Elaboração de docs simples</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-blue-600 mb-2">Estágio 2</h3>
                        <p className="text-sm opacity-80 mb-2">Foco em resolução e suporte especializado.</p>
                        <ul className="list-disc pl-4 text-sm space-y-1">
                            <li>Acompanhamento de reuniões</li>
                            <li>Suporte a migrações e homologações</li>
                            <li>Inclusão de casos na planilha de erros</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: EstruturaSuporteContent
};
