import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS ayarları
  app.enableCors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();