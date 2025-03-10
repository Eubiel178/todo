import Database from "better-sqlite3";
import path from "path";

// Defina o caminho para o banco de dados (se estiver na raiz do projeto)
const dbPath = path.join(process.cwd(), "database.sqlite");

// Crie o banco de dados (caso ele não exista) e a tabela de tarefas
const db = new Database(dbPath, { verbose: console.log });

// Crie a tabela, se ela não existir
db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed BOOLEAN NOT NULL
    );
  `);

console.log("Banco de dados e tabela criados com sucesso!");

export default db;
