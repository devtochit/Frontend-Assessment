export const getFileFormat = (fileName: string) => {
  if (!fileName) return '';

  const fileExtension = fileName.split('.').pop();
  const format = fileExtension?.toLowerCase();
  const imageRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;

  if (imageRegex.test(fileName)) {
    return 'image';
  } else {
    return format ?? '';
  }
};
