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

import { AddSourceIdentifierToSubscriptionMessage, AddSourceIdentifierToSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_queryAddSourceIdentifierToSubscriptionCommand,
  serializeAws_queryAddSourceIdentifierToSubscriptionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface AddSourceIdentifierToSubscriptionCommandInput extends AddSourceIdentifierToSubscriptionMessage {}
export interface AddSourceIdentifierToSubscriptionCommandOutput
  extends AddSourceIdentifierToSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Adds a source identifier to an existing RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddSourceIdentifierToSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddSourceIdentifierToSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AddSourceIdentifierToSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddSourceIdentifierToSubscriptionCommandInput} for command's `input` shape.
 * @see {@link AddSourceIdentifierToSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class AddSourceIdentifierToSubscriptionCommand extends $Command<
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddSourceIdentifierToSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AddSourceIdentifierToSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddSourceIdentifierToSubscriptionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: AddSourceIdentifierToSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AddSourceIdentifierToSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAddSourceIdentifierToSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput> {
    return deserializeAws_queryAddSourceIdentifierToSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
