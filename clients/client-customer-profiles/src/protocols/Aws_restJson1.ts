import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddProfileKeyCommandInput, AddProfileKeyCommandOutput } from "../commands/AddProfileKeyCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import {
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
} from "../commands/CreateIntegrationWorkflowCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput } from "../commands/DeleteProfileKeyCommand";
import {
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "../commands/DeleteProfileObjectCommand";
import {
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "../commands/DeleteProfileObjectTypeCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import {
  GetAutoMergingPreviewCommandInput,
  GetAutoMergingPreviewCommandOutput,
} from "../commands/GetAutoMergingPreviewCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import {
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
} from "../commands/GetIdentityResolutionJobCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "../commands/GetIntegrationCommand";
import { GetMatchesCommandInput, GetMatchesCommandOutput } from "../commands/GetMatchesCommand";
import {
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "../commands/GetProfileObjectTypeCommand";
import {
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "../commands/GetProfileObjectTypeTemplateCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import { GetWorkflowStepsCommandInput, GetWorkflowStepsCommandOutput } from "../commands/GetWorkflowStepsCommand";
import {
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "../commands/ListAccountIntegrationsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
} from "../commands/ListIdentityResolutionJobsCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "../commands/ListIntegrationsCommand";
import { ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput } from "../commands/ListProfileObjectsCommand";
import {
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "../commands/ListProfileObjectTypesCommand";
import {
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "../commands/ListProfileObjectTypeTemplatesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import { MergeProfilesCommandInput, MergeProfilesCommandOutput } from "../commands/MergeProfilesCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "../commands/PutIntegrationCommand";
import { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "../commands/PutProfileObjectCommand";
import {
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "../commands/PutProfileObjectTypeCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "../commands/SearchProfilesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { CustomerProfilesServiceException as __BaseException } from "../models/CustomerProfilesServiceException";
import {
  AccessDeniedException,
  Address,
  AppflowIntegration,
  AppflowIntegrationWorkflowAttributes,
  AppflowIntegrationWorkflowMetrics,
  AppflowIntegrationWorkflowStep,
  AutoMerging,
  BadRequestException,
  Batch,
  ConflictResolution,
  ConnectorOperator,
  Consolidation,
  DomainStats,
  ExportingConfig,
  ExportingLocation,
  FieldSourceProfileIds,
  FlowDefinition,
  IdentityResolutionJob,
  IncrementalPullConfig,
  IntegrationConfig,
  InternalServerException,
  JobSchedule,
  JobStats,
  ListDomainItem,
  ListIntegrationItem,
  ListProfileObjectsItem,
  ListProfileObjectTypeItem,
  ListProfileObjectTypeTemplateItem,
  ListWorkflowsItem,
  MarketoSourceProperties,
  MatchingRequest,
  MatchingResponse,
  MatchItem,
  ObjectFilter,
  ObjectTypeField,
  ObjectTypeKey,
  OperatorPropertiesKeys,
  Profile,
  ResourceNotFoundException,
  S3ExportingConfig,
  S3ExportingLocation,
  S3SourceProperties,
  SalesforceSourceProperties,
  ScheduledTriggerProperties,
  ServiceNowSourceProperties,
  SourceConnectorProperties,
  SourceFlowConfig,
  StandardIdentifier,
  Task,
  ThrottlingException,
  TriggerConfig,
  TriggerProperties,
  UpdateAddress,
  WorkflowAttributes,
  WorkflowMetrics,
  WorkflowStepItem,
  ZendeskSourceProperties,
} from "../models/models_0";

export const serializeAws_restJson1AddProfileKeyCommand = async (
  input: AddProfileKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/keys";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
    ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1requestValueList(input.Values, context) }),
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

export const serializeAws_restJson1CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeadLetterQueueUrl !== undefined &&
      input.DeadLetterQueueUrl !== null && { DeadLetterQueueUrl: input.DeadLetterQueueUrl }),
    ...(input.DefaultEncryptionKey !== undefined &&
      input.DefaultEncryptionKey !== null && { DefaultEncryptionKey: input.DefaultEncryptionKey }),
    ...(input.DefaultExpirationDays !== undefined &&
      input.DefaultExpirationDays !== null && { DefaultExpirationDays: input.DefaultExpirationDays }),
    ...(input.Matching !== undefined &&
      input.Matching !== null && { Matching: serializeAws_restJson1MatchingRequest(input.Matching, context) }),
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

export const serializeAws_restJson1CreateIntegrationWorkflowCommand = async (
  input: CreateIntegrationWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/integrations";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.IntegrationConfig !== undefined &&
      input.IntegrationConfig !== null && {
        IntegrationConfig: serializeAws_restJson1IntegrationConfig(input.IntegrationConfig, context),
      }),
    ...(input.ObjectTypeName !== undefined &&
      input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.WorkflowType !== undefined && input.WorkflowType !== null && { WorkflowType: input.WorkflowType }),
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

export const serializeAws_restJson1CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountNumber !== undefined && input.AccountNumber !== null && { AccountNumber: input.AccountNumber }),
    ...(input.AdditionalInformation !== undefined &&
      input.AdditionalInformation !== null && { AdditionalInformation: input.AdditionalInformation }),
    ...(input.Address !== undefined &&
      input.Address !== null && { Address: serializeAws_restJson1Address(input.Address, context) }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
    ...(input.BillingAddress !== undefined &&
      input.BillingAddress !== null && {
        BillingAddress: serializeAws_restJson1Address(input.BillingAddress, context),
      }),
    ...(input.BirthDate !== undefined && input.BirthDate !== null && { BirthDate: input.BirthDate }),
    ...(input.BusinessEmailAddress !== undefined &&
      input.BusinessEmailAddress !== null && { BusinessEmailAddress: input.BusinessEmailAddress }),
    ...(input.BusinessName !== undefined && input.BusinessName !== null && { BusinessName: input.BusinessName }),
    ...(input.BusinessPhoneNumber !== undefined &&
      input.BusinessPhoneNumber !== null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
    ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.Gender !== undefined && input.Gender !== null && { Gender: input.Gender }),
    ...(input.HomePhoneNumber !== undefined &&
      input.HomePhoneNumber !== null && { HomePhoneNumber: input.HomePhoneNumber }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.MailingAddress !== undefined &&
      input.MailingAddress !== null && {
        MailingAddress: serializeAws_restJson1Address(input.MailingAddress, context),
      }),
    ...(input.MiddleName !== undefined && input.MiddleName !== null && { MiddleName: input.MiddleName }),
    ...(input.MobilePhoneNumber !== undefined &&
      input.MobilePhoneNumber !== null && { MobilePhoneNumber: input.MobilePhoneNumber }),
    ...(input.PartyType !== undefined && input.PartyType !== null && { PartyType: input.PartyType }),
    ...(input.PersonalEmailAddress !== undefined &&
      input.PersonalEmailAddress !== null && { PersonalEmailAddress: input.PersonalEmailAddress }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.ShippingAddress !== undefined &&
      input.ShippingAddress !== null && {
        ShippingAddress: serializeAws_restJson1Address(input.ShippingAddress, context),
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

export const serializeAws_restJson1DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations/delete";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
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

export const serializeAws_restJson1DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/delete";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
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

export const serializeAws_restJson1DeleteProfileKeyCommand = async (
  input: DeleteProfileKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/profiles/keys/delete";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
    ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1requestValueList(input.Values, context) }),
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

export const serializeAws_restJson1DeleteProfileObjectCommand = async (
  input: DeleteProfileObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/profiles/objects/delete";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectTypeName !== undefined &&
      input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
    ...(input.ProfileObjectUniqueKey !== undefined &&
      input.ProfileObjectUniqueKey !== null && { ProfileObjectUniqueKey: input.ProfileObjectUniqueKey }),
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

export const serializeAws_restJson1DeleteProfileObjectTypeCommand = async (
  input: DeleteProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/object-types/{ObjectTypeName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  if (input.ObjectTypeName !== undefined) {
    const labelValue: string = input.ObjectTypeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ObjectTypeName.");
    }
    resolvedPath = resolvedPath.replace("{ObjectTypeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ObjectTypeName.");
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

export const serializeAws_restJson1DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/{WorkflowId}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  if (input.WorkflowId !== undefined) {
    const labelValue: string = input.WorkflowId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkflowId.");
    }
    resolvedPath = resolvedPath.replace("{WorkflowId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkflowId.");
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

export const serializeAws_restJson1GetAutoMergingPreviewCommand = async (
  input: GetAutoMergingPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/identity-resolution-jobs/auto-merging-preview";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConflictResolution !== undefined &&
      input.ConflictResolution !== null && {
        ConflictResolution: serializeAws_restJson1ConflictResolution(input.ConflictResolution, context),
      }),
    ...(input.Consolidation !== undefined &&
      input.Consolidation !== null && {
        Consolidation: serializeAws_restJson1Consolidation(input.Consolidation, context),
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

export const serializeAws_restJson1GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1GetIdentityResolutionJobCommand = async (
  input: GetIdentityResolutionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/identity-resolution-jobs/{JobId}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
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

export const serializeAws_restJson1GetIntegrationCommand = async (
  input: GetIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
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

export const serializeAws_restJson1GetMatchesCommand = async (
  input: GetMatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/matches";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
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

export const serializeAws_restJson1GetProfileObjectTypeCommand = async (
  input: GetProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/object-types/{ObjectTypeName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  if (input.ObjectTypeName !== undefined) {
    const labelValue: string = input.ObjectTypeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ObjectTypeName.");
    }
    resolvedPath = resolvedPath.replace("{ObjectTypeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ObjectTypeName.");
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

export const serializeAws_restJson1GetProfileObjectTypeTemplateCommand = async (
  input: GetProfileObjectTypeTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates/{TemplateId}";
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
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

export const serializeAws_restJson1GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/{WorkflowId}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  if (input.WorkflowId !== undefined) {
    const labelValue: string = input.WorkflowId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkflowId.");
    }
    resolvedPath = resolvedPath.replace("{WorkflowId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkflowId.");
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

export const serializeAws_restJson1GetWorkflowStepsCommand = async (
  input: GetWorkflowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/{WorkflowId}/steps";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  if (input.WorkflowId !== undefined) {
    const labelValue: string = input.WorkflowId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkflowId.");
    }
    resolvedPath = resolvedPath.replace("{WorkflowId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkflowId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListAccountIntegrationsCommand = async (
  input: ListAccountIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/integrations";
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.IncludeHidden !== undefined && { "include-hidden": input.IncludeHidden.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
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

export const serializeAws_restJson1ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains";
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListIdentityResolutionJobsCommand = async (
  input: ListIdentityResolutionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/identity-resolution-jobs";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListIntegrationsCommand = async (
  input: ListIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.IncludeHidden !== undefined && { "include-hidden": input.IncludeHidden.toString() }),
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

export const serializeAws_restJson1ListProfileObjectsCommand = async (
  input: ListProfileObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/objects";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectFilter !== undefined &&
      input.ObjectFilter !== null && { ObjectFilter: serializeAws_restJson1ObjectFilter(input.ObjectFilter, context) }),
    ...(input.ObjectTypeName !== undefined &&
      input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
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

export const serializeAws_restJson1ListProfileObjectTypesCommand = async (
  input: ListProfileObjectTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/object-types";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListProfileObjectTypeTemplatesCommand = async (
  input: ListProfileObjectTypeTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates";
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/workflows";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.QueryEndDate !== undefined &&
      input.QueryEndDate !== null && { QueryEndDate: Math.round(input.QueryEndDate.getTime() / 1000) }),
    ...(input.QueryStartDate !== undefined &&
      input.QueryStartDate !== null && { QueryStartDate: Math.round(input.QueryStartDate.getTime() / 1000) }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.WorkflowType !== undefined && input.WorkflowType !== null && { WorkflowType: input.WorkflowType }),
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

export const serializeAws_restJson1MergeProfilesCommand = async (
  input: MergeProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/profiles/objects/merge";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FieldSourceProfileIds !== undefined &&
      input.FieldSourceProfileIds !== null && {
        FieldSourceProfileIds: serializeAws_restJson1FieldSourceProfileIds(input.FieldSourceProfileIds, context),
      }),
    ...(input.MainProfileId !== undefined && input.MainProfileId !== null && { MainProfileId: input.MainProfileId }),
    ...(input.ProfileIdsToBeMerged !== undefined &&
      input.ProfileIdsToBeMerged !== null && {
        ProfileIdsToBeMerged: serializeAws_restJson1ProfileIdToBeMergedList(input.ProfileIdsToBeMerged, context),
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

export const serializeAws_restJson1PutIntegrationCommand = async (
  input: PutIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FlowDefinition !== undefined &&
      input.FlowDefinition !== null && {
        FlowDefinition: serializeAws_restJson1FlowDefinition(input.FlowDefinition, context),
      }),
    ...(input.ObjectTypeName !== undefined &&
      input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.ObjectTypeNames !== undefined &&
      input.ObjectTypeNames !== null && {
        ObjectTypeNames: serializeAws_restJson1ObjectTypeNames(input.ObjectTypeNames, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutProfileObjectCommand = async (
  input: PutProfileObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/objects";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
    ...(input.ObjectTypeName !== undefined &&
      input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutProfileObjectTypeCommand = async (
  input: PutProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/object-types/{ObjectTypeName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  if (input.ObjectTypeName !== undefined) {
    const labelValue: string = input.ObjectTypeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ObjectTypeName.");
    }
    resolvedPath = resolvedPath.replace("{ObjectTypeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ObjectTypeName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AllowProfileCreation !== undefined &&
      input.AllowProfileCreation !== null && { AllowProfileCreation: input.AllowProfileCreation }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EncryptionKey !== undefined && input.EncryptionKey !== null && { EncryptionKey: input.EncryptionKey }),
    ...(input.ExpirationDays !== undefined &&
      input.ExpirationDays !== null && { ExpirationDays: input.ExpirationDays }),
    ...(input.Fields !== undefined &&
      input.Fields !== null && { Fields: serializeAws_restJson1FieldMap(input.Fields, context) }),
    ...(input.Keys !== undefined && input.Keys !== null && { Keys: serializeAws_restJson1KeyMap(input.Keys, context) }),
    ...(input.SourceLastUpdatedTimestampFormat !== undefined &&
      input.SourceLastUpdatedTimestampFormat !== null && {
        SourceLastUpdatedTimestampFormat: input.SourceLastUpdatedTimestampFormat,
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchProfilesCommand = async (
  input: SearchProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/search";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1requestValueList(input.Values, context) }),
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

export const serializeAws_restJson1UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeadLetterQueueUrl !== undefined &&
      input.DeadLetterQueueUrl !== null && { DeadLetterQueueUrl: input.DeadLetterQueueUrl }),
    ...(input.DefaultEncryptionKey !== undefined &&
      input.DefaultEncryptionKey !== null && { DefaultEncryptionKey: input.DefaultEncryptionKey }),
    ...(input.DefaultExpirationDays !== undefined &&
      input.DefaultExpirationDays !== null && { DefaultExpirationDays: input.DefaultExpirationDays }),
    ...(input.Matching !== undefined &&
      input.Matching !== null && { Matching: serializeAws_restJson1MatchingRequest(input.Matching, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountNumber !== undefined && input.AccountNumber !== null && { AccountNumber: input.AccountNumber }),
    ...(input.AdditionalInformation !== undefined &&
      input.AdditionalInformation !== null && { AdditionalInformation: input.AdditionalInformation }),
    ...(input.Address !== undefined &&
      input.Address !== null && { Address: serializeAws_restJson1UpdateAddress(input.Address, context) }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1UpdateAttributes(input.Attributes, context) }),
    ...(input.BillingAddress !== undefined &&
      input.BillingAddress !== null && {
        BillingAddress: serializeAws_restJson1UpdateAddress(input.BillingAddress, context),
      }),
    ...(input.BirthDate !== undefined && input.BirthDate !== null && { BirthDate: input.BirthDate }),
    ...(input.BusinessEmailAddress !== undefined &&
      input.BusinessEmailAddress !== null && { BusinessEmailAddress: input.BusinessEmailAddress }),
    ...(input.BusinessName !== undefined && input.BusinessName !== null && { BusinessName: input.BusinessName }),
    ...(input.BusinessPhoneNumber !== undefined &&
      input.BusinessPhoneNumber !== null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
    ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.Gender !== undefined && input.Gender !== null && { Gender: input.Gender }),
    ...(input.HomePhoneNumber !== undefined &&
      input.HomePhoneNumber !== null && { HomePhoneNumber: input.HomePhoneNumber }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.MailingAddress !== undefined &&
      input.MailingAddress !== null && {
        MailingAddress: serializeAws_restJson1UpdateAddress(input.MailingAddress, context),
      }),
    ...(input.MiddleName !== undefined && input.MiddleName !== null && { MiddleName: input.MiddleName }),
    ...(input.MobilePhoneNumber !== undefined &&
      input.MobilePhoneNumber !== null && { MobilePhoneNumber: input.MobilePhoneNumber }),
    ...(input.PartyType !== undefined && input.PartyType !== null && { PartyType: input.PartyType }),
    ...(input.PersonalEmailAddress !== undefined &&
      input.PersonalEmailAddress !== null && { PersonalEmailAddress: input.PersonalEmailAddress }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
    ...(input.ShippingAddress !== undefined &&
      input.ShippingAddress !== null && {
        ShippingAddress: serializeAws_restJson1UpdateAddress(input.ShippingAddress, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AddProfileKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfileKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddProfileKeyCommandError(output, context);
  }
  const contents: AddProfileKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    KeyName: undefined,
    Values: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KeyName !== undefined && data.KeyName !== null) {
    contents.KeyName = __expectString(data.KeyName);
  }
  if (data.Values !== undefined && data.Values !== null) {
    contents.Values = deserializeAws_restJson1requestValueList(data.Values, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddProfileKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfileKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainCommandError(output, context);
  }
  const contents: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedAt: undefined,
    DeadLetterQueueUrl: undefined,
    DefaultEncryptionKey: undefined,
    DefaultExpirationDays: undefined,
    DomainName: undefined,
    LastUpdatedAt: undefined,
    Matching: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DeadLetterQueueUrl !== undefined && data.DeadLetterQueueUrl !== null) {
    contents.DeadLetterQueueUrl = __expectString(data.DeadLetterQueueUrl);
  }
  if (data.DefaultEncryptionKey !== undefined && data.DefaultEncryptionKey !== null) {
    contents.DefaultEncryptionKey = __expectString(data.DefaultEncryptionKey);
  }
  if (data.DefaultExpirationDays !== undefined && data.DefaultExpirationDays !== null) {
    contents.DefaultExpirationDays = __expectInt32(data.DefaultExpirationDays);
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Matching !== undefined && data.Matching !== null) {
    contents.Matching = deserializeAws_restJson1MatchingResponse(data.Matching, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1CreateIntegrationWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationWorkflowCommandError(output, context);
  }
  const contents: CreateIntegrationWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
    WorkflowId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.WorkflowId !== undefined && data.WorkflowId !== null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIntegrationWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProfileCommandError(output, context);
  }
  const contents: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProfileId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProfileId !== undefined && data.ProfileId !== null) {
    contents.ProfileId = __expectString(data.ProfileId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDomainCommandError(output, context);
  }
  const contents: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationCommandError(output, context);
  }
  const contents: DeleteIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProfileCommandError(output, context);
  }
  const contents: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1DeleteProfileKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProfileKeyCommandError(output, context);
  }
  const contents: DeleteProfileKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProfileKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1DeleteProfileObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProfileObjectCommandError(output, context);
  }
  const contents: DeleteProfileObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProfileObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1DeleteProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProfileObjectTypeCommandError(output, context);
  }
  const contents: DeleteProfileObjectTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProfileObjectTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkflowCommandError(output, context);
  }
  const contents: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetAutoMergingPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoMergingPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAutoMergingPreviewCommandError(output, context);
  }
  const contents: GetAutoMergingPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainName: undefined,
    NumberOfMatchesInSample: undefined,
    NumberOfProfilesInSample: undefined,
    NumberOfProfilesWillBeMerged: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.NumberOfMatchesInSample !== undefined && data.NumberOfMatchesInSample !== null) {
    contents.NumberOfMatchesInSample = __expectLong(data.NumberOfMatchesInSample);
  }
  if (data.NumberOfProfilesInSample !== undefined && data.NumberOfProfilesInSample !== null) {
    contents.NumberOfProfilesInSample = __expectLong(data.NumberOfProfilesInSample);
  }
  if (data.NumberOfProfilesWillBeMerged !== undefined && data.NumberOfProfilesWillBeMerged !== null) {
    contents.NumberOfProfilesWillBeMerged = __expectLong(data.NumberOfProfilesWillBeMerged);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAutoMergingPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoMergingPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainCommandError(output, context);
  }
  const contents: GetDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedAt: undefined,
    DeadLetterQueueUrl: undefined,
    DefaultEncryptionKey: undefined,
    DefaultExpirationDays: undefined,
    DomainName: undefined,
    LastUpdatedAt: undefined,
    Matching: undefined,
    Stats: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DeadLetterQueueUrl !== undefined && data.DeadLetterQueueUrl !== null) {
    contents.DeadLetterQueueUrl = __expectString(data.DeadLetterQueueUrl);
  }
  if (data.DefaultEncryptionKey !== undefined && data.DefaultEncryptionKey !== null) {
    contents.DefaultEncryptionKey = __expectString(data.DefaultEncryptionKey);
  }
  if (data.DefaultExpirationDays !== undefined && data.DefaultExpirationDays !== null) {
    contents.DefaultExpirationDays = __expectInt32(data.DefaultExpirationDays);
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Matching !== undefined && data.Matching !== null) {
    contents.Matching = deserializeAws_restJson1MatchingResponse(data.Matching, context);
  }
  if (data.Stats !== undefined && data.Stats !== null) {
    contents.Stats = deserializeAws_restJson1DomainStats(data.Stats, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetIdentityResolutionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityResolutionJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIdentityResolutionJobCommandError(output, context);
  }
  const contents: GetIdentityResolutionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoMerging: undefined,
    DomainName: undefined,
    ExportingLocation: undefined,
    JobEndTime: undefined,
    JobExpirationTime: undefined,
    JobId: undefined,
    JobStartTime: undefined,
    JobStats: undefined,
    LastUpdatedAt: undefined,
    Message: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoMerging !== undefined && data.AutoMerging !== null) {
    contents.AutoMerging = deserializeAws_restJson1AutoMerging(data.AutoMerging, context);
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.ExportingLocation !== undefined && data.ExportingLocation !== null) {
    contents.ExportingLocation = deserializeAws_restJson1ExportingLocation(data.ExportingLocation, context);
  }
  if (data.JobEndTime !== undefined && data.JobEndTime !== null) {
    contents.JobEndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.JobEndTime)));
  }
  if (data.JobExpirationTime !== undefined && data.JobExpirationTime !== null) {
    contents.JobExpirationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.JobExpirationTime)));
  }
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobStartTime !== undefined && data.JobStartTime !== null) {
    contents.JobStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.JobStartTime)));
  }
  if (data.JobStats !== undefined && data.JobStats !== null) {
    contents.JobStats = deserializeAws_restJson1JobStats(data.JobStats, context);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIdentityResolutionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityResolutionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationCommandError(output, context);
  }
  const contents: GetIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedAt: undefined,
    DomainName: undefined,
    LastUpdatedAt: undefined,
    ObjectTypeName: undefined,
    ObjectTypeNames: undefined,
    Tags: undefined,
    Uri: undefined,
    WorkflowId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.ObjectTypeNames !== undefined && data.ObjectTypeNames !== null) {
    contents.ObjectTypeNames = deserializeAws_restJson1ObjectTypeNames(data.ObjectTypeNames, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.Uri !== undefined && data.Uri !== null) {
    contents.Uri = __expectString(data.Uri);
  }
  if (data.WorkflowId !== undefined && data.WorkflowId !== null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetMatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMatchesCommandError(output, context);
  }
  const contents: GetMatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    MatchGenerationDate: undefined,
    Matches: undefined,
    NextToken: undefined,
    PotentialMatches: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MatchGenerationDate !== undefined && data.MatchGenerationDate !== null) {
    contents.MatchGenerationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.MatchGenerationDate)));
  }
  if (data.Matches !== undefined && data.Matches !== null) {
    contents.Matches = deserializeAws_restJson1MatchesList(data.Matches, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PotentialMatches !== undefined && data.PotentialMatches !== null) {
    contents.PotentialMatches = __expectInt32(data.PotentialMatches);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProfileObjectTypeCommandError(output, context);
  }
  const contents: GetProfileObjectTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    AllowProfileCreation: undefined,
    CreatedAt: undefined,
    Description: undefined,
    EncryptionKey: undefined,
    ExpirationDays: undefined,
    Fields: undefined,
    Keys: undefined,
    LastUpdatedAt: undefined,
    ObjectTypeName: undefined,
    SourceLastUpdatedTimestampFormat: undefined,
    Tags: undefined,
    TemplateId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllowProfileCreation !== undefined && data.AllowProfileCreation !== null) {
    contents.AllowProfileCreation = __expectBoolean(data.AllowProfileCreation);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EncryptionKey !== undefined && data.EncryptionKey !== null) {
    contents.EncryptionKey = __expectString(data.EncryptionKey);
  }
  if (data.ExpirationDays !== undefined && data.ExpirationDays !== null) {
    contents.ExpirationDays = __expectInt32(data.ExpirationDays);
  }
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1FieldMap(data.Fields, context);
  }
  if (data.Keys !== undefined && data.Keys !== null) {
    contents.Keys = deserializeAws_restJson1KeyMap(data.Keys, context);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.SourceLastUpdatedTimestampFormat !== undefined && data.SourceLastUpdatedTimestampFormat !== null) {
    contents.SourceLastUpdatedTimestampFormat = __expectString(data.SourceLastUpdatedTimestampFormat);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProfileObjectTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetProfileObjectTypeTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProfileObjectTypeTemplateCommandError(output, context);
  }
  const contents: GetProfileObjectTypeTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    AllowProfileCreation: undefined,
    Fields: undefined,
    Keys: undefined,
    SourceLastUpdatedTimestampFormat: undefined,
    SourceName: undefined,
    SourceObject: undefined,
    TemplateId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllowProfileCreation !== undefined && data.AllowProfileCreation !== null) {
    contents.AllowProfileCreation = __expectBoolean(data.AllowProfileCreation);
  }
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1FieldMap(data.Fields, context);
  }
  if (data.Keys !== undefined && data.Keys !== null) {
    contents.Keys = deserializeAws_restJson1KeyMap(data.Keys, context);
  }
  if (data.SourceLastUpdatedTimestampFormat !== undefined && data.SourceLastUpdatedTimestampFormat !== null) {
    contents.SourceLastUpdatedTimestampFormat = __expectString(data.SourceLastUpdatedTimestampFormat);
  }
  if (data.SourceName !== undefined && data.SourceName !== null) {
    contents.SourceName = __expectString(data.SourceName);
  }
  if (data.SourceObject !== undefined && data.SourceObject !== null) {
    contents.SourceObject = __expectString(data.SourceObject);
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProfileObjectTypeTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkflowCommandError(output, context);
  }
  const contents: GetWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attributes: undefined,
    ErrorDescription: undefined,
    LastUpdatedAt: undefined,
    Metrics: undefined,
    StartDate: undefined,
    Status: undefined,
    WorkflowId: undefined,
    WorkflowType: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1WorkflowAttributes(data.Attributes, context);
  }
  if (data.ErrorDescription !== undefined && data.ErrorDescription !== null) {
    contents.ErrorDescription = __expectString(data.ErrorDescription);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Metrics !== undefined && data.Metrics !== null) {
    contents.Metrics = deserializeAws_restJson1WorkflowMetrics(data.Metrics, context);
  }
  if (data.StartDate !== undefined && data.StartDate !== null) {
    contents.StartDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartDate)));
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.WorkflowId !== undefined && data.WorkflowId !== null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  if (data.WorkflowType !== undefined && data.WorkflowType !== null) {
    contents.WorkflowType = __expectString(data.WorkflowType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1GetWorkflowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkflowStepsCommandError(output, context);
  }
  const contents: GetWorkflowStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
    WorkflowId: undefined,
    WorkflowType: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1WorkflowStepsList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkflowId !== undefined && data.WorkflowId !== null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  if (data.WorkflowType !== undefined && data.WorkflowType !== null) {
    contents.WorkflowType = __expectString(data.WorkflowType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkflowStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1ListAccountIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccountIntegrationsCommandError(output, context);
  }
  const contents: ListAccountIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1IntegrationList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAccountIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainsCommandError(output, context);
  }
  const contents: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1DomainList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1ListIdentityResolutionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityResolutionJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIdentityResolutionJobsCommandError(output, context);
  }
  const contents: ListIdentityResolutionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    IdentityResolutionJobsList: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityResolutionJobsList !== undefined && data.IdentityResolutionJobsList !== null) {
    contents.IdentityResolutionJobsList = deserializeAws_restJson1IdentityResolutionJobsList(
      data.IdentityResolutionJobsList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIdentityResolutionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityResolutionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1ListIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIntegrationsCommandError(output, context);
  }
  const contents: ListIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1IntegrationList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1ListProfileObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProfileObjectsCommandError(output, context);
  }
  const contents: ListProfileObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ProfileObjectList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProfileObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1ListProfileObjectTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProfileObjectTypesCommandError(output, context);
  }
  const contents: ListProfileObjectTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ProfileObjectTypeList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProfileObjectTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypeTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProfileObjectTypeTemplatesCommandError(output, context);
  }
  const contents: ListProfileObjectTypeTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ProfileObjectTypeTemplateList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProfileObjectTypeTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypeTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
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

export const deserializeAws_restJson1ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkflowsCommandError(output, context);
  }
  const contents: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1WorkflowList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1MergeProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MergeProfilesCommandError(output, context);
  }
  const contents: MergeProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1MergeProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1PutIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutIntegrationCommandError(output, context);
  }
  const contents: PutIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedAt: undefined,
    DomainName: undefined,
    LastUpdatedAt: undefined,
    ObjectTypeName: undefined,
    ObjectTypeNames: undefined,
    Tags: undefined,
    Uri: undefined,
    WorkflowId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.ObjectTypeNames !== undefined && data.ObjectTypeNames !== null) {
    contents.ObjectTypeNames = deserializeAws_restJson1ObjectTypeNames(data.ObjectTypeNames, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.Uri !== undefined && data.Uri !== null) {
    contents.Uri = __expectString(data.Uri);
  }
  if (data.WorkflowId !== undefined && data.WorkflowId !== null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1PutProfileObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutProfileObjectCommandError(output, context);
  }
  const contents: PutProfileObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProfileObjectUniqueKey: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProfileObjectUniqueKey !== undefined && data.ProfileObjectUniqueKey !== null) {
    contents.ProfileObjectUniqueKey = __expectString(data.ProfileObjectUniqueKey);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutProfileObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1PutProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutProfileObjectTypeCommandError(output, context);
  }
  const contents: PutProfileObjectTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    AllowProfileCreation: undefined,
    CreatedAt: undefined,
    Description: undefined,
    EncryptionKey: undefined,
    ExpirationDays: undefined,
    Fields: undefined,
    Keys: undefined,
    LastUpdatedAt: undefined,
    ObjectTypeName: undefined,
    SourceLastUpdatedTimestampFormat: undefined,
    Tags: undefined,
    TemplateId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllowProfileCreation !== undefined && data.AllowProfileCreation !== null) {
    contents.AllowProfileCreation = __expectBoolean(data.AllowProfileCreation);
  }
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EncryptionKey !== undefined && data.EncryptionKey !== null) {
    contents.EncryptionKey = __expectString(data.EncryptionKey);
  }
  if (data.ExpirationDays !== undefined && data.ExpirationDays !== null) {
    contents.ExpirationDays = __expectInt32(data.ExpirationDays);
  }
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1FieldMap(data.Fields, context);
  }
  if (data.Keys !== undefined && data.Keys !== null) {
    contents.Keys = deserializeAws_restJson1KeyMap(data.Keys, context);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.SourceLastUpdatedTimestampFormat !== undefined && data.SourceLastUpdatedTimestampFormat !== null) {
    contents.SourceLastUpdatedTimestampFormat = __expectString(data.SourceLastUpdatedTimestampFormat);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutProfileObjectTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1SearchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchProfilesCommandError(output, context);
  }
  const contents: SearchProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ProfileList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
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
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
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

