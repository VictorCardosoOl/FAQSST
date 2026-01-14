import React, { useState } from 'react';

const PortTable = () => (
    <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                    <th className="px-4 py-2 font-bold">Porta</th>
                    <th className="px-4 py-2 font-bold">Tecnologia</th>
                    <th className="px-4 py-2 font-bold">Segurança</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr><td className="px-4 py-2">587</td><td className="px-4 py-2">TLS/STARTTLS</td><td className="px-4 py-2 text-green-600 font-bold">Alta (Recomendada)</td></tr>
                <tr><td className="px-4 py-2">465</td><td className="px-4 py-2">SSL</td><td className="px-4 py-2 text-yellow-600">Média</td></tr>
                <tr><td className="px-4 py-2">25</td><td className="px-4 py-2">Sem criptografia</td><td className="px-4 py-2 text-red-600">Baixa (Bloqueada em muitos locais)</td></tr>
            </tbody>
        </table>
    </div>
);

const ConfiguracaoSmtpContent = () => {
    const [activeTab, setActiveTab] = useState<'requisitos' | 'sigo' | 'google'>('requisitos');

    return (
        <div className="space-y-8 text-[var(--text-main)]">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold mb-2">Configuração de Servidor SMTP</h1>
                <p className="text-sm opacity-80">
                    Habilite o envio automático de e-mails, boletos e laudos diretamente pelo SigoWeb.
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button
                    onClick={() => setActiveTab('requisitos')}
                    className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'requisitos' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    1. Conceitos & Requisitos
                </button>
                <button
                    onClick={() => setActiveTab('sigo')}
                    className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'sigo' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    2. Configurando no Sigo
                </button>
                <button
                    onClick={() => setActiveTab('google')}
                    className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'google' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    3. Especial: Google/Gmail
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4 min-h-[400px]">
                {activeTab === 'requisitos' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <section>
                            <h2 className="text-lg font-bold mb-3">O que você precisa ter:</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Uma conta de e-mail válida.</li>
                                <li>Dados do servidor SMTP do seu provedor (Endereço e Porta).</li>
                                <li>Acesso à conta para liberar configurações de segurança (se necessário).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold mb-3">Portas de Comunicação</h2>
                            <PortTable />
                        </section>

                        <section className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border-l-4 border-yellow-400">
                            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-1">Dica sobre Segurança</h3>
                            <p className="text-sm">
                                A maioria dos provedores modernos exige <strong>Autenticação (Login/Senha)</strong> e criptografia (SSL/TLS).
                                Verifique se o seu provedor de e-mail permite o acesso por aplicativos de terceiros.
                            </p>
                        </section>
                    </div>
                )}

                {activeTab === 'sigo' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    1
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Acesse Configurações</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Vá até o menu <strong>Configurações Gerais</strong> do sistema.</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    2
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Localize a Seção SMTP</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Encontre os campos referentes ao servidor de envio de e-mails.</p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    3
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Preencha os Dados</h3>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-2 font-mono text-sm border border-gray-200 dark:border-gray-700">
                                    <p><strong>Servidor SMTP:</strong> smtp.seudominio.com.br</p>
                                    <p><strong>Porta:</strong> 587 (Recomendado)</p>
                                    <p><strong>Usuário:</strong> seu@email.com.br</p>
                                    <p><strong>Senha:</strong> **********</p>
                                    <p><strong>Requer SSL:</strong> Sim</p>
                                    <p><strong>Autenticação:</strong> Sim</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                )}

                {activeTab === 'google' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-500">
                            <strong className="block text-red-700 dark:text-red-400 mb-2">Atenção: Senha de Aplicativo</strong>
                            <p className="text-sm">
                                O Google e a Microsoft (Outlook/Office365) <strong>NÃO</strong> permitem mais usar sua senha normal de login para SMTP se você tiver a verificação em duas etapas ativada (o que é obrigatório hoje em dia).
                            </p>
                        </div>

                        <section>
                            <h3 className="font-bold text-lg mb-2">Como gerar Senha de App no Google:</h3>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Acesse sua conta Google e vá em <strong>Segurança</strong>.</li>
                                <li>Verifique se a "Verificação em duas etapas" está ATIVADA.</li>
                                <li>Busque por <strong>"Senhas de App"</strong> na barra de busca das configurações.</li>
                                <li>Crie uma nova senha com o nome "SigoWeb".</li>
                                <li>O Google gerará uma senha de 16 letras (ex: <code>abcd efgh ijkl mnop</code>).</li>
                                <li>Use <strong>ESSA</strong> senha no campo de senha do SMTP no SigoWeb, e não a sua senha pessoal.</li>
                            </ol>
                        </section>

                        <div className="text-center mt-8">
                            <a
                                href="https://support.google.com/accounts/answer/185833?hl=pt-BR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Ver Tutorial Oficial do Google ↗
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default {
    content: ConfiguracaoSmtpContent
};
