
import React, { createContext, useState, useContext } from 'react';

type Language = 'en' | 'zh' | 'ja';

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

const translations: Translations = {
  'home': {
    en: 'Home',
    zh: '首页',
    ja: 'ホーム',
  },
  'about': {
    en: 'About',
    zh: '关于我们',
    ja: '会社概要',
  },
  'properties': {
    en: 'Properties',
    zh: '房产',
    ja: '物件',
  },
  'contact': {
    en: 'Contact',
    zh: '联系我们',
    ja: 'お問い合わせ',
  },
  'book_now': {
    en: 'Book Now',
    zh: '立即预订',
    ja: '今予約する',
  },
  'view_details': {
    en: 'View Details',
    zh: '查看详情',
    ja: '詳細を見る',
  },
  'discover_luxury': {
    en: 'Discover Luxury Vacation Rentals',
    zh: '发现豪华度假屋',
    ja: '豪華なバケーションレンタルを見つける',
  },
  'featured_properties': {
    en: 'Featured Properties',
    zh: '精选房产',
    ja: 'おすすめ物件',
  },
  'contact_us': {
    en: 'Contact Us',
    zh: '联系我们',
    ja: 'お問い合わせ',
  },
  'name': {
    en: 'Name',
    zh: '姓名',
    ja: '名前',
  },
  'email': {
    en: 'Email',
    zh: '电子邮件',
    ja: 'メール',
  },
  'message': {
    en: 'Message',
    zh: '留言',
    ja: 'メッセージ',
  },
  'send': {
    en: 'Send',
    zh: '发送',
    ja: '送信',
  },
  'all_properties': {
    en: 'All Properties',
    zh: '所有房产',
    ja: 'すべての物件',
  },
  'bedroom': {
    en: 'Bedroom',
    zh: '卧室',
    ja: '寝室',
  },
  'bedrooms': {
    en: 'Bedrooms',
    zh: '卧室',
    ja: '寝室',
  },
  'bathroom': {
    en: 'Bathroom',
    zh: '浴室',
    ja: 'バスルーム',
  },
  'bathrooms': {
    en: 'Bathrooms',
    zh: '浴室',
    ja: 'バスルーム',
  },
  'guests': {
    en: 'Guests',
    zh: '客人',
    ja: 'ゲスト',
  },
  'per_night': {
    en: 'per night',
    zh: '每晚',
    ja: '一泊',
  },
  'about_us': {
    en: 'About Us',
    zh: '关于我们',
    ja: '会社概要',
  },
  'luxury_experience': {
    en: 'Luxury Vacation Experience',
    zh: '豪华度假体验',
    ja: '豪華なバケーション体験',
  },
  'contact_form': {
    en: 'Contact Form',
    zh: '联系表格',
    ja: 'お問い合わせフォーム',
  },
};

// Add more translations as needed

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translations[key][language] || translations[key]['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
