import "./globals.css";

export const metadata = {
  title: "Bangkok Sticker",
  description: "สร้างรูปล้อเลียนจากเหตุการณ์สติกเกอร์ บนคานรางรถไฟฟ้าที่กรุงเทพ",
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
