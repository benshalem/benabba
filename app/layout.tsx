import "./globals.css"; // <--- Placed at the very top!
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transform Your Photos into Unforgettable Cinematic Motion",
  description: "Official site of Ben Abba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We removed the hardcoded background colors here so your CSS variables and .site-bg work */}
      <body>
        
        {/* Main Wrapper for Desktop/Mobile Layout */}
        <div className="flex justify-center w-full min-h-screen relative z-10">
          
          {/* LEFT SIDEBAR (PC Only - Transparent to show your background) */}
          <aside className="hidden lg:block w-[300px] p-4">
            {/* You can add desktop-only links or content here later */}
          </aside>

          {/* CENTER CONTENT (Mobile View & Main Site) */}
          <main className="w-full max-w-md min-h-screen relative">
            {children}
          </main>

          {/* RIGHT SIDEBAR (PC Only - Transparent to show your background) */}
          <aside className="hidden lg:block w-[300px] p-4">
            {/* You can add desktop-only content here later */}
          </aside>
          
        </div>
        
      </body>
    </html>
  );
}