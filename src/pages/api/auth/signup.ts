import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import dbConnect from "@/utils/db";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Missing fields" });

  await dbConnect();
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: "User exists" });

  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });
  return res.status(201).json({ success: true });
}
