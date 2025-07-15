export function Footer() {
  return (
    <footer className="w-full p-4 border-t bg-white border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700 flex flex-col ">
      <div className="flex items-center justify-between mx-auto w-full max-w-6xl pb-10 border-b border-zinc-400 dark:border-zinc-700">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-lg font-bold">Mickaël AGNIEL</h2>
          <p>
            Créé avec passion pour transformer vos idées en solutions web
            uniques.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2>SOCIAL</h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/mickael-agniel-164a85326"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin-ico.png" alt="Linkedin" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/mickael13800"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github-ico.png" alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mickaël AGNIEL. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
