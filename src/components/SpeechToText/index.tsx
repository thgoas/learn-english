import { useSpeechContext } from '@/contexts/speechContext'
import { KeyboardVoice, SettingsVoice, Speaker } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { useEffect } from 'react'

interface SpeechToTextProps {
  transcript: string
}

export default function SpeechToText(props: SpeechToTextProps) {
  const { startListening, isListening, transcript } = useSpeechContext()
  const handleOnClick = () => {
    startListening()
  }


  useEffect(() => {
    if(props.transcript === transcript) {
      console.log('igual', transcript, props.transcript)
    } else {
      console.log('diferente', transcript, props.transcript)
    }
  },[transcript, props.transcript])
  return (
    <Tooltip title="speak">
      <IconButton
        disabled={isListening}
        aria-label="speak"
        onClick={handleOnClick}
      >
        {!isListening ? <KeyboardVoice /> : <SettingsVoice />}
      </IconButton>
    </Tooltip>
  )
}
