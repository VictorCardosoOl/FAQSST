import React from 'react';

const PoliticaFeedbackContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            {/* Welcome Banner */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-100 dark:border-blue-800">
                <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Feedback Contínuo ao Cliente</h1>
                <p className="text-blue-700 dark:text-blue-200">
                    Manter o cliente informado sobre o andamento de sua solicitação é uma prática essencial para garantir transparência e fortalecer a relação de confiança.
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">1. Periodicidade do Feedback</h2>
                <p>
                    Recomenda-se que seja realizado um <strong>feedback a cada 24 horas</strong>, mesmo que não haja uma atualização definitiva sobre a solução.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <strong>Importante:</strong> Esse contato demonstra comprometimento, organização e cuidado com a experiência do cliente.
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">2. Boas Práticas ao Atualizar o Cliente</h2>
                <p>Ao atualizar o cliente, é importante seguir estas diretrizes:</p>
                <ul className="grid gap-4 sm:grid-cols-2">
                    {[
                        { title: 'Ser claro e objetivo', desc: 'Comunique o status atual de forma simples, evitando termos técnicos desnecessários.' },
                        { title: 'Reforçar o acompanhamento', desc: 'Mostre que o caso continua em análise ou execução, e que a empresa está atenta à necessidade do cliente.' },
                        { title: 'Transmitir segurança', desc: 'Utilize uma linguagem empática, que passe confiança e profissionalismo.' },
                        { title: 'Evitar o silêncio', desc: 'Mesmo sem novidades relevantes, informe que o processo está em andamento. Isso evita insegurança e possíveis reclamações.' }
                    ].map((item, idx) => (
                        <li key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <strong className="block mb-2 text-blue-600 dark:text-blue-400">{item.title}</strong>
                            <span className="text-sm">{item.desc}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">3. Registro dos Contatos</h2>
                <p>Anote cada feedback enviado em nossa plataforma <strong>w-GSC</strong> para manter o histórico atualizado e facilitar consultas futuras.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2">4. Benefícios do Feedback Contínuo</h2>
                <p>Essa prática não apenas mantém o cliente informado, mas também:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Contribui para reduzir a ansiedade do cliente.</li>
                    <li>Minimiza insatisfações.</li>
                    <li>Melhora a percepção da qualidade do atendimento.</li>
                </ul>
            </section>
        </div>
    );
};

export default {
    content: PoliticaFeedbackContent
};
