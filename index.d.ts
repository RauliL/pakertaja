// Type definitions for Pakertaja 1.3.0

type StringCallback = () => string;
type StringOrCallback = string | StringCallback;

type StyleValue = StringOrCallback | Record<string, StringOrCallback>;

type DataValue = number | string;
type DataValueCallback = () => DataValue;
type DataValueOrCallback = DataValue | DataValueCallback;
type DataValueMapping = Record<string, DataValueOrCallback>;
type DataValueMappingCallback = () => DataValueMapping;

type BooleanAttribute = boolean | StringOrCallback;
type NumberAttribute = number | StringOrCallback;

type ReferrerPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

type Attributes = {
  text?: StringOrCallback;
  html?: StringOrCallback;
  style?: StyleValue;
  data?: DataValueMapping | DataValueMappingCallback;

  // Global HTML attributes available to all elements.
  accesskey?: StringOrCallback;
  autocapitalize?:
    | StringCallback
    | "off"
    | "none"
    | "on"
    | "sentences"
    | "words"
    | "characters";
  class?: StringOrCallback;
  contenteditable?: StringOrCallback;
  contextmenu?: StringOrCallback;
  dir?: StringOrCallback | "ltr" | "rtl" | "auto";
  draggable?: StringOrCallback | "true" | "false";
  hidden?: StringOrCallback;
  id?: StringOrCallback;
  is?: StringOrCallback;
  lang?: StringOrCallback;
  tabindex?: StringOrCallback;
  title?: StringOrCallback;

  onabort?: EventListener;
  onautocomplete?: EventListener;
  onautocompleteerror?: EventListener;
  onblur?: EventListener;
  oncancel?: EventListener;
  oncanplay?: EventListener;
  oncanplaythrough?: EventListener;
  onchange?: EventListener;
  onclick?: EventListener;
  onclose?: EventListener;
  oncontextmenu?: EventListener;
  oncuechange?: EventListener;
  ondblclick?: EventListener;
  ondrag?: EventListener;
  ondragend?: EventListener;
  ondragenter?: EventListener;
  ondragleave?: EventListener;
  ondragover?: EventListener;
  ondragstart?: EventListener;
  ondrop?: EventListener;
  ondurationchange?: EventListener;
  onemptied?: EventListener;
  onended?: EventListener;
  onerror?: EventListener;
  onfocus?: EventListener;
  oninput?: EventListener;
  oninvalid?: EventListener;
  onkeydown?: EventListener;
  onkeypress?: EventListener;
  onkeyup?: EventListener;
  onload?: EventListener;
  onloadeddata?: EventListener;
  onloadedmetadata?: EventListener;
  onloadstart?: EventListener;
  onmousedown?: EventListener;
  onmouseenter?: EventListener;
  onmouseleave?: EventListener;
  onmousemove?: EventListener;
  onmouseout?: EventListener;
  onmouseover?: EventListener;
  onmouseup?: EventListener;
  onmousewheel?: EventListener;
  onpause?: EventListener;
  onplay?: EventListener;
  onplaying?: EventListener;
  onprogress?: EventListener;
  onratechange?: EventListener;
  onreset?: EventListener;
  onresize?: EventListener;
  onscroll?: EventListener;
  onseeked?: EventListener;
  onseeking?: EventListener;
  onselect?: EventListener;
  onshow?: EventListener;
  onsort?: EventListener;
  onstalled?: EventListener;
  onsubmit?: EventListener;
  onsuspend?: EventListener;
  ontimeupdate?: EventListener;
  ontoggle?: EventListener;
  onvolumechange?: EventListener;
  onwaiting?: EventListener;

  [key: string]:
    | StringOrCallback
    | number
    | boolean
    | EventListener
    | null
    | undefined
    | StyleValue
    | DataValueMapping
    | DataValueMappingCallback;
};

type BaseAttributes = Attributes & {
  href?: StringOrCallback;
  target?: StringOrCallback;
};

