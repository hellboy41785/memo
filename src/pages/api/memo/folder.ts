import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../../lib/prisma";

type postProp = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  const session = await getSession({ req });

  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  const prismaUser = await prisma.user.findUnique({
    where: { email: session.user?.email ?? "" },
  });

  if (!prismaUser) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  switch (method) {
    case "GET":
      try {
        const folders = await prisma.folder.findMany({
          where: { userId: prismaUser.id },
        });
        res.status(200).json(folders);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    case "POST":
      try {
        const post: postProp = req.body;
        const createFolder = await prisma.folder.create({
          data: {
            name: post.name,
            userId: prismaUser.id,
          },
        });
        res.status(200).json(createFolder);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    case "PATCH":
      try {
        const update = req.body;
        const updateFolder = await prisma.folder.update({
          where: {
            id: update.id,
          },
          data: {
            name: update.name,
          },
        });

        res.status(200).json(updateFolder);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    case "DELETE":
      try {
        const del = req.body
        const deleteFolder = await prisma.folder.delete({
          where: {
            id: del.id,
          },
        });
        res.status(200).json(deleteFolder)
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
