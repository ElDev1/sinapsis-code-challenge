import { Paper, Typography, Box, Button, Stack, Link } from '@mui/material'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { useMutation } from '@tanstack/react-query'
import ImagePreview from './ImagePreview'
import { resizeFile } from '../utils/generateThumnails'

const ThumbnailGenerator = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }

  const generateThumbnailsMutation = useMutation(
    async (file: File) => {
      const firstImage = await resizeFile(file, 400, 300) 
      const secondImage = await resizeFile(file, 160, 120)
      const thirdImage = await resizeFile(file, 120, 120)

      console.log(thirdImage)

      const linkUrl1 = URL.createObjectURL(firstImage)
      const linkUrl2 = URL.createObjectURL(secondImage)
      const linkUrl3 = URL.createObjectURL(thirdImage)
      
      return [{link:linkUrl1, size:'400x300'}, {link:linkUrl2, size:'160x120'}, {link:linkUrl3, size:'120x120'}]
    },
  )

  const handleGenerateThumbnails = () => {
    if (file) {
      generateThumbnailsMutation.mutate(file);
    }
  }

  const handleCancelButton = () => {
    setFile(null)
    generateThumbnailsMutation.reset()
  }


  return (
    <Paper sx={{width:'400px', padding:'15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'10px'}}>
      <Typography color='#967E76' variant='h5'>ThumbnailGenerator generator</Typography>
      <Dropzone onDrop={handleFileDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <Box {...getRootProps()}>
            <Box sx={{
              height: '300px', 
              width:'300px', 
              outline: '2px dashed gray', 
              cursor: 'pointer',
              transition: 'outline ease 0.2s',
              '&:hover': {
                outline: '2px dashed #DBC4F0'
              }
            }}>
              {file ? <ImagePreview file={file} /> : null}
              <input {...getInputProps()} />
            </Box>
            <Typography color='gray' align='center'>Drag and drop an image file or click here</Typography>
          </Box>
        )}
      </Dropzone>
      {file && (
        <Stack spacing={1}>
          <Button sx={{color: '#967E76'}} onClick={handleGenerateThumbnails}>Generate Thumbnails</Button>
          <Button color='error' onClick={handleCancelButton}>Cancel</Button>
        </Stack>
      )}
      {generateThumbnailsMutation.isLoading && <p>Generating thumbnails...</p>}
      {generateThumbnailsMutation.isSuccess && file && (
        <div className="generated-thumbnails">
          <h2>Generated Thumbnails:</h2>
          {generateThumbnailsMutation.data?.map((info, index) => (
            <div key={index}>
              <Link variant="h6" href={info.link} target="_blank" rel="noopener" fontSize={15} children="Ver" />
              <span>{info.size}</span>
            </div>
          ))}
        </div>
      )}
    </Paper>
  )
}

export default ThumbnailGenerator