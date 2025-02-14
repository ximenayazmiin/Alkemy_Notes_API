import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;
  const url_nocors = process.env.URL_RESPUESTA_FRONT || 'http://localhost';

  // Habilita CORS para permitir solicitudes desde http://localhost
  app.enableCors({
    origin: url_nocors,
  });

  await app.listen(port);
}
bootstrap();