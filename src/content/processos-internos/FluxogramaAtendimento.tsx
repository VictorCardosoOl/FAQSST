import React from 'react';

const FluxogramaAtendimentoContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-100 dark:border-blue-800">
                <h1 className="text-2xl font-bold text-sky-800 dark:text-sky-300">Fluxograma de Atendimento Técnico</h1>
                <p className="text-sky-600 dark:text-sky-200">Passo a passo de como realizar um atendimento</p>
            </div>

            <div className="max-w-2xl mx-auto relative">
                {/* Connection Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                {/* Step 1 */}
                <div className="relative pl-16 mb-8">
                    <div className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold z-10">1</div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-sky-600 shadow-sm">
                        <strong className="block text-lg mb-1">Cliente entra em contato</strong>
                        <p className="text-sm opacity-80">O atendimento é iniciado via telefone, chat ou e-mail.</p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-16 mb-8">
                    <div className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold z-10">2</div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-sky-600 shadow-sm">
                        <strong className="block text-lg mb-1">Verificar se a empresa é cliente Wise System</strong>
                        <ul className="text-sm opacity-80 mt-2 space-y-1">
                            <li>✅ <span className="font-medium">Sim:</span> Gerar protocolo de atendimento</li>
                            <li>❌ <span className="font-medium">Não:</span> Informar que o suporte é exclusivo para contratantes</li>
                        </ul>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-16 mb-8">
                    <div className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-full bg-sky-600 text-white font-bold z-10">3</div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border-l-4 border-sky-600 shadow-sm">
                        <strong className="block text-lg mb-1">Classificar o tipo de problema</strong>
                        <p className="text-sm opacity-80">Diferenciar se trata-se de <span className="font-bold text-blue-600 dark:text-blue-400">Dúvida</span> ou <span className="font-bold text-yellow-600 dark:text-yellow-400">Erro técnico</span>.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pl-16 mb-8">
                    {/* Step 4A */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
                        <strong className="block text-lg mb-2 text-green-700 dark:text-green-400">4A. Se for Dúvida</strong>
                        <ul className="list-disc pl-4 text-sm opacity-80 space-y-1">
                            <li>Entender a dúvida do cliente</li>
                            <li>Orientar de forma clara e objetiva</li>
                            <li>Finalizar protocolo com registro de atendimento</li>
                        </ul>
                    </div>

                    {/* Step 4B */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                        <strong className="block text-lg mb-2 text-yellow-700 dark:text-yellow-400">4B. Se for Erro Técnico</strong>
                        <ul className="list-disc pl-4 text-sm opacity-80 space-y-1">
                            <li>Reproduzir a falha</li>
                            <li>Analisar a causa</li>
                            <li>
                                <strong>Teve solução no N1?</strong>
                                <ul className="pl-4 mt-1 border-l border-gray-300 dark:border-gray-600">
                                    <li>Sim: Orientar e encerrar</li>
                                    <li>Não: Encaminhar ao <strong>N2</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="relative pl-16 mb-8">
                    <div className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold z-10">5</div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-purple-600 shadow-sm">
                        <strong className="block text-lg mb-1">N2 analisou a falha</strong>
                        <p className="text-sm opacity-80">
                            Caso resolva, retorna o atendimento para o N1 finalizar com o cliente. Se não resolver, registra pendência para desenvolvimento.
                        </p>
                    </div>
                </div>

                {/* Step 6 */}
                <div className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white font-bold z-10">✨</div>
                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border-l-4 border-green-600 shadow-sm">
                        <strong className="block text-lg mb-1">Encerramento do protocolo</strong>
                        <p className="text-sm opacity-80">
                            Sempre encerrar com cordialidade, verificando se há mais dúvidas. Registrar toda a tratativa no w-GSC.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default {
    content: FluxogramaAtendimentoContent
};
