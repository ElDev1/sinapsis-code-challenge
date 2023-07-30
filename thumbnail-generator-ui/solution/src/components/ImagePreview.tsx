interface Props {
  file: File
}

const ImagePreview = ({ file }: Props) => {
  return (
    <div>
      <img
        className="preview-image"
        src={URL.createObjectURL(file)}
        alt="Preview"
        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default ImagePreview