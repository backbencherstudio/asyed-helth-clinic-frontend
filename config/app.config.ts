// server base url
export const URL =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://127.0.0.1:4000";
// app config
export const AppConfig = () => ({
  app: {
    // server endpoint
    url: URL,
    name: "North Ave Immediate Care",
    slogan: "North Ave Immediate Care",
    meta: {
      description: "North Ave Immediate Care",
      keywords: "North Ave Immediate Care",
    },
    // api endpoint
    apiUrl: `${URL}/api`,
  },
});
