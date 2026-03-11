# 🗂️ Issues do Projeto — TaskPriority

---

# 🌐 BACKEND

---

## 🚀 FASE 1 — Setup

### 🔹 Issue 1: Inicializar projeto backend

**Descrição:**
Criar projeto Node.js e estrutura inicial.

**Tasks:**

- [x] `npm init -y`
- [x] Criar pasta `src`
- [x] Criar arquivo `server.js` ou `app.js`

**Critérios de aceite:**

- [x] Projeto roda sem erros com `node`
- [x] Estrutura inicial criada corretamente
- [x] Nenhum erro no terminal ao executar

---

### 🔹 Issue 2: Configurar servidor com Express

**Descrição:**
Criar servidor HTTP básico.

**Tasks:**

- [x] Instalar express
- [x] Criar servidor básico
- [x] Criar rota `/health`

**Critérios de aceite:**

- [x] Servidor inicia na porta definida
- [x] Acessar `http://localhost:3000/health` retorna resposta
- [x] Nenhum erro no console

---

### 🔹 Issue 3: Estrutura de pastas

**Tasks:**

- [x] Criar:
  - controllers/
  - routes/
  - services/
  - middlewares/

**Critérios de aceite:**

- [x] Estrutura organizada dentro de `src`
- [x] Pastas criadas corretamente
- [x] Código continua rodando normalmente

---

### 🔹 Issue 4: Variáveis de ambiente

**Tasks:**

- [x] Instalar dotenv
- [x] Criar `.env`
- [x] Configurar porta

**Critérios de aceite:**

- [x] Servidor usa variável de ambiente
- [x] Alterar porta no `.env` reflete no servidor
- [x] `.env` não está versionado (gitignore)

---

---

## 🗄️ FASE 2 — Banco de Dados

### 🔹 Issue 5: Configurar PostgreSQL

**Tasks:**

- [x] Criar banco
- [x] Testar conexão

**Critérios de aceite:**

- [x] Banco criado com sucesso
- [x] Conexão estabelecida sem erro
- [x] Credenciais válidas funcionando

---

### 🔹 Issue 6: Configurar Prisma

**Tasks:**

- [x] Instalar prisma
- [x] `npx prisma init`
- [x] Configurar DATABASE_URL

**Critérios de aceite:**

- [x] Prisma inicializado corretamente
- [x] Conexão com banco funcionando
- [x] Arquivo schema.prisma criado

---

### 🔹 Issue 7: Modelagem

**Tasks:**

- [x] Criar model User
- [x] Criar model Task

**Critérios de aceite:**

- [x] Models definidos no Prisma
- [x] Relação entre User e Task funcionando
- [x] Schema válido sem erros

---

### 🔹 Issue 8: Migrations

**Tasks:**

- [x] Rodar migration

**Critérios de aceite:**

- [x] Tabelas criadas no banco
- [x] Prisma migrate executa sem erro
- [x] Dados podem ser inseridos manualmente

---

---

## 🔐 FASE 3 — Autenticação

### 🔹 Issue 9: Registro

**Tasks:**

- [x] Criar `/register`
- [x] Salvar usuário

**Critérios de aceite:**

- [x] Usuário criado no banco
- [x] Não permite dados inválidos
- [x] Retorna resposta de sucesso

---

### 🔹 Issue 10: Login

**Tasks:**

- [x] Criar `/login`
- [x] Validar credenciais
- [x] Gerar JWT

**Critérios de aceite:**

- [x] Login retorna token válido
- [x] Credenciais inválidas retornam erro
- [x] Token pode ser usado posteriormente

---

### 🔹 Issue 11: Middleware

**Tasks:**

- [x] Criar middleware JWT

**Critérios de aceite:**

- [x] Rotas protegidas bloqueiam acesso sem token
- [x] Token válido permite acesso
- [x] Token inválido retorna erro

---

---

## 📋 FASE 4 — CRUD de Tarefas

