import { Sha256 } from "@aws-crypto/sha256-js";

import { KinesisAnalyticsV2ClientConfig } from "./KinesisAnalyticsV2Client";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisAnalyticsV2ClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
