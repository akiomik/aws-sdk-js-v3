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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateRuleMetadataRequest, UpdateRuleMetadataResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRuleMetadataCommand,
  serializeAws_json1_1UpdateRuleMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateRuleMetadataCommandInput extends UpdateRuleMetadataRequest {}
export interface UpdateRuleMetadataCommandOutput extends UpdateRuleMetadataResult, __MetadataBearer {}

/**
 * <p>Updates a rule's metadata. The description attribute can be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateRuleMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateRuleMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateRuleMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 */
export class UpdateRuleMetadataCommand extends $Command<
  UpdateRuleMetadataCommandInput,
  UpdateRuleMetadataCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRuleMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "UpdateRuleMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRuleMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRuleMetadataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRuleMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRuleMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRuleMetadataCommandOutput> {
    return deserializeAws_json1_1UpdateRuleMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
