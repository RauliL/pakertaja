// Type definitions for Pakertaja 1.3.0

type StringCallback = () => string;
type StringOrCallback = string | StringCallback;

type StyleValue = StringOrCallback | Record<string, StringOrCallback>;

type DataValue = number | string;
type DataValueCallback = () => DataValue;
type DataValueOrCallback = DataValue | DataValueCallback;
type DataValueMapping = Record<string, DataValueOrCallback>;
type DataValueMappingCallback = () => DataValueMapping;

type PakertajaAttributes = {
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

  [key: string]:
    | StringOrCallback
    | EventListener
    | null
    | undefined
    | StyleValue
    | DataValueMapping
    | DataValueMappingCallback;
};

type PakertajaArgument =
  | Element
  | string
  | PakertajaAttributes
  | null
  | undefined;

interface PakertajaStatic {
  (tagName: "html", ...args: PakertajaArgument[]): HTMLHtmlElement;
  (tagName: "head", ...args: PakertajaArgument[]): HTMLHeadElement;
  (tagName: "title", ...args: PakertajaArgument[]): HTMLTitleElement;
  (tagName: "base", ...args: PakertajaArgument[]): HTMLBaseElement;
  (tagName: "link", ...args: PakertajaArgument[]): HTMLLinkElement;
  (tagName: "meta", ...args: PakertajaArgument[]): HTMLMetaElement;
  (tagName: "style", ...args: PakertajaArgument[]): HTMLStyleElement;
  (tagName: "script", ...args: PakertajaArgument[]): HTMLScriptElement;
  (tagName: "body", ...args: PakertajaArgument[]): HTMLBodyElement;
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
  (tagName: "dialog", ...args: PakertajaArgument[]): HTMLDialogElement;
  (tagName: "blockquote", ...args: PakertajaArgument[]): HTMLQuoteElement;
  (tagName: "ol", ...args: PakertajaArgument[]): HTMLOListElement;
  (tagName: "ul", ...args: PakertajaArgument[]): HTMLUListElement;
  (tagName: "li", ...args: PakertajaArgument[]): HTMLLIElement;
  (tagName: "dl", ...args: PakertajaArgument[]): HTMLDListElement;
  (tagName: "a", ...args: PakertajaArgument[]): HTMLAnchorElement;
  (tagName: "q", ...args: PakertajaArgument[]): HTMLQuoteElement;
  (tagName: "time", ...args: PakertajaArgument[]): HTMLTimeElement;
  (tagName: "progress", ...args: PakertajaArgument[]): HTMLProgressElement;
  (tagName: "meter", ...args: PakertajaArgument[]): HTMLMeterElement;
  (tagName: "span", ...args: PakertajaArgument[]): HTMLSpanElement;
  (tagName: "ins", ...args: PakertajaArgument[]): HTMLModElement;
  (tagName: "del", ...args: PakertajaArgument[]): HTMLModElement;
  (tagName: "img", ...args: PakertajaArgument[]): HTMLImageElement;
  (tagName: "iframe", ...args: PakertajaArgument[]): HTMLIFrameElement;
  (tagName: "embed", ...args: PakertajaArgument[]): HTMLEmbedElement;
  (tagName: "object", ...args: PakertajaArgument[]): HTMLObjectElement;
  (tagName: "param", ...args: PakertajaArgument[]): HTMLParamElement;
  (tagName: "video", ...args: PakertajaArgument[]): HTMLVideoElement;
  (tagName: "audio", ...args: PakertajaArgument[]): HTMLAudioElement;
  (tagName: "source", ...args: PakertajaArgument[]): HTMLSourceElement;
  (tagName: "canvas", ...args: PakertajaArgument[]): HTMLCanvasElement;
  (tagName: "map", ...args: PakertajaArgument[]): HTMLMapElement;
  (tagName: "area", ...args: PakertajaArgument[]): HTMLAreaElement;
  (tagName: "table", ...args: PakertajaArgument[]): HTMLTableElement;
  (tagName: "caption", ...args: PakertajaArgument[]): HTMLTableCaptionElement;
  (tagName: "colgroup", ...args: PakertajaArgument[]): HTMLTableColElement;
  (tagName: "col", ...args: PakertajaArgument[]): HTMLTableColElement;
  (tagName: "tbody", ...args: PakertajaArgument[]): HTMLTableSectionElement;
  (tagName: "tfoot", ...args: PakertajaArgument[]): HTMLTableSectionElement;
  (tagName: "tr", ...args: PakertajaArgument[]): HTMLTableRowElement;
  (tagName: "td", ...args: PakertajaArgument[]): HTMLTableCellElement;
  (tagName: "th", ...args: PakertajaArgument[]): HTMLTableCellElement;
  (tagName: "form", ...args: PakertajaArgument[]): HTMLFormElement;
  (tagName: "fieldset", ...args: PakertajaArgument[]): HTMLFieldSetElement;
  (tagName: "label", ...args: PakertajaArgument[]): HTMLLabelElement;
  (tagName: "input", ...args: PakertajaArgument[]): HTMLInputElement;
  (tagName: "button", ...args: PakertajaArgument[]): HTMLButtonElement;
  (tagName: "select", ...args: PakertajaArgument[]): HTMLSelectElement;
  (tagName: "datalist", ...args: PakertajaArgument[]): HTMLDataListElement;
  (tagName: "optgroup", ...args: PakertajaArgument[]): HTMLOptGroupElement;
  (tagName: "option", ...args: PakertajaArgument[]): HTMLOptionElement;
  (tagName: "textarea", ...args: PakertajaArgument[]): HTMLTextAreaElement;
  (tagName: "output", ...args: PakertajaArgument[]): HTMLOutputElement;
  (tagName: "details", ...args: PakertajaArgument[]): HTMLDetailsElement;
  (tagName: "menu", ...args: PakertajaArgument[]): HTMLMenuElement;
  (tagName: "legend", ...args: PakertajaArgument[]): HTMLLegendElement;
  (tagName: "div", ...args: PakertajaArgument[]): HTMLDivElement;
  (tagName: "text", ...args: PakertajaArgument[]): Text;
  (tagName: string, ...args: PakertajaArgument[]): HTMLElement;

