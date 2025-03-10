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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DeleteProvisioningTemplateVersionRequest,
  DeleteProvisioningTemplateVersionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand,
  serializeAws_restJson1DeleteProvisioningTemplateVersionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteProvisioningTemplateVersionCommandInput extends DeleteProvisioningTemplateVersionRequest {}
export interface DeleteProvisioningTemplateVersionCommandOutput
  extends DeleteProvisioningTemplateVersionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a fleet provisioning template version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class DeleteProvisioningTemplateVersionCommand extends $Command<
  DeleteProvisioningTemplateVersionCommandInput,
  DeleteProvisioningTemplateVersionCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProvisioningTemplateVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProvisioningTemplateVersionCommandInput, DeleteProvisioningTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteProvisioningTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProvisioningTemplateVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProvisioningTemplateVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteProvisioningTemplateVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProvisioningTemplateVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProvisioningTemplateVersionCommandOutput> {
    return deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
