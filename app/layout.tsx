import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hernando Abella's Website",
  description: "Hernando Abella's Oficial Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={shareTechMono.className}>
        <Script
          id="mailerlite-universal"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '2055858');
          `}
        </Script>
        {children}

      </body>
    </html>
  );
}
