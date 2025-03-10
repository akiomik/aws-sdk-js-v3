import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { ComprehendServiceException as __BaseException } from "./ComprehendServiceException";

export enum AugmentedManifestsDocumentTypeFormat {
  PLAIN_TEXT_DOCUMENT = "PLAIN_TEXT_DOCUMENT",
  SEMI_STRUCTURED_DOCUMENT = "SEMI_STRUCTURED_DOCUMENT",
}

export enum Split {
  TEST = "TEST",
  TRAIN = "TRAIN",
}

/**
 * <p>An augmented manifest file that provides training data for your custom model. An augmented
 *       manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.</p>
 */
export interface AugmentedManifestsListItem {
  /**
   * <p>The Amazon S3 location of the augmented manifest file.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The purpose of the data you've provided in the augmented manifest. You can either train or
   *       test this data. If you don't specify, the default is train.</p>
   *          <p>TRAIN - all of the documents in the manifest will be used for training. If no test
   *       documents are provided, Amazon Comprehend will automatically reserve a portion of the training
   *       documents for testing.</p>
   *          <p> TEST - all of the documents in the manifest will be used for testing.</p>
   */
  Split?: Split | string;

  /**
   * <p>The JSON attribute that contains the annotations for your training documents. The number
   *       of attribute names that you specify depends on whether your augmented manifest file is the
   *       output of a single labeling job or a chained labeling job.</p>
   *          <p>If your file is the output of a single labeling job, specify the LabelAttributeName key
   *       that was used when the job was created in Ground Truth.</p>
   *          <p>If your file is the output of a chained labeling job, specify the LabelAttributeName key
   *       for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from
   *       an individual job.</p>
   */
  AttributeNames: string[] | undefined;

  /**
   * <p>The S3 prefix to the annotation files that are referred in the augmented manifest
   *       file.</p>
   */
  AnnotationDataS3Uri?: string;

  /**
   * <p>The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest
   *       file.</p>
   */
  SourceDocumentsS3Uri?: string;

  /**
   * <p>The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't
   *       specify, the default is PlainTextDocument. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PLAIN_TEXT_DOCUMENT</code> A document type that represents any unicode text that
   *           is encoded in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEMI_STRUCTURED_DOCUMENT</code> A document type with positional and structural
   *           context, like a PDF. For training with Amazon Comprehend, only PDFs are supported. For
   *           inference, Amazon Comprehend support PDFs, DOCX and TXT.</p>
   *             </li>
   *          </ul>
   */
  DocumentType?: AugmentedManifestsDocumentTypeFormat | string;
}

export namespace AugmentedManifestsListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AugmentedManifestsListItem): any => ({
    ...obj,
  });
}

export interface BatchDetectDominantLanguageRequest {
  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document should contain at least 20 characters and must contain fewer than
   *       5,000 bytes of UTF-8 encoded characters.</p>
   */
  TextList: string[] | undefined;
}

export namespace BatchDetectDominantLanguageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectDominantLanguageRequest): any => ({
    ...obj,
    ...(obj.TextList && { TextList: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes an error that occurred while processing a document in a batch. The operation
 *       returns on <code>BatchItemError</code> object for each document that contained an
 *       error.</p>
 */
export interface BatchItemError {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The numeric error code of the error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A text description of the error.</p>
   */
  ErrorMessage?: string;
}

export namespace BatchItemError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchItemError): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the code for the dominant language in the input text and the level of
 *       confidence that Amazon Comprehend has in the accuracy of the detection.</p>
 */
export interface DominantLanguage {
  /**
   * <p>The RFC 5646 language code for the dominant language. For more information about RFC
   *       5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying
   *         Languages</a> on the <i>IETF Tools</i> web site.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;
}

export namespace DominantLanguage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DominantLanguage): any => ({
    ...obj,
  });
}

/**
 * <p>The result of calling the  operation.
 *       The operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectDominantLanguageItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>DominantLanguage</a> objects describing the dominant
   *       languages in the document.</p>
   */
  Languages?: DominantLanguage[];
}

export namespace BatchDetectDominantLanguageItemResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectDominantLanguageItemResult): any => ({
    ...obj,
  });
}

export interface BatchDetectDominantLanguageResponse {
  /**
   * <p>A list of  objects
   *       containing the results of the operation. The results are sorted in ascending order by the
   *         <code>Index</code> field and match the order of the documents in the input list. If all of
   *       the documents contain an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectDominantLanguageItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

export namespace BatchDetectDominantLanguageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectDominantLanguageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
 */
export class BatchSizeLimitExceededException extends __BaseException {
  readonly name: "BatchSizeLimitExceededException" = "BatchSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchSizeLimitExceededException, __BaseException>) {
    super({
      name: "BatchSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request is invalid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 */
export class TextSizeLimitExceededException extends __BaseException {
  readonly name: "TextSizeLimitExceededException" = "TextSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextSizeLimitExceededException, __BaseException>) {
    super({
      name: "TextSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export enum LanguageCode {
  AR = "ar",
  DE = "de",
  EN = "en",
  ES = "es",
  FR = "fr",
  HI = "hi",
  IT = "it",
  JA = "ja",
  KO = "ko",
  PT = "pt",
  ZH = "zh",
  ZH_TW = "zh-TW",
}

export interface BatchDetectEntitiesRequest {
  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer than 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace BatchDetectEntitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectEntitiesRequest): any => ({
    ...obj,
    ...(obj.TextList && { TextList: SENSITIVE_STRING }),
  });
}

export enum EntityType {
  COMMERCIAL_ITEM = "COMMERCIAL_ITEM",
  DATE = "DATE",
  EVENT = "EVENT",
  LOCATION = "LOCATION",
  ORGANIZATION = "ORGANIZATION",
  OTHER = "OTHER",
  PERSON = "PERSON",
  QUANTITY = "QUANTITY",
  TITLE = "TITLE",
}

/**
 * <p>Provides information about an entity. </p>
 *          <p> </p>
 */
export interface Entity {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * <p>The entity's type.</p>
   */
  Type?: EntityType | string;

  /**
   * <p>The text of the entity.</p>
   */
  Text?: string;

  /**
   * <p>A character offset in the input text that shows where the entity begins (the first
   *       character is at position 0). The offset returns the position of each UTF-8 code point in the
   *       string. A <i>code point</i> is the abstract character from a particular
   *       graphical representation. For example, a multi-byte UTF-8 character maps to a single code
   *       point.</p>
   */
  BeginOffset?: number;

  /**
   * <p>A character offset in the input text that shows where the entity ends. The offset
   *       returns the position of each UTF-8 code point in the string. A <i>code point</i>
   *       is the abstract character from a particular graphical representation. For example, a
   *       multi-byte UTF-8 character maps to a single code point. </p>
   */
  EndOffset?: number;
}

export namespace Entity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Entity): any => ({
    ...obj,
  });
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectEntitiesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>Entity</a> objects, one for each entity detected in the
   *       document.</p>
   */
  Entities?: Entity[];
}

export namespace BatchDetectEntitiesItemResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectEntitiesItemResult): any => ({
    ...obj,
  });
}

export interface BatchDetectEntitiesResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectEntitiesItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

export namespace BatchDetectEntitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectEntitiesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Comprehend can't process the language of the input text. For custom entity
 *       recognition APIs, only English, Spanish, French, Italian, German, or Portuguese are accepted.
 *       For a list of supported languages, see <a>supported-languages</a>. </p>
 */
export class UnsupportedLanguageException extends __BaseException {
  readonly name: "UnsupportedLanguageException" = "UnsupportedLanguageException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedLanguageException, __BaseException>) {
    super({
      name: "UnsupportedLanguageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedLanguageException.prototype);
    this.Message = opts.Message;
  }
}

export interface BatchDetectKeyPhrasesRequest {
  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace BatchDetectKeyPhrasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectKeyPhrasesRequest): any => ({
    ...obj,
    ...(obj.TextList && { TextList: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a key noun phrase.</p>
 */
export interface KeyPhrase {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * <p>The text of a key noun phrase.</p>
   */
  Text?: string;

  /**
   * <p>A character offset in the input text that shows where the key phrase begins (the first
   *       character is at position 0). The offset returns the position of each UTF-8 code point in the
   *       string. A <i>code point</i> is the abstract character from a particular
   *       graphical representation. For example, a multi-byte UTF-8 character maps to a single code
   *       point.</p>
   */
  BeginOffset?: number;

  /**
   * <p>A character offset in the input text where the key phrase ends. The offset returns the
   *       position of each UTF-8 code point in the string. A <code>code point</code> is the abstract
   *       character from a particular graphical representation. For example, a multi-byte UTF-8
   *       character maps to a single code point.</p>
   */
  EndOffset?: number;
}

export namespace KeyPhrase {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPhrase): any => ({
    ...obj,
  });
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectKeyPhrasesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>KeyPhrase</a> objects, one for each key phrase detected in
   *       the document.</p>
   */
  KeyPhrases?: KeyPhrase[];
}

export namespace BatchDetectKeyPhrasesItemResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectKeyPhrasesItemResult): any => ({
    ...obj,
  });
}

export interface BatchDetectKeyPhrasesResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectKeyPhrasesItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

export namespace BatchDetectKeyPhrasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectKeyPhrasesResponse): any => ({
    ...obj,
  });
}

export interface BatchDetectSentimentRequest {
  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace BatchDetectSentimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectSentimentRequest): any => ({
    ...obj,
    ...(obj.TextList && { TextList: SENSITIVE_STRING }),
  });
}

export enum SentimentType {
  MIXED = "MIXED",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
}

/**
 * <p>Describes the level of confidence that Amazon Comprehend has in the accuracy of its
 *       detection of sentiments.</p>
 */
export interface SentimentScore {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>POSITIVE</code> sentiment.</p>
   */
  Positive?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>NEGATIVE</code> sentiment.</p>
   */
  Negative?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>NEUTRAL</code> sentiment.</p>
   */
  Neutral?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>MIXED</code> sentiment.</p>
   */
  Mixed?: number;
}

export namespace SentimentScore {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SentimentScore): any => ({
    ...obj,
  });
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectSentimentItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The sentiment detected in the document.</p>
   */
  Sentiment?: SentimentType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its sentiment
   *       detection.</p>
   */
  SentimentScore?: SentimentScore;
}

export namespace BatchDetectSentimentItemResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectSentimentItemResult): any => ({
    ...obj,
  });
}

export interface BatchDetectSentimentResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectSentimentItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

export namespace BatchDetectSentimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectSentimentResponse): any => ({
    ...obj,
  });
}

export enum SyntaxLanguageCode {
  DE = "de",
  EN = "en",
  ES = "es",
  FR = "fr",
  IT = "it",
  PT = "pt",
}

export interface BatchDetectSyntaxRequest {
  /**
   * <p>A list containing the text of the input documents. The list can contain a maximum of 25
   *       documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the following languages
   *       supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   *       Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.</p>
   */
  LanguageCode: SyntaxLanguageCode | string | undefined;
}

export namespace BatchDetectSyntaxRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectSyntaxRequest): any => ({
    ...obj,
    ...(obj.TextList && { TextList: SENSITIVE_STRING }),
  });
}

export enum PartOfSpeechTagType {
  ADJ = "ADJ",
  ADP = "ADP",
  ADV = "ADV",
  AUX = "AUX",
  CCONJ = "CCONJ",
  CONJ = "CONJ",
  DET = "DET",
  INTJ = "INTJ",
  NOUN = "NOUN",
  NUM = "NUM",
  O = "O",
  PART = "PART",
  PRON = "PRON",
  PROPN = "PROPN",
  PUNCT = "PUNCT",
  SCONJ = "SCONJ",
  SYM = "SYM",
  VERB = "VERB",
}

/**
 * <p>Identifies the part of speech represented by the token and gives the confidence that
 *       Amazon Comprehend has that the part of speech was correctly identified. For more information
 *       about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>.</p>
 */
export interface PartOfSpeechTag {
  /**
   * <p>Identifies the part of speech that the token represents.</p>
   */
  Tag?: PartOfSpeechTagType | string;

  /**
   * <p>The confidence that Amazon Comprehend has that the part of speech was correctly
   *       identified.</p>
   */
  Score?: number;
}

export namespace PartOfSpeechTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartOfSpeechTag): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a work in the input text that was recognized and assigned a part of speech.
 *       There is one syntax token record for each word in the source text.</p>
 */
export interface SyntaxToken {
  /**
   * <p>A unique identifier for a token.</p>
   */
  TokenId?: number;

  /**
   * <p>The word that was recognized in the source text.</p>
   */
  Text?: string;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       word.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       word.</p>
   */
  EndOffset?: number;

  /**
   * <p>Provides the part of speech label and the confidence level that Amazon Comprehend has that
   *       the part of speech was correctly identified. For more information, see <a>how-syntax</a>.</p>
   */
  PartOfSpeech?: PartOfSpeechTag;
}

export namespace SyntaxToken {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SyntaxToken): any => ({
    ...obj,
  });
}

/**
 * <p>The result of calling the  operation. The
 *       operation returns one object that is successfully processed by the operation.</p>
 */
export interface BatchDetectSyntaxItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The syntax tokens for the words in the document, one token for each word.</p>
   */
  SyntaxTokens?: SyntaxToken[];
}

export namespace BatchDetectSyntaxItemResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectSyntaxItemResult): any => ({
    ...obj,
  });
}

export interface BatchDetectSyntaxResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectSyntaxItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document that
   *       contained an error. The results are sorted in ascending order by the <code>Index</code> field
   *       and match the order of the documents in the input list. If there are no errors in the batch,
   *       the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

export namespace BatchDetectSyntaxResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDetectSyntaxResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the result metrics for the test data associated with an documentation
 *       classifier.</p>
 */
export interface ClassifierEvaluationMetrics {
  /**
   * <p>The fraction of the labels that were correct recognized. It is computed by dividing the
   *       number of labels in the test documents that were correctly recognized by the total number of
   *       labels in the test documents.</p>
   */
  Accuracy?: number;

  /**
   * <p>A measure of the usefulness of the classifier results in the test data. High precision
   *       means that the classifier returned substantially more relevant results than irrelevant
   *       ones.</p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means
   *       that the classifier returned most of the relevant results. </p>
   */
  Recall?: number;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is derived from
   *       the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the
   *       harmonic average of the two scores. The highest score is 1, and the worst score is 0. </p>
   */
  F1Score?: number;

  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *       Unlike the Precision metric which comes from averaging the precision of all available labels,
   *       this is based on the overall score of all precision scores added together.</p>
   */
  MicroPrecision?: number;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means
   *       that the classifier returned most of the relevant results. Specifically, this indicates how
   *       many of the correct categories in the text that the model can predict. It is a percentage of
   *       correct categories in the text that can found. Instead of averaging the recall scores of all
   *       labels (as with Recall), micro Recall is based on the overall score of all recall scores added
   *       together.</p>
   */
  MicroRecall?: number;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is a
   *       combination of the <code>Micro Precision</code> and <code>Micro Recall</code> values. The
   *         <code>Micro F1Score</code> is the harmonic mean of the two scores. The highest score is 1,
   *       and the worst score is 0.</p>
   */
  MicroF1Score?: number;

  /**
   * <p>Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction
   *       of wrong labels compared to the total number of labels. Scores closer to zero are
   *       better.</p>
   */
  HammingLoss?: number;
}

export namespace ClassifierEvaluationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassifierEvaluationMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a document classifier.</p>
 */
export interface ClassifierMetadata {
  /**
   * <p>The number of labels in the input data. </p>
   */
  NumberOfLabels?: number;

  /**
   * <p>The number of documents in the input data that were used to train the classifier.
   *       Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;

  /**
   * <p>The number of documents in the input data that were used to test the classifier. Typically
   *       this is 10 to 20 percent of the input documents, up to 10,000 documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p> Describes the result metrics for the test data associated with an documentation
   *       classifier.</p>
   */
  EvaluationMetrics?: ClassifierEvaluationMetrics;
}

export namespace ClassifierMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassifierMetadata): any => ({
    ...obj,
  });
}

export interface ClassifyDocumentRequest {
  /**
   * <p>The document text to be analyzed.</p>
   */
  Text: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace ClassifyDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassifyDocumentRequest): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies the class that categorizes the document being analyzed</p>
 */
export interface DocumentClass {
  /**
   * <p>The name of the class.</p>
   */
  Name?: string;

  /**
   * <p>The confidence score that Amazon Comprehend has this class correctly attributed.</p>
   */
  Score?: number;
}

export namespace DocumentClass {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClass): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies one of the label or labels that categorize the document being analyzed.</p>
 */
export interface DocumentLabel {
  /**
   * <p>The name of the label.</p>
   */
  Name?: string;

  /**
   * <p>The confidence score that Amazon Comprehend has this label correctly attributed.</p>
   */
  Score?: number;
}

export namespace DocumentLabel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentLabel): any => ({
    ...obj,
  });
}

export interface ClassifyDocumentResponse {
  /**
   * <p>The classes used by the document being analyzed. These are used for multi-class trained
   *       models. Individual classes are mutually exclusive and each document is expected to have only a
   *       single class assigned to it. For example, an animal can be a dog or a cat, but not both at the
   *       same time. </p>
   */
  Classes?: DocumentClass[];

  /**
   * <p>The labels used the document being analyzed. These are used for multi-label trained
   *       models. Individual labels represent different categories that are related in some manner and
   *       are not mutually exclusive. For example, a movie can be just an action movie, or it can be an
   *       action movie, a science fiction movie, and a comedy, all at the same time. </p>
   */
  Labels?: DocumentLabel[];
}

export namespace ClassifyDocumentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassifyDocumentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

export interface ContainsPiiEntitiesRequest {
  /**
   * <p>Creates a new document classification request to analyze a single document in real-time,
   *       returning personally identifiable information (PII) entity labels.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace ContainsPiiEntitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainsPiiEntitiesRequest): any => ({
    ...obj,
  });
}

export enum PiiEntityType {
  ADDRESS = "ADDRESS",
  AGE = "AGE",
  ALL = "ALL",
  AWS_ACCESS_KEY = "AWS_ACCESS_KEY",
  AWS_SECRET_KEY = "AWS_SECRET_KEY",
  BANK_ACCOUNT_NUMBER = "BANK_ACCOUNT_NUMBER",
  BANK_ROUTING = "BANK_ROUTING",
  CREDIT_DEBIT_CVV = "CREDIT_DEBIT_CVV",
  CREDIT_DEBIT_EXPIRY = "CREDIT_DEBIT_EXPIRY",
  CREDIT_DEBIT_NUMBER = "CREDIT_DEBIT_NUMBER",
  DATE_TIME = "DATE_TIME",
  DRIVER_ID = "DRIVER_ID",
  EMAIL = "EMAIL",
  IP_ADDRESS = "IP_ADDRESS",
  MAC_ADDRESS = "MAC_ADDRESS",
  NAME = "NAME",
  PASSPORT_NUMBER = "PASSPORT_NUMBER",
  PASSWORD = "PASSWORD",
  PHONE = "PHONE",
  PIN = "PIN",
  SSN = "SSN",
  URL = "URL",
  USERNAME = "USERNAME",
}

/**
 * <p>Specifies one of the label or labels that categorize the personally identifiable
 *       information (PII) entity being analyzed.</p>
 */
export interface EntityLabel {
  /**
   * <p>The name of the label.</p>
   */
  Name?: PiiEntityType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;
}

export namespace EntityLabel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityLabel): any => ({
    ...obj,
  });
}

export interface ContainsPiiEntitiesResponse {
  /**
   * <p>The labels used in the document being analyzed. Individual labels represent personally
   *       identifiable information (PII) entity types.</p>
   */
  Labels?: EntityLabel[];
}

