import "./globals.css";
import { Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "SocialHour",
  description: "Your city. Your scene.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
