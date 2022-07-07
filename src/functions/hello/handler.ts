import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  if (true == true) {
    return formatJSONResponse({
      message: `Hello Jim, welcome to the exciting Serverless world! ${process.env.TESTER}!!!!`,
      event,
    });
  }
};

export const main = middyfy(hello);
