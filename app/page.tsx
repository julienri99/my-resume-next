import Image from "next/image";
import testImg from "@/app/images/test.png";

export default function Home() {
  return (
    <main className="pt-10 flex flex-col items-center text-center px-4">



      <div className="max-w-2xl p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-8 animate-fade-in">
          About Me
        </h1>
        <Image
          className="rounded-lg mx-auto transition-transform duration-300 hover:scale-105"
          src={testImg}
          width={300}
          height={200}
          alt="test"
        />

        <div className="mt-6 space-y-3 text-lg text-gray-800">
          <p>I am a passionate developer with experience in modern web applications.</p>
          <p>Skilled in <span className="font-medium text-blue-400">JavaScript, TypeScript, React, Next.js</span>, I enjoy building user-friendly solutions.</p>
          <p>In my free time, I explore new technologies & contribute to open-source projects.</p>
          <p className="font-semibold text-pink-400">Let's connect and create something amazing!</p>
        </div>

      </div>
    </main>
  );
}