type LinkAttributes = Attributes & {
  as?:
    | "audio"
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "script"
    | "style"
    | "track"
    | "video"
    | "worker"
    | StringCallback;
  blocking?: BooleanAttribute;
  crossorigin?: StringOrCallback;
  disabled?: BooleanAttribute;
  fetchpriority?: "high" | "low" | "auto" | StringCallback;
  href?: StringOrCallback;
  hreflang?: StringOrCallback;
  imagesizes?: StringOrCallback;
  imagesrcset?: StringOrCallback;
  integrity?: StringOrCallback;
  media?: StringOrCallback;
  referrerpolicy?: ReferrerPolicy | StringOrCallback;
  rel?: StringOrCallback;
  sizes?: StringOrCallback;
  type?: StringOrCallback;
};

type MetaAttributes = Attributes & {
  charset?: StringOrCallback;
  "http-equiv"?:
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "x-ua-compatible"
    | "refresh"
    | "media"
    | "name"
    | StringCallback;
  media?: StringOrCallback;
  name?: StringOrCallback;
};

type StyleAttributes = Attributes & {
  blocking?: BooleanAttribute;
  media?: StringOrCallback;
  nonce?: StringOrCallback;
};

type ScriptAttributes = Attributes & {
  async?: BooleanAttribute;
  blocking?: BooleanAttribute;
  crossorigin?: StringOrCallback;
  defer?: BooleanAttribute;
  fetchpriority?: "high" | "low" | "auto" | StringCallback;
  integrity?: StringOrCallback;
  nomodule?: BooleanAttribute;
  nonce?: StringOrCallback;
  referrerpolicy?: ReferrerPolicy | StringOrCallback;
  src?: StringOrCallback;
  type?: "importmap" | "module" | StringCallback;
};

type BodyAttributes = Attributes & {
  onafterprint?: EventListener;
  onbeforeprint?: EventListener;
  onbeforeunload?: EventListener;
  onblur?: EventListener;
  onerror?: EventListener;
  onfocus?: EventListener;
  onhashchange?: EventListener;
  onlanguagechange?: EventListener;
  onload?: EventListener;
  onmessage?: EventListener;
  onmessageerror?: EventListener;
  onoffline?: EventListener;
  ononline?: EventListener;
  onpageswap?: EventListener;
  onpagehide?: EventListener;
  onpagereveal?: EventListener;
  onpageshow?: EventListener;
  onpopstate?: EventListener;
  onresize?: EventListener;
  onrejectionhandled?: EventListener;
  onstorage?: EventListener;
  onunhandledrejection?: EventListener;
  onunload?: EventListener;
};

type DialogAttributes = Attributes & {
  open?: BooleanAttribute;
};

type BlockquoteAttributes = Attributes & {
  cite?: StringOrCallback;
};

type OlAttributes = Attributes & {
  reversed?: BooleanAttribute;
  start?: NumberAttribute;
  type?: "a" | "A" | "i" | "I" | "1" | StringOrCallback;
};

type LiAttributes = Attributes & {
  value?: NumberAttribute;
};

type AnchorAttributes = Attributes & {
  download?: BooleanAttribute;
  href?: StringOrCallback;
  hreflang?: StringOrCallback;
  ping?: StringOrCallback;
  referrerpolicy?: ReferrerPolicy | StringCallback;
  rel?: StringOrCallback;
  target?:
    | "_self"
    | "_blank"
    | "_parent"
    | "_top"
    | "_unfencedTop"
    | StringCallback;
  type?: StringOrCallback;
};

type TimeAttributes = Attributes & {
  datetime?: StringOrCallback;
};

type ProgressAttributes = Attributes & {
  max?: NumberAttribute;
  value?: NumberAttribute;
};

type MeterAttributes = Attributes & {
  value?: NumberAttribute;
  min?: NumberAttribute;
  max?: NumberAttribute;
  low?: NumberAttribute;
  high?: NumberAttribute;
  optimum?: NumberAttribute;
  form?: StringOrCallback;
};

type InsAttributes = Attributes & {
  cite?: StringOrCallback;
  datetime?: StringOrCallback;
};

