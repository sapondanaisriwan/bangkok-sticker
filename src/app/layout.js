import "./globals.css";

export const metadata = {
  title: "Bangkok Sticker",
  description: "เว็บเปลี่ยนคำบนป้ายคานรางรถไฟฟ้ากรุงเทพที่กำลังมีดราม่า",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full">
      <body className="bg-gradient-to-br from-green-800 to-slate-800 bg-no-repeat h-full">
        {children}
      </body>
    </html>
  );
}
