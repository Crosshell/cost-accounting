import { Module } from '@nestjs/common';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RecordModule } from './record/record.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    HealthcheckModule,
    UserModule,
    CategoryModule,
    RecordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
