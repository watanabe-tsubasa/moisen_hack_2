// reducer.ts
import { SET_CHECKED, SET_SLIDER_VALUE, SET_VALUE } from './actionTypes';

type Action = {
  type: string;
  payload: any;
}

export const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case SET_CHECKED:
      return {
        ...state,
        isChecked: action.payload,
      };
    case SET_SLIDER_VALUE:
      return {
        ...state,
        sliderValue: action.payload,
      };
    default:
      return state;
  }
};

export const initialState = {
  value: "", // For TextArea and Menu
  isChecked: false, // For Switch
  sliderValue: 50, // For Slider
};

