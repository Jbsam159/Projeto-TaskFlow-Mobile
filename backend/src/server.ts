import {app} from "./app.js"

// Importando variáveis env
import {env} from "../src/config/env.js"
import { prisma } from "./config/prisma.js";

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Banco conectado com Prisma");

    // Escutando a porta
    app.listen(env.PORT, () => {
      console.log(`🚀 Server running on port ${env.PORT}`);
    })

  } catch (error) {
    console.error("❌ Erro ao iniciar servidor:", error);
    process.exit(1);
  }
}

startServer();
