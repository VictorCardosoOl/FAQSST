import React from 'react';

const EventosSSTContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <section>
                <h2>Eventos de SST</h2>
                <p>
                    Conheça os eventos que substituem a CAT e o PPP, compondo o histórico laboral digital do trabalhador.
                </p>

                <h3>S-2210: Comunicação de Acidente de Trabalho</h3>
                <p>Substitui a CAT física. Deve ser enviado para qualquer acidente de trabalho, trajeto ou doença ocupacional, mesmo sem afastamento.</p>
                <ul>
                    <li><strong>Prazo:</strong> 1 dia útil após o acidente.</li>
                    <li><strong>Envio:</strong> Imediato.</li>
                </ul>

                <h3>S-2220: Monitoramento da Saúde</h3>
                <p>Substitui o PPP (Perfil Profissiográfico Previdenciário) na parte médica. Registra todos os exames (ASO) realizados pelo trabalhador.</p>
                <ul>
                    <li><strong>Prazo:</strong> Dia 15 do mês subsequente.</li>
                    <li><strong>Envio:</strong> Mensal.</li>
                </ul>

                <h3>S-2240: Condições Ambientais</h3>
                <p>Informa a exposição a agentes nocivos (Físicos, Químicos, Biológicos) e descreve as medidas de proteção (EPI/EPC). Base para Aposentadoria Especial.</p>
                <ul>
                    <li><strong>Prazo:</strong> Dia 15 do mês subsequente.</li>
                    <li><strong>Envio:</strong> Mensal/Carga Inicial.</li>
                </ul>

                <h3>S-2221: Exame Toxicológico</h3>
                <p>Exclusivo para motoristas profissionais (CLT). O envio é obrigatório na admissão e demissão.</p>
                <ul>
                    <li><strong>Prazo:</strong> Dia 15 do mês subsequente.</li>
                    <li><strong>Envio:</strong> Por evento.</li>
                </ul>
            </section>

            <section>
                <h2>Tabela de Obrigatoriedade</h2>
                <ul>
                    <li><strong>CLT:</strong> Obrigatório para S-2210, S-2220 e S-2240.</li>
                    <li><strong>Rural:</strong> Obrigatório para S-2210, S-2220 e S-2240.</li>
                    <li><strong>Doméstico:</strong> Obrigatório para S-2210, S-2220 e S-2240.</li>
                    <li><strong>Estagiário:</strong> Não há envio de eventos SST.</li>
                    <li><strong>Autônomo:</strong> Não há envio de eventos SST.</li>
                    <li><strong>Servidor (RPPS):</strong> Depende de legislações locais específicas.</li>
                </ul>
            </section>

            <section>
                <h2>⚠️ Penalidades e Multas</h2>
                <ul>
                    <li>
                        <strong>Atraso na CAT:</strong> Multa variável entre os limites mínimo e máximo do salário de contribuição, podendo dobrar em reincidência.
                    </li>
                    <li>
                        <strong>Omissão de Exames:</strong> Multas por trabalhador não informado, variando de R$ 402,53 a R$ 4.025,33.
                    </li>
                    <li>
                        <strong>Dados Incorretos:</strong> Informar riscos inexistentes ou omitir riscos reais pode gerar ações regressivas do INSS.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default {
    content: EventosSSTContent
};
