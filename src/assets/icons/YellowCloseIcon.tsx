import type { HTMLAttributes } from 'react';

type YellowCloseIconProps = HTMLAttributes<HTMLSpanElement>;

export const YellowCloseIcon = ({ ...rest }: YellowCloseIconProps) => {
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
          <clipPath id="b">
            <path d="M307.63 333.95h408.21v411.8H307.63z" style={{ fill: 'none' }} />
          </clipPath>
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
            <g style={{ opacity: '.5' }}>
              <path
                d="m264.52 102-77.31 29.82c-19.24 7.43-38.79 15-55.15 27.59-36.21 27.81-51.24 76.2-51.27 121.86 0 7.57.52 15.65 5 21.72 5.59 7.52 16 9.94 25.32 8.77 20.1-2.54 35.92-18.77 46-36.37s16-37.33 26.41-54.72c12.14-20.26 29.87-36.59 48.59-51 10.42-8 21.5-15.8 28.55-26.89s9-26.66.82-36.93"
                style={{ fill: '#fff' }}
              />
            </g>
            <g style={{ clipPath: 'url(#b)' }}>
              <path
                d="M571.72 537.27 701.6 407.32a43 43 0 0 0-60.79-60.77L510.94 476.49 381 346.55a43 43 0 0 0-60.78 60.77l130 130-129.95 130A43 43 0 0 0 381 728l129.94-130 129.87 130a43 43 0 0 0 60.79-60.76Z"
                style={{ fill: '#fff', fillRule: 'evenodd' }}
              />
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};
