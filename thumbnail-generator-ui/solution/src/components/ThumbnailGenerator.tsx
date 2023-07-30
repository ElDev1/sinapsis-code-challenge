import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Dropzone from 'react-dropzone'

const ThumbnailGenerator = () => {
  const [file, setFile] = useState<File | null>(null)
  const [thumbnailUrls, setThumnailUrls] = useState([])

  const handleFileDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
    setThumnailUrls([])
  }

  return (
    <Paper sx={{width:'400px'}}>
      <Typography variant='h5'>Generator</Typography>
      <Dropzone onDrop={handleFileDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <Box {...getRootProps()}>
            <input type="text" {...getInputProps()} />
            <Typography>Drag and drop an image file here</Typography>
          </Box>
        )}
      </Dropzone>
    </Paper>
  )
}

export default ThumbnailGenerator