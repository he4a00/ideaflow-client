import Sidebar from '@/components/shared/Sidebar';
import QueryProvider from '@/components/providers/QueryProvider';
import '../globals.css';
import { UserProvider } from '@/app/context/UserContext';
import { Navbar } from '@/components/shared/Navbar';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Profile',
  description: 'Profile',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <QueryProvider>
            <Navbar/>
            <div className="flex h-screen">
              <div className="md:w-[250px] w-[80px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#F5F3FF]">
                <Sidebar />
              </div>
              <div className="flex-1 p-6 bg-white">{children}</div>
            </div>
          </QueryProvider>
        </UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
