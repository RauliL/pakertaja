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

type FetchPriority = "high" | "low" | "auto";

type FormEncType =
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain";

type Attributes = {
  text?: StringOrCallback;
  html?: StringOrCallback;
  style?: StyleValue;
  data?: DataValueMapping | DataValueMappingCallback;

  // Global HTML attributes available to all elements.
  /**
   * Provides a hint for generating a keyboard shortcut for the current
   * element. This attribute consists of a space-separated list of
   * characters. The browser should use the first one that exists on the
   * computer keyboard layout.
   */
  accesskey?: StringOrCallback;
  /**
   * Controls whether inputted text is automatically capitalized and,
   * if so, in what manner.
   */
  autocapitalize?:
    | StringCallback
    | "off"
    | "none"
    | "on"
    | "sentences"
    | "words"
    | "characters";
  /**
   * Controls whether input text is automatically corrected for spelling
   * errors. This can be applied to elements that have editable text except
   * for <input> elements with the attribute: type="password", type="email",
   * or type="url".
   */
  autocorrect?: "on" | "off" | "" | StringCallback;
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
  fetchpriority?: FetchPriority | StringCallback;
  href?: StringOrCallback;
  hreflang?: StringOrCallback;
  imagesizes?: StringOrCallback;
  imagesrcset?: StringOrCallback;
  integrity?: StringOrCallback;
  media?: StringOrCallback;
  referrerpolicy?: ReferrerPolicy | StringCallback;
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
  fetchpriority?: FetchPriority | StringCallback;
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
  /**
   * Indicates that the dialog box is active and is available for interaction.
   * If the open attribute is not set, the dialog box will not be visible to
   * the user. It is recommended to use the .show() or .showModal() method to
   * render dialogs, rather than the open attribute. If a <dialog> is opened
   * using the open attribute, it is non-modal.
   */
  open?: BooleanAttribute;
};

