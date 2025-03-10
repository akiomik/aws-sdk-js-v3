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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CancelImageCreationRequest, CancelImageCreationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelImageCreationCommand,
  serializeAws_restJson1CancelImageCreationCommand,
} from "../protocols/Aws_restJson1";

export interface CancelImageCreationCommandInput extends CancelImageCreationRequest {}
export interface CancelImageCreationCommandOutput extends CancelImageCreationResponse, __MetadataBearer {}

/**
 * <p>CancelImageCreation cancels the creation of Image. This operation can only be used on
 * 			images in a non-terminal state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CancelImageCreationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CancelImageCreationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CancelImageCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelImageCreationCommandInput} for command's `input` shape.
 * @see {@link CancelImageCreationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class CancelImageCreationCommand extends $Command<
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelImageCreationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelImageCreationCommandInput, CancelImageCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CancelImageCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelImageCreationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelImageCreationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelImageCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelImageCreationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelImageCreationCommandOutput> {
    return deserializeAws_restJson1CancelImageCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