export const deserializeAws_restJson1UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainCommandError(output, context);
  }
  const contents: UpdateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedAt: undefined,
    DeadLetterQueueUrl: undefined,
    DefaultEncryptionKey: undefined,
    DefaultExpirationDays: undefined,
    DomainName: undefined,
    LastUpdatedAt: undefined,
    Matching: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DeadLetterQueueUrl !== undefined && data.DeadLetterQueueUrl !== null) {
    contents.DeadLetterQueueUrl = __expectString(data.DeadLetterQueueUrl);
  }
  if (data.DefaultEncryptionKey !== undefined && data.DefaultEncryptionKey !== null) {
    contents.DefaultEncryptionKey = __expectString(data.DefaultEncryptionKey);
  }
  if (data.DefaultExpirationDays !== undefined && data.DefaultExpirationDays !== null) {
    contents.DefaultExpirationDays = __expectInt32(data.DefaultExpirationDays);
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Matching !== undefined && data.Matching !== null) {
    contents.Matching = deserializeAws_restJson1MatchingResponse(data.Matching, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

export const deserializeAws_restJson1UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProfileCommandError(output, context);
  }
  const contents: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProfileId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProfileId !== undefined && data.ProfileId !== null) {
    contents.ProfileId = __expectString(data.ProfileId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
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

const serializeAws_restJson1Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.Address1 !== undefined && input.Address1 !== null && { Address1: input.Address1 }),
    ...(input.Address2 !== undefined && input.Address2 !== null && { Address2: input.Address2 }),
    ...(input.Address3 !== undefined && input.Address3 !== null && { Address3: input.Address3 }),
    ...(input.Address4 !== undefined && input.Address4 !== null && { Address4: input.Address4 }),
    ...(input.City !== undefined && input.City !== null && { City: input.City }),
    ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
    ...(input.County !== undefined && input.County !== null && { County: input.County }),
    ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
    ...(input.Province !== undefined && input.Province !== null && { Province: input.Province }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_restJson1AppflowIntegration = (input: AppflowIntegration, context: __SerdeContext): any => {
  return {
    ...(input.Batches !== undefined &&
      input.Batches !== null && { Batches: serializeAws_restJson1Batches(input.Batches, context) }),
    ...(input.FlowDefinition !== undefined &&
      input.FlowDefinition !== null && {
        FlowDefinition: serializeAws_restJson1FlowDefinition(input.FlowDefinition, context),
      }),
  };
};

const serializeAws_restJson1Attributes = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1AttributeSourceIdMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1AutoMerging = (input: AutoMerging, context: __SerdeContext): any => {
  return {
    ...(input.ConflictResolution !== undefined &&
      input.ConflictResolution !== null && {
        ConflictResolution: serializeAws_restJson1ConflictResolution(input.ConflictResolution, context),
      }),
    ...(input.Consolidation !== undefined &&
      input.Consolidation !== null && {
        Consolidation: serializeAws_restJson1Consolidation(input.Consolidation, context),
      }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1Batch = (input: Batch, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1Batches = (input: Batch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Batch(entry, context);
    });
};

const serializeAws_restJson1ConflictResolution = (input: ConflictResolution, context: __SerdeContext): any => {
  return {
    ...(input.ConflictResolvingModel !== undefined &&
      input.ConflictResolvingModel !== null && { ConflictResolvingModel: input.ConflictResolvingModel }),
    ...(input.SourceName !== undefined && input.SourceName !== null && { SourceName: input.SourceName }),
  };
};

const serializeAws_restJson1ConnectorOperator = (input: ConnectorOperator, context: __SerdeContext): any => {
  return {
    ...(input.Marketo !== undefined && input.Marketo !== null && { Marketo: input.Marketo }),
    ...(input.S3 !== undefined && input.S3 !== null && { S3: input.S3 }),
    ...(input.Salesforce !== undefined && input.Salesforce !== null && { Salesforce: input.Salesforce }),
    ...(input.ServiceNow !== undefined && input.ServiceNow !== null && { ServiceNow: input.ServiceNow }),
    ...(input.Zendesk !== undefined && input.Zendesk !== null && { Zendesk: input.Zendesk }),
  };
};

const serializeAws_restJson1Consolidation = (input: Consolidation, context: __SerdeContext): any => {
  return {
    ...(input.MatchingAttributesList !== undefined &&
      input.MatchingAttributesList !== null && {
        MatchingAttributesList: serializeAws_restJson1MatchingAttributesList(input.MatchingAttributesList, context),
      }),
  };
};

const serializeAws_restJson1ExportingConfig = (input: ExportingConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Exporting !== undefined &&
      input.S3Exporting !== null && {
        S3Exporting: serializeAws_restJson1S3ExportingConfig(input.S3Exporting, context),
      }),
  };
};

const serializeAws_restJson1FieldMap = (input: { [key: string]: ObjectTypeField }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ObjectTypeField(value, context),
    };
  }, {});
};

