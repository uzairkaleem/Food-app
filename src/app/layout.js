import "./globals.css";
import Header from "./_components/Header";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        
        {children}
      </body>
    </html>
  );
}
