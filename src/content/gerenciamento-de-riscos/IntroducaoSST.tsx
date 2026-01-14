import React from 'react';

const IntroducaoSSTContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <section>
                <h2>Saúde e Segurança no Trabalho</h2>
                <p>
                    Conjunto de normas e procedimentos exigidos legalmente para proteger a integridade física e mental do trabalhador.
                </p>
            </section>

            <section>
                <h2>O que é SST?</h2>
                <ul>
                    <li>Minimizar ou eliminar riscos no ambiente.</li>
                    <li>Reduzir custos com acidentes e afastamentos.</li>
                    <li>Promover saúde e qualidade de vida.</li>
                    <li>Cumprir exigências legais (MTE, Previdência).</li>
                </ul>
            </section>

            <section>
                <h2>Principais Normas Regulamentadoras</h2>
                <ul>
                    <li>
                        <strong>NR-01 (Disposições Gerais e GRO):</strong> Estabelece as diretrizes para o Gerenciamento de Riscos Ocupacionais (PGR).
                    </li>
                    <li>
                        <strong>NR-05 (CIPA):</strong> Comissão Interna de Prevenção de Acidentes e Assédio. Obrigatória conforme dimensionamento.
                    </li>
                    <li>
                        <strong>NR-07 (PCMSO):</strong> Programa de Controle Médico de Saúde Ocupacional. Define os exames (ASO).
                    </li>
                    <li>
                        <strong>NR-15 (Insalubridade):</strong> Atividades que expõem a danos à saúde (químico, físico, biológico). Gera adicional.
                    </li>
                    <li>
                        <strong>NR-16 (Periculosidade):</strong> Atividades com risco iminente de morte (explosivos, eletricidade, etc). Gera adicional.
                    </li>
                    <li>
                        <strong>NR-17 (Ergonomia):</strong> Adaptação do trabalho às características psicofisiológicas dos trabalhadores.
                    </li>
                    <li>
                        <strong>NR-35 (Trabalho em Altura):</strong> Requisitos e medidas de proteção para trabalho acima de 2,00m.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default {
    content: IntroducaoSSTContent
};