type ImgAttributes = Attributes & {
  alt?: StringOrCallback;
  crossorigin?: StringOrCallback;
  decoding?: "sync" | "async" | "auto" | StringCallback;
  elementtiming?: StringOrCallback;
  fetchpriority?: "high" | "low" | "auto" | StringCallback;
  height?: NumberAttribute;
  ismap?: BooleanAttribute;
  loading?: "eager" | "lazy" | StringCallback;
  referrerpolicy?: ReferrerPolicy | StringCallback;
  sizes?: StringOrCallback;
  src?: StringOrCallback;
  srcset?: StringOrCallback;
  width?: NumberAttribute;
  usemap?: StringOrCallback;
};

export type IFrameAttributes = Attributes & {
  allow?: StringOrCallback;
  allowfullscreen?: BooleanAttribute;
  height?: NumberAttribute;
  loading?: "easger" | "lazy" | StringCallback;
  name?: StringOrCallback;
  referrerpolicy?: ReferrerPolicy | StringCallback;
  sandbox?:
    | "allow-downloads"
    | "allow-forms"
    | "allow-modals"
    | "allow-oriental-lock"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-presentation"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-top-navigation"
    | "allow-top-navigation-by-user-activation"
    | "allow-top-navigation-to-custom-protocols"
    | StringCallback;
};

type EmbedAttributes = Attributes & {
  height?: NumberAttribute;
  src?: StringOrCallback;
  type?: StringOrCallback;
  width?: NumberAttribute;
};

type ObjectAttributes = Attributes & {
  data?: StringOrCallback;
  form?: StringOrCallback;
  height?: NumberAttribute;
  name?: StringOrCallback;
  type?: StringOrCallback;
  width?: NumberAttribute;
};

type VideoAttributes = Attributes & {
  autoplay?: BooleanAttribute;
  controls?: StringOrCallback;
  controlslist?: StringOrCallback;
  crossorigin?: "anonymous" | "use-credentials" | StringCallback;
  disablepictureinpicture?: BooleanAttribute;
  disableremoteplayback?: BooleanAttribute;
  height?: NumberAttribute;
  loop?: BooleanAttribute;
  muted?: BooleanAttribute;
  playsinline?: BooleanAttribute;
  poster?: StringOrCallback;
  preload?: "none" | "metadata" | "auto" | StringCallback;
  src?: StringOrCallback;
  width?: NumberAttribute;
};

type AudioAttributes = Omit<VideoAttributes, "height" | "width">;

type SourceAttributes = Attributes & {
  type?: StringOrCallback;
  src?: StringOrCallback;
  srcset?: StringOrCallback;
  sizes?: StringOrCallback;
  media?: StringOrCallback;
  height?: NumberAttribute;
  width?: NumberAttribute;
};

type CanvasAttributes = Attributes & {
  height?: NumberAttribute;
  width?: NumberAttribute;
};

type MapAttributes = Attributes & {
  name?: StringOrCallback;
};

type AreaAttributes = Attributes & {
  alt?: StringOrCallback;
  coords?: "rect" | "circle" | "poly" | StringCallback;
  download?: BooleanAttribute;
  href?: StringOrCallback;
  ping?: StringOrCallback;
  referrerpolicy: ReferrerPolicy | StringCallback;
  rel?: StringOrCallback;
  shape?: StringOrCallback;
  target?: "_self" | "_blank" | "_parent" | "_top" | StringCallback;
};

type ColgroupAttributes = Attributes & {
  span?: NumberAttribute;
};

type TDAttributes = Attributes & {
  colspan?: NumberAttribute;
  headers?: StringOrCallback;
  rowspan?: NumberAttribute;
};

type THAttributes = Attributes & {
  abbr?: StringOrCallback;
  colspan?: NumberAttribute;
  headers?: StringOrCallback;
  rowspan?: NumberAttribute;
  scope?: "row" | "col" | "rowgroup" | "colgroup" | StringCallback;
};

type FormAttributes = Attributes & {
  "accept-charset"?: StringOrCallback;
  autocomplete?: BooleanAttribute;
  name?: StringOrCallback;
  rel?: StringOrCallback;
};

type FieldsetAttributes = Attributes & {
  disabled?: BooleanAttribute;
  form?: StringOrCallback;
  name?: StringOrCallback;
};

type LabelAttributes = Attributes & {
  for?: StringOrCallback;
};

