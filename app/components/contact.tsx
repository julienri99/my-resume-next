import { FaLine, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 text-center flex flex-col items-center"
    >
      <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-10">
        Contact
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        Feel free to reach out to me for work opportunities, collaboration, or questions!
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {/* LINE */}
        <a
          href="https://line.me/ti/p/-Fd_nts2Ic"
          target="_blank"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg 
          bg-green-500/20 text-green-400 border border-green-400/30
          hover:bg-green-500/30 transition"
        >
          <FaLine size={20} />
          <span className="font-medium">Contact via LINE</span>
        </a>

        {/* EMAIL */}
        <a
          href="mailto:julienriviere2542@gmail.com"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg 
          bg-blue-500/20 text-blue-400 border border-blue-400/30
          hover:bg-blue-500/30 transition"
        >
          <FaEnvelope size={20} />
          <span className="font-medium">julienriviere2542@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/julien-riviere-b63940314/"
          target="_blank"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg 
          bg-blue-600/20 text-blue-500 border border-blue-500/30
          hover:bg-blue-600/30 transition"
        >
          <FaLinkedin size={20} />
          <span className="font-medium">LinkedIn Profile</span>
        </a>
      </div>
    </section>
  );
}
