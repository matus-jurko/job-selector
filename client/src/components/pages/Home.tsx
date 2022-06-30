import { baseSteps } from '../../config';
import StepCards from '../layout/StepCards';
import NameForm from '../app/NameForm';

const Home = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="mx-auto mb-4 text-4xl font-bold leading-tight tracking-tight text-left text-white sm:max-w-md lg:text-6xl sm:text-center drop-shadow-2xl lg:max-w-3xl">
        Neviete si poradiť s{' '}
        <span className="leading-tight text-transparent bg-gradient-to-r bg-clip-text from-teal-500 to-green-500 animate-gradient">
          výberom ideálnej práce?
        </span>
      </h1>
      <p className="mx-auto mb-8 text-base font-medium text-left lg:text-xl text-slate-300 sm:text-center lg:max-w-3xl sm:max-w-xl drop-shadow-2xl">
        Táto aplikácia vám pomôže vybrať si prácu na základe preferencií,
        ktoré nastavíte. Celý proces vám pritom nezaberie viac ako 10
        minút.
      </p>
      <NameForm className="mb-8 sm:max-w-2xl lg:max-w-xl lg:mb-14" />
      <StepCards className="w-full sm:max-w-5xl" steps={baseSteps} />
    </header>
  );
};

export default Home;
