import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "(Trễ Deadline)^-1 | Website giới thiệu nhóm",
  description: "Website giới thiệu nhóm, thành viên và các game tự phát triển."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <TopNav />
        <main className="container-page py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
