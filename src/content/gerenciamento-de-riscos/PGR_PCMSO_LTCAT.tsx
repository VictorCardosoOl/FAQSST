import React from 'react';

const DocCard = ({ title, sub, color, children }: { title: string, sub: string, color: string, children: React.ReactNode }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border-l-8 ${color} overflow-hidden`}>
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
            <p className="text-gray-500 text-sm mt-1">{sub}</p>
        </div>
        <div className="p-6 text-gray-600 dark:text-gray-300 space-y-4">
            {children}
        </div>
    </div>
);

const PGR_PCMSO_LTCATContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4 text-[var(--accent)]">Documentos Ocupacionais</h1>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                    Guia técnico sobre os principais programas e laudos do Sigo Web: PGR, PCMSO e LTCAT.
                </p>
            </div>

            <div className="space-y-8">
                {/* PGR */}
                <DocCard title="PGR" sub="Programa de Gerenciamento de Riscos (NR-01)" color="border-blue-500">
                    <p>
                        Documento base da gestão de SST. Identifica perigos, avalia riscos e propõe medidas de controle.
                        Substituiu o antigo PPRA.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                        <strong className="block text-blue-800 dark:text-blue-300 mb-2">Características Técnicas:</strong>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><strong>Periodicidade:</strong> Revisão bienal (ou quando houver mudanças).</li>
                            <li><strong>Conteúdo:</strong> Inventário de Riscos + Plano de Ação.</li>
                            <li><strong>Integração:</strong> Alimenta o S-2240 no eSocial (se houver riscos).</li>
                        </ul>
                    </div>
                </DocCard>

                {/* PCMSO */}
                <DocCard title="PCMSO" sub="Programa de Controle Médico de Saúde Ocupacional (NR-07)" color="border-green-500">
                    <p>
                        Programa que monitora a saúde dos trabalhadores com base nos riscos identificados no PGR.
                        Define quais exames devem ser realizados.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                        <strong className="block text-green-800 dark:text-green-300 mb-2">Exames & ASO:</strong>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><strong>Tipos:</strong> Admissional, Periódico, Retorno ao Trabalho, Mudança de Risco, Demissional.</li>
                            <li><strong>ASO:</strong> O Atestado de Saúde Ocupacional é o documento final entregue ao funcionário.</li>
                            <li><strong>Integração:</strong> Gera o evento S-2220 no eSocial.</li>
                        </ul>
                    </div>
                </DocCard>

                {/* LTCAT */}
                <DocCard title="LTCAT" sub="Laudo Técnico das Condições Ambientais de Trabalho (INSS)" color="border-purple-500">
                    <p>
                        Documento exclusivamente <strong>previdenciário</strong>. O objetivo é comprovar se há direito à Aposentadoria Especial.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                        <strong className="block text-purple-800 dark:text-purple-300 mb-2">Diferenciais:</strong>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><strong>Não é NR:</strong> Regido pela legislação previdenciária (Decreto 3.048/99).</li>
                            <li><strong>Foco:</strong> Aposentadoria Especial (Agentes Nocivos).</li>
                            <li><strong>PPP:</strong> É a base técnica para a emissão do PPP (Perfil Profissiográfico Previdenciário).</li>
                            <li><strong>Obrigatoriedade:</strong> Mesmo empresas sem risco devem ter para comprovar a ausência ("LTCAT Negativo").</li>
                        </ul>
                    </div>
                </DocCard>
            </div>
        </div>
    );
};

export default {
    content: PGR_PCMSO_LTCATContent
};
