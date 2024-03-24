'use client'
import Lesson from '@/components/Lesson'
import { useList } from '@/contexts/listContext'

export default function Home() {
  const {selectedLesson} = useList()
  return (
    <>
      <Lesson lesson={selectedLesson} />
    </>
  )
}
