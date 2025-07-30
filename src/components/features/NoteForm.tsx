'use client';

import { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input label="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button type="submit" label="Add Note" />
    </form>
  );
};

export default NoteForm;