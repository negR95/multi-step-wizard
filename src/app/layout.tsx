import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تکمیل اطلاعات | گام به گام",
  description: "فرم چندمرحله‌ای تکمیل اطلاعات کاربر",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