const serializeAws_restJson1FieldNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FieldSourceProfileIds = (input: FieldSourceProfileIds, context: __SerdeContext): any => {
  return {
    ...(input.AccountNumber !== undefined && input.AccountNumber !== null && { AccountNumber: input.AccountNumber }),
    ...(input.AdditionalInformation !== undefined &&
      input.AdditionalInformation !== null && { AdditionalInformation: input.AdditionalInformation }),
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1AttributeSourceIdMap(input.Attributes, context),
      }),
    ...(input.BillingAddress !== undefined &&
      input.BillingAddress !== null && { BillingAddress: input.BillingAddress }),
    ...(input.BirthDate !== undefined && input.BirthDate !== null && { BirthDate: input.BirthDate }),
    ...(input.BusinessEmailAddress !== undefined &&
      input.BusinessEmailAddress !== null && { BusinessEmailAddress: input.BusinessEmailAddress }),
    ...(input.BusinessName !== undefined && input.BusinessName !== null && { BusinessName: input.BusinessName }),
    ...(input.BusinessPhoneNumber !== undefined &&
      input.BusinessPhoneNumber !== null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
    ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.Gender !== undefined && input.Gender !== null && { Gender: input.Gender }),
    ...(input.HomePhoneNumber !== undefined &&
      input.HomePhoneNumber !== null && { HomePhoneNumber: input.HomePhoneNumber }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.MailingAddress !== undefined &&
      input.MailingAddress !== null && { MailingAddress: input.MailingAddress }),
    ...(input.MiddleName !== undefined && input.MiddleName !== null && { MiddleName: input.MiddleName }),
    ...(input.MobilePhoneNumber !== undefined &&
      input.MobilePhoneNumber !== null && { MobilePhoneNumber: input.MobilePhoneNumber }),
    ...(input.PartyType !== undefined && input.PartyType !== null && { PartyType: input.PartyType }),
    ...(input.PersonalEmailAddress !== undefined &&
      input.PersonalEmailAddress !== null && { PersonalEmailAddress: input.PersonalEmailAddress }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.ShippingAddress !== undefined &&
      input.ShippingAddress !== null && { ShippingAddress: input.ShippingAddress }),
  };
};

