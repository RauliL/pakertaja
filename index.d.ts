// Type definitions for Pakertaja 1.1.0

type StringCallback = () => string;
type StringWithCallback = StringCallback | string;

type PakertajaStyleProperty = StringWithCallback | { [key: string]: StringWithCallback };

interface PakertajaAttrs {
  text?: StringWithCallback;
  html?: StringWithCallback;
  style?: PakertajaStyleProperty;

  // Global HTML attributes available to all elements.
  accesskey?: StringWithCallback;
  autocapitalize?: StringCallback | 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  class?: StringWithCallback;
  contenteditable?: StringWithCallback;
  contextmenu?: StringWithCallback;
  dir?: StringCallback | 'ltr' | 'rtl' | 'auto';
  draggable?: StringCallback | 'true' | 'false';
  hidden?: StringWithCallback;
  id?: StringWithCallback;
  is?: StringWithCallback;
  lang?: StringWithCallback;
  tabindex?: StringWithCallback;
  title?: StringWithCallback;

  [key: string]: StringWithCallback | number | boolean | EventListener | PakertajaStyleProperty;
}

type PakertajaArg = string | HTMLElement | PakertajaAttrs;

interface PakertajaStatic {
  (tagName: 'html', ...args: PakertajaArg[]): HTMLHtmlElement;
  (tagName: 'head', ...args: PakertajaArg[]): HTMLHeadElement;
  (tagName: 'title', ...args: PakertajaArg[]): HTMLTitleElement;
  (tagName: 'base', ...args: PakertajaArg[]): HTMLBaseElement;
  (tagName: 'link', ...args: PakertajaArg[]): HTMLLinkElement;
  (tagName: 'meta', ...args: PakertajaArg[]): HTMLMetaElement;
  (tagName: 'style', ...args: PakertajaArg[]): HTMLStyleElement;
  (tagName: 'script', ...args: PakertajaArg[]): HTMLScriptElement;
  (tagName: 'body', ...args: PakertajaArg[]): HTMLBodyElement;
  (tagName: 'h1', ...args: PakertajaArg[]): HTMLHeadingElement;
  (tagName: 'h2', ...args: PakertajaArg[]): HTMLHeadingElement;
  (tagName: 'h3', ...args: PakertajaArg[]): HTMLHeadingElement;
  (tagName: 'h4', ...args: PakertajaArg[]): HTMLHeadingElement;
  (tagName: 'h5', ...args: PakertajaArg[]): HTMLHeadingElement;
  (tagName: 'h6', ...args: PakertajaArg[]): HTMLHeadingElement;
  (tagName: 'p', ...args: PakertajaArg[]): HTMLParagraphElement;
  (tagName: 'hr', ...args: PakertajaArg[]): HTMLHRElement;
  (tagName: 'br', ...args: PakertajaArg[]): HTMLBRElement;
  (tagName: 'pre', ...args: PakertajaArg[]): HTMLPreElement;
  (tagName: 'dialog', ...args: PakertajaArg[]): HTMLDialogElement;
  (tagName: 'blockquote', ...args: PakertajaArg[]): HTMLQuoteElement;
  (tagName: 'ol', ...args: PakertajaArg[]): HTMLOListElement;
  (tagName: 'ul', ...args: PakertajaArg[]): HTMLUListElement;
  (tagName: 'li', ...args: PakertajaArg[]): HTMLLIElement;
  (tagName: 'dl', ...args: PakertajaArg[]): HTMLDListElement;
  (tagName: 'a', ...args: PakertajaArg[]): HTMLAnchorElement;
  (tagName: 'q', ...args: PakertajaArg[]): HTMLQuoteElement;
  (tagName: 'time', ...args: PakertajaArg[]): HTMLTimeElement;
  (tagName: 'progress', ...args: PakertajaArg[]): HTMLProgressElement;
  (tagName: 'meter', ...args: PakertajaArg[]): HTMLMeterElement;
  (tagName: 'span', ...args: PakertajaArg[]): HTMLSpanElement;
  (tagName: 'ins', ...args: PakertajaArg[]): HTMLModElement;
  (tagName: 'del', ...args: PakertajaArg[]): HTMLModElement;
  (tagName: 'img', ...args: PakertajaArg[]): HTMLImageElement;
  (tagName: 'iframe', ...args: PakertajaArg[]): HTMLIFrameElement;
  (tagName: 'embed', ...args: PakertajaArg[]): HTMLEmbedElement;
  (tagName: 'object', ...args: PakertajaArg[]): HTMLObjectElement;
  (tagName: 'param', ...args: PakertajaArg[]): HTMLParamElement;
  (tagName: 'video', ...args: PakertajaArg[]): HTMLVideoElement;
  (tagName: 'audio', ...args: PakertajaArg[]): HTMLAudioElement;
  (tagName: 'source', ...args: PakertajaArg[]): HTMLSourceElement;
  (tagName: 'canvas', ...args: PakertajaArg[]): HTMLCanvasElement;
  (tagName: 'map', ...args: PakertajaArg[]): HTMLMapElement;
  (tagName: 'area', ...args: PakertajaArg[]): HTMLAreaElement;
  (tagName: 'table', ...args: PakertajaArg[]): HTMLTableElement;
  (tagName: 'caption', ...args: PakertajaArg[]): HTMLTableCaptionElement;
  (tagName: 'colgroup', ...args: PakertajaArg[]): HTMLTableColElement;
  (tagName: 'col', ...args: PakertajaArg[]): HTMLTableColElement;
  (tagName: 'tbody', ...args: PakertajaArg[]): HTMLTableSectionElement;
  (tagName: 'tfoot', ...args: PakertajaArg[]): HTMLTableSectionElement;
  (tagName: 'tr', ...args: PakertajaArg[]): HTMLTableRowElement;
  (tagName: 'td', ...args: PakertajaArg[]): HTMLTableCellElement;
  (tagName: 'th', ...args: PakertajaArg[]): HTMLTableCellElement;
  (tagName: 'form', ...args: PakertajaArg[]): HTMLFormElement;
  (tagName: 'fieldset', ...args: PakertajaArg[]): HTMLFieldSetElement;
  (tagName: 'label', ...args: PakertajaArg[]): HTMLLabelElement;
  (tagName: 'input', ...args: PakertajaArg[]): HTMLInputElement;
  (tagName: 'button', ...args: PakertajaArg[]): HTMLButtonElement;
  (tagName: 'select', ...args: PakertajaArg[]): HTMLSelectElement;
  (tagName: 'datalist', ...args: PakertajaArg[]): HTMLDataListElement;
  (tagName: 'optgroup', ...args: PakertajaArg[]): HTMLOptGroupElement;
  (tagName: 'option', ...args: PakertajaArg[]): HTMLOptionElement;
  (tagName: 'textarea', ...args: PakertajaArg[]): HTMLTextAreaElement;
  (tagName: 'output', ...args: PakertajaArg[]): HTMLOutputElement;
  (tagName: 'details', ...args: PakertajaArg[]): HTMLDetailsElement;
  (tagName: 'menu', ...args: PakertajaArg[]): HTMLMenuElement;
  (tagName: 'legend', ...args: PakertajaArg[]): HTMLLegendElement;
  (tagName: 'div', ...args: PakertajaArg[]): HTMLDivElement;
  (tagName: string, ...args: PakertajaArg[]): HTMLElement;

