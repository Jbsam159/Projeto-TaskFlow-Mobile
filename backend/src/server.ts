import {app} from "./app.js"

// Importando variáveis env
import {env} from "../src/config/env.js"

// Escutando a porta
app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
})