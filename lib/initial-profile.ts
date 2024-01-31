import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/db";
export async function setupProfile() {
  const user = await currentUser();

  if (!user) return;

  const profile = await prisma.profile.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (profile) return profile;

  const newProfile = await prisma.profile.create({
    data: {
      userId: user.id,
      imageUrl: user.imageUrl,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
    },
  });
  return newProfile;
}
