import { Paginator } from "@aws-sdk/types";

import {
  DescribeIpamPoolsCommand,
  DescribeIpamPoolsCommandInput,
  DescribeIpamPoolsCommandOutput,
} from "../commands/DescribeIpamPoolsCommand";
import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeIpamPoolsCommandInput,
  ...args: any
): Promise<DescribeIpamPoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeIpamPoolsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeIpamPoolsCommandInput,
  ...args: any
): Promise<DescribeIpamPoolsCommandOutput> => {
  // @ts-ignore
  return await client.describeIpamPools(input, ...args);
};
export async function* paginateDescribeIpamPools(
  config: EC2PaginationConfiguration,
  input: DescribeIpamPoolsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeIpamPoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeIpamPoolsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
