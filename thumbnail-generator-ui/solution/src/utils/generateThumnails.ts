import Resizer from 'react-image-file-resizer';
 
export const resizeFile = (file: File, width: number, heigth: number) => 
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width,
      heigth,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "blob"
    );
  });