type InputAttributes = Attributes & {
  accept?: StringOrCallback;
  alt?: StringOrCallback;
  autocapitalize?: BooleanAttribute;
  autocomplete?: BooleanAttribute;
  capture?: StringOrCallback;
  checked?: BooleanAttribute;
  dirname?: StringOrCallback;
  disabled?: BooleanAttribute;
  form?: StringOrCallback;
  formaction?: StringOrCallback;
  formenctype?: StringOrCallback;
  formmethod?: StringOrCallback;
  formonvalidate?: StringOrCallback;
  formtarget?: StringOrCallback;
  height?: NumberAttribute;
  list?: StringOrCallback;
  max?: NumberAttribute;
  maxlength?: NumberAttribute;
  min?: NumberAttribute;
  minlength?: NumberAttribute;
  multiple?: BooleanAttribute;
  name?: StringOrCallback;
  pattern?: StringOrCallback;
  placeholder?: StringOrCallback;
  popovertarget?: StringOrCallback;
  popovertargetaction?: StringOrCallback;
  readonly?: BooleanAttribute;
  required?: BooleanAttribute;
  size?: NumberAttribute;
  src?: StringOrCallback;
  step?: NumberAttribute;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | StringCallback;
  value?: StringOrCallback;
  width?: NumberAttribute;
};

type ButtonAttributes = Attributes & {
  autofocus?: BooleanAttribute;
  disabled?: BooleanAttribute;
  form?: StringOrCallback;
  formaction?: StringOrCallback;
  formenctype?: StringOrCallback;
  formmethod?: StringOrCallback;
  formonvalidate?: BooleanAttribute;
  formtarget?: "_self" | "_blank" | "_parent" | "_top" | StringCallback;
  name?: StringOrCallback;
  popovertarget?: StringOrCallback;
  popovertargetaction?: StringOrCallback;
  type?: "submit" | "reset" | "button" | StringCallback;
  value?: StringOrCallback;
};

type SelectAttributes = Attributes & {
  autocomplete?: BooleanAttribute;
  autofocus?: BooleanAttribute;
  disabled?: BooleanAttribute;
  form?: StringOrCallback;
  multiple?: BooleanAttribute;
  name?: StringOrCallback;
  required?: BooleanAttribute;
  size?: NumberAttribute;
};

type OptGroupAttributes = Attributes & {
  disabled?: BooleanAttribute;
  label?: StringOrCallback;
};

type OptionAttributes = OptGroupAttributes & {
  selected?: BooleanAttribute;
  value?: StringOrCallback;
};

type TextAreaAttributes = Attributes & {
  autocapitalize?: BooleanAttribute;
  autocomplete?: BooleanAttribute;
  autocorrect?: "on" | "off" | StringCallback;
  autofocus?: BooleanAttribute;
  cols?: NumberAttribute;
  dirname?: StringOrCallback;
  disabled?: BooleanAttribute;
  form?: StringOrCallback;
  maxlength?: NumberAttribute;
  minlength?: NumberAttribute;
  name?: StringOrCallback;
  placeholder?: StringOrCallback;
  readonly?: BooleanAttribute;
  required?: BooleanAttribute;
  rows?: NumberAttribute;
  spellcheck?: "true" | "default" | "false" | StringCallback;
  wrap?: "hard" | "soft" | StringCallback;
};

type OutputAttributes = Attributes & {
  for?: StringOrCallback;
  form?: StringOrCallback;
  name?: StringOrCallback;
};

type DetailsAttributes = Attributes & {
  open?: BooleanAttribute;
  name?: StringOrCallback;
};

type PakertajaArgument<A extends Attributes = Attributes> =
  | Node
  | string
  | A
  | null
  | undefined
  | Array<Node | boolean | null | undefined>;

