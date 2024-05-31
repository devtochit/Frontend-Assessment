import tw from 'twin.macro';

import { Spinner } from '@/components/elements';

export const AppLoader = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r z-50"
      css={[tw`from-tertiary-gradient_light via-tertiary-gradient_dark to-tertiary-gradient_light`]}
    >
      <Spinner className="mt-3" size="md" variant="light" />
    </div>
  );
};
