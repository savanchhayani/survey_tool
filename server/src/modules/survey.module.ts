import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { SurveyController } from "src/controllers/survey.controller";
import { SurveyService } from "src/services/survey.service";
import { surveyProviders } from "src/providers/survey.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [SurveyController],
  providers: [
    SurveyService,
    ...surveyProviders,
  ],
  exports: [SurveyService],
})
export class SurveyModule {}
