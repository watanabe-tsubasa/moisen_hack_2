import { SET_CHECKED, SET_SLIDER_VALUE, SET_VALUE } from "../../components/reducer/actionTypes";

type SetValueAction = {
  type: typeof SET_VALUE;
  payload: string;
};

type SetCheckedAction = {
  type: typeof SET_CHECKED;
  payload: boolean;
}

type SetSliderAction = {
  type: typeof SET_SLIDER_VALUE;
  payload: number;
}

// Combine all action types into a single type
type Action = SetValueAction | SetCheckedAction | SetSliderAction; // Add more action types as needed using `|`

export default Action;