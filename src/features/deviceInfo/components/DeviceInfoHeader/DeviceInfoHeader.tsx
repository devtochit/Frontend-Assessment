import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { YellowCloseIcon } from '@/assets/icons';
import { Button } from '@/components/elements';

export const DeviceInfoHeader = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate('/');
  };
  return (
    <div css={[tw`z-10 bg-gradient-to-b`]}>
      <div className="container mx-auto relative my-8 px-5">
        <img
          tw="h-36 w-36 rounded-xl md:(h-44 w-44) xl:(h-56 w-56)"
          src={'/iphone.webp'}
          alt={'iphone'}
        />
        <Button isUnstyled={true} onClick={goBackToHome}>
          <YellowCloseIcon className="w-8 md:w-9 lg:w-10 absolute top-0 right-[1.25rem]" />
        </Button>
      </div>
    </div>
  );
};
