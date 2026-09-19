import { db } from "../../db";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { users } from "../../db/schema";

export const getUsers = async () => {
  return db.query.users.findMany();
};

export const getCurrentUser = async () => {
  const session = await auth();
  if (!session?.user?.email) {
    return null;
  }

  return db.query.users.findFirst({
    where: eq(users.username, session.user.email),
  });
};

export const getUserWithNotes = async (id: number) => {
  return db.query.users.findFirst({
    where: eq(users.id, id),
    with: { notes: true },
  });
};
