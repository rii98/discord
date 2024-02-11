import { setupProfile } from "@/lib/initial-profile";
import prisma from "@/lib/db";
import React from "react";
import { redirect } from "next/navigation";
import InitialDialog from "@/components/modals/initial-modal";

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
  return (
    <div>
      <InitialDialog />
    </div>
  );
}

export default HomePage;
