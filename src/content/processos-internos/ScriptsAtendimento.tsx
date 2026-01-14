import React from 'react';

const ScriptCard = ({ title, children, full = false }: { title: string, children: React.ReactNode, full?: boolean }) => (
    <div className={`bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-blue-500 ${full ? 'col-span-full' : ''}`}>
        <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 block font-mono text-sm uppercase tracking-wide">{title}</div>
        <div className="text-sm text-[var(--text-main)] italic">
            {children}
        </div>
    </div>
);

const ScriptsAtendimentoContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
                <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">Script de Atendimento</h1>
                <p className="max-w-2xl mx-auto text-blue-700 dark:text-blue-200">
                    Guia prático e humanizado para novos colaboradores. O sucesso de um bom atendimento começa na intenção genuína de ajudar.
                </p>
            </div>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">1. Princípios Fundamentais</h2>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mb-6 border border-blue-100 dark:border-blue-800">
                    <strong>💡 Dica essencial:</strong> Quando você realmente se importa, a solução aparece com mais naturalidade.
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                    {['Atenda até o 3º toque', 'Evite "quem fala?" → Prefira "Qual seu nome?"', 'Chame o cliente pelo nome (Sr./Sra.)', 'Tom de voz moderado', 'Sem termos técnicos/gírias', 'Cordialidade sob pressão'].map(item => (
                        <li key={item} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
                            <span className="text-green-500">✔</span> {item}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">2. Scripts Telefônicos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <ScriptCard title="Ligação Externa">
                        "Wise System, Suporte, [Seu Nome]. Bom dia!"
                    </ScriptCard>
                    <ScriptCard title="Ligação Interna">
                        "Suporte, [Seu Nome]. Boa tarde!"
                    </ScriptCard>
                </div>
                <div className="mt-4 text-sm text-gray-500 text-center">
                    🔔 Sempre inicie o protocolo no WGSC ao atender.
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">3. Etapas do Atendimento</h2>
                <ScriptCard title="Passo a Passo" full>
                    <ul className="space-y-2 list-disc pl-4">
                        <li>Confirme nome e empresa do cliente</li>
                        <li>Solicite anotação do número de protocolo</li>
                        <li>Pergunte em que pode ajudar e registre tudo</li>
                        <li>Utilize o acesso remoto se necessário</li>
                        <li>Se houver espera, informe o cliente a cada minuto</li>
                        <li>Explique o que foi feito e confirme a solução</li>
                        <li>Encerramento cordial</li>
                    </ul>
                </ScriptCard>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">4. Atendimento via Chat</h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg mb-6 border-l-4 border-yellow-400 text-sm">
                    🚫 Nunca use abreviações, gírias ou emojis. Respeite a gramática.
                </div>
                <ScriptCard title="Script Base Chat" full>
                    <div className="space-y-2">
                        <p>• Bom dia, Sr. João</p>
                        <p>• Tudo bem com o(a) senhor(a)?</p>
                        <p>• Poderia, por gentileza, anotar o número do protocolo?</p>
                        <p>• Em que posso ajudá-lo?</p>
                        <p className="text-gray-400">...</p>
                        <p>• Obrigado por aguardar! Já identifiquei o ocorrido.</p>
                        <p>• Posso ajudá-lo em algo mais?</p>
                        <p>• A Wise System agradece seu contato. Tenha um ótimo dia!</p>
                    </div>
                </ScriptCard>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">5. Situações Especiais</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <ScriptCard title="Cliente Bloqueado">
                        "Sr. João, ao tentar abrir o protocolo, consta que sua empresa possui pendências administrativas. Poderia verificar com o financeiro?"
                    </ScriptCard>
                    <ScriptCard title="Sem Acesso">
                        "Sr. João, eu realmente preciso abrir o atendimento no sistema para poder ajudá-lo. Me desculpe!"
                    </ScriptCard>
                    <ScriptCard title="Todos Ocupados">
                        "Sr. João, bom dia! No momento, todos os nossos atendentes estão em atendimento. Por favor, aguarde um momento que logo será atendido."
                    </ScriptCard>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">6. Transferência de Atendimento</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <ScriptCard title="Procedimento">
                        <p className="mb-2"><strong>Referente a chamado aberto:</strong> Verificar dúvida, disponibilidade do analista e transferir.</p>
                        <p><strong>Exige analista específico:</strong> Se ocupado, marcar retorno.</p>
                    </ScriptCard>
                    <ScriptCard title="Perguntas Prévias">
                        <ul className="list-disc pl-4 text-sm">
                            <li>Qual seria a dúvida específica?</li>
                            <li>Nome/Empresa/Funcionário</li>
                            <li>Orientar sobre possível queda de ligação</li>
                        </ul>
                    </ScriptCard>
                    <ScriptCard title="Informações de Repasse" full>
                        <p>Passar ao próximo analista: Dados coletados, natureza do problema, ações já realizadas e histórico. Evite que o cliente repita informações.</p>
                    </ScriptCard>
                </div>
            </section>

            <div className="border-t pt-8 mt-12 text-center">
                <h3 className="text-lg font-bold mb-4">Revisão Rápida</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {['Intenção de ajudar', 'Tom de voz moderado', 'Não deixe esperando', 'Sorria com a voz'].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-bold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default {
    content: ScriptsAtendimentoContent
};
