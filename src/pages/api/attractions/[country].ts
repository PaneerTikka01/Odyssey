import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/utils/db";
import { Attraction } from "@/models/Attraction";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();
  const country = Array.isArray(req.query.country)
    ? req.query.country[0]
    : req.query.country;

  if (req.method === "POST") {
    try {
      const { items } = req.body;
      // Upsert on countryCode
      const doc = await Attraction.findOneAndUpdate(
        { countryCode: country },
        { countryCode: country, pois: items },
        { upsert: true, new: true }
      );
      return res.status(200).json(doc);
    } catch (e) {
      return res.status(500).json({ error: "Failed to save POIs" });
    }
  }

  if (req.method === "GET") {
    const doc = await Attraction.findOne({ countryCode: country });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    return res.status(200).json(doc.pois);
  }
  
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
