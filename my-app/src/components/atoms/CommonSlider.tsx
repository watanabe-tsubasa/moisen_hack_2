import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { initialState } from "../reducer/reducer";
import Action from "../../utils/types/actionType";
import { SET_SLIDER_VALUE } from "../reducer/actionTypes";

type CommonSliderProps = {
  state: typeof initialState;
  dispatch: React.Dispatch<Action>;
}

export const CommonSlider: React.FC<CommonSliderProps> = (props) => {

  const { state, dispatch } = props;
  const { sliderValue } = state;
  const onChangeSledeVal = (sliderValue: number) => {
    dispatch({ type: SET_SLIDER_VALUE, payload: sliderValue });
  }

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

  return (
    <Box p={6} pt={10}>
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