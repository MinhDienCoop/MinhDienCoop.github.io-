import { Nunito } from "next/font/google";

import "@/app/globals.css";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";

const fontBase = Nunito({ subsets: ["latin", "vietnamese"] });

export const metadata = {
  title: "Mdc",
  description: "Generated by create Mdc Team",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontBase.className} bg-[#f5f5f5]`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main id="page-main">
          <div className="page-main-content min-h-[300px]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
