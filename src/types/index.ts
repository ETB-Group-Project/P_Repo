/**
 * Core type definitions for the Library Recommendation System
 */

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
  rating: number;
  publishedYear: number;
  isbn: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  groups: string[]; // <--- İŞTE DİZİ TANIMI BUDUR (Yeni Ekledik)
  role: 'admin' | 'user'; // (Opsiyonel yaptık, geriye dönük uyumluluk için dursun)
  createdAt: string;
}
export interface ReadingList {
  id: string;
  userId: string;
  name: string;
  description: string;
  bookIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Recommendation {
  id: string;
  bookId: string;
  reason: string;
  confidence: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}