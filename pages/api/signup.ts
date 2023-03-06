// signup api

import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getSession({ req: req });

    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const userEmail = session.user.email;

    const client = await connectToDatabase();

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(req.body);

    console.log(result);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
