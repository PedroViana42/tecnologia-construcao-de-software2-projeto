import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 3000;
const DB_FILE = path.resolve('db.json');

app.use(cors());
app.use(express.json());

// Helper to read/write DB
async function readDB() {
  try {
    const data = await fs.readFile(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    const defaultDB = { filmes: [], salas: [], sessoes: [], ingressos: [], lanches: [], combos: [], vendasLanches: [], pedidos: [] };
    await fs.writeFile(DB_FILE, JSON.stringify(defaultDB, null, 2));
    return defaultDB;
  }
}

async function writeDB(data: any) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

// Generic CRUD generator
function createCrudRoutes(app: express.Express, resource: string) {
  app.get(`/api/${resource}`, async (req, res) => {
    const db = await readDB();
    res.json(db[resource] || []);
  });

  app.get(`/api/${resource}/:id`, async (req, res) => {
    const db = await readDB();
    const item = (db[resource] || []).find((i: any) => i.id === req.params.id);
    if (item) res.json(item);
    else res.status(404).json({ error: 'Not found' });
  });

  app.post(`/api/${resource}`, async (req, res) => {
    const db = await readDB();
    if (!db[resource]) db[resource] = [];
    const newItem = { id: Date.now().toString(), ...req.body };
    db[resource].push(newItem);
    await writeDB(db);
    res.status(201).json(newItem);
  });

  app.put(`/api/${resource}/:id`, async (req, res) => {
    const db = await readDB();
    if (!db[resource]) db[resource] = [];
    const index = db[resource].findIndex((i: any) => i.id === req.params.id);
    if (index !== -1) {
      db[resource][index] = { ...db[resource][index], ...req.body, id: req.params.id };
      await writeDB(db);
      res.json(db[resource][index]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });

  app.delete(`/api/${resource}/:id`, async (req, res) => {
    const db = await readDB();
    if (!db[resource]) db[resource] = [];
    db[resource] = db[resource].filter((i: any) => i.id !== req.params.id);
    await writeDB(db);
    res.status(204).send();
  });
}

// API Routes
createCrudRoutes(app, 'filmes');
createCrudRoutes(app, 'salas');
createCrudRoutes(app, 'sessoes');
createCrudRoutes(app, 'ingressos');
createCrudRoutes(app, 'lanches');
createCrudRoutes(app, 'combos');
createCrudRoutes(app, 'vendasLanches');
createCrudRoutes(app, 'pedidos');

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api')) {
        res.sendFile(path.resolve('dist/index.html'));
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
