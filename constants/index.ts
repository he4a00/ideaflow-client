'use client';
import { BookOpen, Star, Grid } from 'lucide-react';

export const SideBarItems = (userID: string) => [
  {
    title: 'My diagrams',
    href: `/profile/${userID}/diagrams`,
    icon: BookOpen,
  },
  {
    title: 'My favorites',
    href: `/profile/${userID}/favorites`,
    icon: Star,
  },
  {
    title: 'Browse templates',
    href: `/templates`,
    icon: Grid,
  },
];

export const AiModels = [
  {
    name: 'DeepSeek',
    value: 0,
    iconPath: '/deepseek.svg',
  },
  {
    name: 'Gemini',
    value: 1,
    iconPath: '/gemini.svg',
  },
];
