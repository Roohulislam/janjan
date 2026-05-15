// src/utils/searchUtils.js
import { allWebsiteContent } from './websiteContent';

export const searchAllContent = (query) => {
  if (!query.trim()) return [];
  
  const lowerCaseQuery = query.toLowerCase();
  
  return allWebsiteContent.filter(item => {
    return (
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery) ||
      item.content.toLowerCase().includes(lowerCaseQuery) ||
      item.keywords?.some(keyword => keyword.toLowerCase().includes(lowerCaseQuery))
    );
  });
};