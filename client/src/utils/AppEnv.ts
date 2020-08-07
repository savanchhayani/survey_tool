class AppEnv {
  static isDev = (): Boolean => process.env.NODE_ENV !== "production";

  static isProd = (): Boolean => !AppEnv.isDev;
}

export default AppEnv;
