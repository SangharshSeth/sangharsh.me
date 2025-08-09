import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Sangharsh Seth | Backend Engineer',
  description: 'Senior Backend Engineer specializing in distributed systems, event-driven architectures, and scalable microservices.',
  keywords: ['Backend Engineer', 'Distributed Systems', 'Node.js', 'Go', 'AWS', 'Microservices'],
  authors: [{ name: 'Sangharsh Seth' }],
  openGraph: {
    title: 'Sangharsh Seth | Backend Engineer',
    description: 'Senior Backend Engineer specializing in distributed systems and scalable architectures',
    url: 'https://sangharsh.me',
    siteName: 'Sangharsh Seth',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sangharsh Seth | Backend Engineer',
    description: 'Senior Backend Engineer specializing in distributed systems and scalable architectures',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
