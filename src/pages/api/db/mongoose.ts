const mongoose = require("mongoose");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    return res.status(200).json({ error });
  }
  const db = await mongoose.connection;
  const result = await db.collection("companies").find().toArray();
  return res.status(200).json(result);
}