  escape: (input: string) => string;

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
  base: (...args: PakertajaArgument[]) => HTMLBaseElement;
  link: (...args: PakertajaArgument[]) => HTMLLinkElement;
  meta: (...args: PakertajaArgument[]) => HTMLMetaElement;
  style: (...args: PakertajaArgument[]) => HTMLStyleElement;

  // Scripting
  script: (...args: PakertajaArgument[]) => HTMLScriptElement;
  noscript: (...args: PakertajaArgument[]) => HTMLElement;

  // Sections
  body: (...args: PakertajaArgument[]) => HTMLBodyElement;
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
  dialog: (...args: PakertajaArgument[]) => HTMLDialogElement;
  blockquote: (...args: PakertajaArgument[]) => HTMLQuoteElement;
  ol: (...args: PakertajaArgument[]) => HTMLOListElement;
  ul: (...args: PakertajaArgument[]) => HTMLUListElement;
  li: (...args: PakertajaArgument[]) => HTMLLIElement;
  dl: (...args: PakertajaArgument[]) => HTMLDListElement;
  dt: (...args: PakertajaArgument[]) => HTMLElement;
  dd: (...args: PakertajaArgument[]) => HTMLElement;

  // Text level semantics
  a: (...args: PakertajaArgument[]) => HTMLAnchorElement;
  q: (...args: PakertajaArgument[]) => HTMLQuoteElement;
  cite: (...args: PakertajaArgument[]) => HTMLElement;
  em: (...args: PakertajaArgument[]) => HTMLElement;
  strong: (...args: PakertajaArgument[]) => HTMLElement;
  mark: (...args: PakertajaArgument[]) => HTMLElement;
  dfn: (...args: PakertajaArgument[]) => HTMLElement;
  abbr: (...args: PakertajaArgument[]) => HTMLElement;
  time: (...args: PakertajaArgument[]) => HTMLTimeElement;
  progress: (...args: PakertajaArgument[]) => HTMLProgressElement;
  meter: (...args: PakertajaArgument[]) => HTMLMeterElement;
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
  ins: (...args: PakertajaArgument[]) => HTMLModElement;
  del: (...args: PakertajaArgument[]) => HTMLModElement;

  // Embedded content
  figure: (...args: PakertajaArgument[]) => HTMLElement;
  img: (...args: PakertajaArgument[]) => HTMLImageElement;
  iframe: (...args: PakertajaArgument[]) => HTMLIFrameElement;
  embed: (...args: PakertajaArgument[]) => HTMLEmbedElement;
  object: (...args: PakertajaArgument[]) => HTMLObjectElement;
  param: (...args: PakertajaArgument[]) => HTMLParamElement;
  video: (...args: PakertajaArgument[]) => HTMLVideoElement;
  audio: (...args: PakertajaArgument[]) => HTMLAudioElement;
  source: (...args: PakertajaArgument[]) => HTMLSourceElement;
  canvas: (...args: PakertajaArgument[]) => HTMLCanvasElement;
  map: (...args: PakertajaArgument[]) => HTMLMapElement;
  area: (...args: PakertajaArgument[]) => HTMLAreaElement;

  // Tabular data
  table: (...args: PakertajaArgument[]) => HTMLTableElement;
  caption: (...args: PakertajaArgument[]) => HTMLTableCaptionElement;
  colgroup: (...args: PakertajaArgument[]) => HTMLTableColElement;
  col: (...args: PakertajaArgument[]) => HTMLTableColElement;
  tbody: (...args: PakertajaArgument[]) => HTMLTableSectionElement;
  tfoot: (...args: PakertajaArgument[]) => HTMLTableSectionElement;
  tr: (...args: PakertajaArgument[]) => HTMLTableRowElement;
  td: (...args: PakertajaArgument[]) => HTMLTableCellElement;
  th: (...args: PakertajaArgument[]) => HTMLTableCellElement;

  // Forms
  form: (...args: PakertajaArgument[]) => HTMLFormElement;
  fieldset: (...args: PakertajaArgument[]) => HTMLFieldSetElement;
  label: (...args: PakertajaArgument[]) => HTMLLabelElement;
  input: (...args: PakertajaArgument[]) => HTMLInputElement;
  button: (...args: PakertajaArgument[]) => HTMLButtonElement;
  select: (...args: PakertajaArgument[]) => HTMLSelectElement;
  datalist: (...args: PakertajaArgument[]) => HTMLDataListElement;
  optgroup: (...args: PakertajaArgument[]) => HTMLOptGroupElement;
  option: (...args: PakertajaArgument[]) => HTMLOptionElement;
  textarea: (...args: PakertajaArgument[]) => HTMLTextAreaElement;
  output: (...args: PakertajaArgument[]) => HTMLOutputElement;

  // Interactive elements
  details: (...args: PakertajaArgument[]) => HTMLDetailsElement;
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