export namespace ContainsPiiEntitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainsPiiEntitiesResponse): any => ({
    ...obj,
  });
}

export enum DocumentClassifierDataFormat {
  AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST",
  COMPREHEND_CSV = "COMPREHEND_CSV",
}

/**
 * <p>The input properties for training a document classifier. </p>
 *          <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
 */
export interface DocumentClassifierInputDataConfig {
  /**
   * <p>The format of your training data:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPREHEND_CSV</code>: A two-column CSV file, where labels are provided in the
   *           first column, and documents are provided in the second. If you use this value, you must
   *           provide the <code>S3Uri</code> parameter in your request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon
   *           SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON
   *           object that contains a training document and its associated labels. </p>
   *                <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter
   *           in your request.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the
   *       default.</p>
   */
  DataFormat?: DocumentClassifierDataFormat | string;

  /**
   * <p>The Amazon S3 URI for the input data. The S3 bucket must be in the same region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of input files.</p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>COMPREHEND_CSV</code>.</p>
   */
  S3Uri?: string;

  /**
   * <p>The Amazon S3 URI for the input data. The Amazon S3 bucket must be in the same AWS Region
   *       as the API endpoint that you are calling. The URI can point to a single input file or it can
   *       provide the prefix for a collection of input files. </p>
   */
  TestS3Uri?: string;

  /**
   * <p>Indicates the delimiter used to separate each label for training a multi-label classifier.
   *       The default delimiter between labels is a pipe (|). You can use a different character as a
   *       delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the
   *       training documents use a delimiter other than the default or the delimiter you specify, the
   *       labels on that line will be combined to make a single unique label, such as
   *       LABELLABELLABEL.</p>
   */
  LabelDelimiter?: string;

  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>AUGMENTED_MANIFEST</code>.</p>
   */
  AugmentedManifests?: AugmentedManifestsListItem[];
}

export namespace DocumentClassifierInputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClassifierInputDataConfig): any => ({
    ...obj,
  });
}

export enum DocumentClassifierMode {
  MULTI_CLASS = "MULTI_CLASS",
  MULTI_LABEL = "MULTI_LABEL",
}

/**
 * <p>Provides output results configuration parameters for custom classifier jobs. </p>
 */
export interface DocumentClassifierOutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object while creating a custom
   *       classifier, you specify the Amazon S3 location where you want to write the confusion matrix.
   *       The URI must be in the same region as the API endpoint that you are calling. The location is
   *       used as the prefix for the actual location of this output file.</p>
   *          <p>When the custom classifier job is finished, the service creates the output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       confusion matrix.</p>
   */
  S3Uri?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job. The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias:
   *             <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

export namespace DocumentClassifierOutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClassifierOutputDataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For
 *       example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to
 *       indicate its use by a particular department. </p>
 */
export interface Tag {
  /**
   * <p>The initial part of a key-value pair that forms a tag associated with a given resource.
   *       For instance, if you want to show which resources are used by which departments, you might use
   *       “Department” as the key portion of the pair, with multiple possible values such as “sales,”
   *       “legal,” and “administration.” </p>
   */
  Key: string | undefined;

  /**
   * <p> The second part of a key-value pair that forms a tag associated with a given resource.
   *       For instance, if you want to show which resources are used by which departments, you might use
   *       “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the
   *       sales department. </p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
 *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
 *         VPC</a>. </p>
 */
export interface VpcConfig {
  /**
   * <p>The ID number for a security group on an instance of your private VPC. Security groups on
   *       your VPC function serve as a virtual firewall to control inbound and outbound traffic and
   *       provides security for the resources that you’ll be accessing on the VPC. This ID number is
   *       preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security
   *         Groups for your VPC</a>. </p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID for each subnet being used in your private VPC. This subnet is a subset of the a
   *       range of IPv4 addresses used by the VPC and is specific to a given availability zone in the
   *       VPC’s region. This ID number is preceded by "subnet-", for instance:
   *       "subnet-04ccf456919e69055". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and
   *         Subnets</a>. </p>
   */
  Subnets: string[] | undefined;
}

export namespace VpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
}

export interface CreateDocumentClassifierRequest {
  /**
   * <p>The name of the document classifier.</p>
   */
  DocumentClassifierName: string | undefined;

  /**
   * <p>The version name given to the newly created classifier. Version names can have a maximum
   *       of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The
   *       version name must be unique among all models with the same classifier name in the account/AWS
   *       Region.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants
   *       Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Tags to be associated with the document classifier being created. A tag is a key-value
   *       pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: DocumentClassifierInputDataConfig | undefined;

  /**
   * <p>Enables the addition of output results configuration parameters for custom classifier
   *       jobs.</p>
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The language of the input documents. You can specify any of the following languages
   *       supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   *       Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Indicates the mode in which the classifier will be trained. The classifier can be trained
   *       in multi-class mode, which identifies one and only one class for each document, or multi-label
   *       mode, which identifies one or more labels for each document. In multi-label mode, multiple
   *       labels for an individual document are separated by a delimiter. The default delimiter between
   *       labels is a pipe (|).</p>
   */
  Mode?: DocumentClassifierMode | string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The resource-based policy to attach to your custom document classifier model. You can use
   *       this policy to allow another AWS account to import your custom model.</p>
   *          <p>Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line
   *       breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the
   *       JSON body is also enclosed in double quotes, then you must escape the double quotes that are
   *       inside the policy:</p>
   *          <p>
   *             <code>"{\"attribute\": \"value\", \"attribute\": [\"value\"]}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'{"attribute": "value", "attribute": ["value"]}'</code>
   *          </p>
   */
  ModelPolicy?: string;
}

export namespace CreateDocumentClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDocumentClassifierRequest): any => ({
    ...obj,
  });
}

export interface CreateDocumentClassifierResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   */
  DocumentClassifierArn?: string;
}

export namespace CreateDocumentClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDocumentClassifierResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 */
export class KmsKeyValidationException extends __BaseException {
  readonly name: "KmsKeyValidationException" = "KmsKeyValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsKeyValidationException, __BaseException>) {
    super({
      name: "KmsKeyValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsKeyValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of resources per account has been exceeded. Review the resources, and
 *       then try your request again.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateEndpointRequest {
  /**
   * <p>This is the descriptive suffix that becomes part of the <code>EndpointArn</code> used for
   *       all subsequent requests to this resource. </p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint will be
   *       attached.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits: number | undefined;

  /**
   * <p>An idempotency token provided by the customer. If this token matches a previous endpoint
   *       creation request, Amazon Comprehend will not return a <code>ResourceInUseException</code>.
   *     </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags associated with the endpoint being created. A tag is a key-value pair that adds
   *       metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an
   *       endpoint to indicate its use by the sales department. </p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to trained custom models encrypted with a customer
   *       managed key (ModelKmsKeyId).</p>
   */
  DataAccessRoleArn?: string;
}

export namespace CreateEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointRequest): any => ({
    ...obj,
  });
}

export interface CreateEndpointResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being created.</p>
   */
  EndpointArn?: string;
}

export namespace CreateEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Describes the annotations associated with a entity recognizer.</p>
 */
export interface EntityRecognizerAnnotations {
  /**
   * <p> Specifies the Amazon S3 location where the annotations for an entity recognizer are
   *       located. The URI must be in the same region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>This specifies the Amazon S3 location where the test annotations for an entity recognizer
   *       are located. The URI must be in the same AWS Region as the API endpoint that you are
   *       calling.</p>
   */
  TestS3Uri?: string;
}

export namespace EntityRecognizerAnnotations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerAnnotations): any => ({
    ...obj,
  });
}

export enum EntityRecognizerDataFormat {
  AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST",
  COMPREHEND_CSV = "COMPREHEND_CSV",
}

export enum InputFormat {
  ONE_DOC_PER_FILE = "ONE_DOC_PER_FILE",
  ONE_DOC_PER_LINE = "ONE_DOC_PER_LINE",
}

/**
 * <p>Describes the training documents submitted with an entity recognizer.</p>
 */
export interface EntityRecognizerDocuments {
  /**
   * <p> Specifies the Amazon S3 location where the training documents for an entity recognizer
   *       are located. The URI must be in the same region as the API endpoint that you are
   *       calling.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p> Specifies the Amazon S3 location where the test documents for an entity recognizer are
   *       located. The URI must be in the same AWS Region as the API endpoint that you are
   *       calling.</p>
   */
  TestS3Uri?: string;

  /**
   * <p> Specifies how the text in an input file should be processed. This is optional, and the
   *       default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document.
   *       Use this option when you are processing large documents, such as newspaper articles or
   *       scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document.
   *       Use this option when you are processing many short documents, such as text messages.</p>
   */
  InputFormat?: InputFormat | string;
}

export namespace EntityRecognizerDocuments {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerDocuments): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the entity recognizer submitted with an entity recognizer.</p>
 */
export interface EntityRecognizerEntityList {
  /**
   * <p>Specifies the Amazon S3 location where the entity list is located. The URI must be in the
   *       same region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;
}

export namespace EntityRecognizerEntityList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerEntityList): any => ({
    ...obj,
  });
}

/**
 * <p>An entity type within a labeled training dataset that Amazon Comprehend uses to train a
 *       custom entity recognizer.</p>
 */
export interface EntityTypesListItem {
  /**
   * <p>An entity type within a labeled training dataset that Amazon Comprehend uses to train a
   *       custom entity recognizer.</p>
   *          <p>Entity types must not contain the following invalid characters: \n (line break), \\n
   *       (escaped line break, \r (carriage return), \\r (escaped carriage return), \t (tab), \\t
   *       (escaped tab), space, and , (comma).</p>
   */
  Type: string | undefined;
}

export namespace EntityTypesListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityTypesListItem): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the format and location of the input data.</p>
 */
