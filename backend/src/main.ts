import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração Global de Prefixo
  app.setGlobalPrefix('api');

  // Configuração dinâmica de CORS (Normalizada para evitar erro de trailing slash)
  const frontendUrl = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
  app.enableCors({
    origin: frontendUrl,
    credentials: true,
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
  });

  // Configuração global de Pipes (Validação via class-validator)
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Documentação Swagger
  const config = new DocumentBuilder()
    .setTitle('CineAPI')
    .setDescription('Documentação da API Cineweb (NestJS padrão)')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Inicialização do Servidor
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 Cineweb API rodando na porta ${port}`);
  console.log(`🔗 CORS autorizado para: ${frontendUrl}`);
  console.log(`📄 Swagger disponível em: http://localhost:${port}/api/docs`);
}
bootstrap();
