import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`${inter.className} border-box  overflow-x-hidden scroll-smooth selection:bg-accent selection:text-slate-600`}
    >
      {children}
    </body>
  );
}
