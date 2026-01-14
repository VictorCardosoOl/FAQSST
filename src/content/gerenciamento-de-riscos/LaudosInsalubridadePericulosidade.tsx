import React from 'react';

const LaudosInsalubridadePericulosidadeContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <section>
                <h2>LI x LP: Qual a diferença?</h2>
                <p>
                    Entenda as distinções entre Laudo de Insalubridade e Periculosidade e seus impactos na folha de pagamento.
                </p>
            </section>

            <section>
                <h3>Comparativo</h3>

                <h4>Insalubridade (LI)</h4>
                <ul>
                    <li><strong>Norma:</strong> NR-15</li>
                    <li><strong>Risco:</strong> Danos à saúde (Longo Prazo). Ex: Ruído, Produtos Químicos.</li>
                    <li><strong>Adicional:</strong> 10%, 20% ou 40% sobre o Salário Mínimo.</li>
                    <li><strong>Eliminação:</strong> Possível com EPI eficaz.</li>
                </ul>

                <h4>Periculosidade (LP)</h4>
                <ul>
                    <li><strong>Norma:</strong> NR-16</li>
                    <li><strong>Risco:</strong> Risco de Morte (Imediato). Ex: Explosivos, Eletricidade, Inflamáveis.</li>
                    <li><strong>Adicional:</strong> 30% sobre o Salário Base.</li>
                    <li><strong>Eliminação:</strong> Difícil (Risco inerente à atividade).</li>
                </ul>
            </section>

            <section>
                <h3>Quando solicitar LI?</h3>
                <ul>
                    <li>Admissão em local com ruído, calor ou químicos.</li>
                    <li>Mudança de layout ou maquinário.</li>
                    <li>Implementação de novos produtos químicos.</li>
                    <li>Fiscalizações ou Reclamações Trabalhistas.</li>
                </ul>
            </section>

            <section>
                <h3>Quando solicitar LP?</h3>
                <ul>
                    <li>Frentistas, Eletricistas, Vigilantes Armados.</li>
                    <li>Operações com Motocicleta (Motoboy).</li>
                    <li>Armazenamento de inflamáveis no local.</li>
                    <li>Atividades com radiação ionizante.</li>
                </ul>
            </section>
        </div>
    );
};

export default {
    content: LaudosInsalubridadePericulosidadeContent
};
