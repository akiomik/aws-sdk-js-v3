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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteLoggerDefinitionRequest, DeleteLoggerDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteLoggerDefinitionCommand,
  serializeAws_restJson1DeleteLoggerDefinitionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteLoggerDefinitionCommandInput extends DeleteLoggerDefinitionRequest {}
export interface DeleteLoggerDefinitionCommandOutput extends DeleteLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class DeleteLoggerDefinitionCommand extends $Command<
  DeleteLoggerDefinitionCommandInput,
  DeleteLoggerDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLoggerDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLoggerDefinitionCommandInput, DeleteLoggerDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DeleteLoggerDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoggerDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLoggerDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoggerDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLoggerDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoggerDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteLoggerDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
