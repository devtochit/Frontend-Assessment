import { default as dayjs } from 'dayjs';

export const formatDate = (date: Date | string, format = 'D MMMM, YYYY') =>
  dayjs(date).format(format);

type ColorObject = { red: number; green: number; blue: number };
export const formatColor = ({ red, green, blue }: ColorObject) => {
  // Convert to hexadecimal
  const hexColor = `#${red.toString(16).padStart(2, '0')}${green
    .toString(16)
    .padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

  // Convert to RGB
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  return { hexColor, rgbColor };
};
