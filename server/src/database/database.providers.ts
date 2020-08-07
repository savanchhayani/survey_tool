import * as mongoose from 'mongoose';
import DBConstants from 'src/constants/DBConstants';

export const databaseProviders = [
  {
    provide: DBConstants.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/survey_tool'),
  },
];
