

import { useVoice } from "@/contexts/voiceContext";
import { Box, Slider, Typography } from "@mui/material";

export default function SlideVolume() {
  const {setVolume, volume} = useVoice()
  const handleChange = (e: any) => {
    const value = Number(e.target.value)

    setVolume(value)
  }
  return (
    <Box>
      <Typography>Volume</Typography>
      <Slider
        size="small"
        defaultValue={volume}
        value={volume}
        min={0}
        step={0.1}
        max={1}
        aria-label="Volume"
        valueLabelDisplay="auto"
        onChange={handleChange}
      />

    </Box>
  );
}
