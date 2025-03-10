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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { DeleteHypervisorInput, DeleteHypervisorOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteHypervisorCommand,
  serializeAws_json1_0DeleteHypervisorCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteHypervisorCommandInput extends DeleteHypervisorInput {}
export interface DeleteHypervisorCommandOutput extends DeleteHypervisorOutput, __MetadataBearer {}

/**
 * <p>Deletes a hypervisor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, DeleteHypervisorCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, DeleteHypervisorCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new DeleteHypervisorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHypervisorCommandInput} for command's `input` shape.
 * @see {@link DeleteHypervisorCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class DeleteHypervisorCommand extends $Command<
  DeleteHypervisorCommandInput,
  DeleteHypervisorCommandOutput,
  BackupGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHypervisorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHypervisorCommandInput, DeleteHypervisorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "DeleteHypervisorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHypervisorInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHypervisorOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHypervisorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteHypervisorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHypervisorCommandOutput> {
    return deserializeAws_json1_0DeleteHypervisorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
