import { Paginator } from "@aws-sdk/types";

import {
  SearchContentCommand,
  SearchContentCommandInput,
  SearchContentCommandOutput,
} from "../commands/SearchContentCommand";
import { Wisdom } from "../Wisdom";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WisdomClient,
  input: SearchContentCommandInput,
  ...args: any
): Promise<SearchContentCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchContentCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Wisdom,
  input: SearchContentCommandInput,
  ...args: any
): Promise<SearchContentCommandOutput> => {
  // @ts-ignore
  return await client.searchContent(input, ...args);
};
export async function* paginateSearchContent(
  config: WisdomPaginationConfiguration,
  input: SearchContentCommandInput,
  ...additionalArguments: any
): Paginator<SearchContentCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchContentCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Wisdom) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WisdomClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Wisdom | WisdomClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