const serializeAws_restJson1FlowDefinition = (input: FlowDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FlowName !== undefined && input.FlowName !== null && { FlowName: input.FlowName }),
    ...(input.KmsArn !== undefined && input.KmsArn !== null && { KmsArn: input.KmsArn }),
    ...(input.SourceFlowConfig !== undefined &&
      input.SourceFlowConfig !== null && {
        SourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.SourceFlowConfig, context),
      }),
    ...(input.Tasks !== undefined &&
      input.Tasks !== null && { Tasks: serializeAws_restJson1Tasks(input.Tasks, context) }),
    ...(input.TriggerConfig !== undefined &&
      input.TriggerConfig !== null && {
        TriggerConfig: serializeAws_restJson1TriggerConfig(input.TriggerConfig, context),
      }),
  };
};

const serializeAws_restJson1IncrementalPullConfig = (input: IncrementalPullConfig, context: __SerdeContext): any => {
  return {
    ...(input.DatetimeTypeFieldName !== undefined &&
      input.DatetimeTypeFieldName !== null && { DatetimeTypeFieldName: input.DatetimeTypeFieldName }),
  };
};

const serializeAws_restJson1IntegrationConfig = (input: IntegrationConfig, context: __SerdeContext): any => {
  return {
    ...(input.AppflowIntegration !== undefined &&
      input.AppflowIntegration !== null && {
        AppflowIntegration: serializeAws_restJson1AppflowIntegration(input.AppflowIntegration, context),
      }),
  };
};

