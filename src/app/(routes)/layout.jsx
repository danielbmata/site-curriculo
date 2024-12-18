import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900">
      <div className="flex flex-1 relative">
        <div className="flex flex-1 flex-col lg:flex-row">
          <Sidebar />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
} 