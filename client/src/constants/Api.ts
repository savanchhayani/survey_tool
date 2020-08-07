class API_URL {
  static readonly BASE = "http://localhost:3001/";

  private static createUrl = (url: string) => `${API_URL.BASE}${url}`;

  static readonly SURVEY_BASE = API_URL.createUrl("survey/");

  static readonly CREATE_SURVEY = `${API_URL.SURVEY_BASE}create`;
}

export default API_URL;
