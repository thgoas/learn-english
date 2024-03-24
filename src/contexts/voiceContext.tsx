'use client'
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react'

type Voice = SpeechSynthesisVoice

interface voiceContextType {
  voices: Voice[]
  selectedVoice: Voice | null
  handleVoiceChange: (voice: Voice) => void
  speak: (text: string) => void
  pitch: number
  volume: number
  rate: number
  setVolume: React.Dispatch<React.SetStateAction<number>>
  setPitch: React.Dispatch<React.SetStateAction<number>>
  setRate: React.Dispatch<React.SetStateAction<number>>
}

const voiceContext = createContext<voiceContextType | undefined>(
  undefined
)

export const useVoice = (): voiceContextType => {
  const context = useContext(voiceContext)
  if (!context) {
    throw new Error('useTextToVoice must be used within a TextToVoiceProvider')
  }
  return context
}

export const VoiceProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null)
  const [voices, setVoices] = useState<Voice[]>([])
  const [pitch, setPitch] = useState(1)
  const [rate, setRate] = useState(1)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    const synth = window.speechSynthesis;

    const handleVoicesChanged = () => {
      const updatedVoices = synth.getVoices();
      setVoices(updatedVoices);

      const englishVoices = updatedVoices.filter(voice => voice.lang.startsWith('en-US'));
      if (englishVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(englishVoices[0]);
      }
    };


    synth.addEventListener('voiceschanged', handleVoicesChanged);


    handleVoicesChanged();

    return () => {
      synth.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, [selectedVoice]);


  const handleVoiceChange = (voice: Voice) => {
    setSelectedVoice(voice)
  }

  const speak = (text: string) => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = selectedVoice
      utterance.pitch = pitch
      utterance.volume = volume
      utterance.rate = rate
      
      window.speechSynthesis.speak(utterance)
    }
  }

  const value: voiceContextType = {
    voices,
    selectedVoice,
    handleVoiceChange,
    speak,
    pitch,
    volume,
    rate,
    setRate,
    setVolume,
    setPitch
  }

  return (
    <voiceContext.Provider value={value}>
      {children}
    </voiceContext.Provider>
  )
}
