'use client'
import { useVoice } from '@/contexts/voiceContext'
import { PlayCircleOutline } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

interface TextToSpeechProps {
  transcript: string
}

export default function TextToSpeech(props: TextToSpeechProps) {
  const { speak } = useVoice()

  return (
    <Tooltip title="play">
      <IconButton aria-label="play" onClick={() => speak(props.transcript)}>
        <PlayCircleOutline />
      </IconButton>
    </Tooltip>
  )
}
