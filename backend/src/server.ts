import {app} from "./app.js"

// Importando variáveis env
import {env} from "../src/config/env.js"
import { pool } from "./config/database.js";

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Banco conectado:', result.rows[0]);
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error);
  }
}

testConnection();

// Escutando a porta
app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
})