const serializeAws_restJson1JobSchedule = (input: JobSchedule, context: __SerdeContext): any => {
  return {
    ...(input.DayOfTheWeek !== undefined && input.DayOfTheWeek !== null && { DayOfTheWeek: input.DayOfTheWeek }),
    ...(input.Time !== undefined && input.Time !== null && { Time: input.Time }),
  };
};

const serializeAws_restJson1KeyMap = (input: { [key: string]: ObjectTypeKey[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ObjectTypeKeyList(value, context),
    };
  }, {});
};

const serializeAws_restJson1MarketoSourceProperties = (
  input: MarketoSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
  };
};

const serializeAws_restJson1MatchingAttributes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1MatchingAttributesList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MatchingAttributes(entry, context);
    });
};

const serializeAws_restJson1MatchingRequest = (input: MatchingRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoMerging !== undefined &&
      input.AutoMerging !== null && { AutoMerging: serializeAws_restJson1AutoMerging(input.AutoMerging, context) }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ExportingConfig !== undefined &&
      input.ExportingConfig !== null && {
        ExportingConfig: serializeAws_restJson1ExportingConfig(input.ExportingConfig, context),
      }),
    ...(input.JobSchedule !== undefined &&
      input.JobSchedule !== null && { JobSchedule: serializeAws_restJson1JobSchedule(input.JobSchedule, context) }),
  };
};