export interface EntityRecognizerInputDataConfig {
  /**
   * <p>The format of your training data:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPREHEND_CSV</code>: A CSV file that supplements your training documents. The
   *           CSV file contains information about the custom entities that your trained model will
   *           detect. The required format of the file depends on whether you are providing annotations
   *           or an entity list.</p>
   *                <p>If you use this value, you must provide your CSV file by using either the
   *             <code>Annotations</code> or <code>EntityList</code> parameters. You must provide your
   *           training documents by using the <code>Documents</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon
   *           SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON
   *           object that contains a training document and its labels. Each label annotates a named
   *           entity in the training document. </p>
   *                <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter
   *           in your request.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the
   *       default.</p>
   */
  DataFormat?: EntityRecognizerDataFormat | string;

  /**
   * <p>The entity types in the labeled training data that Amazon Comprehend uses to train the
   *       custom entity recognizer. Any entity types that you don't specify are ignored.</p>
   *          <p>A maximum of 25 entity types can be used at one time to train an entity recognizer. Entity
   *       types must not contain the following invalid characters: \n (line break), \\n (escaped line
   *       break), \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab),
   *       space, and , (comma). </p>
   */
  EntityTypes: EntityTypesListItem[] | undefined;

  /**
   * <p>The S3 location of the folder that contains the training documents for your custom entity
   *       recognizer.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>COMPREHEND_CSV</code>.</p>
   */
  Documents?: EntityRecognizerDocuments;

  /**
   * <p>The S3 location of the CSV file that annotates your training documents.</p>
   */
  Annotations?: EntityRecognizerAnnotations;

  /**
   * <p>The S3 location of the CSV file that has the entity list for your custom entity
   *       recognizer.</p>
   */
  EntityList?: EntityRecognizerEntityList;

  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>AUGMENTED_MANIFEST</code>.</p>
   */
  AugmentedManifests?: AugmentedManifestsListItem[];
}

export namespace EntityRecognizerInputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerInputDataConfig): any => ({
    ...obj,
  });
}

export interface CreateEntityRecognizerRequest {
  /**
   * <p>The name given to the newly created recognizer. Recognizer names can be a maximum of 256
   *       characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name
   *       must be unique in the account/region.</p>
   */
  RecognizerName: string | undefined;

  /**
   * <p>The version name given to the newly created recognizer. Version names can be a maximum of
   *       256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The
   *       version name must be unique among all models with the same recognizer name in the account/ AWS
   *       Region.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants
   *       Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Tags to be associated with the entity recognizer being created. A tag is a key-value pair
   *       that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the format and location of the input data. The S3 bucket containing the input
   *       data must be located in the same region as the entity recognizer being created. </p>
   */
  InputDataConfig: EntityRecognizerInputDataConfig | undefined;

  /**
   * <p> A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p> You can specify any of the following languages supported by Amazon Comprehend: English
   *       ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt").
   *       All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your custom entity recognizer. For more information, see
   *         <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The JSON resource-based policy to attach to your custom entity recognizer model. You can
   *       use this policy to allow another AWS account to import your custom model.</p>
   *          <p>Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for
   *       your policy, enclose the attribute names and values in double quotes. If the JSON body is also
   *       enclosed in double quotes, then you must escape the double quotes that are inside the
   *       policy:</p>
   *          <p>
   *             <code>"{\"attribute\": \"value\", \"attribute\": [\"value\"]}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'{"attribute": "value", "attribute": ["value"]}'</code>
   *          </p>
   */
  ModelPolicy?: string;
}

export namespace CreateEntityRecognizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEntityRecognizerRequest): any => ({
    ...obj,
  });
}

export interface CreateEntityRecognizerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;
}

export namespace CreateEntityRecognizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEntityRecognizerResponse): any => ({
    ...obj,
  });
}

export interface DeleteDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   */
  DocumentClassifierArn: string | undefined;
}

export namespace DeleteDocumentClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDocumentClassifierRequest): any => ({
    ...obj,
  });
}

export interface DeleteDocumentClassifierResponse {}

export namespace DeleteDocumentClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDocumentClassifierResponse): any => ({
    ...obj,
  });
}

export interface DeleteEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being deleted.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DeleteEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteEndpointResponse {}

export namespace DeleteEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn: string | undefined;
}

export namespace DeleteEntityRecognizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEntityRecognizerRequest): any => ({
    ...obj,
  });
}

export interface DeleteEntityRecognizerResponse {}

export namespace DeleteEntityRecognizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEntityRecognizerResponse): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model version that has the policy to delete.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The revision ID of the policy to delete.</p>
   */
  PolicyRevisionId?: string;
}

export namespace DeleteResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {}

export namespace DeleteResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DescribeDocumentClassificationJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeDocumentClassificationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentClassificationJobRequest): any => ({
    ...obj,
  });
}

export enum DocumentReadAction {
  TEXTRACT_ANALYZE_DOCUMENT = "TEXTRACT_ANALYZE_DOCUMENT",
  TEXTRACT_DETECT_DOCUMENT_TEXT = "TEXTRACT_DETECT_DOCUMENT_TEXT",
}

export enum DocumentReadMode {
  FORCE_DOCUMENT_READ_ACTION = "FORCE_DOCUMENT_READ_ACTION",
  SERVICE_DEFAULT = "SERVICE_DEFAULT",
}

export enum DocumentReadFeatureTypes {
  FORMS = "FORMS",
  TABLES = "TABLES",
}

/**
 * <p>The input properties for a topic detection job.</p>
 */
export interface DocumentReaderConfig {
  /**
   * <p>This enum field will start with two values which will apply to PDFs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TEXTRACT_DETECT_DOCUMENT_TEXT</code> - The service calls DetectDocumentText
   *           for PDF documents per page.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEXTRACT_ANALYZE_DOCUMENT</code> - The service calls AnalyzeDocument for PDF
   *           documents per page.</p>
   *             </li>
   *          </ul>
   */
  DocumentReadAction: DocumentReadAction | string | undefined;

  /**
   * <p>This enum field provides two values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SERVICE_DEFAULT</code> - use service defaults for Document reading. For
   *           Digital PDF it would mean using an internal parser instead of Textract APIs</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_DOCUMENT_READ_ACTION</code> - Always use specified action for
   *           DocumentReadAction, including Digital PDF. </p>
   *             </li>
   *          </ul>
   */
  DocumentReadMode?: DocumentReadMode | string;

  /**
   * <p>Specifies how the text in an input file should be processed:</p>
   */
  FeatureTypes?: (DocumentReadFeatureTypes | string)[];
}

export namespace DocumentReaderConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentReaderConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The input properties for an inference job.</p>
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon S3 URI for the input data. The URI must be in same region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of data files. </p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>Specifies how the text in an input file should be processed:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DOC_PER_FILE</code> - Each file is considered a separate document. Use
   *           this option when you are processing large documents, such as newspaper articles or
   *           scientific papers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONE_DOC_PER_LINE</code> - Each line in a file is considered a separate
   *           document. Use this option when you are processing many short documents, such as text
   *           messages.</p>
   *             </li>
   *          </ul>
   */
  InputFormat?: InputFormat | string;

  /**
   * <p>The document reader config field applies only for InputDataConfig of
   *       StartEntitiesDetectionJob. </p>
   *          <p>Use DocumentReaderConfig to provide specifications about how you want your inference
   *       documents read. Currently it applies for PDF documents in StartEntitiesDetectionJob custom
   *       inference.</p>
   */
  DocumentReaderConfig?: DocumentReaderConfig;
}

export namespace InputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
}

/**
 * <p>Provides configuration parameters for the output of inference jobs.</p>
 *          <p></p>
 */
export interface OutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you
   *       specify the Amazon S3 location where you want to write the output data. The URI must be in the
   *       same region as the API endpoint that you are calling. The location is used as the prefix for
   *       the actual location of the output file.</p>
   *          <p>When the topic detection job is finished, the service creates an output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       ouput of the operation.</p>
   *          <p>
   *       For a PII entity detection job, the output file is plain text, not a compressed archive.
   *       The output file name is the same as the input file, with <code>.out</code> appended at the end.
   *     </p>
   */
  S3Uri: string | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job. The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias:
   *             <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

export namespace OutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a document classification job.</p>
 */
export interface DocumentClassificationJobProperties {
  /**
   * <p>The identifier assigned to the document classification job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the document classification job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the document classification job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of the job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the document classification job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the document classification job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>The input data configuration that you supplied when you created the document
   *       classification job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the document
   *       classification job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your document classification job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace DocumentClassificationJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClassificationJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeDocumentClassificationJobResponse {
  /**
   * <p>An object that describes the properties associated with the document classification
   *       job.</p>
   */
  DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
}

export namespace DescribeDocumentClassificationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentClassificationJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified job was not found. Check the job ID and try again.</p>
 */
export class JobNotFoundException extends __BaseException {
  readonly name: "JobNotFoundException" = "JobNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<JobNotFoundException, __BaseException>) {
    super({
      name: "JobNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, JobNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. The  operation returns this identifier in its
   *       response.</p>
   */
  DocumentClassifierArn: string | undefined;
}

export namespace DescribeDocumentClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentClassifierRequest): any => ({
    ...obj,
  });
}

export enum ModelStatus {
  DELETING = "DELETING",
  IN_ERROR = "IN_ERROR",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
  TRAINED = "TRAINED",
  TRAINING = "TRAINING",
}

/**
 * <p>Provides information about a document classifier.</p>
 */
