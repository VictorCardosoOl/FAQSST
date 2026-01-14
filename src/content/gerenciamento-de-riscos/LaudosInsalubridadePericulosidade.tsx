import React from 'react';

const LaudosInsalubridadePericulosidadeContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4 text-[var(--accent)]">LI x LP: Qual a diferença?</h1>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                    Entenda as distinções entre Laudo de Insalubridade e Periculosidade e seus impactos na folha de pagamento.
                </p>
            </div>

            <section className="overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800 text-[var(--accent)]">
                            <th className="p-4 border-b dark:border-gray-700">Critério</th>
                            <th className="p-4 border-b dark:border-gray-700 bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200">Insalubridade (LI)</th>
                            <th className="p-4 border-b dark:border-gray-700 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200">Periculosidade (LP)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800">
                        <tr className="border-b dark:border-gray-700">
                            <td className="p-4 font-bold text-gray-700 dark:text-gray-300">Norma</td>
                            <td className="p-4">NR-15</td>
                            <td className="p-4">NR-16</td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <td className="p-4 font-bold text-gray-700 dark:text-gray-300">Risco</td>
                            <td className="p-4">Danos à saúde (Longo Prazo)<br /><span className="text-xs text-gray-500">Ex: Ruído, Produtos Químicos</span></td>
                            <td className="p-4">Risco de Morte (Imediato)<br /><span className="text-xs text-gray-500">Ex: Explosivos, Eletricidade, Inflamáveis</span></td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <td className="p-4 font-bold text-gray-700 dark:text-gray-300">Adicional</td>
                            <td className="p-4">10%, 20% ou 40%<br /><span className="text-xs text-gray-500">Sobre o Salário Mínimo</span></td>
                            <td className="p-4">30%<br /><span className="text-xs text-gray-500">Sobre o Salário Base</span></td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold text-gray-700 dark:text-gray-300">Eliminação</td>
                            <td className="p-4">Possível com EPI eficaz</td>
                            <td className="p-4">Difícil (Risco inerente à atividade)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-t-4 border-orange-400">
                    <h2 className="text-xl font-bold mb-4">Quando solicitar LI?</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Admissão em local com ruído, calor ou químicos.</li>
                        <li>Mudança de layout ou maquinário.</li>
                        <li>Implementação de novos produtos químicos.</li>
                        <li>Fiscalizações ou Reclamações Trabalhistas.</li>
                    </ul>
                </section>

                <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-t-4 border-red-500">
                    <h2 className="text-xl font-bold mb-4">Quando solicitar LP?</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Frentistas, Eletricistas, Vigilantes Armados.</li>
                        <li>Operações com Motocicleta (Motoboy).</li>
                        <li>Armazenamento de inflamáveis no local.</li>
                        <li>Atividades com radiação ionizante.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default {
    content: LaudosInsalubridadePericulosidadeContent
};
