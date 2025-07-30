import NotesList from '@/components/features/NotesList';
import NoteForm from '@/components/features/NoteForm';

const HomePage = () => {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default HomePage;