import axios from "axios";
import API_URL from "../constants/Api";
import { ISurvey } from "../@types/reducers/survey";

class Transport {
  getSurveys = (): any => {
    return axios.get(API_URL.SURVEY_BASE);
  };

  creatSurvey = (formData: ISurvey): any => {
    return axios.post(API_URL.CREATE_SURVEY, formData);
  };
}

const transportInstance = new Transport();
export default transportInstance;
