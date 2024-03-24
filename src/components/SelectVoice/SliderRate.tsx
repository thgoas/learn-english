
import { useVoice } from "@/contexts/voiceContext";
import { Box, Slider, Typography } from "@mui/material";

export default function SlideRate() {
  const {setRate, rate} = useVoice()
  const handleChange = (e: any) => {
    const value = Number(e.target.value)

    setRate(value)
  }
  return (
    <Box>
      <Typography>Velocidade</Typography>
      <Slider
        size="small"
        defaultValue={rate}
        value={rate}
        min={0.1}
        step={0.1}
        max={10}
        aria-label="Rate"
        valueLabelDisplay="auto"
        onChange={handleChange}
      />

    </Box>
  );
}
