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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { DeleteDataSourceRequest, DeleteDataSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDataSourceCommand,
  serializeAws_restJson1DeleteDataSourceCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteDataSourceCommandInput extends DeleteDataSourceRequest {}
export interface DeleteDataSourceCommandOutput extends DeleteDataSourceResponse, __MetadataBearer {}

/**
 * <p>Deletes a <code>DataSource</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteDataSourceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteDataSourceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class DeleteDataSourceCommand extends $Command<
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "DeleteDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDataSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDataSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDataSourceCommandOutput> {
    return deserializeAws_restJson1DeleteDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
