import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVUS Education - Master General Paper Like Never Before",
  description: "Join Singapore's top JC students who trust NOVUS Education for GP excellence. Expert tutors from NUS and elite institutions deliver personalized learning through cutting-edge apps.",
  keywords: "General Paper, GP, Singapore, JC, tutoring, education, NOVUS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
