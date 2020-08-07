import { combineReducers } from "redux";

import surveys from "./survey";
import surveyForm from "./surveyFrom";
import { IState } from "../@types/reducers";

export default combineReducers<IState>({
  surveys,
  surveyForm,
});
