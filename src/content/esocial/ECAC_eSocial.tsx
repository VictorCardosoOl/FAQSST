import React from 'react';

const ServiceItem = ({ title, bg }: { title: string, bg: string }) => (
    <div className={`${bg} p-4 rounded-lg text-center font-medium shadow-sm`}>
        {title}
    </div>
);

const ECAC_eSocialContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="bg-gradient-to-br from-green-600 to-teal-700 p-8 rounded-2xl text-center text-white">
                <h1 className="text-3xl font-bold mb-2">e-CAC e eSocial</h1>
                <p className="opacity-90 max-w-2xl mx-auto">
                    Central Virtual de Atendimento ao Contribuinte: A porta de entrada para a gestão fiscal e trabalhista.
                </p>
            </div>

            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-xl">🔑</div>
                    <h2 className="text-2xl font-bold text-[var(--accent)]">O que é o e-CAC?</h2>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <p className="mb-6 leading-relaxed">
                        O <strong>e-CAC (Centro Virtual de Atendimento)</strong> é a plataforma da Receita Federal que centraliza serviços fiscais. Para o eSocial, ele é fundamental pois é através dele que se gerencia a <strong>Procuração Eletrônica</strong>, permitindo que contabilidades e empresas de SST enviem eventos em nome do empregador.
                    </p>

                    <h3 className="font-bold mb-4 text-gray-700 dark:text-gray-300">Principais Serviços para SST:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <ServiceItem title="Procurações" bg="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" />
                        <ServiceItem title="Consulta Pendências" bg="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300" />
                        <ServiceItem title="Situação Fiscal" bg="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300" />
                        <ServiceItem title="Caixa Postal" bg="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300" />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-8 text-[var(--accent)] text-center">Fluxo de Procuração</h2>
                {/* Visual Diagram */}
                <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900/50 p-8 rounded-xl relative">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -z-1 hidden md:block"></div>

                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-0">
                        {/* Step 1 */}
                        <div className="text-center flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-b-4 border-green-500 w-full md:w-1/3">
                            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mb-3">1</div>
                            <h4 className="font-bold mb-2">Empresa (Empregador)</h4>
                            <p className="text-xs text-gray-500">Acessa o e-CAC com Certificado Digital (e-CNPJ)</p>
                        </div>

                        {/* Arrow Mobile */}
                        <div className="md:hidden text-center text-2xl text-gray-300">↓</div>

                        {/* Step 2 */}
                        <div className="text-center flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-b-4 border-blue-500 w-full md:w-1/3">
                            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mb-3">2</div>
                            <h4 className="font-bold mb-2">Cadastro Procuração</h4>
                            <p className="text-xs text-gray-500">Autoriza a Wise System (ou Contabilidade) a enviar eventos SST</p>
                        </div>

                        {/* Arrow Mobile */}
                        <div className="md:hidden text-center text-2xl text-gray-300">↓</div>

                        {/* Step 3 */}
                        <div className="text-center flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-b-4 border-purple-500 w-full md:w-1/3">
                            <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xl font-bold mb-3">3</div>
                            <h4 className="font-bold mb-2">Envio dos Eventos</h4>
                            <p className="text-xs text-gray-500">Wise System transmite XMLs assinados digitalmente</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-lg text-sm border-l-4 border-yellow-400">
                <strong className="block text-lg mb-2 text-yellow-800 dark:text-yellow-200">Importante: Validade do Certificado</strong>
                <p>
                    A procuração eletrônica <strong>não</strong> substitui a necessidade do empregador possuir um Certificado Digital válido para o primeiro acesso.
                    Porém, uma vez cadastrada a procuração, a Wise System utiliza o <strong>próprio certificado</strong> para assinar os envios, facilitando a operação diária.
                </p>
            </div>
        </div>
    );
};

export default {
    content: ECAC_eSocialContent
};
