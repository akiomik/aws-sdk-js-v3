import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "../commands/CreateAssistantAssociationCommand";
import { CreateAssistantCommandInput, CreateAssistantCommandOutput } from "../commands/CreateAssistantCommand";
import { CreateContentCommandInput, CreateContentCommandOutput } from "../commands/CreateContentCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "../commands/CreateKnowledgeBaseCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
import {
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "../commands/DeleteAssistantAssociationCommand";
import { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "../commands/DeleteAssistantCommand";
import { DeleteContentCommandInput, DeleteContentCommandOutput } from "../commands/DeleteContentCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "../commands/DeleteKnowledgeBaseCommand";
import {
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "../commands/GetAssistantAssociationCommand";
import { GetAssistantCommandInput, GetAssistantCommandOutput } from "../commands/GetAssistantCommand";
import { GetContentCommandInput, GetContentCommandOutput } from "../commands/GetContentCommand";
import { GetContentSummaryCommandInput, GetContentSummaryCommandOutput } from "../commands/GetContentSummaryCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "../commands/GetKnowledgeBaseCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import {
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "../commands/ListAssistantAssociationsCommand";
import { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "../commands/ListAssistantsCommand";
import { ListContentsCommandInput, ListContentsCommandOutput } from "../commands/ListContentsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "../commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "../commands/NotifyRecommendationsReceivedCommand";
import { QueryAssistantCommandInput, QueryAssistantCommandOutput } from "../commands/QueryAssistantCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "../commands/RemoveKnowledgeBaseTemplateUriCommand";
import { SearchContentCommandInput, SearchContentCommandOutput } from "../commands/SearchContentCommand";
import { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "../commands/SearchSessionsCommand";
import { StartContentUploadCommandInput, StartContentUploadCommandOutput } from "../commands/StartContentUploadCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateContentCommandInput, UpdateContentCommandOutput } from "../commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "../commands/UpdateKnowledgeBaseTemplateUriCommand";
import {
  AccessDeniedException,
  AppIntegrationsConfiguration,
  AssistantAssociationData,
  AssistantAssociationInputData,
  AssistantAssociationOutputData,
  AssistantAssociationSummary,
  AssistantData,
  AssistantSummary,
  ConflictException,
  ContentData,
  ContentReference,
  ContentSummary,
  Document,
  DocumentText,
  Filter,
  Highlight,
  KnowledgeBaseAssociationData,
  KnowledgeBaseData,
  KnowledgeBaseSummary,
  NotifyRecommendationsReceivedError,
  PreconditionFailedException,
  RecommendationData,
  RenderingConfiguration,
  ResourceNotFoundException,
  ResultData,
  SearchExpression,
  ServerSideEncryptionConfiguration,
  ServiceQuotaExceededException,
  SessionData,
  SessionSummary,
  SourceConfiguration,
  TooManyTagsException,
  ValidationException,
} from "../models/models_0";
import { WisdomServiceException as __BaseException } from "../models/WisdomServiceException";

export const serializeAws_restJson1CreateAssistantCommand = async (
  input: CreateAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.serverSideEncryptionConfiguration !== undefined &&
      input.serverSideEncryptionConfiguration !== null && {
        serverSideEncryptionConfiguration: serializeAws_restJson1ServerSideEncryptionConfiguration(
          input.serverSideEncryptionConfiguration,
          context
        ),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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

export const serializeAws_restJson1CreateAssistantAssociationCommand = async (
  input: CreateAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/associations";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.association !== undefined &&
      input.association !== null && {
        association: serializeAws_restJson1AssistantAssociationInputData(input.association, context),
      }),
    ...(input.associationType !== undefined &&
      input.associationType !== null && { associationType: input.associationType }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateContentCommand = async (
  input: CreateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.metadata !== undefined &&
      input.metadata !== null && { metadata: serializeAws_restJson1ContentMetadata(input.metadata, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.overrideLinkOutUri !== undefined &&
      input.overrideLinkOutUri !== null && { overrideLinkOutUri: input.overrideLinkOutUri }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.title !== undefined && input.title !== null && { title: input.title }),
    ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
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

export const serializeAws_restJson1CreateKnowledgeBaseCommand = async (
  input: CreateKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.knowledgeBaseType !== undefined &&
      input.knowledgeBaseType !== null && { knowledgeBaseType: input.knowledgeBaseType }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.renderingConfiguration !== undefined &&
      input.renderingConfiguration !== null && {
        renderingConfiguration: serializeAws_restJson1RenderingConfiguration(input.renderingConfiguration, context),
      }),
    ...(input.serverSideEncryptionConfiguration !== undefined &&
      input.serverSideEncryptionConfiguration !== null && {
        serverSideEncryptionConfiguration: serializeAws_restJson1ServerSideEncryptionConfiguration(
          input.serverSideEncryptionConfiguration,
          context
        ),
      }),
    ...(input.sourceConfiguration !== undefined &&
      input.sourceConfiguration !== null && {
        sourceConfiguration: serializeAws_restJson1SourceConfiguration(input.sourceConfiguration, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/sessions";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1DeleteAssistantCommand = async (
  input: DeleteAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
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

export const serializeAws_restJson1DeleteAssistantAssociationCommand = async (
  input: DeleteAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/associations/{assistantAssociationId}";
  if (input.assistantAssociationId !== undefined) {
    const labelValue: string = input.assistantAssociationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantAssociationId.");
    }
    resolvedPath = resolvedPath.replace("{assistantAssociationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantAssociationId.");
  }
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
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

export const serializeAws_restJson1DeleteContentCommand = async (
  input: DeleteContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
  }
  if (input.contentId !== undefined) {
    const labelValue: string = input.contentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: contentId.");
    }
    resolvedPath = resolvedPath.replace("{contentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: contentId.");
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

export const serializeAws_restJson1DeleteKnowledgeBaseCommand = async (
  input: DeleteKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
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

export const serializeAws_restJson1GetAssistantCommand = async (
  input: GetAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
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

export const serializeAws_restJson1GetAssistantAssociationCommand = async (
  input: GetAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/associations/{assistantAssociationId}";
  if (input.assistantAssociationId !== undefined) {
    const labelValue: string = input.assistantAssociationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantAssociationId.");
    }
    resolvedPath = resolvedPath.replace("{assistantAssociationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantAssociationId.");
  }
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
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

export const serializeAws_restJson1GetContentCommand = async (
  input: GetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}";
  if (input.contentId !== undefined) {
    const labelValue: string = input.contentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: contentId.");
    }
    resolvedPath = resolvedPath.replace("{contentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: contentId.");
  }
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
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

export const serializeAws_restJson1GetContentSummaryCommand = async (
  input: GetContentSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary";
  if (input.contentId !== undefined) {
    const labelValue: string = input.contentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: contentId.");
    }
    resolvedPath = resolvedPath.replace("{contentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: contentId.");
  }
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
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

export const serializeAws_restJson1GetKnowledgeBaseCommand = async (
  input: GetKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
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

export const serializeAws_restJson1GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/sessions/{sessionId}/recommendations";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.waitTimeSeconds !== undefined && { waitTimeSeconds: input.waitTimeSeconds.toString() }),
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

export const serializeAws_restJson1GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/sessions/{sessionId}";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
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

export const serializeAws_restJson1ListAssistantAssociationsCommand = async (
  input: ListAssistantAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/associations";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListAssistantsCommand = async (
  input: ListAssistantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListContentsCommand = async (
  input: ListContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1ListKnowledgeBasesCommand = async (
  input: ListKnowledgeBasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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

export const serializeAws_restJson1NotifyRecommendationsReceivedCommand = async (
  input: NotifyRecommendationsReceivedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/sessions/{sessionId}/recommendations/notify";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.recommendationIds !== undefined &&
      input.recommendationIds !== null && {
        recommendationIds: serializeAws_restJson1RecommendationIdList(input.recommendationIds, context),
      }),
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

export const serializeAws_restJson1QueryAssistantCommand = async (
  input: QueryAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/query";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.queryText !== undefined && input.queryText !== null && { queryText: input.queryText }),
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

export const serializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand = async (
  input: RemoveKnowledgeBaseTemplateUriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/templateUri";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
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

export const serializeAws_restJson1SearchContentCommand = async (
  input: SearchContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}/search";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.searchExpression !== undefined &&
      input.searchExpression !== null && {
        searchExpression: serializeAws_restJson1SearchExpression(input.searchExpression, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1SearchSessionsCommand = async (
  input: SearchSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/searchSessions";
  if (input.assistantId !== undefined) {
    const labelValue: string = input.assistantId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assistantId.");
    }
    resolvedPath = resolvedPath.replace("{assistantId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assistantId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.searchExpression !== undefined &&
      input.searchExpression !== null && {
        searchExpression: serializeAws_restJson1SearchExpression(input.searchExpression, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1StartContentUploadCommand = async (
  input: StartContentUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}/upload";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
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
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1UpdateContentCommand = async (
  input: UpdateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
  }
  if (input.contentId !== undefined) {
    const labelValue: string = input.contentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: contentId.");
    }
    resolvedPath = resolvedPath.replace("{contentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: contentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.metadata !== undefined &&
      input.metadata !== null && { metadata: serializeAws_restJson1ContentMetadata(input.metadata, context) }),
    ...(input.overrideLinkOutUri !== undefined &&
      input.overrideLinkOutUri !== null && { overrideLinkOutUri: input.overrideLinkOutUri }),
    ...(input.removeOverrideLinkOutUri !== undefined &&
      input.removeOverrideLinkOutUri !== null && { removeOverrideLinkOutUri: input.removeOverrideLinkOutUri }),
    ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    ...(input.title !== undefined && input.title !== null && { title: input.title }),
    ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
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

export const serializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand = async (
  input: UpdateKnowledgeBaseTemplateUriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/templateUri";
  if (input.knowledgeBaseId !== undefined) {
    const labelValue: string = input.knowledgeBaseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: knowledgeBaseId.");
    }
    resolvedPath = resolvedPath.replace("{knowledgeBaseId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: knowledgeBaseId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.templateUri !== undefined && input.templateUri !== null && { templateUri: input.templateUri }),
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

export const deserializeAws_restJson1CreateAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssistantCommandError(output, context);
  }
  const contents: CreateAssistantCommandOutput = {
    $metadata: deserializeMetadata(output),
    assistant: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistant !== undefined && data.assistant !== null) {
    contents.assistant = deserializeAws_restJson1AssistantData(data.assistant, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssistantAssociationCommandError(output, context);
  }
  const contents: CreateAssistantAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    assistantAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantAssociation !== undefined && data.assistantAssociation !== null) {
    contents.assistantAssociation = deserializeAws_restJson1AssistantAssociationData(
      data.assistantAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssistantAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateContentCommandError(output, context);
  }
  const contents: CreateContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    content: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content !== undefined && data.content !== null) {
    contents.content = deserializeAws_restJson1ContentData(data.content, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateKnowledgeBaseCommandError(output, context);
  }
  const contents: CreateKnowledgeBaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    knowledgeBase: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBase !== undefined && data.knowledgeBase !== null) {
    contents.knowledgeBase = deserializeAws_restJson1KnowledgeBaseData(data.knowledgeBase, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateKnowledgeBaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKnowledgeBaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSessionCommandError(output, context);
  }
  const contents: CreateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    session: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session !== undefined && data.session !== null) {
    contents.session = deserializeAws_restJson1SessionData(data.session, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssistantCommandError(output, context);
  }
  const contents: DeleteAssistantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssistantAssociationCommandError(output, context);
  }
  const contents: DeleteAssistantAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssistantAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteContentCommandError(output, context);
  }
  const contents: DeleteContentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteKnowledgeBaseCommandError(output, context);
  }
  const contents: DeleteKnowledgeBaseCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteKnowledgeBaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnowledgeBaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssistantCommandError(output, context);
  }
  const contents: GetAssistantCommandOutput = {
    $metadata: deserializeMetadata(output),
    assistant: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistant !== undefined && data.assistant !== null) {
    contents.assistant = deserializeAws_restJson1AssistantData(data.assistant, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssistantAssociationCommandError(output, context);
  }
  const contents: GetAssistantAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    assistantAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantAssociation !== undefined && data.assistantAssociation !== null) {
    contents.assistantAssociation = deserializeAws_restJson1AssistantAssociationData(
      data.assistantAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssistantAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetContentCommandError(output, context);
  }
  const contents: GetContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    content: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content !== undefined && data.content !== null) {
    contents.content = deserializeAws_restJson1ContentData(data.content, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetContentSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetContentSummaryCommandError(output, context);
  }
  const contents: GetContentSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    contentSummary: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentSummary !== undefined && data.contentSummary !== null) {
    contents.contentSummary = deserializeAws_restJson1ContentSummary(data.contentSummary, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetContentSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetKnowledgeBaseCommandError(output, context);
  }
  const contents: GetKnowledgeBaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    knowledgeBase: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBase !== undefined && data.knowledgeBase !== null) {
    contents.knowledgeBase = deserializeAws_restJson1KnowledgeBaseData(data.knowledgeBase, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetKnowledgeBaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKnowledgeBaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommendationsCommandError(output, context);
  }
  const contents: GetRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    recommendations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.recommendations !== undefined && data.recommendations !== null) {
    contents.recommendations = deserializeAws_restJson1RecommendationList(data.recommendations, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSessionCommandError(output, context);
  }
  const contents: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    session: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session !== undefined && data.session !== null) {
    contents.session = deserializeAws_restJson1SessionData(data.session, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAssistantAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssistantAssociationsCommandError(output, context);
  }
  const contents: ListAssistantAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assistantAssociationSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantAssociationSummaries !== undefined && data.assistantAssociationSummaries !== null) {
    contents.assistantAssociationSummaries = deserializeAws_restJson1AssistantAssociationSummaryList(
      data.assistantAssociationSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssistantAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAssistantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssistantsCommandError(output, context);
  }
  const contents: ListAssistantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assistantSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantSummaries !== undefined && data.assistantSummaries !== null) {
    contents.assistantSummaries = deserializeAws_restJson1AssistantList(data.assistantSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssistantsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContentsCommandError(output, context);
  }
  const contents: ListContentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    contentSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentSummaries !== undefined && data.contentSummaries !== null) {
    contents.contentSummaries = deserializeAws_restJson1ContentSummaryList(data.contentSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListKnowledgeBasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKnowledgeBasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListKnowledgeBasesCommandError(output, context);
  }
  const contents: ListKnowledgeBasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    knowledgeBaseSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBaseSummaries !== undefined && data.knowledgeBaseSummaries !== null) {
    contents.knowledgeBaseSummaries = deserializeAws_restJson1KnowledgeBaseList(data.knowledgeBaseSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListKnowledgeBasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKnowledgeBasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1NotifyRecommendationsReceivedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyRecommendationsReceivedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NotifyRecommendationsReceivedCommandError(output, context);
  }
  const contents: NotifyRecommendationsReceivedCommandOutput = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
    recommendationIds: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1NotifyRecommendationsReceivedErrorList(data.errors, context);
  }
  if (data.recommendationIds !== undefined && data.recommendationIds !== null) {
    contents.recommendationIds = deserializeAws_restJson1RecommendationIdList(data.recommendationIds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1NotifyRecommendationsReceivedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyRecommendationsReceivedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1QueryAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryAssistantCommandError(output, context);
  }
  const contents: QueryAssistantCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    results: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.results !== undefined && data.results !== null) {
    contents.results = deserializeAws_restJson1QueryResultsList(data.results, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1QueryAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommandError(output, context);
  }
  const contents: RemoveKnowledgeBaseTemplateUriCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchContentCommandError(output, context);
  }
  const contents: SearchContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    contentSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentSummaries !== undefined && data.contentSummaries !== null) {
    contents.contentSummaries = deserializeAws_restJson1ContentSummaryList(data.contentSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchSessionsCommandError(output, context);
  }
  const contents: SearchSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    sessionSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sessionSummaries !== undefined && data.sessionSummaries !== null) {
    contents.sessionSummaries = deserializeAws_restJson1SessionSummaries(data.sessionSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartContentUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartContentUploadCommandError(output, context);
  }
  const contents: StartContentUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    headersToInclude: undefined,
    uploadId: undefined,
    url: undefined,
    urlExpiry: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.headersToInclude !== undefined && data.headersToInclude !== null) {
    contents.headersToInclude = deserializeAws_restJson1Headers(data.headersToInclude, context);
  }
  if (data.uploadId !== undefined && data.uploadId !== null) {
    contents.uploadId = __expectString(data.uploadId);
  }
  if (data.url !== undefined && data.url !== null) {
    contents.url = __expectString(data.url);
  }
  if (data.urlExpiry !== undefined && data.urlExpiry !== null) {
    contents.urlExpiry = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.urlExpiry)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartContentUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.wisdom#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContentCommandError(output, context);
  }
  const contents: UpdateContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    content: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content !== undefined && data.content !== null) {
    contents.content = deserializeAws_restJson1ContentData(data.content, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.wisdom#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommandError(output, context);
  }
  const contents: UpdateKnowledgeBaseTemplateUriCommandOutput = {
    $metadata: deserializeMetadata(output),
    knowledgeBase: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBase !== undefined && data.knowledgeBase !== null) {
    contents.knowledgeBase = deserializeAws_restJson1KnowledgeBaseData(data.knowledgeBase, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PreconditionFailedException({
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
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AppIntegrationsConfiguration = (
  input: AppIntegrationsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.appIntegrationArn !== undefined &&
      input.appIntegrationArn !== null && { appIntegrationArn: input.appIntegrationArn }),
    ...(input.objectFields !== undefined &&
      input.objectFields !== null && {
        objectFields: serializeAws_restJson1ObjectFieldsList(input.objectFields, context),
      }),
  };
};

const serializeAws_restJson1AssistantAssociationInputData = (
  input: AssistantAssociationInputData,
  context: __SerdeContext
): any => {
  return AssistantAssociationInputData.visit(input, {
    knowledgeBaseId: (value) => ({ knowledgeBaseId: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ContentMetadata = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.field !== undefined && input.field !== null && { field: input.field }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1ObjectFieldsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1RecommendationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1RenderingConfiguration = (input: RenderingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.templateUri !== undefined && input.templateUri !== null && { templateUri: input.templateUri }),
  };
};

const serializeAws_restJson1SearchExpression = (input: SearchExpression, context: __SerdeContext): any => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
  };
};

const serializeAws_restJson1ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
  };
};

const serializeAws_restJson1SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return SourceConfiguration.visit(input, {
    appIntegrations: (value) => ({
      appIntegrations: serializeAws_restJson1AppIntegrationsConfiguration(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const deserializeAws_restJson1AppIntegrationsConfiguration = (
  output: any,
  context: __SerdeContext
): AppIntegrationsConfiguration => {
  return {
    appIntegrationArn: __expectString(output.appIntegrationArn),
    objectFields:
      output.objectFields !== undefined && output.objectFields !== null
        ? deserializeAws_restJson1ObjectFieldsList(output.objectFields, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssistantAssociationData = (
  output: any,
  context: __SerdeContext
): AssistantAssociationData => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantAssociationArn: __expectString(output.assistantAssociationArn),
    assistantAssociationId: __expectString(output.assistantAssociationId),
    assistantId: __expectString(output.assistantId),
    associationData:
      output.associationData !== undefined && output.associationData !== null
        ? deserializeAws_restJson1AssistantAssociationOutputData(__expectUnion(output.associationData), context)
        : undefined,
    associationType: __expectString(output.associationType),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssistantAssociationOutputData = (
  output: any,
  context: __SerdeContext
): AssistantAssociationOutputData => {
  if (output.knowledgeBaseAssociation !== undefined && output.knowledgeBaseAssociation !== null) {
    return {
      knowledgeBaseAssociation: deserializeAws_restJson1KnowledgeBaseAssociationData(
        output.knowledgeBaseAssociation,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AssistantAssociationSummary = (
  output: any,
  context: __SerdeContext
): AssistantAssociationSummary => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantAssociationArn: __expectString(output.assistantAssociationArn),
    assistantAssociationId: __expectString(output.assistantAssociationId),
    assistantId: __expectString(output.assistantId),
    associationData:
      output.associationData !== undefined && output.associationData !== null
        ? deserializeAws_restJson1AssistantAssociationOutputData(__expectUnion(output.associationData), context)
        : undefined,
    associationType: __expectString(output.associationType),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssistantAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): AssistantAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssistantAssociationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AssistantData = (output: any, context: __SerdeContext): AssistantData => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantId: __expectString(output.assistantId),
    description: __expectString(output.description),
    name: __expectString(output.name),
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration !== undefined && output.serverSideEncryptionConfiguration !== null
        ? deserializeAws_restJson1ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AssistantList = (output: any, context: __SerdeContext): AssistantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssistantSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AssistantSummary = (output: any, context: __SerdeContext): AssistantSummary => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantId: __expectString(output.assistantId),
    description: __expectString(output.description),
    name: __expectString(output.name),
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration !== undefined && output.serverSideEncryptionConfiguration !== null
        ? deserializeAws_restJson1ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ContentData = (output: any, context: __SerdeContext): ContentData => {
  return {
    contentArn: __expectString(output.contentArn),
    contentId: __expectString(output.contentId),
    contentType: __expectString(output.contentType),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    linkOutUri: __expectString(output.linkOutUri),
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ContentMetadata(output.metadata, context)
        : undefined,
    name: __expectString(output.name),
    revisionId: __expectString(output.revisionId),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    title: __expectString(output.title),
    url: __expectString(output.url),
    urlExpiry:
      output.urlExpiry !== undefined && output.urlExpiry !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.urlExpiry)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContentMetadata = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1ContentReference = (output: any, context: __SerdeContext): ContentReference => {
  return {
    contentArn: __expectString(output.contentArn),
    contentId: __expectString(output.contentId),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
  } as any;
};

const deserializeAws_restJson1ContentSummary = (output: any, context: __SerdeContext): ContentSummary => {
  return {
    contentArn: __expectString(output.contentArn),
    contentId: __expectString(output.contentId),
    contentType: __expectString(output.contentType),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ContentMetadata(output.metadata, context)
        : undefined,
    name: __expectString(output.name),
    revisionId: __expectString(output.revisionId),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1ContentSummaryList = (output: any, context: __SerdeContext): ContentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ContentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Document = (output: any, context: __SerdeContext): Document => {
  return {
    contentReference:
      output.contentReference !== undefined && output.contentReference !== null
        ? deserializeAws_restJson1ContentReference(output.contentReference, context)
        : undefined,
    excerpt:
      output.excerpt !== undefined && output.excerpt !== null
        ? deserializeAws_restJson1DocumentText(output.excerpt, context)
        : undefined,
    title:
      output.title !== undefined && output.title !== null
        ? deserializeAws_restJson1DocumentText(output.title, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DocumentText = (output: any, context: __SerdeContext): DocumentText => {
  return {
    highlights:
      output.highlights !== undefined && output.highlights !== null
        ? deserializeAws_restJson1Highlights(output.highlights, context)
        : undefined,
    text: __expectString(output.text),
  } as any;
};

const deserializeAws_restJson1Headers = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1Highlight = (output: any, context: __SerdeContext): Highlight => {
  return {
    beginOffsetInclusive: __expectInt32(output.beginOffsetInclusive),
    endOffsetExclusive: __expectInt32(output.endOffsetExclusive),
  } as any;
};

const deserializeAws_restJson1Highlights = (output: any, context: __SerdeContext): Highlight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Highlight(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1KnowledgeBaseAssociationData = (
  output: any,
  context: __SerdeContext
): KnowledgeBaseAssociationData => {
  return {
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
  } as any;
};

const deserializeAws_restJson1KnowledgeBaseData = (output: any, context: __SerdeContext): KnowledgeBaseData => {
  return {
    description: __expectString(output.description),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    knowledgeBaseType: __expectString(output.knowledgeBaseType),
    lastContentModificationTime:
      output.lastContentModificationTime !== undefined && output.lastContentModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastContentModificationTime)))
        : undefined,
    name: __expectString(output.name),
    renderingConfiguration:
      output.renderingConfiguration !== undefined && output.renderingConfiguration !== null
        ? deserializeAws_restJson1RenderingConfiguration(output.renderingConfiguration, context)
        : undefined,
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration !== undefined && output.serverSideEncryptionConfiguration !== null
        ? deserializeAws_restJson1ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    sourceConfiguration:
      output.sourceConfiguration !== undefined && output.sourceConfiguration !== null
        ? deserializeAws_restJson1SourceConfiguration(__expectUnion(output.sourceConfiguration), context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KnowledgeBaseList = (output: any, context: __SerdeContext): KnowledgeBaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KnowledgeBaseSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1KnowledgeBaseSummary = (output: any, context: __SerdeContext): KnowledgeBaseSummary => {
  return {
    description: __expectString(output.description),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    knowledgeBaseType: __expectString(output.knowledgeBaseType),
    name: __expectString(output.name),
    renderingConfiguration:
      output.renderingConfiguration !== undefined && output.renderingConfiguration !== null
        ? deserializeAws_restJson1RenderingConfiguration(output.renderingConfiguration, context)
        : undefined,
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration !== undefined && output.serverSideEncryptionConfiguration !== null
        ? deserializeAws_restJson1ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    sourceConfiguration:
      output.sourceConfiguration !== undefined && output.sourceConfiguration !== null
        ? deserializeAws_restJson1SourceConfiguration(__expectUnion(output.sourceConfiguration), context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NotifyRecommendationsReceivedError = (
  output: any,
  context: __SerdeContext
): NotifyRecommendationsReceivedError => {
  return {
    message: __expectString(output.message),
    recommendationId: __expectString(output.recommendationId),
  } as any;
};

const deserializeAws_restJson1NotifyRecommendationsReceivedErrorList = (
  output: any,
  context: __SerdeContext
): NotifyRecommendationsReceivedError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NotifyRecommendationsReceivedError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ObjectFieldsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1QueryResultsList = (output: any, context: __SerdeContext): ResultData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationData = (output: any, context: __SerdeContext): RecommendationData => {
  return {
    document:
      output.document !== undefined && output.document !== null
        ? deserializeAws_restJson1Document(output.document, context)
        : undefined,
    recommendationId: __expectString(output.recommendationId),
    relevanceLevel: __expectString(output.relevanceLevel),
    relevanceScore: __limitedParseDouble(output.relevanceScore),
  } as any;
};

const deserializeAws_restJson1RecommendationIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationList = (output: any, context: __SerdeContext): RecommendationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RenderingConfiguration = (
  output: any,
  context: __SerdeContext
): RenderingConfiguration => {
  return {
    templateUri: __expectString(output.templateUri),
  } as any;
};

const deserializeAws_restJson1ResultData = (output: any, context: __SerdeContext): ResultData => {
  return {
    document:
      output.document !== undefined && output.document !== null
        ? deserializeAws_restJson1Document(output.document, context)
        : undefined,
    relevanceScore: __limitedParseDouble(output.relevanceScore),
    resultId: __expectString(output.resultId),
  } as any;
};

const deserializeAws_restJson1ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
  } as any;
};

const deserializeAws_restJson1SessionData = (output: any, context: __SerdeContext): SessionData => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    sessionArn: __expectString(output.sessionArn),
    sessionId: __expectString(output.sessionId),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SessionSummaries = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SessionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantId: __expectString(output.assistantId),
    sessionArn: __expectString(output.sessionArn),
    sessionId: __expectString(output.sessionId),
  } as any;
};

const deserializeAws_restJson1SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  if (output.appIntegrations !== undefined && output.appIntegrations !== null) {
    return {
      appIntegrations: deserializeAws_restJson1AppIntegrationsConfiguration(output.appIntegrations, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
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
