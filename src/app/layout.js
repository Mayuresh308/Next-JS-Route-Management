// import "./globals.css"; 
// import Link from "next/link";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>My Next.js App</title>
//       </head>
//       <body className="bg-gray-900 text-white flex flex-col min-h-screen">
//         <nav className="bg-blue-600 p-4 text-white flex justify-center gap-6 text-lg">
//           <a href="/" className="hover:underline">Home</a>
//           <a href="/about" className="hover:underline">About</a>
//           <a href="/contact" className="hover:underline">Contact</a>
//         </nav>
//         <main className="flex flex-1 items-center justify-center p-6">{children}</main>
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import Link from "next/link"; // Import Link component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <nav className="bg-blue-600 p-4 text-white flex justify-center gap-6 text-lg">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <main className="flex flex-1 items-center justify-center p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
