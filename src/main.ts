/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService); 
  const globalPrefix = configService.get('PREFIX') || ''; 
  app.setGlobalPrefix(globalPrefix);
  const PORT = +configService.get('PORT') || 3011;
  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/${globalPrefix}`);
}

bootstrap();
