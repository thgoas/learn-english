import { ILessonModel } from '@/models/lesson-model'

export const dataImage: ILessonModel[] = [
  {
    lesson: 'Lesson one',
    lessonTranslation: 'Lição um',
    block: [
      {
        title: 'Pronouns',
        subTitle: 'Objects',
        body: [
          {
            word: 'I',
            translation: 'Eu',
            separator: '-',
          },
          {
            word: 'My',
            translation: 'Meu, Minha',
            separator: '-',
          },
          {
            word: 'You',
            translation: 'Você',
            separator: '-',
          },
          {
            word: 'Your',
            translation: 'seu, sua (você)',
            separator: '-',
          },
        ],
      },
      {
        body: [
          {
            flexPosition: 'center',
            word: 'To NEED/NEEDED',
            translation: 'precisar',
            image_url: '/teste.jpg',
          },
          {
            flexPosition: 'center',
            word: 'To SEE/SEED',
            translation: 'precisar',
            image_url: '/teste.jpg',
          },
        ],
      },
    ],
  },
  {
    lesson: 'Lesson two',
    lessonTranslation: 'Lição dois',
    block: [
      {
        title: 'Pronouns',
        subTitle: 'Objects',
        body: [
          {
            word: 'I',
            translation: 'Eu',
            separator: '-',
          },
          {
            word: 'My',
            translation: 'Meu, Minha',
            separator: '-',
          },
          {
            word: 'You',
            translation: 'Você',
            separator: '-',
          },
          {
            word: 'Your',
            translation: 'seu, sua (você)',
            separator: '-',
          },
        ],
      },
      {
        body: [
          {
            flexPosition: 'center',
            word: 'To NEED/NEEDED',
            translation: 'precisar',
            image_url: '/teste.jpg',
          },
          {
            flexPosition: 'center',
            word: 'To SEE/SEED',
            translation: 'precisar',
            image_url: '/teste.jpg',
          },
        ],
      },
    ],
  },
]
