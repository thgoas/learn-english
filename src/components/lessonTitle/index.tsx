import { useList } from '@/contexts/listContext'
import { Box, Typography } from '@mui/material'

export default function LessonTitle() {
  const { selectedLesson } = useList()
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      paddingTop="5px"
      component="div"
    >
      <Typography variant="h5" component="h5">
        {selectedLesson?.lesson}
      </Typography>
      <Typography variant="subtitle1" component="h6">
        {selectedLesson?.lessonTranslation}
      </Typography>
    </Box>
  )
}
