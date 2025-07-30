'use client';

import { Note } from '@/types';
import { useNotes } from '@/contexts/NotesContext';
import Button from '@/components/ui/Button';

interface NoteItemProps {
  note: Note;
}

const NoteItem = ({ note }: NoteItemProps) => {
  const { deleteNote } = useNotes();

  return (
    <li className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p>{note.content}</p>
      <Button label="Delete" onClick={() => deleteNote(note.id)} className="mt-2" />
    </li>
  );
};

export default NoteItem;