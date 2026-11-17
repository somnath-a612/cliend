
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navber/page";
import LenisProvider from "./lanis/page";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();

  const hiddenPages = [
    "/albumDesign",
    "/instagramPosts",
    "/invitationVideo",
  ];

  const hideNavbar = hiddenPages.some(
    (page) =>
      pathname.toLowerCase() === page.toLowerCase() ||
      pathname.toLowerCase().startsWith(page.toLowerCase() + "/")
  );

  return (
    <LenisProvider>
      {!hideNavbar && <Navbar />}

      <main className="flex-1">
        {children}
      </main>
    </LenisProvider>
  );
}
