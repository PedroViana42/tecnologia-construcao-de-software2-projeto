# Projeto Cinema - CRUD API 🎬

Este projeto é uma API robusta desenvolvida com **NestJS**, **Prisma ORM** e **PostgreSQL**, totalmente containerizada com **Docker**. Ele gerencia um sistema de cinema, incluindo filmes, salas, sessões, ingressos e combos de lanche.

---

## 🚀 Como Rodar o Projeto

A maneira mais fácil e recomendada de rodar o projeto é utilizando o **Docker Compose**. Isso garante que todas as dependências (Banco de Dados, API e Prisma Studio) subam configuradas corretamente.

### Pré-requisitos
- [Docker](https://www.docker.com/products/docker-desktop/) instalado e rodando.

### Passo a Passo

1. **Subir os Containers:**
   Abra o terminal na pasta raiz do projeto e execute:
   ```bash
   docker compose up --build -d
   ```
   *Este comando irá construir a imagem da API, baixar o PostgreSQL e iniciar todos os serviços em segundo plano.*

2. **Aguardar a Inicialização:**
   Na primeira vez, o Docker irá instalar as dependências e aplicar as migrações do banco de dados automaticamente. Você pode acompanhar o progresso com:
   ```bash
   docker logs api_app -f
   ```

---

## 🛠️ Acessando os Serviços

Após o comando acima, você terá três serviços principais rodando:

| Serviço | URL | Descrição |
| :--- | :--- | :--- |
| **API (Backend)** | [http://localhost:3000](http://localhost:3000) | Ponto de entrada da aplicação NestJS. |
| **Swagger UI** | [http://localhost:3000/api](http://localhost:3000/api) | Documentação interativa para testar todos os CRUDs. |
| **Prisma Studio** | [http://localhost:5555](http://localhost:5555) | Interface visual para navegar e editar os dados do banco. |

---

## 📂 Estrutura de Pastas (Principais)

- `src/CRUD/`: Contém todos os módulos de negócio (Filme, Cinema, Sala, etc).
- `src/prisma/`: Serviço de conexão com o banco de dados.
- `prisma/`: Contém o `schema.prisma` (modelagem) e as migrations.
- `docker/`: Scripts de inicialização dos containers.

---

## 📝 Dicas de Uso

### Formato de Data (ISO-8601)
Ao cadastrar um **Filme** ou uma **Sessão**, utilize o formato de data `Ano-Mês-Dia`:
```json
{
  "titulo": "Matrix",
  "genero": "Ficção Científica",
  "duracao": 136,
  "dataLancamento": "1999-05-21"
}
```

### Comandos Úteis do Docker
- **Parar tudo:** `docker compose down`
- **Limpar tudo (incluindo dados do banco):** `docker compose down -v`
- **Ver logs em tempo real:** `docker compose logs -f`

---

## ⚙️ Tecnologias Utilizadas

- **Framework:** NestJS
- **ORM:** Prisma (v7.5.0)
- **Banco de Dados:** PostgreSQL 16
- **Validação:** Class-Validator & Class-Transformer
- **Documentação:** Swagger/OpenAPI
- **Infraestrutura:** Docker & Docker Compose
