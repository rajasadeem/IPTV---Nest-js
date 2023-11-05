/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ConfigurationService } from './configuration/configuration.service';
import { ConfigurationModule } from './configuration/configuration.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);

  const configService = app.select(ConfigurationModule).get(ConfigurationService);

  const port = configService.appConfig.port;
  await app.listen(port);
  console.log(`App is running on port: ${port}`)
  return app;
}
bootstrap();