interface PakertajaStatic {
  (tagName: "html", ...args: PakertajaArgument[]): HTMLHtmlElement;
  (tagName: "head", ...args: PakertajaArgument[]): HTMLHeadElement;
  (tagName: "title", ...args: PakertajaArgument[]): HTMLTitleElement;
  (
    tagName: "base",
    ...args: PakertajaArgument<BaseAttributes>[]
  ): HTMLBaseElement;
  (
    tagName: "link",
    ...args: PakertajaArgument<LinkAttributes>[]
  ): HTMLLinkElement;
  (
    tagName: "meta",
    ...args: PakertajaArgument<MetaAttributes>[]
  ): HTMLMetaElement;
  (
    tagName: "style",
    ...args: PakertajaArgument<StyleAttributes>[]
  ): HTMLStyleElement;
  (
    tagName: "script",
    ...args: PakertajaArgument<ScriptAttributes>[]
  ): HTMLScriptElement;
  (
    tagName: "body",
    ...args: PakertajaArgument<BodyAttributes>[]
  ): HTMLBodyElement;
  (tagName: "h1", ...args: PakertajaArgument[]): HTMLHeadingElement;
  (tagName: "h2", ...args: PakertajaArgument[]): HTMLHeadingElement;
  (tagName: "h3", ...args: PakertajaArgument[]): HTMLHeadingElement;
  (tagName: "h4", ...args: PakertajaArgument[]): HTMLHeadingElement;
  (tagName: "h5", ...args: PakertajaArgument[]): HTMLHeadingElement;
  (tagName: "h6", ...args: PakertajaArgument[]): HTMLHeadingElement;
  (tagName: "p", ...args: PakertajaArgument[]): HTMLParagraphElement;
  (tagName: "hr", ...args: PakertajaArgument[]): HTMLHRElement;
  (tagName: "br", ...args: PakertajaArgument[]): HTMLBRElement;
  (tagName: "pre", ...args: PakertajaArgument[]): HTMLPreElement;
  (
    tagName: "dialog",
    ...args: PakertajaArgument<DialogAttributes>[]
  ): HTMLDialogElement;
  (
    tagName: "blockquote",
    ...args: PakertajaArgument<BlockquoteAttributes>[]
  ): HTMLQuoteElement;
  (tagName: "ol", ...args: PakertajaArgument<OlAttributes>[]): HTMLOListElement;
  (tagName: "ul", ...args: PakertajaArgument[]): HTMLUListElement;
  (tagName: "li", ...args: PakertajaArgument<LiAttributes>[]): HTMLLIElement;
  (tagName: "dl", ...args: PakertajaArgument[]): HTMLDListElement;
  (
    tagName: "a",
    ...args: PakertajaArgument<AnchorAttributes>[]
  ): HTMLAnchorElement;
  (tagName: "q", ...args: PakertajaArgument[]): HTMLQuoteElement;
  (
    tagName: "time",
    ...args: PakertajaArgument<TimeAttributes>[]
  ): HTMLTimeElement;
  (
    tagName: "progress",
    ...args: PakertajaArgument<ProgressAttributes>[]
  ): HTMLProgressElement;
  (
    tagName: "meter",
    ...args: PakertajaArgument<MeterAttributes>[]
  ): HTMLMeterElement;
  (tagName: "span", ...args: PakertajaArgument[]): HTMLSpanElement;
  (tagName: "ins", ...args: PakertajaArgument<InsAttributes>[]): HTMLModElement;
  (tagName: "del", ...args: PakertajaArgument<InsAttributes>[]): HTMLModElement;
  (
    tagName: "img",
    ...args: PakertajaArgument<ImgAttributes>[]
  ): HTMLImageElement;
  (
    tagName: "iframe",
    ...args: PakertajaArgument<IFrameAttributes>[]
  ): HTMLIFrameElement;
  (
    tagName: "embed",
    ...args: PakertajaArgument<EmbedAttributes>[]
  ): HTMLEmbedElement;
  (
    tagName: "object",
    ...args: PakertajaArgument<ObjectAttributes>[]
  ): HTMLObjectElement;
  (
    tagName: "video",
    ...args: PakertajaArgument<VideoAttributes>[]
  ): HTMLVideoElement;
  (
    tagName: "audio",
    ...args: PakertajaArgument<AudioAttributes>[]
  ): HTMLAudioElement;
  (
    tagName: "source",
    ...args: PakertajaArgument<SourceAttributes>[]
  ): HTMLSourceElement;
  (
    tagName: "canvas",
    ...args: PakertajaArgument<CanvasAttributes>[]
  ): HTMLCanvasElement;
  (tagName: "map", ...args: PakertajaArgument<MapAttributes>[]): HTMLMapElement;
  (
    tagName: "area",
    ...args: PakertajaArgument<AreaAttributes>[]
  ): HTMLAreaElement;
  (tagName: "table", ...args: PakertajaArgument[]): HTMLTableElement;
  (tagName: "caption", ...args: PakertajaArgument[]): HTMLTableCaptionElement;
  (
    tagName: "colgroup",
    ...args: PakertajaArgument<ColgroupAttributes>[]
  ): HTMLTableColElement;
  (
    tagName: "col",
    ...args: PakertajaArgument<ColgroupAttributes>[]
  ): HTMLTableColElement;
  (tagName: "tbody", ...args: PakertajaArgument[]): HTMLTableSectionElement;
  (tagName: "tfoot", ...args: PakertajaArgument[]): HTMLTableSectionElement;
  (tagName: "tr", ...args: PakertajaArgument[]): HTMLTableRowElement;
  (
    tagName: "td",
    ...args: PakertajaArgument<TDAttributes>[]
  ): HTMLTableCellElement;
  (
    tagName: "th",
    ...args: PakertajaArgument<THAttributes>[]
  ): HTMLTableCellElement;
  (
    tagName: "form",
    ...args: PakertajaArgument<FormAttributes>[]
  ): HTMLFormElement;
  (
    tagName: "fieldset",
    ...args: PakertajaArgument<FieldsetAttributes>[]
  ): HTMLFieldSetElement;
  (
    tagName: "label",
    ...args: PakertajaArgument<LabelAttributes>[]
  ): HTMLLabelElement;
  (
    tagName: "input",
    ...args: PakertajaArgument<InputAttributes>[]
  ): HTMLInputElement;
  (
    tagName: "button",
    ...args: PakertajaArgument<ButtonAttributes>[]
  ): HTMLButtonElement;
  (
    tagName: "select",
    ...args: PakertajaArgument<SelectAttributes>[]
  ): HTMLSelectElement;
  (tagName: "datalist", ...args: PakertajaArgument[]): HTMLDataListElement;
  (
    tagName: "optgroup",
    ...args: PakertajaArgument<OptGroupAttributes>[]
  ): HTMLOptGroupElement;
  (
    tagName: "option",
    ...args: PakertajaArgument<OptionAttributes>[]
  ): HTMLOptionElement;
  (
    tagName: "textarea",
    ...args: PakertajaArgument<TextAreaAttributes>[]
  ): HTMLTextAreaElement;
  (
    tagName: "output",
    ...args: PakertajaArgument<OutputAttributes>[]
  ): HTMLOutputElement;
  (
    tagName: "details",
    ...args: PakertajaArgument<DetailsAttributes>[]
  ): HTMLDetailsElement;
  (tagName: "menu", ...args: PakertajaArgument[]): HTMLMenuElement;
  (tagName: "legend", ...args: PakertajaArgument[]): HTMLLegendElement;
  (tagName: "div", ...args: PakertajaArgument[]): HTMLDivElement;
  (tagName: "text", ...args: PakertajaArgument[]): Text;
  (tagName: string, ...args: PakertajaArgument[]): HTMLElement;

