import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeWarmPoolAnswer, DescribeWarmPoolType } from "../models/models_0";
import {
  deserializeAws_queryDescribeWarmPoolCommand,
  serializeAws_queryDescribeWarmPoolCommand,
} from "../protocols/Aws_query";

export interface DescribeWarmPoolCommandInput extends DescribeWarmPoolType {}
export interface DescribeWarmPoolCommandOutput extends DescribeWarmPoolAnswer, __MetadataBearer {}

/**
 * <p>Gets information about a warm pool and its instances.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeWarmPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWarmPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeWarmPoolCommand extends $Command<
  DescribeWarmPoolCommandInput,
  DescribeWarmPoolCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWarmPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWarmPoolCommandInput, DescribeWarmPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeWarmPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWarmPoolType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWarmPoolAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWarmPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeWarmPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWarmPoolCommandOutput> {
    return deserializeAws_queryDescribeWarmPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
