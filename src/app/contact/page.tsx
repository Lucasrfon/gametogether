import {
  EnvelopeIcon,
  CodeBracketIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 px-8">
      <div className="max-w-3xl w-full text-center space-y-14">
        {/* Cabeçalho */}
        <header>
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Shall we talk?
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Feel free to reach out to me on social media or send me an email,
            whether for feedback or any other topics.
          </p>
        </header>

        {/* Grid de contatos */}
        <section className="grid grid-cols-3 gap-8">
          <a
            href="https://www.linkedin.com/in/lucasrfon/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 hover:border-blue-500 hover:shadow-lg transition"
          >
            <LinkIcon className="h-10 w-10 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-sm text-gray-400 group-hover:text-blue-400">
              LinkedIn
            </span>
          </a>

          <a
            href="mailto:lucasrfon@gmail.com"
            className="group flex flex-col items-center p-6 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 hover:border-red-500 hover:shadow-lg transition"
          >
            <EnvelopeIcon className="h-10 w-10 text-red-400 group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-sm text-gray-400 group-hover:text-red-400">
              Gmail
            </span>
          </a>

          <a
            href="https://github.com/Lucasrfon"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 hover:border-gray-500 hover:shadow-lg transition"
          >
            <CodeBracketIcon className="h-10 w-10 text-gray-300 group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-sm text-gray-400 group-hover:text-gray-300">
              GitHub
            </span>
          </a>
        </section>

        {/* Rodapé */}
        <footer>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lucas Fonseca
          </p>
        </footer>
      </div>
    </div>
  );
}
