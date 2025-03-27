import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center text-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>

        <p className="text-lg text-gray-300">Get started by editing your pages.</p>

        <div className="flex gap-4 flex-col sm:flex-row">
          {/* <a
            className="rounded-full bg-blue-600 text-white px-6 py-3 text-lg font-semibold hover:bg-blue-500 transition"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a> */}

<a
  className="rounded-full bg-blue-600 text-white px-6 py-3 text-lg font-semibold hover:bg-blue-500 transition"
  href="https://drive.google.com/file/d/12nwCFHXE016AlvJCpZSuNnSCrweI4qrp/view?usp=sharing" // Change this to the actual path of your resume file
  download="Mayuresh_Resume.pdf" // Ensures the file downloads instead of opening
>
  Resume
</a>

          <a
            className="rounded-full border border-white px-6 py-3 text-lg font-semibold hover:bg-gray-800 transition"
            href="https://portfolio-2-0-bice-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </main>

      {/* <footer className="mt-12 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="hover:underline"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="hover:underline"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="hover:underline"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}