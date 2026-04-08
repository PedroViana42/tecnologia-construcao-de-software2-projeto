FROM node:20-alpine

# Instala dependências do sistema
# openssl: Necessário para o Prisma (especialmente em Alpine)
# netcat-openbsd: Para o script de espera do banco
RUN apk add --no-cache openssl netcat-openbsd

WORKDIR /app

# Instala dependências do Node
COPY package*.json ./
RUN npm ci

# Copia o código e gera o client inicial (para o build)
COPY . .
RUN npx prisma generate
RUN npm run build

# Configura o script de entrypoint personalizado
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Execução
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["npm", "run", "start:dev"]

