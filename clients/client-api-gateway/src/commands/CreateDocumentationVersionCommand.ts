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
import { CreateDocumentationVersionRequest, DocumentationVersion } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDocumentationVersionCommand,
  serializeAws_restJson1CreateDocumentationVersionCommand,
} from "../protocols/Aws_restJson1";

export interface CreateDocumentationVersionCommandInput extends CreateDocumentationVersionRequest {}
export interface CreateDocumentationVersionCommandOutput extends DocumentationVersion, __MetadataBearer {}

export class CreateDocumentationVersionCommand extends $Command<
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDocumentationVersionCommandInput) {
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
  ): Handler<CreateDocumentationVersionCommandInput, CreateDocumentationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateDocumentationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDocumentationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationVersion.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDocumentationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDocumentationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDocumentationVersionCommandOutput> {
    return deserializeAws_restJson1CreateDocumentationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
