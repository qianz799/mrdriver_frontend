
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
    en: 'Fleets',
    zh: '车队',
    ja: '車両',
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
  'all_vehicles': {
    en: 'All Vehicles',
    zh: '所有车辆',
    ja: 'すべての車両',
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
    en: 'Luxury Transportation Experience',
    zh: '豪华交通体验',
    ja: '豪華な交通体験',
  },
  'contact_form': {
    en: 'Contact Form',
    zh: '联系表格',
    ja: 'お問い合わせフォーム',
  },
  'luxury_transportation': {
    en: 'Luxury Transportation',
    zh: '豪华交通',
    ja: '豪華な輸送',
  },
  'our_luxury_fleet': {
    en: 'Our Luxury Fleet',
    zh: '我们的豪华车队',
    ja: '当社の高級車両',
  },
  'our_fleet': {
    en: 'Our Fleet',
    zh: '我们的车队',
    ja: '当社の車両',
  },
  'passengers': {
    en: 'Passengers',
    zh: '乘客',
    ja: '乗客',
  },
  'interior': {
    en: 'Interior',
    zh: '内饰',
    ja: '内装',
  },
  'wifi': {
    en: 'WiFi',
    zh: '无线网络',
    ja: 'Wi-Fi',
  },
  'bag_capacity': {
    en: 'Bag Capacity',
    zh: '行李容量',
    ja: '荷物容量',
  },
  'per_hour': {
    en: 'per hour',
    zh: '每小时',
    ja: '毎時間',
  },
  'our_services': {
    en: 'Our Services',
    zh: '我们的服务',
    ja: '当社のサービス',
  },
  'services': {
    en: 'Services',
    zh: '服务',
    ja: 'サービス',
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
