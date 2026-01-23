import Image from "next/image";
import testImg from "@/app/images/test.png";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <Image
                src={testImg} alt="Test"
                className="w-36 h-36 rounded-full shadow-xl object-cover mb-6"
            />
            <h1 className="text-4xl font-bold mb-2">Hi, I'm Julien Riviere 👋</h1>
            <p className="text-xl text-gray-600 max-w-md">
                Front-End Developer passionate about crafting modern web experiences.
            </p>
            <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/shueza007xxx/" target="_blank" className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                    Contact Me
                </a>
                <a href="https://github.com/julienri99/" target="_blank" className="px-5 py-2 rounded-full border border-gray-700 hover:bg-gray-100 transition">
                    View Projects
                </a>
            </div>
        </section>
    );
}
