import type { HTMLAttributes } from 'react';

type MenuIconProps = HTMLAttributes<HTMLSpanElement>;

export const MenuIcon = ({ ...rest }: MenuIconProps) => {
  return (
    <span {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1001.05 994.6">
        <defs>
          <linearGradient
            id="a"
            x1="510.53"
            x2="510.53"
            y1="50"
            y2="606.62"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset=".06" stopColor="#fff" stopOpacity=".86" />
            <stop offset=".16" stopColor="#fff" stopOpacity=".66" />
            <stop offset=".26" stopColor="#fff" stopOpacity=".48" />
            <stop offset=".37" stopColor="#fff" stopOpacity=".33" />
            <stop offset=".48" stopColor="#fff" stopOpacity=".21" />
            <stop offset=".59" stopColor="#fff" stopOpacity=".12" />
            <stop offset=".71" stopColor="#fff" stopOpacity=".05" />
            <stop offset=".84" stopColor="#fff" stopOpacity=".01" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g data-name="Layer 2">
          <g data-name="paper airplanes">
            <path
              d="M883.36 912.85c-142.88 142.87-642.8 82.87-785.68-60s-122.88-602.78 20-745.67 642.79-142.89 785.68 0 122.88 662.82-20 805.67Z"
              style={{ fill: '#fcb715' }}
            />
            <path
              d="M60.54 495c.73-142.95 32.87-285 96.46-348.55 128.6-128.6 578.51-128.6 707.11 0 64.29 64.3 96.44 208.92 96.44 353.55S59.79 641.29 60.54 495Z"
              style={{ opacity: '.5', fill: 'url(#a)' }}
            />
            <rect
              width="502.42"
              height="82.75"
              x="261.22"
              y="326.65"
              rx="41.38"
              style={{ fill: '#fff' }}
            />
            <rect
              width="502.42"
              height="82.75"
              x="261.22"
              y="477.74"
              rx="41.38"
              style={{ fill: '#fff' }}
            />
            <rect
              width="502.42"
              height="82.75"
              x="261.22"
              y="622.94"
              rx="41.38"
              style={{ fill: '#fff' }}
            />
            <g style={{ opacity: '.5' }}>
              <path
                d="M301.32 83.36 224 113.19c-19.25 7.42-38.79 15-55.15 27.58-36.21 27.81-51.24 76.2-51.27 121.86 0 7.57.51 15.65 5 21.72 5.58 7.52 16 9.94 25.31 8.77 20.11-2.54 35.92-18.77 46-36.37s16-37.33 26.41-54.72c12.14-20.26 29.86-36.59 48.59-51 10.42-8 21.49-15.79 28.55-26.89s9-26.66.82-36.93"
                style={{ fill: '#fff' }}
              />
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};
