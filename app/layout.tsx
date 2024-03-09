import './ui/global.css';
import {montserrat} from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className={'py-10 flex justify-center items-center'}>Made with ❤️ by Andres</footer>
      </body>
    </html>
  );
}