  escape: (input: string) => string;
  append: (root: HTMLElement, ...args: Array<HTMLElement | StringWithCallback>) => HTMLElement;
  prepend: (root: HTMLElement, ...args: Array<HTMLElement | StringWithCallback>) => HTMLElement;

  // The root element
  html: (...args: PakertajaArg[]) => HTMLHtmlElement;

  // Document metadata
  head: (...args: PakertajaArg[]) => HTMLHeadElement;
  title: (...args: PakertajaArg[]) => HTMLTitleElement;
  base: (...args: PakertajaArg[]) => HTMLBaseElement;
  link: (...args: PakertajaArg[]) => HTMLLinkElement;
  meta: (...args: PakertajaArg[]) => HTMLMetaElement;
  style: (...args: PakertajaArg[]) => HTMLStyleElement;

  // Scripting
  script: (...args: PakertajaArg[]) => HTMLScriptElement;
  noscript: (...args: PakertajaArg[]) => HTMLElement;

  // Sections
  body: (...args: PakertajaArg[]) => HTMLBodyElement;
  section: (...args: PakertajaArg[]) => HTMLElement;
  nav: (...args: PakertajaArg[]) => HTMLElement;
  article: (...args: PakertajaArg[]) => HTMLElement;
  aside: (...args: PakertajaArg[]) => HTMLElement;
  h1: (...args: PakertajaArg[]) => HTMLHeadingElement;
  h2: (...args: PakertajaArg[]) => HTMLHeadingElement;
  h3: (...args: PakertajaArg[]) => HTMLHeadingElement;
  h4: (...args: PakertajaArg[]) => HTMLHeadingElement;
  h5: (...args: PakertajaArg[]) => HTMLHeadingElement;
  h6: (...args: PakertajaArg[]) => HTMLHeadingElement;
  header: (...args: PakertajaArg[]) => HTMLElement;
  footer: (...args: PakertajaArg[]) => HTMLElement;
  address: (...args: PakertajaArg[]) => HTMLElement;

  // Grouping content
  p: (...args: PakertajaArg[]) => HTMLParagraphElement;
  hr: (...args: PakertajaArg[]) => HTMLHRElement;
  br: (...args: PakertajaArg[]) => HTMLBRElement;
  pre: (...args: PakertajaArg[]) => HTMLPreElement;
  dialog: (...args: PakertajaArg[]) => HTMLDialogElement;
  blockquote: (...args: PakertajaArg[]) => HTMLQuoteElement;
  ol: (...args: PakertajaArg[]) => HTMLOListElement;
  ul: (...args: PakertajaArg[]) => HTMLUListElement;
  li: (...args: PakertajaArg[]) => HTMLLIElement;
  dl: (...args: PakertajaArg[]) => HTMLDListElement;
  dt: (...args: PakertajaArg[]) => HTMLElement;
  dd: (...args: PakertajaArg[]) => HTMLElement;

