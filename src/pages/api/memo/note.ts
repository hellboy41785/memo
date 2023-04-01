import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../../lib/prisma";

type postProp = {
  noteId: string;
  text: string;
  title: string;
  folderId?: string | null | undefined;
  userId: string;
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

  switch (method) {
    case "GET":
      try {
        const notes = await prisma.note.findMany({
          where: { userId: prismaUser?.id },
          orderBy: {
            updatedAt: "desc",
          },
        });
        res.status(200).json(notes);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    case "POST":
      try {
        const post: postProp = req.body;
        const createFolder = await prisma.note.create({
          data: {
            title: post.title,
            text: post.text,
            folderId: post.folderId,
            userId: prismaUser?.id || post.userId,
          },
        });
        res.status(200).json(createFolder);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    case "PATCH":
      try {
        const update: postProp = req.body;
        const updateFolder = await prisma.note.update({
          where: {
            id: update.noteId,
          },
          data: {
            title: update.title,
            text: update.text,
            folderId: update.folderId,
          },
        });

        res.status(200).json(updateFolder);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    case "DELETE":
      try {
        const del:{noteId:string} = req.body;
        const deleteFolder = await prisma.note.delete({
          where: {
            id: del.noteId
          },
        });
        res.status(200).json(deleteFolder);
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
