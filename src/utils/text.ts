export const getLettersOnly = (string: string) => {
  return string.replace(/[^a-zA-Z]+/g, '');
};
