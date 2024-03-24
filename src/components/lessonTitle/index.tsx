import { Box, Typography } from "@mui/material"

interface LessonTitleProps {
    lesson: string
    lessonTranslation?: string
}

export default function LessonTitle (props: LessonTitleProps) {
    return (
    <Box display='flex' flexDirection='column' textAlign='center' paddingTop='5px' component="div">
        <Typography variant="h5" component="h5" >{props.lesson}</Typography>
        <Typography variant="subtitle1" component="h6" >{props.lessonTranslation}</Typography>
    </Box>
    )
}