import AppEnv from "../utils/AppEnv";

class API_URL {
  static readonly BASE = AppEnv.getAPIUrl();

  private static createUrl = (url: string) => `${API_URL.BASE}${url}`;

  static readonly SURVEY_BASE = API_URL.createUrl("survey/");

  static readonly CREATE_SURVEY = `${API_URL.SURVEY_BASE}create`;
}

export default API_URL;
