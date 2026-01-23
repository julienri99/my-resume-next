import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import Image from "next/image";
import project1 from "@/app/images/page1.png";

export default function Projects() {
    const projects = [
        {
            title: "e-WorkPermit",
            image: project1,
            description: "A web platform developed by the Department of Employment for employers and foreign workers to manage work permit processes in Thailand.",
            tech: ["C#", "Bootstrap", "JavaScript"],
            demo: "https://eworkpermit.doe.go.th/"
        }
    ];

    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-20 text-center flex flex-col items-center"
        >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-10">
                Projects
            </h1>

            <div
                className={"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8"
                }
            >
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg overflow-hidden
            hover:shadow-xl hover:scale-[1.02] transition duration-300"
                    >
                        <Image
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-100 object-cover"
                        />

                        <div className="p-6 text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {proj.title}
                            </h2>
                            <p className="text-gray-400 text-sm mb-4">{proj.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {proj.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                {/* <a href={proj.github} target="_blank" className="flex items-center gap-1 text-gray-200 hover:text-white transition">
                  <FaGithubAlt /> Code
                </a> */}
                                <a
                                    href={proj.demo}
                                    target="_blank"
                                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
                                >
                                    <FaExternalLinkAlt /> Link
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
