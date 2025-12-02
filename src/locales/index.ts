import { en } from './en';
import { ru } from './ru';
import { pl } from './pl';

export const translations = {
  en,
  ru,
  pl
};

export type Translations = typeof en;
export type Language = keyof typeof translations;