  // Text level semantics
  a: (...args: PakertajaArg[]) => HTMLAnchorElement;
  q: (...args: PakertajaArg[]) => HTMLQuoteElement;
  cite: (...args: PakertajaArg[]) => HTMLElement;
  em: (...args: PakertajaArg[]) => HTMLElement;
  strong: (...args: PakertajaArg[]) => HTMLElement;
  mark: (...args: PakertajaArg[]) => HTMLElement;
  dfn: (...args: PakertajaArg[]) => HTMLElement;
  abbr: (...args: PakertajaArg[]) => HTMLElement;
  time: (...args: PakertajaArg[]) => HTMLTimeElement;
  progress: (...args: PakertajaArg[]) => HTMLProgressElement;
  meter: (...args: PakertajaArg[]) => HTMLMeterElement;
  code: (...args: PakertajaArg[]) => HTMLElement;
  var: (...args: PakertajaArg[]) => HTMLElement;
  samp: (...args: PakertajaArg[]) => HTMLElement;
  kbd: (...args: PakertajaArg[]) => HTMLElement;
  sub: (...args: PakertajaArg[]) => HTMLElement;
  sup: (...args: PakertajaArg[]) => HTMLElement;
  span: (...args: PakertajaArg[]) => HTMLSpanElement;
  i: (...args: PakertajaArg[]) => HTMLElement;
  b: (...args: PakertajaArg[]) => HTMLElement;
  bdo: (...args: PakertajaArg[]) => HTMLElement;
  ruby: (...args: PakertajaArg[]) => HTMLElement;
  rt: (...args: PakertajaArg[]) => HTMLElement;
  rp: (...args: PakertajaArg[]) => HTMLElement;

  // Edits
  ins: (...args: PakertajaArg[]) => HTMLModElement;
  del: (...args: PakertajaArg[]) => HTMLModElement;

  // Embedded content
  figure: (...args: PakertajaArg[]) => HTMLElement;
  img: (...args: PakertajaArg[]) => HTMLImageElement;
  iframe: (...args: PakertajaArg[]) => HTMLIFrameElement;
  embed: (...args: PakertajaArg[]) => HTMLEmbedElement;
  object: (...args: PakertajaArg[]) => HTMLObjectElement;
  param: (...args: PakertajaArg[]) => HTMLParamElement;
  video: (...args: PakertajaArg[]) => HTMLVideoElement;
  audio: (...args: PakertajaArg[]) => HTMLAudioElement;
  source: (...args: PakertajaArg[]) => HTMLSourceElement;
  canvas: (...args: PakertajaArg[]) => HTMLCanvasElement;
  map: (...args: PakertajaArg[]) => HTMLMapElement;
  area: (...args: PakertajaArg[]) => HTMLAreaElement;

  // Tabular data
  table: (...args: PakertajaArg[]) => HTMLTableElement;
  caption: (...args: PakertajaArg[]) => HTMLTableCaptionElement;
  colgroup: (...args: PakertajaArg[]) => HTMLTableColElement;
  col: (...args: PakertajaArg[]) => HTMLTableColElement;
  tbody: (...args: PakertajaArg[]) => HTMLTableSectionElement;
  tfoot: (...args: PakertajaArg[]) => HTMLTableSectionElement;
  tr: (...args: PakertajaArg[]) => HTMLTableRowElement;
  td: (...args: PakertajaArg[]) => HTMLTableCellElement;
  th: (...args: PakertajaArg[]) => HTMLTableCellElement;

  // Forms
  form: (...args: PakertajaArg[]) => HTMLFormElement;
  fieldset: (...args: PakertajaArg[]) => HTMLFieldSetElement;
  label: (...args: PakertajaArg[]) => HTMLLabelElement;
  input: (...args: PakertajaArg[]) => HTMLInputElement;
  button: (...args: PakertajaArg[]) => HTMLButtonElement;
  select: (...args: PakertajaArg[]) => HTMLSelectElement;
  datalist: (...args: PakertajaArg[]) => HTMLDataListElement;
  optgroup: (...args: PakertajaArg[]) => HTMLOptGroupElement;
  option: (...args: PakertajaArg[]) => HTMLOptionElement;
  textarea: (...args: PakertajaArg[]) => HTMLTextAreaElement;
  output: (...args: PakertajaArg[]) => HTMLOutputElement;

  // Interactive elements
  details: (...args: PakertajaArg[]) => HTMLDetailsElement;
  command: (...args: PakertajaArg[]) => HTMLElement;
  bb: (...args: PakertajaArg[]) => HTMLElement;
  menu: (...args: PakertajaArg[]) => HTMLMenuElement;

  // Miscanellaous elements
  legend: (...args: PakertajaArg[]) => HTMLLegendElement;
  div: (...args: PakertajaArg[]) => HTMLDivElement;
}

declare module 'pakertaja' {
  export = p;
}

declare var Pakertaja: PakertajaStatic;
declare var p: PakertajaStatic;
