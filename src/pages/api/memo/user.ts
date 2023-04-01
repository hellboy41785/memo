import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from 'next-auth/react'
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "user" });
}
