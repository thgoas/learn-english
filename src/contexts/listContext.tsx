'use client'
import { dataImage } from '@/data/fakedata/data'
import { ILessonModel } from '@/models/lesson-model'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ListContextType {
  list: ILessonModel[] | null
  selectedLesson: ILessonModel | null
  setSelectedLesson: Dispatch<SetStateAction<ILessonModel | null>>
}

const listContext = createContext<ListContextType | undefined>(undefined)

export const useList = (): ListContextType => {
  const context = useContext(listContext)
  if (!context) {
    throw new Error('listContext must be used within a ListProvider')
  }
  return context
}

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<ILessonModel[] | null>(dataImage)
  const [selectedLesson, setSelectedLesson] = useState<ILessonModel | null>(
    dataImage[0]
  )

  // useEffect(() => {
  //   setList(dataImage)
  //   setSelectedLesson(dataImage[0])
  // }, [])

  const value: ListContextType = {
    list,
    selectedLesson,
    setSelectedLesson,
  }
  return <listContext.Provider value={value}>{children}</listContext.Provider>
}
