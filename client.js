import { Client } from "pg";
import "dotenv/config";

//Replace with your pgAdmin details if needed
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "University",
  password: process.env.PASSWORD,
  port: 5432,
});

const connect = async () => {
  //Connect to the Postgres server
  try {
    await client.connect();
    console.log("Connected to PostgreSQL");
  } catch (e) {
    console.error("Connection error", e.message);
  }
};
connect();

export default client;