export interface DocumentClassifierProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>The language code for the language of the documents that the classifier was trained
   *       on.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The status of the document classifier. If the status is <code>TRAINED</code> the
   *       classifier is ready to use. If the status is <code>FAILED</code> you can see additional
   *       information about why the classifier wasn't trained in the <code>Message</code> field.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>Additional information about the status of the classifier.</p>
   */
  Message?: string;

  /**
   * <p>The time that the document classifier was submitted for training.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that training the document classifier completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>Indicates the time when the training starts on documentation classifiers. You are billed
   *       for the time interval between this time and the value of TrainingEndTime. </p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The time that training of the document classifier was completed. Indicates the time when
   *       the training completes on documentation classifiers. You are billed for the time interval
   *       between this time and the value of TrainingStartTime.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the document classifier
   *       for training.</p>
   */
  InputDataConfig?: DocumentClassifierInputDataConfig;

  /**
   * <p> Provides output results configuration parameters for custom classifier jobs.</p>
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * <p>Information about the document classifier, including the number of documents used for
   *       training the classifier, the number of documents used for test the classifier, and an accuracy
   *       rating.</p>
   */
  ClassifierMetadata?: ClassifierMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants
   *       Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Indicates the mode in which the specific classifier was trained. This also indicates the
   *       format of input documents and the format of the confusion matrix. Each classifier can only be
   *       trained in one mode and this cannot be changed once the classifier is trained.</p>
   */
  Mode?: DocumentClassifierMode | string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The version name that you assigned to the document classifier.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source model. This model was imported from a
   *       different AWS account to create the document classifier model in your AWS account.</p>
   */
  SourceModelArn?: string;
}

export namespace DocumentClassifierProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClassifierProperties): any => ({
    ...obj,
    ...(obj.ClassifierMetadata && { ClassifierMetadata: SENSITIVE_STRING }),
  });
}

export interface DescribeDocumentClassifierResponse {
  /**
   * <p>An object that contains the properties associated with a document classifier.</p>
   */
  DocumentClassifierProperties?: DocumentClassifierProperties;
}

export namespace DescribeDocumentClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDocumentClassifierResponse): any => ({
    ...obj,
    ...(obj.DocumentClassifierProperties && {
      DocumentClassifierProperties: DocumentClassifierProperties.filterSensitiveLog(obj.DocumentClassifierProperties),
    }),
  });
}

export interface DescribeDominantLanguageDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeDominantLanguageDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDominantLanguageDetectionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a dominant language detection job.</p>
 */
export interface DominantLanguageDetectionJobProperties {
  /**
   * <p>The identifier assigned to the dominant language detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique,
   *       fully qualified identifier for the job. It includes the AWS account, Region, and the job ID.
   *       The format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the dominant language detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the dominant language detection job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description for the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the dominant language detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the dominant language detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input
   *       data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your dominant language detection job. For more information, see
   *         <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace DominantLanguageDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DominantLanguageDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeDominantLanguageDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a dominant language detection
   *       job.</p>
   */
  DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
}

export namespace DescribeDominantLanguageDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDominantLanguageDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being described.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DescribeEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointRequest): any => ({
    ...obj,
  });
}

export enum EndpointStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  IN_SERVICE = "IN_SERVICE",
  UPDATING = "UPDATING",
}

/**
 * <p>Specifies information about the specified endpoint.</p>
 */
export interface EndpointProperties {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>Specifies the status of the endpoint. Because the endpoint updates and creation are
   *       asynchronous, so customers will need to wait for the endpoint to be <code>Ready</code> status
   *       before making inference requests.</p>
   */
  Status?: EndpointStatus | string;

  /**
   * <p>Specifies a reason for failure in cases of <code>Failed</code> status.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   */
  ModelArn?: string;

  /**
   * <p>ARN of the new model to use for updating an existing endpoint. This ARN is going to be
   *       different from the model ARN when the update is in progress</p>
   */
  DesiredModelArn?: string;

  /**
   * <p>The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits?: number;

  /**
   * <p>The number of inference units currently used by the model using this endpoint.</p>
   */
  CurrentInferenceUnits?: number;

  /**
   * <p>The creation date and time of the endpoint.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the endpoint was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to trained custom models encrypted with a customer
   *       managed key (ModelKmsKeyId).</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Data access role ARN to use in case the new model is encrypted with a customer KMS
   *       key.</p>
   */
  DesiredDataAccessRoleArn?: string;
}

export namespace EndpointProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointProperties): any => ({
    ...obj,
  });
}

export interface DescribeEndpointResponse {
  /**
   * <p>Describes information associated with the specific endpoint.</p>
   */
  EndpointProperties?: EndpointProperties;
}

export namespace DescribeEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointResponse): any => ({
    ...obj,
  });
}

export interface DescribeEntitiesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeEntitiesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an entities detection job.</p>
 */
export interface EntitiesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the entities detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned the entities detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the entities detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the entities detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the entities detection job completed</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>The input data configuration that you supplied when you created the entities detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the entities detection
   *       job. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input
   *       data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace EntitiesDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntitiesDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeEntitiesDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with an entities detection job.</p>
   */
  EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
}

export namespace DescribeEntitiesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn: string | undefined;
}

export namespace DescribeEntityRecognizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEntityRecognizerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about the accuracy of an entity recognizer for a specific entity
 *       type. </p>
 */
export interface EntityTypesEvaluationMetrics {
  /**
   * <p>A measure of the usefulness of the recognizer results for a specific entity type in the
   *       test data. High precision means that the recognizer returned substantially more relevant
   *       results than irrelevant ones. </p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the recognizer results are for a specific entity type in the
   *       test data. High recall means that the recognizer returned most of the relevant results.</p>
   */
  Recall?: number;

  /**
   * <p>A measure of how accurate the recognizer results are for a specific entity type in the
   *       test data. It is derived from the <code>Precision</code> and <code>Recall</code> values. The
   *         <code>F1Score</code> is the harmonic average of the two scores. The highest score is 1, and
   *       the worst score is 0. </p>
   */
  F1Score?: number;
}

export namespace EntityTypesEvaluationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityTypesEvaluationMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Individual item from the list of entity types in the metadata of an entity
 *       recognizer.</p>
 */
export interface EntityRecognizerMetadataEntityTypesListItem {
  /**
   * <p>Type of entity from the list of entity types in the metadata of an entity recognizer.
   *     </p>
   */
  Type?: string;

  /**
   * <p>Detailed information about the accuracy of the entity recognizer for a specific item on
   *       the list of entity types. </p>
   */
  EvaluationMetrics?: EntityTypesEvaluationMetrics;

  /**
   * <p>Indicates the number of times the given entity type was seen in the training data. </p>
   */
  NumberOfTrainMentions?: number;
}

export namespace EntityRecognizerMetadataEntityTypesListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerMetadataEntityTypesListItem): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about the accuracy of an entity recognizer. </p>
 */
export interface EntityRecognizerEvaluationMetrics {
  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *     </p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the recognizer results are for the test data. High recall means
   *       that the recognizer returned most of the relevant results.</p>
   */
  Recall?: number;

  /**
   * <p>A measure of how accurate the recognizer results are for the test data. It is derived from
   *       the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the
   *       harmonic average of the two scores. For plain text entity recognizer models, the range is 0 to 100,
   *       where 100 is the best score. For PDF/Word entity recognizer models, the range is 0 to 1,
   *       where 1 is the best score.
   *     </p>
   */
  F1Score?: number;
}

export namespace EntityRecognizerEvaluationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerEvaluationMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about an entity recognizer.</p>
 */
export interface EntityRecognizerMetadata {
  /**
   * <p> The number of documents in the input data that were used to train the entity recognizer.
   *       Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;

  /**
   * <p> The number of documents in the input data that were used to test the entity recognizer.
   *       Typically this is 10 to 20 percent of the input documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p>Detailed information about the accuracy of an entity recognizer.</p>
   */
  EvaluationMetrics?: EntityRecognizerEvaluationMetrics;

  /**
   * <p>Entity types from the metadata of an entity recognizer.</p>
   */
  EntityTypes?: EntityRecognizerMetadataEntityTypesListItem[];
}

export namespace EntityRecognizerMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Describes information about an entity recognizer.</p>
 */
export interface EntityRecognizerProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p> The language of the input documents. All documents must be in the same language. Only
   *       English ("en") is currently supported.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the status of the entity recognizer.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p> A description of the status of the recognizer.</p>
   */
  Message?: string;

  /**
   * <p>The time that the recognizer was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the recognizer creation completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The time that training of the entity recognizer started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The time that training of the entity recognizer was completed.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The input data properties of an entity recognizer.</p>
   */
  InputDataConfig?: EntityRecognizerInputDataConfig;

  /**
   * <p> Provides information about an entity recognizer.</p>
   */
  RecognizerMetadata?: EntityRecognizerMetadata;

  /**
   * <p> The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants
   *       Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your custom entity recognizer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The version name you assigned to the entity recognizer.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source model. This model was imported from a
   *       different AWS account to create the entity recognizer model in your AWS account.</p>
   */
  SourceModelArn?: string;
}

export namespace EntityRecognizerProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerProperties): any => ({
    ...obj,
    ...(obj.RecognizerMetadata && { RecognizerMetadata: SENSITIVE_STRING }),
  });
}

export interface DescribeEntityRecognizerResponse {
  /**
   * <p>Describes information associated with an entity recognizer.</p>
   */
  EntityRecognizerProperties?: EntityRecognizerProperties;
}

export namespace DescribeEntityRecognizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEntityRecognizerResponse): any => ({
    ...obj,
    ...(obj.EntityRecognizerProperties && {
      EntityRecognizerProperties: EntityRecognizerProperties.filterSensitiveLog(obj.EntityRecognizerProperties),
    }),
  });
}

export interface DescribeEventsDetectionJobRequest {
  /**
   * <p>The identifier of the events detection job.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeEventsDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventsDetectionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an events detection job.</p>
 */
export interface EventsDetectionJobProperties {
  /**
   * <p>The identifier assigned to the events detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name you assigned the events detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the events detection job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of the events detection job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the events detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the events detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the events detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the events detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identify and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The types of events that are detected by the job.</p>
   */
  TargetEventTypes?: string[];
}

export namespace EventsDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventsDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeEventsDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with an event detection job.</p>
   */
  EventsDetectionJobProperties?: EventsDetectionJobProperties;
}

export namespace DescribeEventsDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventsDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeKeyPhrasesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeKeyPhrasesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKeyPhrasesDetectionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a key phrases detection job.</p>
 */
