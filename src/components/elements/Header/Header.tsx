import tw from 'twin.macro';

export const Header = () => {
  return (
    <header
      className=" bg-green-400"
      // eslint-disable-next-line no-sparse-arrays
      css={[
        tw`relative z-20 flex h-20 items-center justify-between bg-gradient-to-r px-5 py-4 font-riffic sm:py-0`,
        ,
      ]}
    ></header>
  );
};
