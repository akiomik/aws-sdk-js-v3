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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachClassicLinkVpcRequest, DetachClassicLinkVpcResult } from "../models/models_4";
import {
  deserializeAws_ec2DetachClassicLinkVpcCommand,
  serializeAws_ec2DetachClassicLinkVpcCommand,
} from "../protocols/Aws_ec2";

export interface DetachClassicLinkVpcCommandInput extends DetachClassicLinkVpcRequest {}
export interface DetachClassicLinkVpcCommandOutput extends DetachClassicLinkVpcResult, __MetadataBearer {}

/**
 * <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link DetachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DetachClassicLinkVpcCommand extends $Command<
  DetachClassicLinkVpcCommandInput,
  DetachClassicLinkVpcCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachClassicLinkVpcCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachClassicLinkVpcCommandInput, DetachClassicLinkVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachClassicLinkVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachClassicLinkVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachClassicLinkVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachClassicLinkVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DetachClassicLinkVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachClassicLinkVpcCommandOutput> {
    return deserializeAws_ec2DetachClassicLinkVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
