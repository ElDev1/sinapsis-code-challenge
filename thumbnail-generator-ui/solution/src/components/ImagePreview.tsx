import { styled } from "@mui/system"

interface Props {
  file: File
}

const Img = styled('img')({
  width: '300px',
  height: '300px',
  objectFit: 'cover'
})

const ImagePreview = ({ file }: Props) => {
  return (
    <div>
      <Img
        src={URL.createObjectURL(file)}
        alt="Preview"
      />
    </div>
  )
}

export default ImagePreview