const serializeAws_restJson1ObjectFilter = (input: ObjectFilter, context: __SerdeContext): any => {
  return {
    ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1requestValueList(input.Values, context) }),
  };
};

const serializeAws_restJson1ObjectTypeField = (input: ObjectTypeField, context: __SerdeContext): any => {
  return {
    ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
  };
};

const serializeAws_restJson1ObjectTypeKey = (input: ObjectTypeKey, context: __SerdeContext): any => {
  return {
    ...(input.FieldNames !== undefined &&
      input.FieldNames !== null && { FieldNames: serializeAws_restJson1FieldNameList(input.FieldNames, context) }),
    ...(input.StandardIdentifiers !== undefined &&
      input.StandardIdentifiers !== null && {
        StandardIdentifiers: serializeAws_restJson1StandardIdentifierList(input.StandardIdentifiers, context),
      }),
  };
};

const serializeAws_restJson1ObjectTypeKeyList = (input: ObjectTypeKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ObjectTypeKey(entry, context);
    });
};

const serializeAws_restJson1ObjectTypeNames = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1ProfileIdToBeMergedList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1requestValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1S3ExportingConfig = (input: S3ExportingConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyName !== undefined && input.S3KeyName !== null && { S3KeyName: input.S3KeyName }),
  };
};

const serializeAws_restJson1S3SourceProperties = (input: S3SourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
    ...(input.BucketPrefix !== undefined && input.BucketPrefix !== null && { BucketPrefix: input.BucketPrefix }),
  };
};

const serializeAws_restJson1SalesforceSourceProperties = (
  input: SalesforceSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableDynamicFieldUpdate !== undefined &&
      input.EnableDynamicFieldUpdate !== null && { EnableDynamicFieldUpdate: input.EnableDynamicFieldUpdate }),
    ...(input.IncludeDeletedRecords !== undefined &&
      input.IncludeDeletedRecords !== null && { IncludeDeletedRecords: input.IncludeDeletedRecords }),
    ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
  };
};

const serializeAws_restJson1ScheduledTriggerProperties = (
  input: ScheduledTriggerProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataPullMode !== undefined && input.DataPullMode !== null && { DataPullMode: input.DataPullMode }),
    ...(input.FirstExecutionFrom !== undefined &&
      input.FirstExecutionFrom !== null && {
        FirstExecutionFrom: Math.round(input.FirstExecutionFrom.getTime() / 1000),
      }),
    ...(input.ScheduleEndTime !== undefined &&
      input.ScheduleEndTime !== null && { ScheduleEndTime: Math.round(input.ScheduleEndTime.getTime() / 1000) }),
    ...(input.ScheduleExpression !== undefined &&
      input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset !== undefined &&
      input.ScheduleOffset !== null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.ScheduleStartTime !== undefined &&
      input.ScheduleStartTime !== null && { ScheduleStartTime: Math.round(input.ScheduleStartTime.getTime() / 1000) }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1ServiceNowSourceProperties = (
  input: ServiceNowSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
  };
};

const serializeAws_restJson1SourceConnectorProperties = (
  input: SourceConnectorProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marketo !== undefined &&
      input.Marketo !== null && { Marketo: serializeAws_restJson1MarketoSourceProperties(input.Marketo, context) }),
    ...(input.S3 !== undefined &&
      input.S3 !== null && { S3: serializeAws_restJson1S3SourceProperties(input.S3, context) }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceSourceProperties(input.Salesforce, context),
      }),
    ...(input.ServiceNow !== undefined &&
      input.ServiceNow !== null && {
        ServiceNow: serializeAws_restJson1ServiceNowSourceProperties(input.ServiceNow, context),
      }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && { Zendesk: serializeAws_restJson1ZendeskSourceProperties(input.Zendesk, context) }),
  };
};

const serializeAws_restJson1SourceFields = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceFlowConfig = (input: SourceFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorProfileName !== undefined &&
      input.ConnectorProfileName !== null && { ConnectorProfileName: input.ConnectorProfileName }),
    ...(input.ConnectorType !== undefined && input.ConnectorType !== null && { ConnectorType: input.ConnectorType }),
    ...(input.IncrementalPullConfig !== undefined &&
      input.IncrementalPullConfig !== null && {
        IncrementalPullConfig: serializeAws_restJson1IncrementalPullConfig(input.IncrementalPullConfig, context),
      }),
    ...(input.SourceConnectorProperties !== undefined &&
      input.SourceConnectorProperties !== null && {
        SourceConnectorProperties: serializeAws_restJson1SourceConnectorProperties(
          input.SourceConnectorProperties,
          context
        ),
      }),
  };
};

