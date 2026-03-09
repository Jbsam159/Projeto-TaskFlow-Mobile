import { prisma } from "../config/prisma.js";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "João Victor",
      email: "joao@email.com",
      password: "123456",
    },
  });

  console.log(user);
}

main();