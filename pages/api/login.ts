import { NextApiRequest, NextApiResponse } from "next";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check the credentials against the database
    // const user = await getUserByEmail(email);
    const user = { email: "doyun@gmail.com", password: "1234" };

    if (!user || user.password !== password) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      // Set a cookie or a session to keep the user logged in
      res.status(200).json({ message: "Logged in successfully" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
