import '@/app/globals.css';
import { ReactNode } from 'react';
import { NotesProvider } from '@/contexts/NotesContext';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4">{children}</main>
            <Footer />
          </div>
        </NotesProvider>
      </body>
    </html>
  );
};

export default Layout;
