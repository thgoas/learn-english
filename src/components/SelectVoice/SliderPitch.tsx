import { useVoice } from "@/contexts/voiceContext";
import { Box, Slider, Typography } from "@mui/material";

export default function SlidePitch() {
  const {setPitch, pitch} = useVoice()
  const handleChange = (e: any) => {
    const value = Number(e.target.value)

    setPitch(value)
  }
  return (
    <Box>
      <Typography>Tom</Typography>
      <Slider
        size="small"
        defaultValue={pitch}
        value={pitch}
        min={0}
        step={0.1}
        max={2}
        aria-label="Tom"
        valueLabelDisplay="auto"
        onChange={handleChange}
      />

    </Box>
  );
}
