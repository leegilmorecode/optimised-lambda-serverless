import axios from "axios";
import { initlogger } from "@packages/logger";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const METHOD = "get-data.handler";
const logger = initlogger();

// simple lambda handler which takes the 'country' query param
// and does an http request to a country API to return the data
export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    logger.info(`${METHOD} - started`);

    const params: any = event.queryStringParameters;

    // default to 'norway' if query params have not been specified
    const country: string = params ? params.country : "norway";

    logger.info(`${METHOD} - country is: ${country}`);

    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );

    logger.info(`${METHOD} - data is: ${JSON.stringify(data)}`);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    logger.error(`Error: ${error}`);
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
}
