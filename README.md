### 📱 TaskPriority

Aplicativo mobile de gerenciamneto de tarefas com foco em prioridade e organização pessoal.

---

### 🧠 Sobre o projeto

O TaskPriority foi desenvolvido com o objetivo de resolver um problema comum: a dificuldade de organizar tarefas com base no que realmente importa.

Diferente de listas tradicionais, o app permite classificar tarefas por prioridade, facilitando a tomada de decisão no dia a dia.

---

### 🚀 Tecnologias Utilizadas

- React Native (Expo)
- TypeScript
- Context API
- AsyncStorage
- Node.js
- Express
- PostgreSQL
- Prisma

---

### 💎 Funcionalidades

- Criar tarefas
- Definir prioridade (Alta, Média, Baixa)
- Listar tarefas
- Marca como concluída
- Remover tarefas
- Filtrar por prioridade
- Persistência local

---

### 🏛️ Arquitetura

📱 Frontend (Mobile)

- Responsável pela interface do usuário
- Gerenciamento de estado com Context API
- Comunicação com a API via HTTP

🌐 Backend

- API REST construída com Node.js e Express
- Responsável pelas regras de negócio

🗄️ Banco de Dados

- PostgreSQL
- Gerenciado com Prisma ORM

---

### Estrutura das pastas do projeto

```
mobile/
 ├── src/
 │   ├── screens/
 │   ├── components/
 │   ├── context/
 │   ├── services/
 │   └── styles/
```

```
backend/
 ├── src/
 │   ├── controllers/
 │   ├── routes/
 │   ├── services/
 │   ├── database/
 │   └── middlewares/
```

---

### 🗄️ Modelo de Dados

#### Task

- id: string
- titulo: string
- prioridade: "alta" | "media" | "baixa"
- concluida: boolean
- createdAt: Date

---

### ⚙️ Decisões Técnicas

- Utilização do Context API para gerenciamento de estado global por ser uma solução leve e suficiente para o escopo do projeto
- Uso do Prisma para facilitar a manipulação do banco de dados
- Estrutura modular no backend para facilitar escalabilidade

---

### ▶️ Como rodar o projeto

Rode os seguintes comandos para rodar o projeto

```
npm install
npx expo start
```

---

### Fluxo geral do App

```
[App inicia]
     ↓
[Verifica se está logado]
     ↓
 ┌───────────────┐
 │ Está logado?  │
 └──────┬────────┘
        │
   NÃO  │   SIM
        │
        ↓
 [Tela Login]         [Tela Tarefas]
        │                   │
        ↓                   │
 [Usuário faz login]        │
        │                   │
        ↓                   │
 [API valida login]         │
        │                   │
        ↓                   │
 [Salva token]              │
        │                   │
        └──────────────→────┘
                         ↓
                 [Lista tarefas]
                         │
         ┌───────────────┼───────────────┐
         ↓               ↓               ↓
   [Criar tarefa]  [Concluir tarefa] [Deletar tarefa]
         ↓               ↓               ↓
     [API]           [API]           [API]
         ↓               ↓               ↓
     [Atualiza lista de tarefas]
```

```
App → POST /login → Backend → Banco → Retorna token

App → GET /tasks → Backend → Banco → Lista de tarefas

App → POST /tasks → Backend → Banco → Nova tarefa
```

---

### 📷 Screenshots

Aqui entrará a seção de fotos do aplicativo em funcionamento.

---

### 👨‍💻 Autor

João Victor Batista Sampaio
