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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { StartFailbackLaunchRequest, StartFailbackLaunchResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartFailbackLaunchCommand,
  serializeAws_restJson1StartFailbackLaunchCommand,
} from "../protocols/Aws_restJson1";

export interface StartFailbackLaunchCommandInput extends StartFailbackLaunchRequest {}
export interface StartFailbackLaunchCommandOutput extends StartFailbackLaunchResponse, __MetadataBearer {}

/**
 * <p>Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartFailbackLaunchCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartFailbackLaunchCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new StartFailbackLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFailbackLaunchCommandInput} for command's `input` shape.
 * @see {@link StartFailbackLaunchCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class StartFailbackLaunchCommand extends $Command<
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
  DrsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartFailbackLaunchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartFailbackLaunchCommandInput, StartFailbackLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "StartFailbackLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFailbackLaunchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartFailbackLaunchResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFailbackLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartFailbackLaunchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFailbackLaunchCommandOutput> {
    return deserializeAws_restJson1StartFailbackLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
