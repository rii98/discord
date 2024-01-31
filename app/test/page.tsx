import React from "react";
import prisma from "@/lib/db";
async function page() {
  const newuser = await prisma.profile.findMany({
    where: {
      name: "harish rauf",
    },
  });
  console.log(newuser);
  return <div>{JSON.stringify(newuser)}</div>;
}

export default page;
