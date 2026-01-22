import { FaCode, FaCogs, FaTools } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiReact, SiNextdotjs, SiDotnet, SiGit, SiGithub
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function Skill() {
    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            <div className="max-w-2xl p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up">


                <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-8 animate-fade-in">                    Skills & Tech Stack
                </h1>
                <p className="mb-8 text-lg text-gray-800">
                    I can work across front-end, back-end, and full-stack environments using modern technologies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    {/* Languages */}
                    <div className="p-6 rounded-2xl border border-white/5 bg-[#121212]/80 backdrop-blur-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300">
                        <div className="flex items-center gap-2 mb-2">
                            <FaCode className="text-gray-200" />
                            <h3 className="font-semibold text-gray-100">Languages</h3>
                        </div>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2"><SiJavascript className="text-[#F7DF1E]" /> <span className="text-gray-300">JavaScript</span></li>
                            <li className="flex items-center gap-2"><SiTypescript className="text-[#3178C6]" /> <span className="text-gray-300">TypeScript</span></li>
                            <li className="flex items-center gap-2"><SiHtml5 className="text-[#E34F26]" /> <span className="text-gray-300">HTML</span></li>
                            <li className="flex items-center gap-2"><SiCss3 className="text-[#1572B6]" /> <span className="text-gray-300">CSS</span></li>
                            <li className="flex items-center gap-2"><SiDotnet className="text-[#512BD4]" /> <span className="text-gray-300">C#</span></li>
                        </ul>
                    </div>

                    {/* Frameworks */}
                    <div className="p-6 rounded-2xl border border-white/5 bg-[#121212]/80 backdrop-blur-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300">
                        <div className="flex items-center gap-2 mb-2">
                            <FaCogs className="text-gray-200" />
                            <h3 className="font-semibold text-gray-100">Frameworks</h3>
                        </div>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2"><SiReact className="text-[#61DAFB]" /> <span className="text-gray-300">React</span></li>
                            <li className="flex items-center gap-2"><SiNextdotjs className="text-gray-200" /> <span className="text-gray-300">Next.js</span></li>
                            <li className="flex items-center gap-2"><SiDotnet className="text-[#512BD4]" /> <span className="text-gray-300">ASP.NET MVC</span></li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="p-6 rounded-2xl border border-white/5 bg-[#121212]/80 backdrop-blur-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300">
                        <div className="flex items-center gap-2 mb-2">
                            <FaTools className="text-gray-200" />
                            <h3 className="font-semibold text-gray-100">Tools</h3>
                        </div>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2"><SiGit className="text-[#F05032]" /> <span className="text-gray-300">Git</span></li>
                            <li className="flex items-center gap-2"><SiGithub className="text-gray-200" /> <span className="text-gray-300">GitHub</span></li>
                            <li className="flex items-center gap-2"><BiLogoVisualStudio className="text-[#007ACC]" /> <span className="text-gray-300">VS Code</span></li>
                            <li className="flex items-center gap-2"><BiLogoVisualStudio className="text-[#5C2D91]" /> <span className="text-gray-300">Visual Studio</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
