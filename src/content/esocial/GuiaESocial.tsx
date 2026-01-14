import React from 'react';

const PhaseCard = ({ title, desc, phase }: { title: string, desc: string, phase: string }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold px-2 py-1 rounded-bl">
            {phase}
        </div>
        <h3 className="font-bold text-gray-800 dark:text-gray-100 mt-2 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
);

const ImpactCard = ({ title, items, icon }: { title: string, items: string[], icon: string }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-4 border-b pb-2">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-main)]">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const GuiaESocialContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl text-center text-white shadow-xl">
                <h1 className="text-4xl font-bold mb-2">eSocial</h1>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                    Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas.
                    Tudo o que você precisa saber sobre a unificação das obrigações no Brasil.
                </p>
            </div>

            {/* Section 1: Introduction */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl">🏛️</div>
                    <h2 className="text-2xl font-bold text-[var(--accent)]">1. Fundamentação e Objetivos</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-4">Contexto Histórico</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="text-gray-500">Criação:</span>
                                <span>11 de Dezembro de 2014</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="text-gray-500">Obrigatoriedade Geral:</span>
                                <span>Janeiro de 2018</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="text-gray-500">Base Tecnológica:</span>
                                <span>SPED</span>
                            </li>
                            <li className="flex justify-between pb-2">
                                <span className="text-gray-500">Participantes:</span>
                                <span className="text-right">Receita Federal, INSS, Caixa, Min. Trabalho</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                        <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-4">Principais Objetivos</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {['Eliminar multiplicidade de declarações', 'Reduzir custos de compliance', 'Aprimorar fiscalização', 'Garantir direitos trabalhistas'].map(item => (
                                <div key={item} className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded shadow-sm">
                                    <span className="text-green-500">✔</span>
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Timeline */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-2xl">📅</div>
                    <h2 className="text-2xl font-bold text-[var(--accent)]">2. Fases de Implementação</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <PhaseCard phase="Fase 1" title="Tabelas" desc="Cadastro do Empregador e Tabelas" />
                    <PhaseCard phase="Fase 2" title="Não Periódicos" desc="Admissões e Afastamentos" />
                    <PhaseCard phase="Fase 3" title="Periódicos" desc="Folha de Pagamento" />
                    <PhaseCard phase="Fase 4" title="SST" desc="Saúde e Segurança do Trabalho" />
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm">
                        <strong>Situação Atual:</strong> Desde 2022, a obrigatoriedade é universal para todas as empresas (Grupos 1, 2, 3 e 4), incluindo órgãos públicos.
                    </p>
                </div>
            </section>

            {/* Section 3: Simplificado */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-2xl">⚡</div>
                    <h2 className="text-2xl font-bold text-[var(--accent)]">3. eSocial Simplificado (S-1.0)</h2>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl">
                    <p className="mb-4">
                        A versão S-1.0 trouxe uma redução drástica na burocracia, eliminando campos duplicados e substituindo obrigações antigas como RAIS e CAGED.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded text-center shadow-sm">
                            <strong className="block text-2xl text-green-600 mb-1">-30%</strong>
                            <span className="text-xs text-gray-500 uppercase">Volume de Dados</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded text-center shadow-sm">
                            <strong className="block text-2xl text-green-600 mb-1">CNPJ</strong>
                            <span className="text-xs text-gray-500 uppercase">Chave Única</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded text-center shadow-sm">
                            <strong className="block text-2xl text-green-600 mb-1">Flexível</strong>
                            <span className="text-xs text-gray-500 uppercase">Novas Regras</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Impactos */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-2xl">📊</div>
                    <h2 className="text-2xl font-bold text-[var(--accent)]">4. Impactos nas Relações</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <ImpactCard
                        title="Para Empresas"
                        icon="🏢"
                        items={[
                            'Fiscalização integrada e automática',
                            'Combate à sonegação e concorrência desleal',
                            'Redução de custos operacionais a longo prazo',
                            'Segurança jurídica nas contratações'
                        ]}
                    />
                    <ImpactCard
                        title="Para Trabalhadores"
                        icon="👷"
                        items={[
                            'Transparência nos dados contratuais',
                            'Garantia de recolhimento de FGTS e INSS',
                            'Histórico de saúde e segurança unificado',
                            'Facilidade na concessão de benefícios'
                        ]}
                    />
                </div>
            </section>

            {/* Section 5: LGPD */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-2xl">🔒</div>
                    <h2 className="text-2xl font-bold text-[var(--accent)]">5. Dados e LGPD</h2>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <p className="mb-4">O eSocial coleta diversas categorias de dados, todos tratados sob os princípios da LGPD:</p>
                    <div className="flex flex-wrap gap-2">
                        {['CPF/Nome', 'Salários', 'Jornada', 'ASO', 'CAT', 'Exposição a Riscos'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm border shadow-sm">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: GuiaESocialContent
};
