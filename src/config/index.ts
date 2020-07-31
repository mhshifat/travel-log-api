import "dotenv/config";

const { PORT, CLIENT_URI, MONGODB_URI } = process.env;
export const config = {
  api: {
    port: PORT || 5000,
    client_uri: CLIENT_URI || "http://localhost:3000",
  },
  db: {
    uri: MONGODB_URI || "",
  },
};
