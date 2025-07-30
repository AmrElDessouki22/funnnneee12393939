'use client';

import { useNotes } from '@/contexts/NotesContext';
import NoteItem from './NoteItem';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <ul className="mt-4 space-y-2">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NotesList;