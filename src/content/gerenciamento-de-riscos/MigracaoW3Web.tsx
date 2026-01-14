import React from 'react';

const MigracaoW3WebContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-2xl text-center text-white shadow-xl">
                <h1 className="text-3xl font-bold mb-2">Migração: Sigo W3 → Sigo Web</h1>
                <p className="text-orange-100 max-w-3xl mx-auto">
                    Guia técnico sobre impactos na estrutura de setores, funções e documentos ocupacionais durante a transição de sistemas.
                </p>
            </div>

            <section className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl border-l-4 border-yellow-500">
                <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">⚠️ Protocolos Críticos</h2>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                        <span className="text-yellow-500 font-bold">1.</span>
                        <span>
                            <strong>Preservação de Cadastros:</strong> Nunca exclua setores/funções de empresas migradas sem antes consolidar os vínculos.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-yellow-500 font-bold">2.</span>
                        <span>
                            <strong>Verificação Prévia:</strong> Confirme se todos os funcionários foram reassociados corretamente antes de inativar IDs antigos.
                        </span>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6 border-b pb-2">Análise Comparativa</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase text-xs tracking-wider">Legado (Sigo W3)</h3>
                        <p className="mb-4 text-sm">
                            Cada empresa tinha seu próprio universo de IDs. "Administrativo" na Empresa A era ID 50, na Empresa B era ID 90.
                        </p>
                        <div className="bg-white dark:bg-gray-900 p-3 rounded text-xs font-mono border">
                            Empresa A: Setor Admin (ID: 1)<br />
                            Empresa B: Setor Admin (ID: 2)<br />
                            <strong>Duplicidade de dados</strong>
                        </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="font-bold text-green-600 dark:text-green-400 mb-2 uppercase text-xs tracking-wider">Novo (Sigo Web)</h3>
                        <p className="mb-4 text-sm">
                            Cadastro unificado global. "Administrativo" é o ID 1 para todas as empresas do sistema.
                        </p>
                        <div className="bg-white dark:bg-gray-900 p-3 rounded text-xs font-mono border">
                            Setor Global: Admin (ID: 1)<br />
                            Empresa A &rarr; Usa ID 1<br />
                            Empresa B &rarr; Usa ID 1
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[var(--accent)] mb-6 border-b pb-2">Problemas Comuns e Soluções</h2>

                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-red-600 mb-2">Quebra de Vínculos no PCMSO</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Se o ID do setor no contrato do funcionário for diferente do ID utilizado no PGR/PCMSO, o sistema não consegue cruzar os riscos para o ASO.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded text-center">
                            <img
                                src="/assets/images/gerenciamento-de-riscos/migracao/Screenshot_1.png"
                                alt="Erro Vinculo"
                                className="inline-block max-h-48 rounded shadow border"
                            />
                            <p className="text-xs text-gray-400 mt-2">Exemplo de divergência de IDs</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-blue-600 mb-4">Procedimento de Correção</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <strong className="block text-sm">Recuperar Cadastro</strong>
                                    <p className="text-xs text-gray-500">Pesquise pelo ID original (se souber) ou reative o registro inativo.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <strong className="block text-sm">Reassociar no GR</strong>
                                    <p className="text-xs text-gray-500">No Gerenciamento de Riscos da empresa, inclua novamente o setor correto.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <strong className="block text-sm">Transferir Riscos</strong>
                                    <p className="text-xs text-gray-500">Use a função "Importar Exposições" para mover os dados do ID antigo para o novo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default {
    content: MigracaoW3WebContent
};
