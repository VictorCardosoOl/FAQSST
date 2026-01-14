import React from 'react';

const CONTACTS = {
    ramais: [
        { area: 'Comercial', value: '218' },
        { area: 'Financeiro', value: '222' },
        { area: 'Desenvolvimento', value: '230' },
        { area: 'Recepção', value: '200' },
    ],
    emails: [
        { area: 'Comercial', value: 'comercial@wisesystem.com.br' },
        { area: 'Financeiro', value: 'financeiro@wisesystem.com.br' },
        { area: 'Relacionamento', value: 'relacionamento@wisesystem.com.br' },
        { area: 'Suporte', value: 'suporte@wisesystem.com.br' },
    ],
    whatsapp: [
        { area: 'Comercial', value: '11 97744-4017', link: 'https://wa.me/5511977444017' },
        { area: 'Financeiro', value: '11 91721-1256', link: 'https://wa.me/5511917211256' },
        { area: 'Relacionamento', value: '11 2295-4137', link: 'https://wa.me/551122954137' },
        { area: 'Suporte', value: '11 2609-1029', link: 'https://wa.me/551126091029' },
    ]
};

const ContactCard = ({ area, value, link, type }: { area: string, value: string, link?: string, type: string }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:translate-y-[-2px] transition-transform">
        <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-1">{area}</h3>
        {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-mono text-sm block">
                {value} ↗
            </a>
        ) : (
            <span className={`font-mono text-sm block ${type === 'email' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'}`}>
                {type === 'email' ? <a href={`mailto:${value}`}>{value}</a> : value}
            </span>
        )}
    </div>
);

const ContatosInternosContent = () => {
    return (
        <div className="space-y-12 text-[var(--text-main)]">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-100 dark:border-blue-800">
                <h1 className="text-2xl font-bold text-sky-800 dark:text-sky-300">Contatos Internos</h1>
                <p className="text-sky-600 dark:text-sky-200">Consulte abaixo os ramais, e-mails e formas de contato com os setores da Wise System.</p>
            </div>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6 flex items-center gap-2">
                    ☎️ Ramais Internos
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {CONTACTS.ramais.map(c => <ContactCard key={c.area} {...c} type="ramal" />)}
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6 flex items-center gap-2">
                    ✉️ E-mails
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {CONTACTS.emails.map(c => <ContactCard key={c.area} {...c} type="email" />)}
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-[var(--accent)] border-b pb-2 mb-6 flex items-center gap-2">
                    📱 WhatsApp
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {CONTACTS.whatsapp.map(c => <ContactCard key={c.area} {...c} type="whatsapp" />)}
                </div>
            </section>
        </div>
    );
};

export default {
    content: ContatosInternosContent
};
