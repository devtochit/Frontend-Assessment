import { Button } from '@/components/elements';

type ErrorFallbackProps = {
  error: {
    message: string;
  };
  resetErrorBoundary: () => unknown;
};

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-tertiary-gradient_light via-tertiary-gradient_dark to-tertiary-gradient_light"
      role="alert"
    >
      <div className="flex flex-col py-10 text-center bg-white shadow-lg rounded-xl px-14 max-w-[75%]">
        <h3 className="text-2xl font-semibold text-danger">Something went wrong!</h3>
        <pre className="mt-2 text-slate-600 whitespace-pre-wrap">{error.message}</pre>
        <Button className="mt-8" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </div>
    </div>
  );
};
