import Button from '../layout/Button';

interface ModalFooterProps {
  onNext: () => void;
  onBack?: () => void;
  nextButtonText?: string;
  backButtonText?: string;
}

const ModalFooter = ({
  onNext,
  onBack,
  nextButtonText = 'Nasledujúci krok',
  backButtonText = 'Predchádzajúci krok',
}: ModalFooterProps) => {
  return (
    <div className="flex items-center px-5 py-3.5 mt-5 -mx-5 -mb-5  border-t border-t-slate-700">
      {onBack && (
        <Button
          className="mr-auto"
          variant="primary-outline"
          title={backButtonText}
          onClick={onBack}
        >
          {backButtonText}
        </Button>
      )}
      <Button
        className="ml-auto"
        variant="primary-outline"
        title={nextButtonText}
        onClick={onNext}
      >
        {nextButtonText}
      </Button>
    </div>
  );
};

export default ModalFooter;
