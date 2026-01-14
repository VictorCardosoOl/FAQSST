import React from 'react';

const TimelineStep = ({ number, title, desc, isError }: { number: string, title: string, desc: string, isError?: boolean }) => (
    <div className={`flex-1 min-w-[150px] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-t-4 ${isError ? 'border-red-500' : 'border-blue-500'} text-center relative`}>
        <div className={`w-8 h-8 rounded-full ${isError ? 'bg-red-500' : 'bg-blue-500'} text-white font-bold flex items-center justify-center mx-auto mb-3`}>
            {number}
        </div>
        <h3 className="font-bold text-gray-700 dark:text-gray-200 text-sm mb-1">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{desc}</p>
    </div>
);

const Arrow = () => (
    <div className="text-blue-500 text-2xl font-bold px-2 hidden md:block">→</div>
);

const ErroDuplicidadeEmpresaContent = () => {
    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg text-center border border-red-100 dark:border-red-800">
                <h1 className="text-2xl font-bold text-red-800 dark:text-red-300">Erro de Duplicidade ao Cadastrar Empresa</h1>
                <p className="text-red-700 dark:text-red-200">
                    Resolução de conflitos quando um Prospect com pedidos não aprovados impede novo cadastro.
                </p>
            </div>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">Análise do Caso</h2>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl overflow-x-auto">
                    <div className="flex flex-col md:flex-row items-center gap-4 min-w-max md:min-w-0">
                        <TimelineStep number="1" title="Cadastro Inicial" desc="Dois pedidos gerados como Prospect" />
                        <Arrow />
                        <TimelineStep number="2" title="Não Aprovados" desc="Nenhum pedido foi aprovado" />
                        <Arrow />
                        <TimelineStep number="3" title="Exclusão" desc="Prospect excluído do sistema" isError />
                        <Arrow />
                        <TimelineStep number="4" title="Novo Cadastro" desc="Erro de duplicidade (CNPJ preso)" isError />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-500">
                        <strong className="block text-red-700 dark:text-red-400 mb-1">Motivo Técnico</strong>
                        <p className="text-sm">O sistema mantém referência do CNPJ mesmo após exclusão do prospect quando há pedidos pendentes associados.</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500">
                        <strong className="block text-green-700 dark:text-green-400 mb-1">Regra de Negócio</strong>
                        <p className="text-sm">A migração para "Empresas" só ocorre automaticamente após a aprovação de pelo menos um pedido.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6">Solução Definitiva</h2>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <strong className="block text-lg">Restaurar o Prospect</strong>
                            <p className="text-sm opacity-80">Recupere o cadastro original no módulo Prospects (use filtros de inativos se necessário).</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <strong className="block text-lg">Aprovar Pedido Pendente</strong>
                            <p className="text-sm opacity-80">Não crie um novo. Aprove um dos pedidos existentes que estava travado.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <strong className="block text-lg text-green-700 dark:text-green-400">Migração Automática</strong>
                            <p className="text-sm opacity-80">Ao aprovar, o sistema converte automaticamente o Prospect em Empresa, mantendo o histórico.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Vantagens desta solução:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-green-700 dark:text-green-200">
                        <li>Preserva todos os dados históricos.</li>
                        <li>Evita necessidade de cadastro manual.</li>
                        <li>Não requer intervenção técnica no banco de dados.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default {
    content: ErroDuplicidadeEmpresaContent
};
