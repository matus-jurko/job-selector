import { HeartIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer className="py-6 mt-8 text-center" lang="en">
      <p className="text-sm leading-relaxed text-slate-300">
        This app was made with{' '}
        <span className="text-red-500">
          <span className="sr-only">love</span>
          <HeartIcon className="inline-block w-5 h-5" aria-hidden={true} />
        </span>{' '}
        by{' '}
        <a
          href="https://linkedin.com/in/matus-jurko"
          className="font-medium text-white hover:underline"
          title="Matúš Jurko on LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Matúš Jurko
        </a>
      </p>
    </footer>
  );
};

export default Footer;
