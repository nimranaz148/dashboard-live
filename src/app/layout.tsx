
// // src/app/layout.tsx
"use client";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger effect on route change

  const isAdmin = pathname.startsWith("/admin");

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <Toaster richColors />
          {/* {!isAdmin && !isLoading && <Header />} */}
          {/* {isLoading ? <Loading /> : children}
          {!isAdmin && !isLoading && <Footer />} */}
           
        
            <div className="min-h-screen">
              <AdminHeader />
              <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-8 bg-muted/40">{children}</main>
              </div>
            </div>
        
        </body>
      </html>
    </ClerkProvider>
  );
}