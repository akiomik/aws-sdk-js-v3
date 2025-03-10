import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateDataIntegrationCommandInput,
  CreateDataIntegrationCommandOutput,
} from "../commands/CreateDataIntegrationCommand";
import {
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
} from "../commands/CreateEventIntegrationCommand";
import {
  DeleteDataIntegrationCommandInput,
  DeleteDataIntegrationCommandOutput,
} from "../commands/DeleteDataIntegrationCommand";
import {
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
} from "../commands/DeleteEventIntegrationCommand";
import { GetDataIntegrationCommandInput, GetDataIntegrationCommandOutput } from "../commands/GetDataIntegrationCommand";
import {
  GetEventIntegrationCommandInput,
  GetEventIntegrationCommandOutput,
} from "../commands/GetEventIntegrationCommand";
import {
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput,
} from "../commands/ListDataIntegrationAssociationsCommand";
import {
  ListDataIntegrationsCommandInput,
  ListDataIntegrationsCommandOutput,
} from "../commands/ListDataIntegrationsCommand";
import {
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput,
} from "../commands/ListEventIntegrationAssociationsCommand";
import {
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
} from "../commands/ListEventIntegrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDataIntegrationCommandInput,
  UpdateDataIntegrationCommandOutput,
} from "../commands/UpdateDataIntegrationCommand";
import {
  UpdateEventIntegrationCommandInput,
  UpdateEventIntegrationCommandOutput,
} from "../commands/UpdateEventIntegrationCommand";
import { AppIntegrationsServiceException as __BaseException } from "../models/AppIntegrationsServiceException";
import {
  AccessDeniedException,
  DataIntegrationAssociationSummary,
  DataIntegrationSummary,
  DuplicateResourceException,
  EventFilter,
  EventIntegration,
  EventIntegrationAssociation,
  InternalServiceError,
  InvalidRequestException,
  ResourceNotFoundException,
  ResourceQuotaExceededException,
  ScheduleConfiguration,
  ThrottlingException,
} from "../models/models_0";