const serializeAws_restJson1StandardIdentifierList = (
  input: (StandardIdentifier | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
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

const serializeAws_restJson1Task = (input: Task, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorOperator !== undefined &&
      input.ConnectorOperator !== null && {
        ConnectorOperator: serializeAws_restJson1ConnectorOperator(input.ConnectorOperator, context),
      }),
    ...(input.DestinationField !== undefined &&
      input.DestinationField !== null && { DestinationField: input.DestinationField }),
    ...(input.SourceFields !== undefined &&
      input.SourceFields !== null && { SourceFields: serializeAws_restJson1SourceFields(input.SourceFields, context) }),
    ...(input.TaskProperties !== undefined &&
      input.TaskProperties !== null && {
        TaskProperties: serializeAws_restJson1TaskPropertiesMap(input.TaskProperties, context),
      }),
    ...(input.TaskType !== undefined && input.TaskType !== null && { TaskType: input.TaskType }),
  };
};

const serializeAws_restJson1TaskPropertiesMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: any }, [key, value]: [OperatorPropertiesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: value,
      };
    },
    {}
  );
};

const serializeAws_restJson1Tasks = (input: Task[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Task(entry, context);
    });
};

const serializeAws_restJson1TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return {
    ...(input.TriggerProperties !== undefined &&
      input.TriggerProperties !== null && {
        TriggerProperties: serializeAws_restJson1TriggerProperties(input.TriggerProperties, context),
      }),
    ...(input.TriggerType !== undefined && input.TriggerType !== null && { TriggerType: input.TriggerType }),
  };
};

const serializeAws_restJson1TriggerProperties = (input: TriggerProperties, context: __SerdeContext): any => {
  return {
    ...(input.Scheduled !== undefined &&
      input.Scheduled !== null && {
        Scheduled: serializeAws_restJson1ScheduledTriggerProperties(input.Scheduled, context),
      }),
  };
};