type BlockquoteAttributes = Attributes & {
  /**
   * A URL that designates a source document or message for the information
   * quoted. This attribute is intended to point to information explaining
   * the context or the reference for the quote.
   */
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

type ModAttributes = Attributes & {
  cite?: StringOrCallback;
  datetime?: StringOrCallback;
};

type ImgAttributes = Attributes & {
  alt?: StringOrCallback;
  crossorigin?: StringOrCallback;
  decoding?: "sync" | "async" | "auto" | StringCallback;
  elementtiming?: StringOrCallback;
  fetchpriority?: FetchPriority | StringCallback;
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

type IFrameAttributes = Attributes & {
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
  autocomplete?: StringOrCallback;
  name?: StringOrCallback;
  rel?: StringOrCallback;
};

type FieldsetAttributes = Attributes & {
  disabled?: BooleanAttribute;
  form?: StringOrCallback;
  name?: StringOrCallback;
};

type LabelAttributes = Attributes & {
  /**
   * The value of the for attribute must be a single id for a labelable
   * form-related element in the same document as the <label> element.
   * So, any given label element can be associated with only one form control.
   */
  for?: StringOrCallback;
};

type InputAttributes = Attributes & {
  /** Hint for expected file type in file upload controls. */
  accept?: StringOrCallback;
  /** alt attribute for the image type. Required for accessibility. */
  alt?: StringOrCallback;
  /** Controls automatic capitalization in inputted text. */
  autocapitalize?: BooleanAttribute;
  /** Hint for form autofill feature. */
  autocomplete?: StringOrCallback;
  /** Media capture input method in file upload controls. */
  capture?: StringOrCallback;
  /** Whether the command or control is checked. */
  checked?: BooleanAttribute;
  /**
   * Name of form field to use for sending the element's directionality in
   * form submission.
   */
  dirname?: StringOrCallback;
  /** Whether the form control is disabled. */
  disabled?: BooleanAttribute;
  /** Associates the control with a form element. */
  form?: StringOrCallback;
  /** URL to use for form submission. */
  formaction?: StringOrCallback;
  /** Form data set encoding type to use for form submission. */
  formenctype?: FormEncType | StringOrCallback;
  /** HTTP method to use for form submission. */
  formmethod?: StringOrCallback;
  /** Bypass form control validation for form submission. */
  formonvalidate?: StringOrCallback;
  /** Browsing context for form submission. */
  formtarget?: StringOrCallback;
  /** Same as height attribute for <img>; vertical dimension. */
  height?: NumberAttribute;
  /** Value of the id attribute of the <datalist> of autocomplete options. */
  list?: StringOrCallback;
  /** Maximum value. */
  max?: NumberAttribute;
  /** Maximum length (number of characters) of value. */
  maxlength?: NumberAttribute;
  /** Minimum value. */
  min?: NumberAttribute;
  /** Minimum length (number of characters) of value. */
  minlength?: NumberAttribute;
  /** Boolean. Whether to allow multiple values. */
  multiple?: BooleanAttribute;
  /**
   * Name of the form control. Submitted with the form as part of a name/value
   * pair.
   */
  name?: StringOrCallback;
  /** Pattern the value must match to be valid. */
  pattern?: StringOrCallback;
  /** Text that appears in the form control when it has no value set. */
  placeholder?: StringOrCallback;
  /** Designates an <input type="button"> as a control for a popover element. */
  popovertarget?: StringOrCallback;
  /** Specifies the action that a popover control should perform. */
  popovertargetaction?: StringOrCallback;
  /** Boolean. The value is not editable. */
  readonly?: BooleanAttribute;
  /**
   * Boolean. A value is required or must be checked for the form to be
   * submittable.
   */
  required?: BooleanAttribute;
  /** Size of the control. */
  size?: NumberAttribute;
  /** Same as src attribute for <img>; address of image resource. */
  src?: StringOrCallback;
  /** Incremental values that are valid. */
  step?: NumberAttribute;
  /** Type of form control. */
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
  /**
   * The value of the control. When specified in the HTML, corresponds to the
   * initial value.
   */
  value?: NumberAttribute;
  /** Same as width attribute for <img>. */
  width?: NumberAttribute;
};

type ButtonAttributes = Attributes & {
  /**
   * This Boolean attribute specifies that the button should have input focus
   * when the page loads. Only one element in a document can have this
   * attribute. */
  autofocus?: BooleanAttribute;
  /**
   * This Boolean attribute prevents the user from interacting with the button:
   * it cannot be pressed or focused.
   */
  disabled?: BooleanAttribute;
  /**
   * The <form> element to associate the button with (its form owner). The
   * value of this attribute must be the id of a <form> in the same document.
   * (If this attribute is not set, the <button> is associated with its
   * ancestor <form> element, if any.)
   *
   * This attribute lets you associate <button> elements to <form>s anywhere
   * in the document, not just inside a <form>. It can also override an
   * ancestor <form> element.
   */
  form?: StringOrCallback;
  /**
   * The URL that processes the information submitted by the button. Overrides
   * the action attribute of the button's form owner. Does nothing if there is
   * no form owner.
   */
  formaction?: StringOrCallback;
  /**
   * If the button is a submit button (it's inside/associated with a <form> and
   * doesn't have type="button"), specifies how to encode the form data that is
   * submitted.
   */
  formenctype?: FormEncType | StringOrCallback;
  /**
   * If the button is a submit button (it's inside/associated with a <form> and
   * doesn't have type="button"), this attribute specifies the HTTP method used
   * to submit the form.
   */
  formmethod?: StringOrCallback;
  /**
   * If the button is a submit button, this Boolean attribute specifies that
   * the form is not to be validated when it is submitted. If this attribute
   * is specified, it overrides the novalidate attribute of the button's form
   * owner.
   *
   * This attribute is also available on <input type="image"> and
   * <input type="submit"> elements.
   */
  formonvalidate?: BooleanAttribute;
  /**
   * If the button is a submit button, this attribute is an author-defined name
   * or standardized, underscore-prefixed keyword indicating where to display
   * the response from submitting the form. This is the name of, or keyword
   * for, a browsing context (a tab, window, or <iframe>). If this attribute is
   * specified, it overrides the target attribute of the button's form owner.
   */
  formtarget?: "_self" | "_blank" | "_parent" | "_top" | StringCallback;
  /**
   * The name of the button, submitted as a pair with the button's value as
   * part of the form data, when that button is used to submit the form.
   */
  name?: StringOrCallback;
  /**
   * Turns a <button> element into a popover control button; takes the ID of
   * the popover element to control as its value.
   */
  popovertarget?: StringOrCallback;
  /**
   * Specifies the action to be performed on a popover element being controlled
   * by a control <button>.
   */
  popovertargetaction?: "hide" | "show" | "toggle" | StringOrCallback;
  /** The default behavior of the button. */
  type?: "submit" | "reset" | "button" | StringCallback;
  /**
   * Defines the value associated with the button's name when it's submitted
   * with the form data. This value is passed to the server in params when the
   * form is submitted using this button.
   */
  value?: StringOrCallback;
};

type SelectAttributes = Attributes & {
  /** A string providing a hint for a user agent's autocomplete feature. */
  autocomplete?: StringOrCallback;
  /**
   * This Boolean attribute lets you specify that a form control should have
   * input focus when the page loads. Only one form element in a document can
   * have the autofocus attribute.
   */
  autofocus?: BooleanAttribute;
  /**
   * This Boolean attribute indicates that the user cannot interact with the
   * control. If this attribute is not specified, the control inherits its
   * setting from the containing element, for example <fieldset>; if there is
   * no containing element with the disabled attribute set, then the control
   * is enabled.
   */
  disabled?: BooleanAttribute;
  /**
   * The <form> element to associate the <select> with (its form owner). The
   * value of this attribute must be the id of a <form> in the same document.
   * (If this attribute is not set, the <select> is associated with its
   * ancestor <form> element, if any.)
   *
   * This attribute lets you associate <select> elements to <form>s anywhere in
   * the document, not just inside a <form>. It can also override an ancestor
   * <form> element.
   */
  form?: StringOrCallback;
  /**
   * This Boolean attribute indicates that multiple options can be selected in
   * the list. If it is not specified, then only one option can be selected at
   * a time. When multiple is specified, most browsers will show a scrolling
   * list box instead of a single line dropdown.
   */
  multiple?: BooleanAttribute;
  /** This attribute is used to specify the name of the control. */
  name?: StringOrCallback;
  /**
   * A Boolean attribute indicating that an option with a non-empty string
   * value must be selected.
   */
  required?: BooleanAttribute;
  /**
   * If the control is presented as a scrolling list box (e.g. when multiple
   * is specified), this attribute represents the number of rows in the list
   * that should be visible at one time. Browsers are not required to present
   * a select element as a scrolled list box. The default value is 0.
   */
  size?: NumberAttribute;
};

type OptGroupAttributes = Attributes & {
  /**
   * If this Boolean attribute is set, none of the items in this option group
   * is selectable. Often browsers grey out such control and it won't receive
   * any browsing events, like mouse clicks or focus-related ones.
   */
  disabled?: BooleanAttribute;
  /**
   * The name of the group of options, which the browser can use when labeling
   * the options in the user interface. This attribute is mandatory if this
   * element is used.
   */
  label?: StringOrCallback;
};

type OptionAttributes = OptGroupAttributes & {
  /**
   * If present, this Boolean attribute indicates that the option is initially
   * selected. If the <option> element is the descendant of a <select> element
   * whose multiple attribute is not set, only one single <option> of this
   * <select> element may have the selected attribute.
   */
  selected?: BooleanAttribute;
  /**
   * The content of this attribute represents the value to be submitted with
   * the form, should this option be selected. If this attribute is omitted,
   * the value is taken from the text content of the option element.
   */
  value?: StringOrCallback;
};

type TextAreaAttributes = Attributes & {
  autocapitalize?: BooleanAttribute;
  autocomplete?: StringOrCallback;
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
  (tagName: "ins", ...args: PakertajaArgument<ModAttributes>[]): HTMLModElement;
  (tagName: "del", ...args: PakertajaArgument<ModAttributes>[]): HTMLModElement;
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

  fragment: (
    ...args: Array<Element | boolean | null | undefined | StringOrCallback>
  ) => DocumentFragment;

  append: (
    root: Element,
    ...args: Array<Element | boolean | null | undefined | StringOrCallback>
  ) => HTMLElement;
  prepend: (
    root: Element,
    ...args: Array<Element | boolean | null | undefined | StringOrCallback>
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
  ins: (...args: PakertajaArgument<ModAttributes>[]) => HTMLModElement;
  del: (...args: PakertajaArgument<ModAttributes>[]) => HTMLModElement;

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
  type IntrinsicElements = {
    // The root element
    html: PakertajaArgument;

    // Document metadata
    head: PakertajaArgument;
    title: PakertajaArgument;
    base: PakertajaArgument<BaseAttributes>;
    link: PakertajaArgument<LinkAttributes>;
    meta: PakertajaArgument<MetaAttributes>;
    style: PakertajaArgument<StyleAttributes>;

    // Scripting
    script: PakertajaArgument<ScriptAttributes>;
    noscript: PakertajaArgument;

    // Sections
    body: PakertajaArgument<BodyAttributes>;
    section: PakertajaArgument;
    nav: PakertajaArgument;
    article: PakertajaArgument;
    aside: PakertajaArgument;
    h1: PakertajaArgument;
    h2: PakertajaArgument;
    h3: PakertajaArgument;
    h4: PakertajaArgument;
    h5: PakertajaArgument;
    h6: PakertajaArgument;
    header: PakertajaArgument;
    footer: PakertajaArgument;
    address: PakertajaArgument;

    // Grouping content
    p: PakertajaArgument;
    hr: PakertajaArgument;
    br: PakertajaArgument;
    pre: PakertajaArgument;
    dialog: PakertajaArgument<DialogAttributes>;
    blockquote: PakertajaArgument<BlockquoteAttributes>;
    ol: PakertajaArgument<OlAttributes>;
    ul: PakertajaArgument;
    li: PakertajaArgument<LiAttributes>;
    dl: PakertajaArgument;
    dt: PakertajaArgument;
    dd: PakertajaArgument;

    // Text level semantics
    a: PakertajaArgument<AnchorAttributes>;
    q: PakertajaArgument;
    cite: PakertajaArgument;
    em: PakertajaArgument;
    strong: PakertajaArgument;
    mark: PakertajaArgument;
    dfn: PakertajaArgument;
    abbr: PakertajaArgument;
    time: PakertajaArgument<TimeAttributes>;
    progress: PakertajaArgument<ProgressAttributes>;
    meter: PakertajaArgument<MeterAttributes>;
    code: PakertajaArgument;
    var: PakertajaArgument;
    samp: PakertajaArgument;
    kbd: PakertajaArgument;
    sub: PakertajaArgument;
    sup: PakertajaArgument;
    span: PakertajaArgument;
    i: PakertajaArgument;
    b: PakertajaArgument;
    bdo: PakertajaArgument;
    ruby: PakertajaArgument;
    rt: PakertajaArgument;
    rp: PakertajaArgument;

    // Edits
    ins: PakertajaArgument<ModAttributes>;
    del: PakertajaArgument<ModAttributes>;

    // Embedded content
    figure: PakertajaArgument;
    img: PakertajaArgument<ImgAttributes>;
    iframe: PakertajaArgument<IFrameAttributes>;
    embed: PakertajaArgument<EmbedAttributes>;
    object: PakertajaArgument<ObjectAttributes>;
    video: PakertajaArgument<VideoAttributes>;
    audio: PakertajaArgument<AudioAttributes>;
    source: PakertajaArgument<SourceAttributes>;
    canvas: PakertajaArgument<CanvasAttributes>;
    map: PakertajaArgument<MapAttributes>;
    area: PakertajaArgument<AreaAttributes>;

    // Tabular data
    table: PakertajaArgument;
    caption: PakertajaArgument;
    colgroup: PakertajaArgument<ColgroupAttributes>;
    col: PakertajaArgument<ColgroupAttributes>;
    tbody: PakertajaArgument;
    tfoot: PakertajaArgument;
    tr: PakertajaArgument;
    td: PakertajaArgument<TDAttributes>;
    th: PakertajaArgument<THAttributes>;

    // Forms
    form: PakertajaArgument<FormAttributes>;
    fieldset: PakertajaArgument<FieldsetAttributes>;
    label: PakertajaArgument<LabelAttributes>;
    input: PakertajaArgument<InputAttributes>;
    button: PakertajaArgument<ButtonAttributes>;
    select: PakertajaArgument<SelectAttributes>;
    datalist: PakertajaArgument;
    optgroup: PakertajaArgument<OptGroupAttributes>;
    option: PakertajaArgument<OptionAttributes>;
    textarea: PakertajaArgument<TextAreaAttributes>;
    output: PakertajaArgument<OutputAttributes>;

    // Interactive elements
    details: PakertajaArgument<DetailsAttributes>;
    command: PakertajaArgument;
    bb: PakertajaArgument;
    menu: PakertajaArgument;

    // Miscanellaous elements
    legend: PakertajaArgument;
    div: PakertajaArgument;
  };
}