export const serializeAws_restJson1CreateDataIntegrationCommand = async (
  input: CreateDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ScheduleConfig !== undefined &&
      input.ScheduleConfig !== null && {
        ScheduleConfig: serializeAws_restJson1ScheduleConfiguration(input.ScheduleConfig, context),
      }),
    ...(input.SourceURI !== undefined && input.SourceURI !== null && { SourceURI: input.SourceURI }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateEventIntegrationCommand = async (
  input: CreateEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventBridgeBus !== undefined &&
      input.EventBridgeBus !== null && { EventBridgeBus: input.EventBridgeBus }),
    ...(input.EventFilter !== undefined &&
      input.EventFilter !== null && { EventFilter: serializeAws_restJson1EventFilter(input.EventFilter, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDataIntegrationCommand = async (
  input: DeleteDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/dataIntegrations/{DataIntegrationIdentifier}";
  if (input.DataIntegrationIdentifier !== undefined) {
    const labelValue: string = input.DataIntegrationIdentifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataIntegrationIdentifier.");
    }
    resolvedPath = resolvedPath.replace("{DataIntegrationIdentifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataIntegrationIdentifier.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEventIntegrationCommand = async (
  input: DeleteEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDataIntegrationCommand = async (
  input: GetDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations/{Identifier}";
  if (input.Identifier !== undefined) {
    const labelValue: string = input.Identifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Identifier.");
    }
    resolvedPath = resolvedPath.replace("{Identifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Identifier.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEventIntegrationCommand = async (
  input: GetEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListDataIntegrationAssociationsCommand = async (
  input: ListDataIntegrationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/dataIntegrations/{DataIntegrationIdentifier}/associations";
  if (input.DataIntegrationIdentifier !== undefined) {
    const labelValue: string = input.DataIntegrationIdentifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataIntegrationIdentifier.");
    }
    resolvedPath = resolvedPath.replace("{DataIntegrationIdentifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataIntegrationIdentifier.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDataIntegrationsCommand = async (
  input: ListDataIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListEventIntegrationAssociationsCommand = async (
  input: ListEventIntegrationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/eventIntegrations/{EventIntegrationName}/associations";
  if (input.EventIntegrationName !== undefined) {
    const labelValue: string = input.EventIntegrationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EventIntegrationName.");
    }
    resolvedPath = resolvedPath.replace("{EventIntegrationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EventIntegrationName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListEventIntegrationsCommand = async (
  input: ListEventIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateDataIntegrationCommand = async (
  input: UpdateDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations/{Identifier}";
  if (input.Identifier !== undefined) {
    const labelValue: string = input.Identifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Identifier.");
    }
    resolvedPath = resolvedPath.replace("{Identifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Identifier.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateEventIntegrationCommand = async (
  input: UpdateEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataIntegrationCommandError(output, context);
  }
  const contents: CreateDataIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ClientToken: undefined,
    Description: undefined,
    Id: undefined,
    KmsKey: undefined,
    Name: undefined,
    ScheduleConfiguration: undefined,
    SourceURI: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ClientToken !== undefined && data.ClientToken !== null) {
    contents.ClientToken = __expectString(data.ClientToken);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.KmsKey !== undefined && data.KmsKey !== null) {
    contents.KmsKey = __expectString(data.KmsKey);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ScheduleConfiguration !== undefined && data.ScheduleConfiguration !== null) {
    contents.ScheduleConfiguration = deserializeAws_restJson1ScheduleConfiguration(data.ScheduleConfiguration, context);
  }
  if (data.SourceURI !== undefined && data.SourceURI !== null) {
    contents.SourceURI = __expectString(data.SourceURI);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.appintegrations#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceQuotaExceededException":
    case "com.amazonaws.appintegrations#ResourceQuotaExceededException":
      throw await deserializeAws_restJson1ResourceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEventIntegrationCommandError(output, context);
  }
  const contents: CreateEventIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventIntegrationArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventIntegrationArn !== undefined && data.EventIntegrationArn !== null) {
    contents.EventIntegrationArn = __expectString(data.EventIntegrationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.appintegrations#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceQuotaExceededException":
    case "com.amazonaws.appintegrations#ResourceQuotaExceededException":
      throw await deserializeAws_restJson1ResourceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataIntegrationCommandError(output, context);
  }
  const contents: DeleteDataIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEventIntegrationCommandError(output, context);
  }
  const contents: DeleteEventIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataIntegrationCommandError(output, context);
  }
  const contents: GetDataIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    Id: undefined,
    KmsKey: undefined,
    Name: undefined,
    ScheduleConfiguration: undefined,
    SourceURI: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.KmsKey !== undefined && data.KmsKey !== null) {
    contents.KmsKey = __expectString(data.KmsKey);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ScheduleConfiguration !== undefined && data.ScheduleConfiguration !== null) {
    contents.ScheduleConfiguration = deserializeAws_restJson1ScheduleConfiguration(data.ScheduleConfiguration, context);
  }
  if (data.SourceURI !== undefined && data.SourceURI !== null) {
    contents.SourceURI = __expectString(data.SourceURI);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEventIntegrationCommandError(output, context);
  }
  const contents: GetEventIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Description: undefined,
    EventBridgeBus: undefined,
    EventFilter: undefined,
    EventIntegrationArn: undefined,
    Name: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EventBridgeBus !== undefined && data.EventBridgeBus !== null) {
    contents.EventBridgeBus = __expectString(data.EventBridgeBus);
  }
  if (data.EventFilter !== undefined && data.EventFilter !== null) {
    contents.EventFilter = deserializeAws_restJson1EventFilter(data.EventFilter, context);
  }
  if (data.EventIntegrationArn !== undefined && data.EventIntegrationArn !== null) {
    contents.EventIntegrationArn = __expectString(data.EventIntegrationArn);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDataIntegrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataIntegrationAssociationsCommandError(output, context);
  }
  const contents: ListDataIntegrationAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataIntegrationAssociations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataIntegrationAssociations !== undefined && data.DataIntegrationAssociations !== null) {
    contents.DataIntegrationAssociations = deserializeAws_restJson1DataIntegrationAssociationsList(
      data.DataIntegrationAssociations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataIntegrationAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDataIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataIntegrationsCommandError(output, context);
  }
  const contents: ListDataIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataIntegrations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataIntegrations !== undefined && data.DataIntegrations !== null) {
    contents.DataIntegrations = deserializeAws_restJson1DataIntegrationsList(data.DataIntegrations, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListEventIntegrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventIntegrationAssociationsCommandError(output, context);
  }
  const contents: ListEventIntegrationAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventIntegrationAssociations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventIntegrationAssociations !== undefined && data.EventIntegrationAssociations !== null) {
    contents.EventIntegrationAssociations = deserializeAws_restJson1EventIntegrationAssociationsList(
      data.EventIntegrationAssociations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEventIntegrationAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListEventIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventIntegrationsCommandError(output, context);
  }
  const contents: ListEventIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventIntegrations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventIntegrations !== undefined && data.EventIntegrations !== null) {
    contents.EventIntegrations = deserializeAws_restJson1EventIntegrationsList(data.EventIntegrations, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEventIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataIntegrationCommandError(output, context);
  }
  const contents: UpdateDataIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEventIntegrationCommandError(output, context);
  }
  const contents: UpdateEventIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await deserializeAws_restJson1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DuplicateResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateResourceException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DuplicateResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
  };
};

const serializeAws_restJson1ScheduleConfiguration = (input: ScheduleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.FirstExecutionFrom !== undefined &&
      input.FirstExecutionFrom !== null && { FirstExecutionFrom: input.FirstExecutionFrom }),
    ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
    ...(input.ScheduleExpression !== undefined &&
      input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ClientAssociationMetadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1DataIntegrationAssociationsList = (
  output: any,
  context: __SerdeContext
): DataIntegrationAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataIntegrationAssociationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataIntegrationAssociationSummary = (
  output: any,
  context: __SerdeContext
): DataIntegrationAssociationSummary => {
  return {
    ClientId: __expectString(output.ClientId),
    DataIntegrationArn: __expectString(output.DataIntegrationArn),
    DataIntegrationAssociationArn: __expectString(output.DataIntegrationAssociationArn),
  } as any;
};

const deserializeAws_restJson1DataIntegrationsList = (
  output: any,
  context: __SerdeContext
): DataIntegrationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataIntegrationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataIntegrationSummary = (
  output: any,
  context: __SerdeContext
): DataIntegrationSummary => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    SourceURI: __expectString(output.SourceURI),
  } as any;
};

const deserializeAws_restJson1EventFilter = (output: any, context: __SerdeContext): EventFilter => {
  return {
    Source: __expectString(output.Source),
  } as any;
};

const deserializeAws_restJson1EventIntegration = (output: any, context: __SerdeContext): EventIntegration => {
  return {
    Description: __expectString(output.Description),
    EventBridgeBus: __expectString(output.EventBridgeBus),
    EventFilter:
      output.EventFilter !== undefined && output.EventFilter !== null
        ? deserializeAws_restJson1EventFilter(output.EventFilter, context)
        : undefined,
    EventIntegrationArn: __expectString(output.EventIntegrationArn),
    Name: __expectString(output.Name),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventIntegrationAssociation = (
  output: any,
  context: __SerdeContext
): EventIntegrationAssociation => {
  return {
    ClientAssociationMetadata:
      output.ClientAssociationMetadata !== undefined && output.ClientAssociationMetadata !== null
        ? deserializeAws_restJson1ClientAssociationMetadata(output.ClientAssociationMetadata, context)
        : undefined,
    ClientId: __expectString(output.ClientId),
    EventBridgeRuleName: __expectString(output.EventBridgeRuleName),
    EventIntegrationAssociationArn: __expectString(output.EventIntegrationAssociationArn),
    EventIntegrationAssociationId: __expectString(output.EventIntegrationAssociationId),
    EventIntegrationName: __expectString(output.EventIntegrationName),
  } as any;
};

const deserializeAws_restJson1EventIntegrationAssociationsList = (
  output: any,
  context: __SerdeContext
): EventIntegrationAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventIntegrationAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EventIntegrationsList = (output: any, context: __SerdeContext): EventIntegration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventIntegration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ScheduleConfiguration = (output: any, context: __SerdeContext): ScheduleConfiguration => {
  return {
    FirstExecutionFrom: __expectString(output.FirstExecutionFrom),
    Object: __expectString(output.Object),
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
