import React from 'react';

const GuiaESocialContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <section>
                <h2>1. Fundamentação e Objetivos</h2>
                <h3>Contexto Histórico</h3>
                <ul>
                    <li><strong>Criação:</strong> 11 de Dezembro de 2014</li>
                    <li><strong>Obrigatoriedade Geral:</strong> Janeiro de 2018</li>
                    <li><strong>Base Tecnológica:</strong> SPED</li>
                    <li><strong>Participantes:</strong> Receita Federal, INSS, Caixa, Min. Trabalho</li>
                </ul>

                <h3>Principais Objetivos</h3>
                <ul>
                    <li>Eliminar multiplicidade de declarações</li>
                    <li>Reduzir custos de compliance</li>
                    <li>Aprimorar fiscalização</li>
                    <li>Garantir direitos trabalhistas</li>
                </ul>
            </section>

            <section>
                <h2>2. Fases de Implementação</h2>
                <ul>
                    <li><strong>Fase 1 (Tabelas):</strong> Cadastro do Empregador e Tabelas</li>
                    <li><strong>Fase 2 (Não Periódicos):</strong> Admissões e Afastamentos</li>
                    <li><strong>Fase 3 (Periódicos):</strong> Folha de Pagamento</li>
                    <li><strong>Fase 4 (SST):</strong> Saúde e Segurança do Trabalho</li>
                </ul>

                <blockquote>
                    <p>
                        <strong>Situação Atual:</strong> Desde 2022, a obrigatoriedade é universal para todas as empresas (Grupos 1, 2, 3 e 4), incluindo órgãos públicos.
                    </p>
                </blockquote>
            </section>

            <section>
                <h2>3. eSocial Simplificado (S-1.0)</h2>
                <p>
                    A versão S-1.0 trouxe uma redução drástica na burocracia, eliminando campos duplicados e substituindo obrigações antigas como RAIS e CAGED.
                </p>
                <ul>
                    <li><strong>-30%</strong> no Volume de Dados</li>
                    <li><strong>CNPJ</strong> como Chave Única</li>
                    <li><strong>Flexibilidade</strong> nas Novas Regras</li>
                </ul>
            </section>

            <section>
                <h2>4. Impactos nas Relações</h2>
                <h3>Para Empresas</h3>
                <ul>
                    <li>Fiscalização integrada e automática</li>
                    <li>Combate à sonegação e concorrência desleal</li>
                    <li>Redução de custos operacionais a longo prazo</li>
                    <li>Segurança jurídica nas contratações</li>
                </ul>

                <h3>Para Trabalhadores</h3>
                <ul>
                    <li>Transparência nos dados contratuais</li>
                    <li>Garantia de recolhimento de FGTS e INSS</li>
                    <li>Histórico de saúde e segurança unificado</li>
                    <li>Facilidade na concessão de benefícios</li>
                </ul>
            </section>

            <section>
                <h2>5. Dados e LGPD</h2>
                <p>O eSocial coleta diversas categorias de dados, todos tratados sob os princípios da LGPD:</p>
                <ul>
                    <li>CPF/Nome</li>
                    <li>Salários</li>
                    <li>Jornada</li>
                    <li>ASO</li>
                    <li>CAT</li>
                    <li>Exposição a Riscos</li>
                </ul>
            </section>
        </div>
    );
};

export default {
    content: GuiaESocialContent
};
