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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { CreateUsagePlanKeyRequest, UsagePlanKey } from "../models/models_0";
import {
  deserializeAws_restJson1CreateUsagePlanKeyCommand,
  serializeAws_restJson1CreateUsagePlanKeyCommand,
} from "../protocols/Aws_restJson1";

export interface CreateUsagePlanKeyCommandInput extends CreateUsagePlanKeyRequest {}
export interface CreateUsagePlanKeyCommandOutput extends UsagePlanKey, __MetadataBearer {}

/**
 * <p>Creates a usage plan key for adding an existing API key to a usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link CreateUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class CreateUsagePlanKeyCommand extends $Command<
  CreateUsagePlanKeyCommandInput,
  CreateUsagePlanKeyCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUsagePlanKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUsagePlanKeyCommandInput, CreateUsagePlanKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateUsagePlanKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUsagePlanKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlanKey.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUsagePlanKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateUsagePlanKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUsagePlanKeyCommandOutput> {
    return deserializeAws_restJson1CreateUsagePlanKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
