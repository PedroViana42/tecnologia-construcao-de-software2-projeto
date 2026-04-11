"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const cinemaCount = await prisma.cinema.count();
    const salaCount = await prisma.sala.count();
    const filmeCount = await prisma.filme.count();
    const sessaoCount = await prisma.sessao.count();
    const generoCount = await prisma.genero.count();
    console.log('--- DATABASE STATUS ---');
    console.log(`Cinemas: ${cinemaCount}`);
    console.log(`Gêneros: ${generoCount}`);
    console.log(`Salas: ${salaCount}`);
    console.log(`Filmes: ${filmeCount}`);
    console.log(`Sessões: ${sessaoCount}`);
    console.log('-----------------------');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=count-db.js.map