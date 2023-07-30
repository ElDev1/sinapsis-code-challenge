import { Paper, Typography, Box, Button } from '@mui/material'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import ImagePreview from './ImagePreview'

const ThumbnailGenerator = () => {
  const [file, setFile] = useState<File | null>(null)
  const queryClient = useQueryClient()

  const handleFileDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }

  const generateThumbnailsMutation = useMutation(
    async (file: File) => {
      const response = await axios.post('api/generate-thumbnails', { file })
      return response.data.urls
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('thumbnails')
      }
    }
  )

  const handleGenerateThumbnails = () => {
    if (file) {
      generateThumbnailsMutation.mutate(file);
    }
  };


  return (
    <Paper sx={{width:'400px', padding:'15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'10px'}}>
      <Typography color='#967E76' variant='h5'>ThumbnailGenerator generator</Typography>
      <Dropzone onDrop={handleFileDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <Box {...getRootProps()}>
            <Box sx={{height: '300px', border: '2px dashed gray', cursor: 'pointer'}}>
              {file ? <ImagePreview file={file} /> : null}
              <input {...getInputProps()} />
            </Box>
            <Typography color='gray' align='center'>Drag and drop an image file or click here</Typography>
          </Box>
        )}
      </Dropzone>
      {file && (
        <div className="generate-thumbnails">
          <Button onClick={handleGenerateThumbnails}>Generate Thumbnails</Button>
          <Button onClick={() => {}}>Cancel</Button>
        </div>
      )}
    </Paper>
  )
}

export default ThumbnailGenerator