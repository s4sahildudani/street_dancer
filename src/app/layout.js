import "./globals.css";

export const metadata = {
  title: "Welcome to Street Dancers",
  description: "Make Dance Skills to Next  Level",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
