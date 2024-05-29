import "./globals.css";

export const metadata = {
  title: "Bangkok Sticker",
  description: "เว็บเปลี่ยนสติกเกอร์คานรางรถไฟฟ้า",
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
