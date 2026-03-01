FROM node:20-alpine

WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm ci

# netcat para aguardar o DB ficar disponível
RUN apk add --no-cache netcat-openbsd

# Copia o código e gera o client
COPY . .
RUN npx prisma generate
RUN npm run build

# entrypoint que roda migrations antes de iniciar
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["npm", "run", "start:prod"]
