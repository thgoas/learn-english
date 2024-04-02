'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react'
import { useVoice } from './voiceContext'

interface SpeechContextType {
  transcript: string
  isListening: boolean
  startListening: () => void
}

const SpeechContext = createContext<SpeechContextType | undefined>(undefined)

export const useSpeechContext = (): SpeechContextType => {
  const context = useContext(SpeechContext)
  if (!context) {
    throw new Error(
      'useSpeechContext deve ser usado dentro de um SpeechProvider'
    )
  }
  return context
}

export const SpeechProvider = ({ children }: { children: ReactNode }) => {
  const [transcript, setTranscript] = useState<string>('')
  const [isListening, setIsListening] = useState<boolean>(false)

  const {selectedVoice} = useVoice()

  const startListening = () => {
    setIsListening(true)
    setTranscript('')

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.lang = selectedVoice?.lang
    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript
      setTranscript(speechToText)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  const contextValue: SpeechContextType = {
    transcript,
    isListening,
    startListening,
  }
  return (
    <SpeechContext.Provider value={contextValue}>
      {children}
    </SpeechContext.Provider>
  )
}