export interface KeyPhrasesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the key phrases detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the key phrases detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned the key phrases detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the key phrases detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the key phrases detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the key phrases detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input
   *       data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your key phrases detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace KeyPhrasesDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPhrasesDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeKeyPhrasesDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a key phrases detection job.
   *     </p>
   */
  KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
}

export namespace DescribeKeyPhrasesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKeyPhrasesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribePiiEntitiesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribePiiEntitiesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePiiEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
}

export enum PiiEntitiesDetectionMode {
  ONLY_OFFSETS = "ONLY_OFFSETS",
  ONLY_REDACTION = "ONLY_REDACTION",
}

/**
 * <p>Provides configuration parameters for the output of PII entity detection jobs.</p>
 */
export interface PiiOutputDataConfig {
  /**
   * <p>When you use the <code>PiiOutputDataConfig</code> object with asynchronous operations,
   *       you specify the Amazon S3 location where you want to write the output data. </p>
   *          <p>
   *       For a PII entity detection job, the output file is plain text, not a compressed archive.
   *       The output file name is the same as the input file, with <code>.out</code> appended at the end.
   *     </p>
   */
  S3Uri: string | undefined;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job.</p>
   */
  KmsKeyId?: string;
}

export namespace PiiOutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PiiOutputDataConfig): any => ({
    ...obj,
  });
}

export enum PiiEntitiesDetectionMaskMode {
  MASK = "MASK",
  REPLACE_WITH_PII_ENTITY_TYPE = "REPLACE_WITH_PII_ENTITY_TYPE",
}

/**
 * <p>Provides configuration parameters for PII entity redaction.</p>
 */
export interface RedactionConfig {
  /**
   * <p>An array of the types of PII entities that Amazon Comprehend detects in the input text for
   *       your request.</p>
   */
  PiiEntityTypes?: (PiiEntityType | string)[];

  /**
   * <p>Specifies whether the PII entity is redacted with the mask character or the entity
   *       type.</p>
   */
  MaskMode?: PiiEntitiesDetectionMaskMode | string;

  /**
   * <p>A character that replaces each character in the redacted PII entity.</p>
   */
  MaskCharacter?: string;
}

export namespace RedactionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a PII entities detection job.</p>
 */
export interface PiiEntitiesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the PII entities detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned the PII entities detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the PII entities detection job. If the status is
   *       <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the PII entities detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the PII entities detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input properties for a PII entities detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the PII entities
   *       detection job.</p>
   */
  OutputDataConfig?: PiiOutputDataConfig;

  /**
   * <p>Provides configuration parameters for PII entity redaction.</p>
   *          <p>This parameter is required if you set the <code>Mode</code> parameter to
   *         <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code>
   *       definition that includes the <code>PiiEntityTypes</code> parameter.</p>
   */
  RedactionConfig?: RedactionConfig;

  /**
   * <p>The language code of the input documents</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input
   *       data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Specifies whether the output provides the locations (offsets) of PII entities or a file in
   *       which PII entities are redacted.</p>
   */
  Mode?: PiiEntitiesDetectionMode | string;
}

export namespace PiiEntitiesDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PiiEntitiesDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribePiiEntitiesDetectionJobResponse {
  /**
   * <p>Provides information about a PII entities detection job.</p>
   */
  PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
}

export namespace DescribePiiEntitiesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePiiEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy to describe.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DescribeResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DescribeResourcePolicyResponse {
  /**
   * <p>The JSON body of the resource-based policy.</p>
   */
  ResourcePolicy?: string;

  /**
   * <p>The time at which the policy was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time at which the policy was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a
   *       new revision ID, and it deletes the prior version of the policy.</p>
   */
  PolicyRevisionId?: string;
}

export namespace DescribeResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DescribeSentimentDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeSentimentDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSentimentDetectionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a sentiment detection job.</p>
 */
export interface SentimentDetectionJobProperties {
  /**
   * <p>The identifier assigned to the sentiment detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the sentiment detection job</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the sentiment detection job. If the status is <code>FAILED</code>,
   *       the <code>Messages</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the sentiment detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the sentiment detection job ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input
   *       data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace SentimentDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SentimentDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeSentimentDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a sentiment detection job.</p>
   */
  SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
}

export namespace DescribeSentimentDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSentimentDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeTargetedSentimentDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeTargetedSentimentDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTargetedSentimentDetectionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a targeted sentiment detection job.</p>
 */
export interface TargetedSentimentDetectionJobProperties {
  /**
   * <p>The identifier assigned to the targeted sentiment detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the targeted sentiment detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the targeted sentiment detection job. If the status is <code>FAILED</code>,
   *       the <code>Messages</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the targeted sentiment detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the targeted sentiment detection job ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input properties for an inference job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>Provides configuration parameters for the output of inference jobs.</p>
   *          <p></p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input
   *       data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the
   *       targeted sentiment detection job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *           <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace TargetedSentimentDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetedSentimentDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeTargetedSentimentDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a targeted sentiment detection job.</p>
   */
  TargetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties;
}

export namespace DescribeTargetedSentimentDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTargetedSentimentDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeTopicsDetectionJobRequest {
  /**
   * <p>The identifier assigned by the user to the detection job.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeTopicsDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTopicsDetectionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a topic detection job.</p>
 */
export interface TopicsDetectionJobProperties {
  /**
   * <p>The identifier assigned to the topic detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:topics-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name of the topic detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the topic detection job. If the status is <code>Failed</code>,
   *       the reason for the failure is shown in the <code>Message</code> field.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description for the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the topic detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the topic detection job was completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration supplied when you created the topic detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration supplied when you created the topic detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The number of topics to detect supplied when you created the topic detection job. The
   *       default is 10. </p>
   */
  NumberOfTopics?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants
   *       Amazon Comprehend read access to your job data. </p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace TopicsDetectionJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicsDetectionJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeTopicsDetectionJobResponse {
  /**
   * <p>The list of properties for the requested job.</p>
   */
  TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
}

export namespace DescribeTopicsDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTopicsDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DetectDominantLanguageRequest {
  /**
   * <p>A UTF-8 text string. Each string should contain at least 20 characters and must contain
   *       fewer that 5,000 bytes of UTF-8 encoded characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectDominantLanguageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectDominantLanguageRequest): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

export interface DetectDominantLanguageResponse {
  /**
   * <p>The languages that Amazon Comprehend detected in the input text. For each language, the
   *       response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend
   *       has in the accuracy of its inference. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the
   *         <i>IETF Tools</i> web site.</p>
   */
  Languages?: DominantLanguage[];
}

export namespace DetectDominantLanguageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectDominantLanguageResponse): any => ({
    ...obj,
  });
}

export interface DetectEntitiesRequest {
  /**
   * <p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   *          <p>If your request includes the endpoint for a custom entity recognition model, Amazon
   *       Comprehend uses the language of your custom model, and it ignores any language code that you
   *       specify here.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name of an endpoint that is associated with a custom entity
   *       recognition model. Provide an endpoint if you want to detect entities by using your own custom
   *       model instead of the default model that is used by Amazon Comprehend.</p>
   *          <p>If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and
   *       it ignores any language code that you provide in your request.</p>
   */
  EndpointArn?: string;
}

export namespace DetectEntitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectEntitiesRequest): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

export interface DetectEntitiesResponse {
  /**
   * <p>A collection of entities identified in the input text. For each entity, the response
   *       provides the entity text, entity type, where the entity text begins and ends, and the level of
   *       confidence that Amazon Comprehend has in the detection. </p>
   *          <p>If your request uses a custom entity recognition model, Amazon Comprehend detects the
   *       entities that the model is trained to recognize. Otherwise, it detects the default entity
   *       types. For a list of default entity types, see <a>how-entities</a>.</p>
   */
  Entities?: Entity[];
}

export namespace DetectEntitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectEntitiesResponse): any => ({
    ...obj,
  });
}

export interface DetectKeyPhrasesRequest {
  /**
   * <p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace DetectKeyPhrasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectKeyPhrasesRequest): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

export interface DetectKeyPhrasesResponse {
  /**
   * <p>A collection of key phrases that Amazon Comprehend identified in the input text. For
   *       each key phrase, the response provides the text of the key phrase, where the key phrase begins
   *       and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection. </p>
   */
  KeyPhrases?: KeyPhrase[];
}

export namespace DetectKeyPhrasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectKeyPhrasesResponse): any => ({
    ...obj,
  });
}

export interface DetectPiiEntitiesRequest {
  /**
   * <p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace DetectPiiEntitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectPiiEntitiesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a PII entity.</p>
 */
export interface PiiEntity {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * <p>The entity's type.</p>
   */
  Type?: PiiEntityType | string;

  /**
   * <p>A character offset in the input text that shows where the PII entity begins (the first
   *       character is at position 0). The offset returns the position of each UTF-8 code point in the
   *       string. A <i>code point</i> is the abstract character from a particular
   *       graphical representation. For example, a multi-byte UTF-8 character maps to a single code
   *       point.</p>
   */
  BeginOffset?: number;

  /**
   * <p>A character offset in the input text that shows where the PII entity ends. The offset
   *       returns the position of each UTF-8 code point in the string. A <i>code point</i>
   *       is the abstract character from a particular graphical representation. For example, a
   *       multi-byte UTF-8 character maps to a single code point.</p>
   */
  EndOffset?: number;
}

export namespace PiiEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PiiEntity): any => ({
    ...obj,
  });
}

export interface DetectPiiEntitiesResponse {
  /**
   * <p>A collection of PII entities identified in the input text. For each entity, the response
   *       provides the entity type, where the entity text begins and ends, and the level of confidence
   *       that Amazon Comprehend has in the detection.</p>
   */
  Entities?: PiiEntity[];
}

export namespace DetectPiiEntitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectPiiEntitiesResponse): any => ({
    ...obj,
  });
}

