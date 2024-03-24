import { ILessonModel } from "@/models/lesson-model"
import LessonTitle from "../lessonTitle"
import LessonBody from "../lessonBody"

interface LessonProps {
  lesson: ILessonModel | null
}

export default function Lesson (props: LessonProps) {
  console.log(props)
  return (
    <>
      <LessonTitle lesson={props.lesson?.lesson!} lessonTranslation={props.lesson?.lessonTranslation} />
      <LessonBody block={props.lesson?.block!} />
    </>
  )
} 