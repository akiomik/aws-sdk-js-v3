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

import { GetAWSOrganizationsAccessStatusInput, GetAWSOrganizationsAccessStatusOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand,
  serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface GetAWSOrganizationsAccessStatusCommandInput extends GetAWSOrganizationsAccessStatusInput {}
export interface GetAWSOrganizationsAccessStatusCommandOutput
  extends GetAWSOrganizationsAccessStatusOutput,
    __MetadataBearer {}

/**
 * <p>Get the Access Status for AWS Organization portfolio share feature. This API can only be
 *          called by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new GetAWSOrganizationsAccessStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAWSOrganizationsAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetAWSOrganizationsAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class GetAWSOrganizationsAccessStatusCommand extends $Command<
  GetAWSOrganizationsAccessStatusCommandInput,
  GetAWSOrganizationsAccessStatusCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAWSOrganizationsAccessStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAWSOrganizationsAccessStatusCommandInput, GetAWSOrganizationsAccessStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "GetAWSOrganizationsAccessStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAWSOrganizationsAccessStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetAWSOrganizationsAccessStatusOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAWSOrganizationsAccessStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAWSOrganizationsAccessStatusCommandOutput> {
    return deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
