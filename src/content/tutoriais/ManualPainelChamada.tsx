import React from 'react';

const ManualPainelChamadaContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/20 p-8 rounded-2xl text-center border border-blue-200 dark:border-blue-700">
                <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">Painel de Chamada</h1>
                <p className="text-blue-700 dark:text-blue-300">
                    Guia completo para configurar e operar o Painel de Chamada na sua clínica
                </p>
            </div>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-[var(--text-main)]">Como Funciona?</h2>
                <p className="mb-6">O processo envolve três etapas principais: criação do link, recepção e chamada médica.</p>

                <div className="space-y-12">
                    {/* Passo 1 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 border-b border-gray-100 dark:border-gray-600">
                            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">Passo 1: Criar o Link do Painel</h3>
                        </div>
                        <div className="p-6">
                            <p className="mb-4">Gere o link único que será exibido na TV da sala de espera.</p>
                            <ol className="list-decimal pl-6 space-y-2 mb-6">
                                <li>Acesse: <strong>Atendimento {'>'} Criar painel de chamada</strong>.</li>
                                <li>Selecione os locais (Ex: Consultório, Sala de Espera).</li>
                                <li>Clique em <strong>"Gerar Link"</strong>.</li>
                            </ol>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-2 border-2 border-dashed border-gray-300 dark:border-gray-600">
                                <img
                                    src="/assets/images/manual-painel/menu-criar-painel.png"
                                    alt="Tela de Criação de Painel"
                                    className="w-full h-auto rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity"
                                />
                                <p className="text-center text-xs text-gray-500 mt-2">Tela de criação do painel</p>
                            </div>
                        </div>
                    </div>

                    {/* Passo 2 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 border-b border-gray-100 dark:border-gray-600">
                            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">Passo 2: Recepção</h3>
                        </div>
                        <div className="p-6">
                            <p className="mb-4">Prepare o paciente para ser chamado.</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>No atendimento, preencha <strong>Sala de Espera</strong>.</li>
                                <li>Mude o status para <strong>"Aguardando Atendimento"</strong>.</li>
                                <li>Na aba Procedimentos, defina o <strong>Médico</strong> e <strong>Local</strong>.</li>
                            </ul>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-2 border-2 border-dashed border-gray-300 dark:border-gray-600">
                                    <img src="/assets/images/manual-painel/configuracao-atendimento.png" alt="Configuração Atendimento" className="w-full rounded" />
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-2 border-2 border-dashed border-gray-300 dark:border-gray-600">
                                    <img src="/assets/images/manual-painel/edicao-procedimento.png" alt="Edição Procedimento" className="w-full rounded" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Passo 3 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 border-b border-gray-100 dark:border-gray-600">
                            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">Passo 3: Consultório (Médico)</h3>
                        </div>
                        <div className="p-6">
                            <p className="mb-4">O médico realiza a chamada.</p>
                            <ol className="list-decimal pl-6 space-y-2 mb-6">
                                <li>Acesse <strong>Atendimento {'>'} Consultório</strong>.</li>
                                <li>Localize o paciente na lista "Aguardando".</li>
                                <li>Clique em <strong>"Chamar Funcionário"</strong>.</li>
                            </ol>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-2 border-2 border-dashed border-gray-300 dark:border-gray-600">
                                <img src="/assets/images/manual-painel/tela-consultorio-medico.png" alt="Tela Consultório" className="w-full rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <strong className="text-yellow-800 dark:text-yellow-200 block mb-1">Observação Importante</strong>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Somente o perfil de <strong>"Médico"</strong> consegue visualizar e chamar funcionários pelo módulo Consultório.
                </p>
            </div>
        </div>
    );
};

export default {
    content: ManualPainelChamadaContent
};
