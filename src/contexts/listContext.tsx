'use client'
import { dataImage } from '@/data/fakedata/data'
import { ILessonModel } from '@/models/lesson-model'
import { SnackbarProvider, VariantType, enqueueSnackbar } from 'notistack'
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
  handleSelectedLesson: (lesson: ILessonModel) => void
  nextLesson: () => void
  pageBlock: number
  nextPageBlock: () => void
  backPageBlock: () => void
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
  const [pageBlock, setPageBlock] = useState(0)

  // useEffect(() => {
  //   setList(dataImage)
  //   setSelectedLesson(dataImage[0])
  // }, [])
  const handleSelectedLesson = (lesson: ILessonModel) => {
    setSelectedLesson(lesson)
    setPageBlock(0)
  }
  const nextLesson = () => {
    console.log('qui')
    const filterList = list?.findIndex(
      (f) => f.lesson === selectedLesson?.lesson
    )

    if (
      list &&
      list.length > 0 &&
      filterList !== undefined &&
      list[filterList + 1].lock === 'open'
    ) {
      console.log('aqui')
      setSelectedLesson(list[filterList + 1])
      setPageBlock(0)
    } else {
      handleClickVariant('you need to complete lesson', 'warning')
    }
  }

 


  const backPageBlock = () => {
    if (pageBlock > 0) {
      setPageBlock(pageBlock - 1)
    }
  }

  const nextPageBlock = () => {
    if (selectedLesson!.block.length > pageBlock + 1) {
      setPageBlock(pageBlock + 1)
    }
  }

  const handleClickVariant = (message: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant}, )
  }
  const value: ListContextType = {
    list,
    selectedLesson,
    handleSelectedLesson,
    nextLesson,
    pageBlock,
    nextPageBlock,
    backPageBlock
  }
  return (
    <listContext.Provider value={value}>
      <SnackbarProvider autoHideDuration={5000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}  maxSnack={3}>{children}</SnackbarProvider>
    </listContext.Provider>
  )
}
