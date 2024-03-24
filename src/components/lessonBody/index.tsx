'use client'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import { NavigateBefore, NavigateNext, PlayCircleOutline } from '@mui/icons-material'
import TextToSpeech from '../textToSpeech'
import Image from 'next/image'
import { ILessonBlock, ILessonModel } from '@/models/lesson-model'
import { useMemo, useState } from 'react'

interface LessonBodyProps {
  block: ILessonBlock[]
}

export default function LessonBody(props: LessonBodyProps) {
  const [page, setPage] = useState(0)

  console.log(props.block)
  const handleBefore = () => {
    if(page > 0) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if(props.block.length > page + 1) {
      setPage(page + 1)
    }
  }

  const block = useMemo(() => {
    return props.block[page]
  },[page, props.block]) 
  return (
    <Box
      p={1}
      m={5}
      display="flex"
      flexDirection="column"
      // textAlign=""
      // alignItems='center'
      paddingTop="5px"
      component="div"
    >
      
        <Box key={block.title}>
          <Typography mb={3} variant="h4" component="h5">
            {block.title}
          </Typography>
          <Typography variant="h5" component="h5">
            {block.subTitle}
          </Typography>

          {block.body.map((body) => (
            <Box
              key={body.word}
              // bgcolor={'green'}
              display="flex"
              flexDirection={'column'}
              alignItems={body.flexPosition}
            >
              <Paper elevation={2} sx={{ paddingX: 2, margin: 1 }}>
                {body.image_url ? (
                  <Box pt={2}>
                    <Image
                      src={body.image_url}
                      width={300}
                      height={300}
                      alt={body.word}
                    />
                  </Box>
                ) : null}
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box gap={1} display="flex" alignItems="center" key={body.word}>
                    <Typography variant="subtitle1" component="p">
                      {body.word}
                    </Typography>

                    {body.separator ?? (
                      <Typography variant="subtitle1" component="p">
                        {' '}
                        {body.separator}{' '}
                      </Typography>
                    )}
                    <Typography variant="subtitle2" component="p">
                      {body.translation}
                    </Typography>
                  </Box>
                    <TextToSpeech transcript={body.word} />
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
    <Box mt={3} display='flex' justifyContent='space-between'>
      <Button disabled={page === 0} onClick={handleBefore} startIcon={<NavigateBefore />}>before</Button>
      <Button disabled={props.block.length === page + 1} onClick={handleNext} endIcon={<NavigateNext />}>Next</Button>
    </Box>
    </Box>
  )
}
