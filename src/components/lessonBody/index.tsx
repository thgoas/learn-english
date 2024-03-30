'use client'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import {
  NavigateBefore,
  NavigateNext,
  PlayCircleOutline,
  Speaker,
} from '@mui/icons-material'
import TextToSpeech from '../textToSpeech'
import Image from 'next/image'
import { useMemo } from 'react'
import { useList } from '@/contexts/listContext'

export default function LessonBody() {
  const {
    nextLesson,
    pageBlock,
    nextPageBlock,
    backPageBlock,
    selectedLesson,
  } = useList()

  const handleNextLesson = () => {
    nextLesson()
  }

  const block = useMemo(() => {
    return selectedLesson?.block[pageBlock]
  }, [selectedLesson, pageBlock])
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
      <Box key={block?.title}>
        <Typography mb={3} variant="h4" component="h5">
          {block?.title}
        </Typography>
        <Typography variant="h5" component="h5">
          {block?.subTitle}
        </Typography>

        {block?.body.map((body) => (
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
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
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
              {body.isQuestion ? (
              <Box display="flex"
                alignItems="center"
                justifyContent="space-between" >
                
                <Typography variant="subtitle1" component="p">
                  test your pronunciation: Successes {body.question?.successes} - Erros: {body.question?.errors}
                </Typography>
              <TextToSpeech transcript={body.word} />
              </Box>
              ) : null}
            </Paper>
          </Box>
        ))}
      </Box>
      <Box mt={3} display="flex" justifyContent="space-between">
        <Button
          disabled={pageBlock === 0}
          onClick={backPageBlock}
          startIcon={<NavigateBefore />}
        >
          Back
        </Button>

        {selectedLesson?.block.length === pageBlock + 1 ? (
          <Button onClick={handleNextLesson} endIcon={<NavigateNext />}>
            Next Lesson
          </Button>
        ) : (
          <Button
            disabled={selectedLesson?.block.length === pageBlock + 1}
            onClick={nextPageBlock}
            endIcon={<NavigateNext />}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  )
}
