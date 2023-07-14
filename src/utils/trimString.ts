export const trimString = (str: string, length: number = 27) => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};