  /**
   * Escapes HTML entities from given string and returns result.
   */
  escape: (input: string) => string;

  fragment: (...args: Array<Element | StringOrCallback>) => DocumentFragment;

  append: (
    root: Element,
    ...args: Array<Element | StringOrCallback>
  ) => HTMLElement;
  prepend: (
    root: Element,
    ...args: Array<Element | StringOrCallback>
  ) => HTMLElement;

  // The root element
  html: (...args: PakertajaArgument[]) => HTMLHtmlElement;

  // Document metadata
  head: (...args: PakertajaArgument[]) => HTMLHeadElement;
  title: (...args: PakertajaArgument[]) => HTMLTitleElement;
  base: (...args: PakertajaArgument<BaseAttributes>[]) => HTMLBaseElement;
  link: (...args: PakertajaArgument<LinkAttributes>[]) => HTMLLinkElement;
  meta: (...args: PakertajaArgument<MetaAttributes>[]) => HTMLMetaElement;
  style: (...args: PakertajaArgument<StyleAttributes>[]) => HTMLStyleElement;

  // Scripting
  script: (...args: PakertajaArgument<ScriptAttributes>[]) => HTMLScriptElement;
  noscript: (...args: PakertajaArgument[]) => HTMLElement;

  // Sections
  body: (...args: PakertajaArgument<BodyAttributes>[]) => HTMLBodyElement;
  section: (...args: PakertajaArgument[]) => HTMLElement;
  nav: (...args: PakertajaArgument[]) => HTMLElement;
  article: (...args: PakertajaArgument[]) => HTMLElement;
  aside: (...args: PakertajaArgument[]) => HTMLElement;
  h1: (...args: PakertajaArgument[]) => HTMLHeadingElement;
  h2: (...args: PakertajaArgument[]) => HTMLHeadingElement;
  h3: (...args: PakertajaArgument[]) => HTMLHeadingElement;
  h4: (...args: PakertajaArgument[]) => HTMLHeadingElement;
  h5: (...args: PakertajaArgument[]) => HTMLHeadingElement;
  h6: (...args: PakertajaArgument[]) => HTMLHeadingElement;
  header: (...args: PakertajaArgument[]) => HTMLElement;
  footer: (...args: PakertajaArgument[]) => HTMLElement;
  address: (...args: PakertajaArgument[]) => HTMLElement;

