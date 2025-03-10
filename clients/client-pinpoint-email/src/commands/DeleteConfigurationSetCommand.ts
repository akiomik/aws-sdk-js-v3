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

import { DeleteConfigurationSetRequest, DeleteConfigurationSetResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1DeleteConfigurationSetCommand,
  serializeAws_restJson1DeleteConfigurationSetCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteConfigurationSetCommandInput extends DeleteConfigurationSetRequest {}
export interface DeleteConfigurationSetCommandOutput extends DeleteConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Delete an existing configuration set.</p>
 *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
 *             apply to the emails you send. You apply a configuration set to an email by including a
 *             reference to the configuration set in the headers of the email. When you apply a
 *             configuration set to an email, all of the rules in that configuration set are applied to
 *             the email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, DeleteConfigurationSetCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, DeleteConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new DeleteConfigurationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class DeleteConfigurationSetCommand extends $Command<
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "DeleteConfigurationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteConfigurationSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConfigurationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteConfigurationSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteConfigurationSetCommandOutput> {
    return deserializeAws_restJson1DeleteConfigurationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