export interface DetectSentimentRequest {
  /**
   * <p>A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace DetectSentimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectSentimentRequest): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

export interface DetectSentimentResponse {
  /**
   * <p>The inferred sentiment that Amazon Comprehend has the highest level of confidence
   *       in.</p>
   */
  Sentiment?: SentimentType | string;

  /**
   * <p>An object that lists the sentiments, and their corresponding confidence
   *       levels.</p>
   */
  SentimentScore?: SentimentScore;
}

export namespace DetectSentimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectSentimentResponse): any => ({
    ...obj,
  });
}

export interface DetectSyntaxRequest {
  /**
   * <p>A UTF-8 string. Each string must contain fewer that 5,000 bytes of UTF encoded
   *       characters.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language code of the input documents. You can specify any of the following languages
   *       supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   *       Italian ("it"), or Portuguese ("pt").</p>
   */
  LanguageCode: SyntaxLanguageCode | string | undefined;
}

export namespace DetectSyntaxRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectSyntaxRequest): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

export interface DetectSyntaxResponse {
  /**
   * <p>A collection of syntax tokens describing the text. For each token, the response provides
   *       the text, the token type, where the text begins and ends, and the level of confidence that
   *       Amazon Comprehend has that the token is correct. For a list of token types, see <a>how-syntax</a>.</p>
   */
  SyntaxTokens?: SyntaxToken[];
}

export namespace DetectSyntaxResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectSyntaxResponse): any => ({
    ...obj,
  });
}

export interface ImportModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model to import.</p>
   */
  SourceModelArn: string | undefined;

  /**
   * <p>The name to assign to the custom model that is created in Amazon Comprehend by this
   *       import.</p>
   */
  ModelName?: string;

  /**
   * <p>The version name given to the custom model that is created by this import. Version names
   *       can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_)
   *       are allowed. The version name must be unique among all models with the same classifier name in
   *       the account/AWS Region.</p>
   */
  VersionName?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that allows
   *       Amazon Comprehend to use Amazon Key Management Service (KMS) to encrypt or decrypt the custom
   *       model.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Tags to be associated with the custom model that is created by this import. A tag is a
   *       key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a
   *       tag with "Sales" as the key might be added to a resource to indicate its use by the sales
   *       department.</p>
   */
  Tags?: Tag[];
}

export namespace ImportModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportModelRequest): any => ({
    ...obj,
  });
}

export interface ImportModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model being imported.</p>
   */
  ModelArn?: string;
}

export namespace ImportModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportModelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 */
export class InvalidFilterException extends __BaseException {
  readonly name: "InvalidFilterException" = "InvalidFilterException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterException, __BaseException>) {
    super({
      name: "InvalidFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Provides information for filtering a list of document classification jobs. For more
 *       information, see the  operation. You can
 *       provide only one filter parameter in each request.</p>
 */
export interface DocumentClassificationJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list based on job status. Returns only jobs with the specified status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace DocumentClassificationJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClassificationJobFilter): any => ({
    ...obj,
  });
}

export interface ListDocumentClassificationJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their names, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DocumentClassificationJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListDocumentClassificationJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentClassificationJobsRequest): any => ({
    ...obj,
  });
}

export interface ListDocumentClassificationJobsResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  DocumentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentClassificationJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentClassificationJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of document classifiers. You can only specify
 *       one filtering parameter in a request. For more information, see the  operation.</p>
 */
export interface DocumentClassifierFilter {
  /**
   * <p>Filters the list of classifiers based on status.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The name that you assigned to the document classifier</p>
   */
  DocumentClassifierName?: string;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted before the specified time. Classifiers are
   *       returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted after the specified time. Classifiers are
   *       returned in descending order, newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace DocumentClassifierFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClassifierFilter): any => ({
    ...obj,
  });
}

export interface ListDocumentClassifiersRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DocumentClassifierFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListDocumentClassifiersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentClassifiersRequest): any => ({
    ...obj,
  });
}

