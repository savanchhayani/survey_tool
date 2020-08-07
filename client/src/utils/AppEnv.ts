class AppEnv {
  static isDev = (): Boolean => process.env.NODE_ENV !== "production";

  static isProd = (): Boolean => !AppEnv.isDev;

  static getAPIUrl = (): string => process.env.REACT_APP_API_URL || '';
}

export default AppEnv;
