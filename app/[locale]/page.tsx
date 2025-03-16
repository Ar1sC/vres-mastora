import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
      <p className="text-lg mb-4">{t('description')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('features.title')}</h2>
          <ul className="space-y-2">
            <li>{t('features.item1')}</li>
            <li>{t('features.item2')}</li>
            <li>{t('features.item3')}</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('benefits.title')}</h2>
          <ul className="space-y-2">
            <li>{t('benefits.item1')}</li>
            <li>{t('benefits.item2')}</li>
            <li>{t('benefits.item3')}</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('cta.title')}</h2>
          <p className="mb-4">{t('cta.description')}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            {t('cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
} 