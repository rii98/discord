import { setupProfile } from "@/lib/initial-profile";
import prisma from "@/lib/db";
import React from "react";
import { redirect } from "next/navigation";

async function HomePage() {
  const profile = await setupProfile();
  console.log(profile);
  const server = await prisma.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });
  if (server) {
    redirect(`/servers/${server.id}`);
  }
  return <div>Create a Server</div>;
}

export default HomePage;