### 🔹 Issue 12: Criar tarefa

**Critérios de aceite:**

- [x] Tarefa salva no banco
- [x] Vinculada ao usuário
- [x] Retorna sucesso

---

### 🔹 Issue 13: Listar tarefas

**Critérios de aceite:**

- [x] Retorna apenas tarefas do usuário logado
- [x] Lista não quebra se vazia
- [x] Dados corretos retornados

---

### 🔹 Issue 14: Atualizar tarefa

**Critérios de aceite:**

- [x] Atualiza status/prioridade
- [x] Persistido no banco
- [x] Retorna sucesso

---

### 🔹 Issue 15: Deletar tarefa

**Critérios de aceite:**

- [ ] Tarefa removida do banco
- [ ] Não aparece mais na listagem
- [ ] Não quebra se ID inválido

---

---

# 📱 MOBILE

---

## 🚀 FASE 1 — Setup

### 🔹 Issue 16: Criar projeto Expo

**Critérios de aceite:**

- [ ] App inicia com `npx expo start`
- [ ] Abre no emulador ou celular
- [ ] Sem erros no console

---

### 🔹 Issue 17: Estrutura

**Critérios de aceite:**

- [ ] Pastas organizadas corretamente
- [ ] Código continua funcionando
- [ ] Separação clara de responsabilidades

---

### 🔹 Issue 18: Navegação

**Critérios de aceite:**

- [ ] Navegação entre telas funciona
- [ ] Nenhum erro de rota
- [ ] Telas renderizam corretamente

---

---

## 🔐 FASE 2 — Autenticação

### 🔹 Issue 19: Tela de login

**Critérios de aceite:**

- [ ] Inputs funcionam
- [ ] UI renderiza corretamente
- [ ] Botão responde ao clique

---

### 🔹 Issue 20: Integração API

**Critérios de aceite:**

- [ ] Login chama API
- [ ] Recebe token
- [ ] Trata erro corretamente

---

### 🔹 Issue 21: Persistência

**Critérios de aceite:**

- [ ] Token salvo no AsyncStorage
- [ ] Usuário permanece logado
- [ ] Logout limpa dados

---

---

## 📋 FASE 3 — Tarefas

### 🔹 Issue 22: Listar tarefas

**Critérios de aceite:**

- [ ] Lista renderiza corretamente
- [ ] Não quebra vazia
- [ ] Atualiza após mudanças

---

### 🔹 Issue 23: Criar tarefa

**Critérios de aceite:**

- [ ] Tarefa aparece na lista
- [ ] Input limpa após envio
- [ ] Não aceita vazio

---

### 🔹 Issue 24: Atualizar tarefa

**Critérios de aceite:**

- [ ] Marca como concluída
- [ ] UI atualiza
- [ ] Persistido no backend

---

### 🔹 Issue 25: Deletar tarefa

**Critérios de aceite:**

- [ ] Remove da tela
- [ ] Remove no backend
- [ ] Não quebra UI

---

---

## 🎯 FASE 4 — Prioridades

### 🔹 Issue 26: Prioridade UI

**Critérios de aceite:**

- [ ] Usuário consegue selecionar prioridade
- [ ] Valor salvo corretamente

---

### 🔹 Issue 27: Filtros

**Critérios de aceite:**

- [ ] Filtra corretamente
- [ ] Ordenação funciona
- [ ] UI responde rápido

---

---

## 🎨 FASE 5 — UI/UX

### 🔹 Issue 28: Componentes

**Critérios de aceite:**

- [ ] Componentes reutilizáveis funcionando
- [ ] Código mais limpo

---

### 🔹 Issue 29: Estilização

**Critérios de aceite:**

- [ ] Layout consistente
- [ ] Boa usabilidade
- [ ] Sem quebra visual

---

# 💡 Regra de execução

- 1 issue por vez
- Só avançar quando TODOS critérios forem atendidos
- Se falhar → corrigir antes de seguir
