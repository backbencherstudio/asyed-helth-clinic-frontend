// server base url
export const URL =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://127.0.0.1:4000";
// app config
export const AppConfig = () => ({
  app: {
    // server endpoint
    url: URL,
    name: "North Aveim Mediate Care",
    slogan: "North Aveim Mediate Care",
    meta: {
      description: "North Aveim Mediate Care",
      keywords: "North Aveim Mediate Care",
    },
    // api endpoint
    apiUrl: `${URL}/api`,
  },
});
