import { Fragment } from 'react';
import type { PropsWithChildren } from 'react';

export const RootLayout = ({ children }: PropsWithChildren<{}>) => {
  return <Fragment>{children}</Fragment>;
};
