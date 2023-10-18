import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ConfigurationService {
  get mongooseConfig(): MongooseModuleOptions {
    return {
      uri: process.env.MONGODB_URI,
    };
  }

  get appConfig() {
    return {
      port: process.env.PORT || 3000
    };
  }

  get authConfig() {
    return {
      privateKey: process.env.JWT_PRIVATE_KEY,
      publicKey: process.env.JWT_PUBLIC_KEY,
      jwtExpirationTime: process.env.JWT_EXPIRATION_TIME,
    };
  }
}
