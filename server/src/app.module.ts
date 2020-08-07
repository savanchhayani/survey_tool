import { Module } from '@nestjs/common';
import { SurveyController } from './controllers/survey.controller';
import { SurveyModule } from './modules/survey.module';

@Module({
  imports: [SurveyModule],
  controllers: [SurveyController],
  providers: [],
})
export class AppModule {}
