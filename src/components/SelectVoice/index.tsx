import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import SlideRate from './SliderRate'
import SlideVolume from './SliderVolume'
import SlidePitch from './SliderPitch'
import { Stack } from '@mui/material'
import { useVoice } from '@/contexts/voiceContext'

export default function SelectVoice() {
  const { voices, selectedVoice, handleVoiceChange } = useVoice()
  const handleChange = (event: any) => {
    const selectedVoiceURI = event.target.value
    const selectedVoice = voices.find(
      (voice) => voice.voiceURI === selectedVoiceURI
    )
    if (selectedVoice) {
      handleVoiceChange(selectedVoice)
    }
  }

  return (
    <Box display="flex" flexDirection="column" sx={{ width: '100%' }}>
      <FormControl variant="standard" sx={{ m: 2, width: 200 }} size="small">
        <InputLabel id="select-voice">Voz</InputLabel>
        <Select
          labelId="select-voice"
          id="select-voice"
          value={selectedVoice ? selectedVoice.voiceURI : ''}
          label="Voz"
          onChange={handleChange}
        >
          {voices.map((r) => (
            <MenuItem value={r.name} key={r.name}>
              {r.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack ml={2} width={200}>
        <SlideRate />
        <SlidePitch />
        <SlideVolume />
      </Stack>
    </Box>
  )
}
