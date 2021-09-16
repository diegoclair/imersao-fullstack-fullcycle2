import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    // to add validations when we have dto in our controller
    {
      errorHttpStatusCode: 422,
    }
  ));
  await app.listen(3000);
}
bootstrap();