export interface ListDocumentClassifiersResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  DocumentClassifierPropertiesList?: DocumentClassifierProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentClassifiersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentClassifiersResponse): any => ({
    ...obj,
    ...(obj.DocumentClassifierPropertiesList && {
      DocumentClassifierPropertiesList: obj.DocumentClassifierPropertiesList.map((item) =>
        DocumentClassifierProperties.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListDocumentClassifierSummariesRequest {
  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return on each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListDocumentClassifierSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentClassifierSummariesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes information about a document classifier and its versions.</p>
 */
export interface DocumentClassifierSummary {
  /**
   * <p>The name that you assigned the document classifier.</p>
   */
  DocumentClassifierName?: string;

  /**
   * <p>The number of versions you created.</p>
   */
  NumberOfVersions?: number;

  /**
   * <p>The time that the latest document classifier version was submitted for processing.</p>
   */
  LatestVersionCreatedAt?: Date;

  /**
   * <p>The version name you assigned to the latest document classifier version.</p>
   */
  LatestVersionName?: string;

  /**
   * <p>Provides the status of the latest document classifier version.</p>
   */
  LatestVersionStatus?: ModelStatus | string;
}

export namespace DocumentClassifierSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentClassifierSummary): any => ({
    ...obj,
  });
}

export interface ListDocumentClassifierSummariesResponse {
  /**
   * <p>The list of summaries of document classifiers.</p>
   */
  DocumentClassifierSummariesList?: DocumentClassifierSummary[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDocumentClassifierSummariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDocumentClassifierSummariesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the
 *       operation.</p>
 */
export interface DominantLanguageDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace DominantLanguageDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DominantLanguageDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListDominantLanguageDetectionJobsRequest {
  /**
   * <p>Filters that jobs that are returned. You can filter jobs on their name, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DominantLanguageDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListDominantLanguageDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDominantLanguageDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListDominantLanguageDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListDominantLanguageDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDominantLanguageDetectionJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The filter used to determine which endpoints are returned. You can filter jobs on their
 *       name, model, status, or the date and time that they were created. You can only set one filter
 *       at a time. </p>
 */
export interface EndpointFilter {
  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   */
  ModelArn?: string;

  /**
   * <p>Specifies the status of the endpoint being returned. Possible values are: Creating, Ready,
   *       Updating, Deleting, Failed.</p>
   */
  Status?: EndpointStatus | string;

  /**
   * <p>Specifies a date before which the returned endpoint or endpoints were created.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Specifies a date after which the returned endpoint or endpoints were created.</p>
   */
  CreationTimeAfter?: Date;
}

export namespace EndpointFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointFilter): any => ({
    ...obj,
  });
}

export interface ListEndpointsRequest {
  /**
   * <p>Filters the endpoints that are returned. You can filter endpoints on their name, model,
   *       status, or the date and time that they were created. You can only set one filter at a time.
   *     </p>
   */
  Filter?: EndpointFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointsRequest): any => ({
    ...obj,
  });
}

export interface ListEndpointsResponse {
  /**
   * <p>Displays a list of endpoint properties being retrieved by the service in response to the
   *       request.</p>
   */
  EndpointPropertiesList?: EndpointProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface EntitiesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace EntitiesDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntitiesDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListEntitiesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: EntitiesDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListEntitiesDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitiesDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListEntitiesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntitiesDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitiesDetectionJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of entity recognizers. You can only specify one
 *       filtering parameter in a request. For more information, see the  operation./></p>
 */
export interface EntityRecognizerFilter {
  /**
   * <p>The status of an entity recognizer.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The name that you assigned the entity recognizer.</p>
   */
  RecognizerName?: string;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace EntityRecognizerFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerFilter): any => ({
    ...obj,
  });
}

export interface ListEntityRecognizersRequest {
  /**
   * <p>Filters the list of entities returned. You can filter on <code>Status</code>,
   *         <code>SubmitTimeBefore</code>, or <code>SubmitTimeAfter</code>. You can only set one filter
   *       at a time.</p>
   */
  Filter?: EntityRecognizerFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p> The maximum number of results to return on each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListEntityRecognizersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntityRecognizersRequest): any => ({
    ...obj,
  });
}

export interface ListEntityRecognizersResponse {
  /**
   * <p>The list of properties of an entity recognizer.</p>
   */
  EntityRecognizerPropertiesList?: EntityRecognizerProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntityRecognizersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntityRecognizersResponse): any => ({
    ...obj,
    ...(obj.EntityRecognizerPropertiesList && {
      EntityRecognizerPropertiesList: obj.EntityRecognizerPropertiesList.map((item) =>
        EntityRecognizerProperties.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListEntityRecognizerSummariesRequest {
  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return on each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListEntityRecognizerSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntityRecognizerSummariesRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Describes the information about an entity recognizer and its versions.</p>
 */
export interface EntityRecognizerSummary {
  /**
   * <p> The name that you assigned the entity recognizer.</p>
   */
  RecognizerName?: string;

  /**
   * <p> The number of versions you created.</p>
   */
  NumberOfVersions?: number;

  /**
   * <p> The time that the latest entity recognizer version was submitted for processing.</p>
   */
  LatestVersionCreatedAt?: Date;

  /**
   * <p> The version name you assigned to the latest entity recognizer version.</p>
   */
  LatestVersionName?: string;

  /**
   * <p> Provides the status of the latest entity recognizer version.</p>
   */
  LatestVersionStatus?: ModelStatus | string;
}

export namespace EntityRecognizerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityRecognizerSummary): any => ({
    ...obj,
  });
}

export interface ListEntityRecognizerSummariesResponse {
  /**
   * <p>The list entity recognizer summaries.</p>
   */
  EntityRecognizerSummariesList?: EntityRecognizerSummary[];

  /**
   * <p>The list entity recognizer summaries.</p>
   */
  NextToken?: string;
}

export namespace ListEntityRecognizerSummariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntityRecognizerSummariesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of event detection jobs.</p>
 */
export interface EventsDetectionJobFilter {
  /**
   * <p>Filters on the name of the events detection job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace EventsDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventsDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListEventsDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: EventsDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page.</p>
   */
  MaxResults?: number;
}

export namespace ListEventsDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventsDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListEventsDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  EventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEventsDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventsDetectionJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface KeyPhrasesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace KeyPhrasesDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPhrasesDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListKeyPhrasesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: KeyPhrasesDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListKeyPhrasesDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyPhrasesDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListKeyPhrasesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListKeyPhrasesDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyPhrasesDetectionJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of PII entity detection jobs.</p>
 */
export interface PiiEntitiesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace PiiEntitiesDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PiiEntitiesDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListPiiEntitiesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: PiiEntitiesDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page.</p>
   */
  MaxResults?: number;
}

export namespace ListPiiEntitiesDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPiiEntitiesDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListPiiEntitiesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  PiiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListPiiEntitiesDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPiiEntitiesDetectionJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface SentimentDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace SentimentDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SentimentDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListSentimentDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: SentimentDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListSentimentDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSentimentDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListSentimentDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  SentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListSentimentDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSentimentDetectionJobsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.
   *     </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are
   *       querying.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value
   *       pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface TargetedSentimentDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace TargetedSentimentDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetedSentimentDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListTargetedSentimentDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: TargetedSentimentDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListTargetedSentimentDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetedSentimentDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListTargetedSentimentDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  TargetedSentimentDetectionJobPropertiesList?: TargetedSentimentDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListTargetedSentimentDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetedSentimentDetectionJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering topic detection jobs. For more information, see
 *         .</p>
 */
export interface TopicsDetectionJobFilter {
  /**
   * <p></p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of topic detection jobs based on job status. Returns only jobs with
   *       the specified status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace TopicsDetectionJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicsDetectionJobFilter): any => ({
    ...obj,
  });
}

export interface ListTopicsDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. Jobs can be filtered on their name, status, or the
   *       date and time that they were submitted. You can set only one filter at a time.</p>
   */
  Filter?: TopicsDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListTopicsDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTopicsDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListTopicsDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  TopicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListTopicsDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTopicsDetectionJobsResponse): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model to attach the policy to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The JSON resource-based policy to attach to your custom model. Provide your JSON as a
   *       UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the
   *       attribute names and values in double quotes. If the JSON body is also enclosed in double
   *       quotes, then you must escape the double quotes that are inside the policy:</p>
   *          <p>
   *             <code>"{\"attribute\": \"value\", \"attribute\": [\"value\"]}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'{"attribute": "value", "attribute": ["value"]}'</code>
   *          </p>
   */
  ResourcePolicy: string | undefined;

  /**
   * <p>The revision ID that Amazon Comprehend assigned to the policy that you are updating. If
   *       you are creating a new policy that has no prior version, don't use this parameter. Amazon
   *       Comprehend creates the revision ID for you.</p>
   */
  PolicyRevisionId?: string;
}

export namespace PutResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyResponse {
  /**
   * <p>The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a
   *       new revision ID, and it deletes the prior version of the policy.</p>
   */
  PolicyRevisionId?: string;
}

export namespace PutResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface StartDocumentClassificationJobRequest {
  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classifier to use to process the
   *       job.</p>
   */
  DocumentClassifierArn: string | undefined;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your document classification job. For more information, see
   *         <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to be associated with the document classification job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartDocumentClassificationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDocumentClassificationJobRequest): any => ({
    ...obj,
  });
}

export interface StartDocumentClassificationJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. For details, use the  operation.</p>
   *             </li>
   *             <li>
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is
   *           processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartDocumentClassificationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDocumentClassificationJobResponse): any => ({
    ...obj,
  });
}

export interface StartDominantLanguageDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>An identifier for the job.</p>
   */
  JobName?: string;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your dominant language detection job. For more information,
   *       see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to be associated with the dominant language detection job. A tag is a key-value pair
   *       that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as
   *       the key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartDominantLanguageDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDominantLanguageDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartDominantLanguageDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique,
   *       fully qualified identifier for the job. It includes the AWS account, Region, and the job ID.
   *       The format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartDominantLanguageDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDominantLanguageDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartEntitiesDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used
   *       by the <code>StartEntitiesDetectionJob</code>. This ARN is optional and is only used for a
   *       custom entity recognition job.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language. You can
   *       specify any of the languages supported by Amazon Comprehend. If custom entities recognition is
   *       used, this parameter is ignored and the language used for training the model is used
   *       instead.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to be associated with the entities detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartEntitiesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartEntitiesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *             <li>
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is
   *           processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartEntitiesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartEventsDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the events detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The types of events to detect in the input documents.</p>
   */
  TargetEventTypes: string[] | undefined;

  /**
   * <p>Tags to be associated with the events detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartEventsDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEventsDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartEventsDetectionJobResponse {
  /**
   * <p>An unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the events detection job.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartEventsDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEventsDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartKeyPhrasesDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your key phrases detection job. For more information, see
   *         <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to be associated with the key phrases detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartKeyPhrasesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartKeyPhrasesDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartKeyPhrasesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the key phrase detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartKeyPhrasesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartKeyPhrasesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartPiiEntitiesDetectionJobRequest {
  /**
   * <p>The input properties for a PII entities detection job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Provides conﬁguration parameters for the output of PII entity detection jobs.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>Specifies whether the output provides the locations (offsets) of PII entities or a file in
   *       which PII entities are redacted.</p>
   */
  Mode: PiiEntitiesDetectionMode | string | undefined;

  /**
   * <p>Provides configuration parameters for PII entity redaction.</p>
   *          <p>This parameter is required if you set the <code>Mode</code> parameter to
   *         <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code>
   *       definition that includes the <code>PiiEntityTypes</code> parameter.</p>
   */
  RedactionConfig?: RedactionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags to be associated with the PII entities detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartPiiEntitiesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPiiEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartPiiEntitiesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartPiiEntitiesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPiiEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartSentimentDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to be associated with the sentiment detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartSentimentDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSentimentDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartSentimentDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartSentimentDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSentimentDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartTargetedSentimentDetectionJobRequest {
  /**
   * <p>The input properties for an inference job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">Role-based permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *           <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to be associated with the targeted sentiment detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartTargetedSentimentDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTargetedSentimentDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartTargetedSentimentDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartTargetedSentimentDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTargetedSentimentDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartTopicsDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. The output is a compressed archive with two
   *       files, <code>topic-terms.csv</code> that lists the terms associated with each topic, and
   *         <code>doc-topics.csv</code> that lists the documents associated with each topic</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role
   *       that grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The number of topics to detect.</p>
   */
  NumberOfTopics?: number;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to be associated with the topics detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

export namespace StartTopicsDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTopicsDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartTopicsDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the <code>DescribeTopicDetectionJob</code> operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the AWS account, Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job: </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the
   *             <code>DescribeTopicDetectionJob</code> operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

export namespace StartTopicsDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTopicsDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopDominantLanguageDetectionJobRequest {
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopDominantLanguageDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDominantLanguageDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopDominantLanguageDetectionJobResponse {
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopDominantLanguageDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopDominantLanguageDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDominantLanguageDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopEntitiesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopEntitiesDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopEntitiesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopEventsDetectionJobRequest {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopEventsDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEventsDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopEventsDetectionJobResponse {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the events detection job.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopEventsDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEventsDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopKeyPhrasesDetectionJobRequest {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopKeyPhrasesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopKeyPhrasesDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopKeyPhrasesDetectionJobResponse {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopKeyPhrasesDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopKeyPhrasesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopKeyPhrasesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopPiiEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopPiiEntitiesDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPiiEntitiesDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopPiiEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the PII entities detection job.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopPiiEntitiesDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPiiEntitiesDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopSentimentDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSentimentDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopSentimentDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopSentimentDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSentimentDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopTargetedSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopTargetedSentimentDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTargetedSentimentDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopTargetedSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *       <code>STOPPED</code> if the job was previously stopped with the
   *       <code>StopSentimentDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

export namespace StopTargetedSentimentDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTargetedSentimentDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopTrainingDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier currently being
   *       trained.</p>
   */
  DocumentClassifierArn: string | undefined;
}

export namespace StopTrainingDocumentClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTrainingDocumentClassifierRequest): any => ({
    ...obj,
  });
}

export interface StopTrainingDocumentClassifierResponse {}

export namespace StopTrainingDocumentClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTrainingDocumentClassifierResponse): any => ({
    ...obj,
  });
}

export interface StopTrainingEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer currently being
   *       trained.</p>
   */
  EntityRecognizerArn: string | undefined;
}

export namespace StopTrainingEntityRecognizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTrainingEntityRecognizerRequest): any => ({
    ...obj,
  });
}

export interface StopTrainingEntityRecognizerResponse {}

export namespace StopTrainingEntityRecognizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTrainingEntityRecognizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not
 *       supported. </p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want
   *       to associate the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags being associated with a specific Amazon Comprehend resource. There can be a maximum
   *       of 50 tags (both existing and pending) associated with a specific resource. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request contains more tag keys than can be associated with a resource (50 tag keys per
 *       resource).</p>
 */
export class TooManyTagKeysException extends __BaseException {
  readonly name: "TooManyTagKeysException" = "TooManyTagKeysException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagKeysException, __BaseException>) {
    super({
      name: "TooManyTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagKeysException.prototype);
    this.Message = opts.Message;
  }
}

export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you
   *       want to remove the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The initial part of a key-value pair that forms a tag being removed from a given resource.
   *       For example, a tag with "Sales" as the key might be added to a resource to indicate its use by
   *       the sales department. Keys must be unique and cannot be duplicated for a particular resource.
   *     </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being updated.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The ARN of the new model to use when updating an existing endpoint.</p>
   */
  DesiredModelArn?: string;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits?: number;

  /**
   * <p>Data access role ARN to use in case the new model is encrypted with a customer CMK.</p>
   */
  DesiredDataAccessRoleArn?: string;
}

export namespace UpdateEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointRequest): any => ({
    ...obj,
  });
}

export interface UpdateEndpointResponse {}

export namespace UpdateEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointResponse): any => ({
    ...obj,
  });
}
