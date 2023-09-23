import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";
import React, { useState } from "react";

export const CommonSlider = () => {

  const [sliderValue, setSliderValue] = useState(50);
  const onChangeSledeVal = (val: number) => {
    setSliderValue(val);
  }

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

  return (
    <Box p={6}>
      <Slider
        aria-label='slider-ex-6'
        min={30}
        max={220}
        step={0.1}
        onChange={onChangeSledeVal}
        value={sliderValue}
      >
        <SliderMark value={30} {...labelStyles}>
          30
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}