const serializeAws_restJson1UpdateAddress = (input: UpdateAddress, context: __SerdeContext): any => {
  return {
    ...(input.Address1 !== undefined && input.Address1 !== null && { Address1: input.Address1 }),
    ...(input.Address2 !== undefined && input.Address2 !== null && { Address2: input.Address2 }),
    ...(input.Address3 !== undefined && input.Address3 !== null && { Address3: input.Address3 }),
    ...(input.Address4 !== undefined && input.Address4 !== null && { Address4: input.Address4 }),
    ...(input.City !== undefined && input.City !== null && { City: input.City }),
    ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
    ...(input.County !== undefined && input.County !== null && { County: input.County }),
    ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
    ...(input.Province !== undefined && input.Province !== null && { Province: input.Province }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_restJson1UpdateAttributes = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1ZendeskSourceProperties = (
  input: ZendeskSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
  };
};

const deserializeAws_restJson1Address = (output: any, context: __SerdeContext): Address => {
  return {
    Address1: __expectString(output.Address1),
    Address2: __expectString(output.Address2),
    Address3: __expectString(output.Address3),
    Address4: __expectString(output.Address4),
    City: __expectString(output.City),
    Country: __expectString(output.Country),
    County: __expectString(output.County),
    PostalCode: __expectString(output.PostalCode),
    Province: __expectString(output.Province),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1AppflowIntegrationWorkflowAttributes = (
  output: any,
  context: __SerdeContext
): AppflowIntegrationWorkflowAttributes => {
  return {
    ConnectorProfileName: __expectString(output.ConnectorProfileName),
    RoleArn: __expectString(output.RoleArn),
    SourceConnectorType: __expectString(output.SourceConnectorType),
  } as any;
};

const deserializeAws_restJson1AppflowIntegrationWorkflowMetrics = (
  output: any,
  context: __SerdeContext
): AppflowIntegrationWorkflowMetrics => {
  return {
    RecordsProcessed: __expectLong(output.RecordsProcessed),
    StepsCompleted: __expectLong(output.StepsCompleted),
    TotalSteps: __expectLong(output.TotalSteps),
  } as any;
};

const deserializeAws_restJson1AppflowIntegrationWorkflowStep = (
  output: any,
  context: __SerdeContext
): AppflowIntegrationWorkflowStep => {
  return {
    BatchRecordsEndTime: __expectString(output.BatchRecordsEndTime),
    BatchRecordsStartTime: __expectString(output.BatchRecordsStartTime),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    ExecutionMessage: __expectString(output.ExecutionMessage),
    FlowName: __expectString(output.FlowName),
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    RecordsProcessed: __expectLong(output.RecordsProcessed),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1Attributes = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1AutoMerging = (output: any, context: __SerdeContext): AutoMerging => {
  return {
    ConflictResolution:
      output.ConflictResolution !== undefined && output.ConflictResolution !== null
        ? deserializeAws_restJson1ConflictResolution(output.ConflictResolution, context)
        : undefined,
    Consolidation:
      output.Consolidation !== undefined && output.Consolidation !== null
        ? deserializeAws_restJson1Consolidation(output.Consolidation, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1ConflictResolution = (output: any, context: __SerdeContext): ConflictResolution => {
  return {
    ConflictResolvingModel: __expectString(output.ConflictResolvingModel),
    SourceName: __expectString(output.SourceName),
  } as any;
};

const deserializeAws_restJson1Consolidation = (output: any, context: __SerdeContext): Consolidation => {
  return {
    MatchingAttributesList:
      output.MatchingAttributesList !== undefined && output.MatchingAttributesList !== null
        ? deserializeAws_restJson1MatchingAttributesList(output.MatchingAttributesList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DomainList = (output: any, context: __SerdeContext): ListDomainItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListDomainItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DomainStats = (output: any, context: __SerdeContext): DomainStats => {
  return {
    MeteringProfileCount: __expectLong(output.MeteringProfileCount),
    ObjectCount: __expectLong(output.ObjectCount),
    ProfileCount: __expectLong(output.ProfileCount),
    TotalSize: __expectLong(output.TotalSize),
  } as any;
};

const deserializeAws_restJson1ExportingConfig = (output: any, context: __SerdeContext): ExportingConfig => {
  return {
    S3Exporting:
      output.S3Exporting !== undefined && output.S3Exporting !== null
        ? deserializeAws_restJson1S3ExportingConfig(output.S3Exporting, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportingLocation = (output: any, context: __SerdeContext): ExportingLocation => {
  return {
    S3Exporting:
      output.S3Exporting !== undefined && output.S3Exporting !== null
        ? deserializeAws_restJson1S3ExportingLocation(output.S3Exporting, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FieldMap = (output: any, context: __SerdeContext): { [key: string]: ObjectTypeField } => {
  return Object.entries(output).reduce((acc: { [key: string]: ObjectTypeField }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ObjectTypeField(value, context),
    };
  }, {});
};

const deserializeAws_restJson1FieldNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1IdentityResolutionJob = (output: any, context: __SerdeContext): IdentityResolutionJob => {
  return {
    DomainName: __expectString(output.DomainName),
    ExportingLocation:
      output.ExportingLocation !== undefined && output.ExportingLocation !== null
        ? deserializeAws_restJson1ExportingLocation(output.ExportingLocation, context)
        : undefined,
    JobEndTime:
      output.JobEndTime !== undefined && output.JobEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.JobEndTime)))
        : undefined,
    JobId: __expectString(output.JobId),
    JobStartTime:
      output.JobStartTime !== undefined && output.JobStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.JobStartTime)))
        : undefined,
    JobStats:
      output.JobStats !== undefined && output.JobStats !== null
        ? deserializeAws_restJson1JobStats(output.JobStats, context)
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1IdentityResolutionJobsList = (
  output: any,
  context: __SerdeContext
): IdentityResolutionJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdentityResolutionJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IntegrationList = (output: any, context: __SerdeContext): ListIntegrationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListIntegrationItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobSchedule = (output: any, context: __SerdeContext): JobSchedule => {
  return {
    DayOfTheWeek: __expectString(output.DayOfTheWeek),
    Time: __expectString(output.Time),
  } as any;
};

const deserializeAws_restJson1JobStats = (output: any, context: __SerdeContext): JobStats => {
  return {
    NumberOfMatchesFound: __expectLong(output.NumberOfMatchesFound),
    NumberOfMergesDone: __expectLong(output.NumberOfMergesDone),
    NumberOfProfilesReviewed: __expectLong(output.NumberOfProfilesReviewed),
  } as any;
};

const deserializeAws_restJson1KeyMap = (output: any, context: __SerdeContext): { [key: string]: ObjectTypeKey[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: ObjectTypeKey[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ObjectTypeKeyList(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ListDomainItem = (output: any, context: __SerdeContext): ListDomainItem => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    DomainName: __expectString(output.DomainName),
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ListIntegrationItem = (output: any, context: __SerdeContext): ListIntegrationItem => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    DomainName: __expectString(output.DomainName),
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    ObjectTypeName: __expectString(output.ObjectTypeName),
    ObjectTypeNames:
      output.ObjectTypeNames !== undefined && output.ObjectTypeNames !== null
        ? deserializeAws_restJson1ObjectTypeNames(output.ObjectTypeNames, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
    Uri: __expectString(output.Uri),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_restJson1ListProfileObjectsItem = (
  output: any,
  context: __SerdeContext
): ListProfileObjectsItem => {
  return {
    Object: __expectString(output.Object),
    ObjectTypeName: __expectString(output.ObjectTypeName),
    ProfileObjectUniqueKey: __expectString(output.ProfileObjectUniqueKey),
  } as any;
};

const deserializeAws_restJson1ListProfileObjectTypeItem = (
  output: any,
  context: __SerdeContext
): ListProfileObjectTypeItem => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    ObjectTypeName: __expectString(output.ObjectTypeName),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ListProfileObjectTypeTemplateItem = (
  output: any,
  context: __SerdeContext
): ListProfileObjectTypeTemplateItem => {
  return {
    SourceName: __expectString(output.SourceName),
    SourceObject: __expectString(output.SourceObject),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

const deserializeAws_restJson1ListWorkflowsItem = (output: any, context: __SerdeContext): ListWorkflowsItem => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    Status: __expectString(output.Status),
    StatusDescription: __expectString(output.StatusDescription),
    WorkflowId: __expectString(output.WorkflowId),
    WorkflowType: __expectString(output.WorkflowType),
  } as any;
};

const deserializeAws_restJson1MatchesList = (output: any, context: __SerdeContext): MatchItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MatchItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MatchingAttributes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MatchingAttributesList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MatchingAttributes(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MatchingResponse = (output: any, context: __SerdeContext): MatchingResponse => {
  return {
    AutoMerging:
      output.AutoMerging !== undefined && output.AutoMerging !== null
        ? deserializeAws_restJson1AutoMerging(output.AutoMerging, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    ExportingConfig:
      output.ExportingConfig !== undefined && output.ExportingConfig !== null
        ? deserializeAws_restJson1ExportingConfig(output.ExportingConfig, context)
        : undefined,
    JobSchedule:
      output.JobSchedule !== undefined && output.JobSchedule !== null
        ? deserializeAws_restJson1JobSchedule(output.JobSchedule, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MatchItem = (output: any, context: __SerdeContext): MatchItem => {
  return {
    ConfidenceScore: __limitedParseDouble(output.ConfidenceScore),
    MatchId: __expectString(output.MatchId),
    ProfileIds:
      output.ProfileIds !== undefined && output.ProfileIds !== null
        ? deserializeAws_restJson1ProfileIdList(output.ProfileIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ObjectTypeField = (output: any, context: __SerdeContext): ObjectTypeField => {
  return {
    ContentType: __expectString(output.ContentType),
    Source: __expectString(output.Source),
    Target: __expectString(output.Target),
  } as any;
};

const deserializeAws_restJson1ObjectTypeKey = (output: any, context: __SerdeContext): ObjectTypeKey => {
  return {
    FieldNames:
      output.FieldNames !== undefined && output.FieldNames !== null
        ? deserializeAws_restJson1FieldNameList(output.FieldNames, context)
        : undefined,
    StandardIdentifiers:
      output.StandardIdentifiers !== undefined && output.StandardIdentifiers !== null
        ? deserializeAws_restJson1StandardIdentifierList(output.StandardIdentifiers, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ObjectTypeKeyList = (output: any, context: __SerdeContext): ObjectTypeKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ObjectTypeKey(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ObjectTypeNames = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1Profile = (output: any, context: __SerdeContext): Profile => {
  return {
    AccountNumber: __expectString(output.AccountNumber),
    AdditionalInformation: __expectString(output.AdditionalInformation),
    Address:
      output.Address !== undefined && output.Address !== null
        ? deserializeAws_restJson1Address(output.Address, context)
        : undefined,
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1Attributes(output.Attributes, context)
        : undefined,
    BillingAddress:
      output.BillingAddress !== undefined && output.BillingAddress !== null
        ? deserializeAws_restJson1Address(output.BillingAddress, context)
        : undefined,
    BirthDate: __expectString(output.BirthDate),
    BusinessEmailAddress: __expectString(output.BusinessEmailAddress),
    BusinessName: __expectString(output.BusinessName),
    BusinessPhoneNumber: __expectString(output.BusinessPhoneNumber),
    EmailAddress: __expectString(output.EmailAddress),
    FirstName: __expectString(output.FirstName),
    Gender: __expectString(output.Gender),
    HomePhoneNumber: __expectString(output.HomePhoneNumber),
    LastName: __expectString(output.LastName),
    MailingAddress:
      output.MailingAddress !== undefined && output.MailingAddress !== null
        ? deserializeAws_restJson1Address(output.MailingAddress, context)
        : undefined,
    MiddleName: __expectString(output.MiddleName),
    MobilePhoneNumber: __expectString(output.MobilePhoneNumber),
    PartyType: __expectString(output.PartyType),
    PersonalEmailAddress: __expectString(output.PersonalEmailAddress),
    PhoneNumber: __expectString(output.PhoneNumber),
    ProfileId: __expectString(output.ProfileId),
    ShippingAddress:
      output.ShippingAddress !== undefined && output.ShippingAddress !== null
        ? deserializeAws_restJson1Address(output.ShippingAddress, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProfileIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ProfileList = (output: any, context: __SerdeContext): Profile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Profile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProfileObjectList = (output: any, context: __SerdeContext): ListProfileObjectsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListProfileObjectsItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProfileObjectTypeList = (
  output: any,
  context: __SerdeContext
): ListProfileObjectTypeItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListProfileObjectTypeItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProfileObjectTypeTemplateList = (
  output: any,
  context: __SerdeContext
): ListProfileObjectTypeTemplateItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListProfileObjectTypeTemplateItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1requestValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1S3ExportingConfig = (output: any, context: __SerdeContext): S3ExportingConfig => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyName: __expectString(output.S3KeyName),
  } as any;
};

const deserializeAws_restJson1S3ExportingLocation = (output: any, context: __SerdeContext): S3ExportingLocation => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyName: __expectString(output.S3KeyName),
  } as any;
};

const deserializeAws_restJson1StandardIdentifierList = (
  output: any,
  context: __SerdeContext
): (StandardIdentifier | string)[] => {
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

const deserializeAws_restJson1WorkflowAttributes = (output: any, context: __SerdeContext): WorkflowAttributes => {
  return {
    AppflowIntegration:
      output.AppflowIntegration !== undefined && output.AppflowIntegration !== null
        ? deserializeAws_restJson1AppflowIntegrationWorkflowAttributes(output.AppflowIntegration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorkflowList = (output: any, context: __SerdeContext): ListWorkflowsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListWorkflowsItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkflowMetrics = (output: any, context: __SerdeContext): WorkflowMetrics => {
  return {
    AppflowIntegration:
      output.AppflowIntegration !== undefined && output.AppflowIntegration !== null
        ? deserializeAws_restJson1AppflowIntegrationWorkflowMetrics(output.AppflowIntegration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorkflowStepItem = (output: any, context: __SerdeContext): WorkflowStepItem => {
  return {
    AppflowIntegration:
      output.AppflowIntegration !== undefined && output.AppflowIntegration !== null
        ? deserializeAws_restJson1AppflowIntegrationWorkflowStep(output.AppflowIntegration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorkflowStepsList = (output: any, context: __SerdeContext): WorkflowStepItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkflowStepItem(entry, context);
    });
  return retVal;
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
