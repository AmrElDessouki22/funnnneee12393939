'use client';

import { createContext, useContext, useState } from 'react';
import { Note } from '@/types';
import { generateId } from '@/lib/utils';

interface NotesContextType {
  notes: Note[];
  addNote: (note: Omit<Note, 'id'>) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Omit<Note, 'id'>) => {
    const newNote = { ...note, id: generateId() };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};