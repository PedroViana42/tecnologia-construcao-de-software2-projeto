FROM node:20-alpine

WORKDIR /app

# Instala deps
COPY package*.json ./
RUN npm ci

# Copiar app
COPY . .

# Expõe a porta padrão default do vite explicitamente informada (ou 5173 fallback)
EXPOSE 5173

# Diferente do backend, pro dev do vite a gente delega a config pro docker-compose
CMD ["npm", "run", "dev"]
