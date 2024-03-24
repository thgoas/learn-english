export interface ILessonModel {  
 lesson: string
 lessonTranslation?: string
 flexPosition?: string
 block: ILessonBlock []
}

export interface ILessonBlock {
 title?: string
 subTitle?: string
 titleTranslation?: string
 flexPosition?: string
 body: ILessonBody []
}

export interface ILessonBody {
 flexPosition?: string
 word: string
 translation?: string
 separator?: string
 bold?: boolean
 italic?: boolean
 image_url?: string
}