  // Grouping content
  p: (...args: PakertajaArgument[]) => HTMLParagraphElement;
  hr: (...args: PakertajaArgument[]) => HTMLHRElement;
  br: (...args: PakertajaArgument[]) => HTMLBRElement;
  pre: (...args: PakertajaArgument[]) => HTMLPreElement;
  dialog: (...args: PakertajaArgument<DialogAttributes>[]) => HTMLDialogElement;
  blockquote: (
    ...args: PakertajaArgument<BlockquoteAttributes>[]
  ) => HTMLQuoteElement;
  ol: (...args: PakertajaArgument<OlAttributes>[]) => HTMLOListElement;
  ul: (...args: PakertajaArgument[]) => HTMLUListElement;
  li: (...args: PakertajaArgument<LiAttributes>[]) => HTMLLIElement;
  dl: (...args: PakertajaArgument[]) => HTMLDListElement;
  dt: (...args: PakertajaArgument[]) => HTMLElement;
  dd: (...args: PakertajaArgument[]) => HTMLElement;

  // Text level semantics
  a: (...args: PakertajaArgument<AnchorAttributes>[]) => HTMLAnchorElement;
  q: (...args: PakertajaArgument[]) => HTMLQuoteElement;
  cite: (...args: PakertajaArgument[]) => HTMLElement;
  em: (...args: PakertajaArgument[]) => HTMLElement;
  strong: (...args: PakertajaArgument[]) => HTMLElement;
  mark: (...args: PakertajaArgument[]) => HTMLElement;
  dfn: (...args: PakertajaArgument[]) => HTMLElement;
  abbr: (...args: PakertajaArgument[]) => HTMLElement;
  time: (...args: PakertajaArgument<TimeAttributes>[]) => HTMLTimeElement;
  progress: (
    ...args: PakertajaArgument<ProgressAttributes>[]
  ) => HTMLProgressElement;
  meter: (...args: PakertajaArgument<MeterAttributes>[]) => HTMLMeterElement;
  code: (...args: PakertajaArgument[]) => HTMLElement;
  var: (...args: PakertajaArgument[]) => HTMLElement;
  samp: (...args: PakertajaArgument[]) => HTMLElement;
  kbd: (...args: PakertajaArgument[]) => HTMLElement;
  sub: (...args: PakertajaArgument[]) => HTMLElement;
  sup: (...args: PakertajaArgument[]) => HTMLElement;
  span: (...args: PakertajaArgument[]) => HTMLSpanElement;
  i: (...args: PakertajaArgument[]) => HTMLElement;
  b: (...args: PakertajaArgument[]) => HTMLElement;
  bdo: (...args: PakertajaArgument[]) => HTMLElement;
  ruby: (...args: PakertajaArgument[]) => HTMLElement;
  rt: (...args: PakertajaArgument[]) => HTMLElement;
  rp: (...args: PakertajaArgument[]) => HTMLElement;

