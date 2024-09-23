import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
