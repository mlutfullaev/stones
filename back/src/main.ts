import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3001;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(port);
  console.log(`Server running on port http://localhost:${port}/`);
}
bootstrap();