  // Edits
  ins: (...args: PakertajaArgument<InsAttributes>[]) => HTMLModElement;
  del: (...args: PakertajaArgument<InsAttributes>[]) => HTMLModElement;

  // Embedded content
  figure: (...args: PakertajaArgument[]) => HTMLElement;
  img: (...args: PakertajaArgument<ImgAttributes>[]) => HTMLImageElement;
  iframe: (...args: PakertajaArgument<IFrameAttributes>[]) => HTMLIFrameElement;
  embed: (...args: PakertajaArgument<EmbedAttributes>[]) => HTMLEmbedElement;
  object: (...args: PakertajaArgument<ObjectAttributes>[]) => HTMLObjectElement;
  video: (...args: PakertajaArgument<VideoAttributes>[]) => HTMLVideoElement;
  audio: (...args: PakertajaArgument<AudioAttributes>[]) => HTMLAudioElement;
  source: (...args: PakertajaArgument<SourceAttributes>[]) => HTMLSourceElement;
  canvas: (...args: PakertajaArgument<CanvasAttributes>[]) => HTMLCanvasElement;
  map: (...args: PakertajaArgument<MapAttributes>[]) => HTMLMapElement;
  area: (...args: PakertajaArgument<AreaAttributes>[]) => HTMLAreaElement;

  // Tabular data
  table: (...args: PakertajaArgument[]) => HTMLTableElement;
  caption: (...args: PakertajaArgument[]) => HTMLTableCaptionElement;
  colgroup: (
    ...args: PakertajaArgument<ColgroupAttributes>[]
  ) => HTMLTableColElement;
  col: (
    ...args: PakertajaArgument<ColgroupAttributes>[]
  ) => HTMLTableColElement;
  tbody: (...args: PakertajaArgument[]) => HTMLTableSectionElement;
  tfoot: (...args: PakertajaArgument[]) => HTMLTableSectionElement;
  tr: (...args: PakertajaArgument[]) => HTMLTableRowElement;
  td: (...args: PakertajaArgument<TDAttributes>[]) => HTMLTableCellElement;
  th: (...args: PakertajaArgument<THAttributes>[]) => HTMLTableCellElement;

  // Forms
  form: (...args: PakertajaArgument<FormAttributes>[]) => HTMLFormElement;
  fieldset: (
    ...args: PakertajaArgument<FieldsetAttributes>[]
  ) => HTMLFieldSetElement;
  label: (...args: PakertajaArgument<LabelAttributes>[]) => HTMLLabelElement;
  input: (...args: PakertajaArgument<InputAttributes>[]) => HTMLInputElement;
  button: (...args: PakertajaArgument<ButtonAttributes>[]) => HTMLButtonElement;
  select: (...args: PakertajaArgument<SelectAttributes>[]) => HTMLSelectElement;
  datalist: (...args: PakertajaArgument[]) => HTMLDataListElement;
  optgroup: (
    ...args: PakertajaArgument<OptGroupAttributes>[]
  ) => HTMLOptGroupElement;
  option: (...args: PakertajaArgument<OptionAttributes>[]) => HTMLOptionElement;
  textarea: (
    ...args: PakertajaArgument<TextAreaAttributes>[]
  ) => HTMLTextAreaElement;
  output: (...args: PakertajaArgument<OutputAttributes>[]) => HTMLOutputElement;

  // Interactive elements
  details: (
    ...args: PakertajaArgument<DetailsAttributes>[]
  ) => HTMLDetailsElement;
  command: (...args: PakertajaArgument[]) => HTMLElement;
  bb: (...args: PakertajaArgument[]) => HTMLElement;
  menu: (...args: PakertajaArgument[]) => HTMLMenuElement;

  // Miscanellaous elements
  legend: (...args: PakertajaArgument[]) => HTMLLegendElement;
  div: (...args: PakertajaArgument[]) => HTMLDivElement;
  text: (...args: PakertajaArgument[]) => Text;
}

declare module "pakertaja" {
  const p: PakertajaStatic;

  export = p;
}

declare namespace JSX {
  type IntrinsicElements = Record<string, any>;
}
