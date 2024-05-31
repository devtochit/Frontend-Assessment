/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />
/// <reference types="redux-persist" />

declare module '~/tailwind.config.cjs' {
  export const themeColors;
}

declare module 'embla-carousel-react' {
  export default useEmblaCarousel;
  export type EmblaOptionsType = EmblaOptionsType;
}
