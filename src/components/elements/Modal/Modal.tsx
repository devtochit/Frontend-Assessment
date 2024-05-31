import { Fragment } from 'react';
import type { PropsWithChildren, HTMLAttributes } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

import { Button } from '@/components/elements';

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  hasBorder?: boolean;
  hasCloseButton?: boolean;
  closeButtonColor?: TwStyle;
  closeModal: () => void;
};

export const Modal = ({
  isOpen = false,
  hasCloseButton = false,
  closeButtonColor,
  hasBorder = false,
  closeModal,
  children,
  ...rest
}: PropsWithChildren<ModalProps>) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                css={[
                  tw`relative w-full max-w-2xl transform rounded-2xl bg-white px-6 pb-10 pt-14 text-left align-middle shadow-xl transition-all md:px-14 lg:px-10`,
                  hasBorder && tw`border-4 border-primary border-solid`,
                ]}
                {...rest}
              >
                {hasCloseButton && (
                  <div className="absolute right-4 top-4 z-10">
                    <Button
                      css={[closeButtonColor]}
                      isIconButton={true}
                      startIcon={<XMarkIcon className="w-5 h-5" />}
                      onClick={closeModal}
                    />
                  </div>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
