import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL!);
const db = client.db();

export default db;
