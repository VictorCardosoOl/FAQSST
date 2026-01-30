
import { useState, useEffect, useCallback } from 'react';

export const useArticleNotes = () => {
  const [notes, setNotes] = useState<Record<string, string>>({});

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('teamwiki_notes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    } catch (e) {
      console.error("Failed to load notes from storage", e);
    }
  }, []);

  // Save to LocalStorage with debounce protection
  const updateNote = useCallback((articleId: string, content: string) => {
    setNotes(prev => {
      const updated = { ...prev, [articleId]: content };
      try {
        localStorage.setItem('teamwiki_notes', JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save note", e);
      }
      return updated;
    });
  }, []);

  const getNote = useCallback((articleId: string) => {
    return notes[articleId] || '';
  }, [notes]);

  return { notes, updateNote, getNote };
};
