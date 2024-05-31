import type { HTMLAttributes } from 'react';

type BackArrowIconProps = HTMLAttributes<HTMLSpanElement>;

export const BackArrowIcon = ({ ...rest }: BackArrowIconProps) => {
  return (
    <span {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 106 106"
      >
        <defs>
          <filter id="a" width="106" height="106" x="0" y="0" filterUnits="userSpaceOnUse">
            <feFlood floodColor="#fff" result="flood" />
            <feComposite in2="SourceGraphic" operator="in" result="composite" />
            <feBlend in2="SourceGraphic" result="blend" />
          </filter>
        </defs>
        <circle cx="53" cy="53" r="53" style={{ fill: '#11a2d8', filter: 'url(#a)' }} />
        <image
          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABT0lEQVRIib3XTysFURgH4Ac3a9bXjg9C2SpJqZuspVuywZIdOxJdS3dxS9n5Aj6Gu7BjbS9iMTO5af7PGe9q6pzmaU7ve/rN1PzwWY2awg1WsYLXqi+YboDuYglPWGgbnsEwRpNarINXgRN0O2VtEQdtwAnay1gf4TA0XAbdwVdIuAi9rYNCpwE6wB6+q6Jkf3ERet0EzYKL0HP0m6BpcBn0uAmYBhehp6FQfptrFvdYz9j3hjlcBHLHnRh9wFrOxi72A6GIjroIbaWm1Rj+UPAWHv8b7uADm/KP/C1eD1XjpKs/sIE76ePUxbtopILU5Bx/ii78UcbeE5y1ARM1Wh5+FApPu6vL4Fei7BUULoP3RYGvNp4XBIrw3RifCQ2XxYd18DKZqwjv1cHLpswyeKVur5Kr8/AXXLYFT+KDP+iyiv9PeSkzD9+Ln2v/tP0APXFREBKFZT4AAAAASUVORK5CYII="
          width="30"
          height="30"
          x="38"
          y="38"
          data-name="Vector Smart Object"
        />
      </svg>
    </span>
  );
};
