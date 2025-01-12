// Type definitions for Pakertaja 2.0.0
// Attribute documentation copied from MDN.

type DataValue = number | string;
type DataValueCallback = () => DataValue;
type DataValueOrCallback = DataValue | DataValueCallback;
type DataValueMapping = Record<string, DataValueOrCallback>;
type DataValueMappingCallback = () => DataValueMapping;

type StringAttribute<T extends string = string> = T | (() => T);
type NumberAttribute = number | (() => number) | StringAttribute;
type BooleanAttribute =
  | boolean
  | (() => boolean)
  | StringAttribute<"true" | "false">;
type StyleAttribute = StringAttribute | Record<string, StringAttribute>;
type DataAttribute = DataValueMapping | DataValueMappingCallback;

type FetchPriority = "high" | "low" | "auto";

type FormEncType =
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain";

type Attributes = {
  /**
   * Text contents of the element.
   */
  text?: StringAttribute;
  /**
   * HTML contents of the element.
   */
  html?: StringAttribute;
  /**
   * CSS style rules.
   */
  style?: StyleAttribute;
  /**
   * Data values.
   */
  data?: DataAttribute;

  // Global HTML attributes available to all elements.

  /**
   * Provides a hint for generating a keyboard shortcut for the current
   * element. This attribute consists of a space-separated list of
   * characters. The browser should use the first one that exists on the
   * computer keyboard layout.
   */
  accesskey?: StringAttribute;
  /**
   * Controls whether inputted text is automatically capitalized and,
   * if so, in what manner.
   */
  autocapitalize?: StringAttribute<
    "off" | "none" | "on" | "sentences" | "words" | "characters"
  >;
  /**
   * Controls whether input text is automatically corrected for spelling
   * errors. This can be applied to elements that have editable text except
   * for <input> elements with the attribute: type="password", type="email",
   * or type="url".
   */
  autocorrect?: StringAttribute<"on" | "off" | "">;
  /**
   * Indicates that an element is to be focused on page load, or as soon as the
   * <dialog> it is part of is displayed. This attribute is a boolean, initially
   * false.
   */
  autofocus?: BooleanAttribute;
  /**
   * A space-separated list of the classes of the element. Classes allow CSS
   * and JavaScript to select and access specific elements via the class
   * selectors or functions like the method Document.getElementsByClassName().
   */
  class?: StringAttribute;
  /**
   * An enumerated attribute indicating if the element should be editable by
   * the user. If so, the browser modifies its widget to allow editing.
   */
  contenteditable?: BooleanAttribute | StringAttribute<"plaintext-only">;
  /**
   * An enumerated attribute indicating the directionality of the element's
   * text.
   */
  dir?: StringAttribute<"ltr" | "rtl" | "auto">;
  /**
   * An enumerated attribute indicating whether the element can be dragged,
   * using the Drag and Drop API.
   */
  draggable?: BooleanAttribute;
  /**
   * Hints what action label (or icon) to present for the enter key on virtual
   * keyboards.
   */
  enterkeyhint?: StringAttribute;
  /**
   * Used to transitively export shadow parts from a nested shadow tree into a
   * containing light tree.
   */
  exportparts?: StringAttribute;
  /**
   * An enumerated attribute indicating that the element is not yet, or is no
   * longer, relevant. For example, it can be used to hide elements of the page
   * that can't be used until the login process has been completed. The browser
   * won't render such elements. This attribute must not be used to hide
   * content that could legitimately be shown.
   */
  hidden?: BooleanAttribute;
  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id?: StringAttribute;
  /**
   * A boolean value that makes the browser disregard user input events for the
   * element. Useful when click events are present.
   */
  inert?: BooleanAttribute;
  /**
   * Provides a hint to browsers about the type of virtual keyboard
   * configuration to use when editing this element or its contents. Used
   * primarily on <input> elements, but is usable on any element while in
   * contenteditable mode.
   */
  inputmode?: StringAttribute;
  /**
   * Allows you to specify that a standard HTML element should behave like a
   * registered custom built-in element (see Using custom elements for more details).
   */
  is?: StringAttribute;
  /**
   * The unique, global identifier of an item.
   */
  itemid?: StringAttribute;
  /**
   * Used to add properties to an item. Every HTML element may have an itemprop
   * attribute specified, where an itemprop consists of a name and value pair.
   */
  itemprop?: StringAttribute;
  /**
   * Properties that are not descendants of an element with the itemscope
   * attribute can be associated with the item using an itemref. It provides
   * a list of element ids (not itemids) with additional properties elsewhere
   * in the document.
   */
  itemref?: StringAttribute;
  /**
   * itemscope (usually) works along with itemtype to specify that the HTML
   * contained in a block is about a particular item. itemscope creates the
   * Item and defines the scope of the itemtype associated with it. itemtype
   * is a valid URL of a vocabulary (such as schema.org) that describes the
   * item and its properties context.
   */
  itemscope?: StringAttribute;
  /**
   * Specifies the URL of the vocabulary that will be used to define itemprops
   * (item properties) in the data structure. itemscope is used to set the
   * scope of where in the data structure the vocabulary set by itemtype will
   * be active.
   */
  itemtype?: StringAttribute;
  /**
   * Helps define the language of an element: the language that non-editable
   * elements are in, or the language that editable elements should be written
   * in by the user. The attribute contains one "language tag" (made of
   * hyphen-separated "language subtags") in the format defined in RFC 5646:
   * Tags for Identifying Languages (also known as BCP 47). xml:lang has
   * priority over it.
   */
  lang?: StringAttribute;
  /**
   * A cryptographic nonce ("number used once") which can be used by Content
   * Security Policy to determine whether or not a given fetch will be allowed
   * to proceed.
   */
  nonce?: StringAttribute;
  /**
   * A space-separated list of the part names of the element. Part names allows
   * CSS to select and style specific elements in a shadow tree via the ::part
   * pseudo-element.
   */
  part?: StringAttribute;
  /**
   * Used to designate an element as a popover element (see Popover API).
   * Popover elements are hidden via display: none until opened via an
   * invoking/control element (i.e. a <button> or <input type="button"> with a
   * popovertarget attribute) or a HTMLElement.showPopover() call.
   */
  popover?: StringAttribute;
  /**
   * Roles define the semantic meaning of content, allowing screen readers and
   * other tools to present and support interaction with an object in a way
   * that is consistent with user expectations of that type of object. roles
   * are added to HTML elements using role="role_type", where role_type is the
   * name of a role in the ARIA specification.
   */
  role?: StringAttribute;
  /**
   * Assigns a slot in a shadow DOM shadow tree to an element: An element with
   * a slot attribute is assigned to the slot created by the <slot> element
   * whose name attribute's value matches that slot attribute's value.
   */
  slot?: StringAttribute;
  /**
   * An enumerated attribute defines whether the element may be checked for
   * spelling errors. It may have the following values:
   *
   * - empty string or true, which indicates that the element should be, if
   *   possible, checked for spelling errors;
   * - false, which indicates that the element should not be checked for
   *   spelling errors.
   */
  spellcheck?: BooleanAttribute | StringAttribute<"">;
  /**
   * An integer attribute indicating if the element can take input focus (is
   * focusable), if it should participate to sequential keyboard navigation,
   * and if so, at what position. It can take several values:
   *
   * - a negative value means that the element should be focusable, but should
   *   not be reachable via sequential keyboard navigation;
   * - 0 means that the element should be focusable and reachable via sequential
   *   keyboard navigation, but its relative order is defined by the platform
   *   convention;
   * - a positive value means that the element should be focusable and reachable
   *   via sequential keyboard navigation; the order in which the elements are
   *   focused is the increasing value of the tabindex. If several elements
   *   share the same tabindex, their relative order follows their relative
   *   positions in the document.
   */
  tabindex?: NumberAttribute;
  /**
   * Contains a text representing advisory information related to the element
   * it belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title?: StringAttribute;
  /**
   * An enumerated attribute that is used to specify whether an element's
   * attribute values and the values of its Text node children are to be
   * translated when the page is localized, or whether to leave them unchanged.
   * It can have the following values:
   *
   * - empty string or yes, which indicates that the element will be
   *   translated.
   * - no, which indicates that the element will not be translated.
   */
  translate?: StringAttribute<"" | "yes" | "no">;
  /**
   * An enumerated attribute indicating if browser-provided writing suggestions
   * should be enabled under the scope of the element or not.
   *
   * - false, which disables the browser's writing suggestions.
   * - true or an empty string, which enables writing suggestions.
   */
  writingsuggestions?: BooleanAttribute;

  // Global event listeners available to all HTML elements.

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
    | StringAttribute
    | NumberAttribute
    | BooleanAttribute
    | StyleAttribute
    | DataAttribute
    | EventListener
    | null
    | undefined;
};

type BaseAttributes = Attributes & {
  /**
   * The base URL to be used throughout the document for relative URLs.
   * Absolute and relative URLs are allowed. data: and javascript: URLs
   * are not allowed.
   */
  href?: StringAttribute;
  /**
   * A keyword or author-defined name of the default browsing context to
   * show the results of navigation from <a>, <area>, or <form> elements
   * without explicit target attributes. The following keywords have
   * special meanings:
   *
   * - _self (default): Show the result in the current browsing context.
   * - _blank: Show the result in a new, unnamed browsing context.
   * - _parent: Show the result in the parent browsing context of the
   *    current one, if the current page is inside a frame. If there is
   *    no parent, acts the same as _self.
   * - _top: Show the result in the topmost browsing context (the browsing
   *    context that is an ancestor of the current one and has no parent).
   *    If there is no parent, acts the same as _self.
   */
  target?: StringAttribute<"_self" | "_blank" | "_parent" | "_top">;
};

type LinkAttributes = Attributes & {
  /**
   * This attribute is required when rel="preload" has been set on the <link>
   * element, optional when rel="modulepreload" has been set, and otherwise
   * should not be used. It specifies the type of content being loaded by the
   * <link>, which is necessary for request matching, application of correct
   * content security policy, and setting of correct Accept request header.
   *
   * Furthermore, rel="preload" uses this as a signal for request
   * prioritization. The table below lists the valid values for this
   * attribute and the elements or resources they apply to.
   */
  as?: StringAttribute<
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
  >;
  /**
   * This attribute explicitly indicates that certain operations should be
   * blocked on the fetching of an external resource. It must only be used
   * when the rel attribute contains expect or stylesheet keywords. The
   * operations that are to be blocked must be a space-separated list of
   * blocking tokens listed below.
   */
  blocking?: BooleanAttribute;
  /**
   * This enumerated attribute indicates whether CORS must be used when
   * fetching the resource. CORS-enabled images can be reused in the
   * <canvas> element without being tainted.
   *
   * The allowed values are:
   * - anonymous
   *   A cross-origin request (i.e. with an Origin HTTP header) is performed,
   *   but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP
   *   Basic authentication). If the server does not give credentials to the
   *   origin site (by not setting the Access-Control-Allow-Origin HTTP header)
   *   the resource will be tainted and its usage restricted.
   * - use-credentials
   *   A cross-origin request (i.e. with an Origin HTTP header) is performed
   *   along with a credential sent (i.e. a cookie, certificate, and/or HTTP
   *   Basic authentication is performed). If the server does not give
   *   credentials to the origin site (through Access-Control-Allow-Credentials
   *   HTTP header), the resource will be tainted and its usage restricted.
   *
   * If the attribute is not present, the resource is fetched without a CORS
   * request (i.e. without sending the Origin HTTP header), preventing its
   * non-tainted usage. If invalid, it is handled as if the enumerated keyword
   * anonymous was used. See CORS settings attributes for additional
   * information.
   */
  crossorigin?: StringAttribute<"anonymous" | "use-credentials">;
  /**
   * For rel="stylesheet" only, the disabled Boolean attribute indicates
   * whether the described stylesheet should be loaded and applied to the
   * document. If disabled is specified in the HTML when it is loaded, the
   * stylesheet will not be loaded during page load. Instead, the stylesheet
   * will be loaded on-demand, if and when the disabled attribute is changed
   * to false or removed.
   *
   * Setting the disabled property in the DOM causes the stylesheet to be
   * removed from the document's Document.styleSheets list.
   */
  disabled?: BooleanAttribute;
  /**
   * Provides a hint of the relative priority to use when fetching a resource
   * of a particular type.
   */
  fetchpriority?: StringAttribute<FetchPriority>;
  /**
   * This attribute specifies the URL of the linked resource. A URL can be
   * absolute or relative.
   */
  href?: StringAttribute;
  /**
   * This attribute indicates the language of the linked resource. It is purely
   * advisory. Allowed values are specified by RFC 5646: Tags for Identifying
   * Languages (also known as BCP 47). Use this attribute only if the href
   * attribute is present.
   */
  hreflang?: StringAttribute;
  /**
   * For rel="preload" and as="image" only, the imagesizes attribute has
   * similar syntax and semantics as the sizes attribute that indicates to
   * preload the appropriate resource used by an img element with
   * corresponding values for its srcset and sizes attributes.
   */
  imagesizes?: StringAttribute;
  /**
   * For rel="preload" and as="image" only, the imagesrcset attribute has
   * similar syntax and semantics as the srcset attribute that indicates to
   * preload the appropriate resource used by an img element with corresponding
   * values for its srcset and sizes attributes.
   */
  imagesrcset?: StringAttribute;
  /**
   * Contains inline metadata — a base64-encoded cryptographic hash of the
   * resource (file) you're telling the browser to fetch. The browser can use
   * this to verify that the fetched resource has been delivered without
   * unexpected manipulation. The attribute must only be specified when the rel
   * attribute is specified to stylesheet, preload, or modulepreload. See
   * Subresource Integrity.
   */
  integrity?: StringAttribute;
  /**
   * This attribute specifies the media that the linked resource applies to.
   * Its value must be a media type / media query. This attribute is mainly
   * useful when linking to external stylesheets — it allows the user agent
   * to pick the best adapted one for the device it runs on.
   */
  media?: StringAttribute;
  /**
   * A string indicating which referrer to use when fetching the resource.
   */
  referrerpolicy?: StringAttribute<ReferrerPolicy>;
  /**
   * This attribute names a relationship of the linked document to the current
   * document. The attribute must be a space-separated list of link type
   * values.
   */
  rel?: StringAttribute;
  /**
   * This attribute defines the sizes of the icons for visual media contained
   * in the resource. It must be present only if the rel contains a value of
   * icon or a non-standard type such as Apple's apple-touch-icon. It may have
   * the following values:
   *
   * - any, meaning that the icon can be scaled to any size as it is in a
   *   vector format, like image/svg+xml.
   * - a white-space separated list of sizes, each in the format <width in
   *   pixels>x<height in pixels> or <width in pixels>X<height in pixels>.
   *   Each of these sizes must be contained in the resource.
   */
  sizes?: StringAttribute;
  /**
   * This attribute is used to define the type of the content linked to. The
   * value of the attribute should be a MIME type such as text/html, text/css,
   * and so on. The common use of this attribute is to define the type of
   * stylesheet being referenced (such as text/css), but given that CSS is the
   * only stylesheet language used on the web, not only is it possible to omit
   * the type attribute, but is actually now recommended practice. It is also
   * used on rel="preload" link types, to make sure the browser only downloads
   * file types that it supports.
   */
  type?: StringAttribute;
};

type MetaAttributes = Attributes & {
  /**
   * This attribute declares the document's character encoding. If the
   * attribute is present, its value must be an ASCII case-insensitive match
   * for the string "utf-8", because UTF-8 is the only valid encoding for
   * HTML5 documents. <meta> elements which declare a character encoding must
   * be located entirely within the first 1024 bytes of the document.
   */
  charset?: StringAttribute;
  /**
   * This attribute contains the value for the http-equiv or name attribute,
   * depending on which is used.
   */
  content?: StringAttribute;
  /**
   * Defines a pragma directive. The attribute's name, short for
   * http-equivalent, is because all the allowed values are names of particular
   * HTTP headers.
   */
  "http-equiv"?: StringAttribute<
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "x-ua-compatible"
    | "refresh"
    | "media"
    | "name"
  >;
  /**
   * The media attribute defines which media the theme color defined in the
   * content attribute should be applied to. Its value is a media query, which
   * defaults to all if the attribute is missing. This attribute is only
   * relevant when the element's name attribute is set to theme-color.
   * Otherwise, it has no effect, and should not be included.
   */
  media?: StringAttribute;
  /**
   * The name and content attributes can be used together to provide document
   * metadata in terms of name-value pairs, with the name attribute giving
   * the metadata name, and the content attribute giving the value.
   *
   * See standard metadata names for details about the set of standard metadata
   * names defined in the HTML specification.
   */
  name?: StringAttribute;
};

type StyleAttributes = Attributes & {
  /**
   * This attribute explicitly indicates that certain operations should be
   * blocked on the fetching of critical subresources. @import-ed stylesheets
   * are generally considered as critical subresources, whereas
   * background-image and fonts are not. The operations that are to be
   * blocked must be a space-separated list of blocking tokens listed below.
   *
   * - render: The rendering of content on the screen is blocked.
   */
  blocking?: StringAttribute<"render">;
  /**
   * This attribute defines which media the style should be applied to. Its
   * value is a media query, which defaults to all if the attribute is missing.
   */
  media?: StringAttribute;
};

type ScriptAttributes = Attributes & {
  /**
   * For classic scripts, if the async attribute is present, then the classic
   * script will be fetched in parallel to parsing and evaluated as soon as it
   * is available.
   *
   * For module scripts, if the async attribute is present then the scripts and
   * all their dependencies will be fetched in parallel to parsing and
   * evaluated as soon as they are available.
   */
  async?: BooleanAttribute;
  /**
   * This attribute explicitly indicates that certain operations should be
   * blocked on the fetching of the script. The operations that are to be
   * blocked must be a space-separated list of blocking tokens listed below.
   *
   * - render: The rendering of content on the screen is blocked.
   */
  blocking?: StringAttribute<"render">;
  /**
   * Normal script elements pass minimal information to the window.onerror
   * for scripts which do not pass the standard CORS checks. To allow error
   * logging for sites which use a separate domain for static media, use this
   * attribute. See CORS settings attributes for a more descriptive
   * explanation of its valid arguments.
   */
  crossorigin?: StringAttribute;
  /**
   * This Boolean attribute is set to indicate to a browser that the script
   * is meant to be executed after the document has been parsed, but before
   * firing DOMContentLoaded event.
   *
   * Scripts with the defer attribute will prevent the DOMContentLoaded event
   * from firing until the script has loaded and finished evaluating.
   *
   * Scripts with the defer attribute will execute in the order in which they
   * appear in the document.
   *
   * This attribute allows the elimination of parser-blocking JavaScript where
   * the browser would have to load and evaluate scripts before continuing to
   * parse. async has a similar effect in this case.
   *
   * If the attribute is specified with the async attribute, the element will
   * act as if only the async attribute is specified.
   */
  defer?: BooleanAttribute;
  /**
   * Provides a hint of the relative priority to use when fetching an external
   * script.
   */
  fetchpriority?: StringAttribute<FetchPriority>;
  /**
   * This attribute contains inline metadata that a user agent can use to
   * verify that a fetched resource has been delivered without unexpected
   * manipulation. The attribute must not specified when the src attribute
   * is not specified. See Subresource Integrity.
   */
  integrity?: StringAttribute;
  /**
   * This Boolean attribute is set to indicate that the script should not
   * be executed in browsers that support ES modules — in effect, this can
   * be used to serve fallback scripts to older browsers that do not support
   * modular JavaScript code.
   */
  nomodule?: BooleanAttribute;
  /**
   * Indicates which referrer to send when fetching the script, or resources
   * fetched by the script.
   */
  referrerpolicy?: StringAttribute<ReferrerPolicy>;
  /**
   * This attribute specifies the URI of an external script; this can be used
   * as an alternative to embedding a script directly within a document.
   */
  src?: StringAttribute;
  /**
   * This attribute indicates the type of script represented.
   */
  type?: StringAttribute<"importmap" | "module">;
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
  cite?: StringAttribute;
};

type OlAttributes = Attributes & {
  /**
   * This Boolean attribute specifies that the list's items are in reverse
   * order. Items will be numbered from high to low.
   */
  reversed?: BooleanAttribute;
  /**
   * An integer to start counting from for the list items. Always an Arabic
   * numeral (1, 2, 3, etc.), even when the numbering type is letters or
   * Roman numerals. For example, to start numbering elements from the letter
   * "d" or the Roman numeral "iv," use start="4".
   */
  start?: NumberAttribute;
  /**
   * Sets the numbering type:
   *
   * - a for lowercase letters
   * - A for uppercase letters
   * - i for lowercase Roman numerals
   * - I for uppercase Roman numerals
   * - 1 for numbers (default)
   *
   * The specified type is used for the entire list unless a different type
   * attribute is used on an enclosed <li> element.
   */
  type?: StringAttribute<"a" | "A" | "i" | "I" | "1">;
};

type LiAttributes = Attributes & {
  /**
   * This integer attribute indicates the current ordinal value of the list
   * item as defined by the <ol> element. The only allowed value for this
   * attribute is a number, even if the list is displayed with Roman numerals
   * or letters. List items that follow this one continue numbering from the
   * value set. This attribute has no meaning for unordered lists (<ul>) or
   * for menus (<menu>).
   */
  value?: NumberAttribute;
};

type AnchorAttributes = Attributes & {
  /**
   * Causes the browser to treat the linked URL as a download. Can be used with
   * or without a filename value:
   *
   * Without a value, the browser will suggest a filename/extension, generated
   * from various sources:
   *
   * - The Content-Disposition HTTP header
   * - The final segment in the URL path
   * - The media type (from the Content-Type header, the start of a data: URL,
   *   or Blob.type for a blob: URL)
   *
   * filename: defining a value suggests it as the filename. / and \ characters
   * are converted to underscores (_). Filesystems may forbid other characters
   * in filenames, so browsers will adjust the suggested name if necessary.
   */
  download?: StringAttribute;
  /**
   * The URL that the hyperlink points to. Links are not restricted to
   * HTTP-based URLs — they can use any URL scheme supported by browsers
   */
  href?: StringAttribute;
  /**
   * Hints at the human language of the linked URL. No built-in functionality.
   * Allowed values are the same as the global lang attribute.
   */
  hreflang?: StringAttribute;
  /**
   * A space-separated list of URLs. When the link is followed, the browser
   * will send POST requests with the body PING to the URLs. Typically for
   * tracking.
   */
  ping?: StringAttribute;
  /**
   * How much of the referrer to send when following the link.
   */
  referrerpolicy?: StringAttribute<ReferrerPolicy>;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel?: StringAttribute;
  /**
   * Where to display the linked URL, as the name for a browsing context
   * (a tab, window, or <iframe>).
   */
  target?: StringAttribute<
    "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop"
  >;
  /**
   * Hints at the linked URL's format with a MIME type. No built-in
   * functionality.
   */
  type?: StringAttribute;
};

type TimeAttributes = Attributes & {
  /**
   * This attribute indicates the time and/or date of the element and must
   * be in one of the formats described below.
   */
  datetime?: StringAttribute;
};

type ProgressAttributes = Attributes & {
  /**
   * This attribute describes how much work the task indicated by the progress
   * element requires. The max attribute, if present, must have a value
   * greater than 0 and be a valid floating point number. The default value is
   * 1.
   */
  max?: NumberAttribute;
  /**
   * This attribute specifies how much of the task that has been completed. It
   * must be a valid floating point number between 0 and max, or between 0 and
   * 1 if max is omitted. If there is no value attribute, the progress bar is
   * indeterminate; this indicates that an activity is ongoing with no
   * indication of how long it is expected to take.
   */
  value?: NumberAttribute;
};

type MeterAttributes = Attributes & {
  /**
   * The current numeric value. This must be between the minimum and maximum
   * values (min attribute and max attribute) if they are specified. If
   * unspecified or malformed, the value is 0. If specified, but not within
   * the range given by the min attribute and max attribute, the value is
   * equal to the nearest end of the range.
   */
  value?: NumberAttribute;
  /**
   * The lower numeric bound of the measured range. This must be less than
   * the maximum value (max attribute), if specified. If unspecified, the
   * minimum value is 0.
   */
  min?: NumberAttribute;
  /**
   * The upper numeric bound of the measured range. This must be greater than
   * the minimum value (min attribute), if specified. If unspecified, the
   * maximum value is 1.
   */
  max?: NumberAttribute;
  /**
   * The upper numeric bound of the low end of the measured range. This must
   * be greater than the minimum value (min attribute), and it also must be
   * less than the high value and maximum value (high attribute and max
   * attribute, respectively), if any are specified. If unspecified, or if
   * less than the minimum value, the low value is equal to the minimum value.
   */
  low?: NumberAttribute;
  /**
   * The lower numeric bound of the high end of the measured range. This must
   * be less than the maximum value (max attribute), and it also must be
   * greater than the low value and minimum value (low attribute and min
   * attribute, respectively), if any are specified. If unspecified, or if
   * greater than the maximum value, the high value is equal to the maximum
   * value.
   */
  high?: NumberAttribute;
  /**
   * This attribute indicates the optimal numeric value. It must be within the
   * range (as defined by the min attribute and max attribute). When used with
   * the low attribute and high attribute, it gives an indication where along
   * the range is considered preferable. For example, if it is between the min
   * attribute and the low attribute, then the lower range is considered
   * preferred. The browser may color the meter's bar differently depending on
   * whether the value is less than or equal to the optimum value.
   */
  optimum?: NumberAttribute;
  /**
   * This optional attribute is used to explicitly set a <form> owner for the
   * <meter> element. If omitted, the <meter> is associated with its ancestor
   * <form> element or the form association set by the form attribute on
   * another ancestor element, such as on a <fieldset>, if any. If included,
   * the value must be the id of a <form> in the same tree.
   */
  form?: StringAttribute;
};

type ModAttributes = Attributes & {
  /**
   * This attribute defines the URI of a resource that explains the change,
   * such as a link to meeting minutes or a ticket in a troubleshooting system.
   */
  cite?: StringAttribute;
  /**
   * This attribute indicates the time and date of the change and must be a
   * valid date with an optional time string. If the value cannot be parsed
   * as a date with an optional time string, the element does not have an
   * associated timestamp. For the format of the string without a time, see
   * Format of a valid date string. The format of the string if it includes
   * both date and time is covered in Format of a valid local date and time
   * string.
   */
  datetime?: StringAttribute;
};

type ImgAttributes = Attributes & {
  /**
   * Defines text that can replace the image in the page.
   */
  alt?: StringAttribute;
  /**
   * Indicates if the fetching of the image must be done using a CORS request.
   * Image data from a CORS-enabled image returned from a CORS request can be
   * reused in the <canvas> element without being marked "tainted".
   *
   * If the crossorigin attribute is not specified, then a non-CORS request is
   * sent (without the Origin request header), and the browser marks the image
   * as tainted and restricts access to its image data, preventing its usage in
   * <canvas> elements.
   *
   * If the crossorigin attribute is specified, then a CORS request is sent
   * (with the Origin request header); but if the server does not opt into
   * allowing cross-origin access to the image data by the origin site (by not
   * sending any Access-Control-Allow-Origin response header, or by not
   * including the site's origin in any Access-Control-Allow-Origin response
   * header it does send), then the browser blocks the image from loading, and
   * logs a CORS error to the devtools console.
   */
  crossorigin?: StringAttribute;
  /**
   * This attribute provides a hint to the browser as to whether it should
   * perform image decoding along with rendering the other DOM content in a
   * single presentation step that looks more "correct" (sync), or render
   * and present the other DOM content first and then decode the image and
   * present it later (async). In practice, async means that the next paint
   * does not wait for the image to decode.
   *
   * It is often difficult to perceive any noticeable effect when using
   * decoding on static <img> elements. They'll likely be initially rendered
   * as empty images while the image files are fetched (either from the
   * network or from the cache) and then handled independently anyway, so
   * the "syncing" of content updates is less apparent. However, the blocking
   * of rendering while decoding happens, while often quite small, can be
   * measured — even if it is difficult to observe with the human eye. See
   * What does the image decoding attribute actually do? for a more detailed
   * analysis (tunetheweb.com, 2023).
   *
   * Using different decoding types can result in more noticeable differences
   * when dynamically inserting <img> elements into the DOM via JavaScript
   * — see HTMLImageElement.decoding for more details.
   */
  decoding?: StringAttribute<"sync" | "async" | "auto">;
  /**
   * Marks the image for observation by the PerformanceElementTiming API.
   * The value given becomes an identifier for the observed image element.
   * See also the elementtiming attribute page.
   */
  elementtiming?: StringAttribute;
  /**
   * Provides a hint of the relative priority to use when fetching the image.
   */
  fetchpriority?: StringAttribute<FetchPriority>;
  /**
   * The intrinsic height of the image, in pixels. Must be an integer without
   * a unit.
   */
  height?: NumberAttribute;
  /**
   * This Boolean attribute indicates that the image is part of a server-side
   * map. If so, the coordinates where the user clicked on the image are sent
   * to the server.
   */
  ismap?: BooleanAttribute;
  /**
   * Indicates how the browser should load the image.
   */
  loading?: StringAttribute<"eager" | "lazy">;
  /**
   * A string indicating which referrer to use when fetching the resource.
   */
  referrerpolicy?: StringAttribute<ReferrerPolicy>;
  /**
   * One or more strings separated by commas, indicating a set of source sizes.
   * Each source size consists of:
   *
   * - A media condition. This must be omitted for the last item in the list.
   * - A source size value.
   *
   * Media Conditions describe properties of the viewport, not of the image.
   * For example, (max-height: 500px) 1000px proposes to use a source of
   * 1000px width, if the viewport is not higher than 500px.
   *
   * Source size values specify the intended display size of the image. User
   * agents use the current source size to select one of the sources supplied
   * by the srcset attribute, when those sources are described using width
   * (w) descriptors. The selected source size affects the intrinsic size of
   * the image (the image's display size if no CSS styling is applied). If
   * the srcset attribute is absent, or contains no values with a width
   * descriptor, then the sizes attribute has no effect.
   */
  sizes?: StringAttribute;
  /**
   * The image URL. Mandatory for the <img> element. On browsers supporting
   * srcset, src is treated like a candidate image with a pixel density
   * descriptor 1x, unless an image with this pixel density descriptor is
   * already defined in srcset, or unless srcset contains w descriptors.
   */
  src?: StringAttribute;
  /**
   * One or more strings separated by commas, indicating possible image sources
   * for the user agent to use. Each string is composed of:
   *
   * - A URL to an image
   *   Optionally, whitespace followed by one of:
   *   A width descriptor (a positive integer directly followed by w). The width
   *   descriptor is divided by the source size given in the sizes attribute to
   *   calculate the effective pixel density.
   *   A pixel density descriptor (a positive floating point number directly
   *   followed by x).
   *
   * If no descriptor is specified, the source is assigned the default descriptor
   * of 1x.
   *
   * It is incorrect to mix width descriptors and pixel density descriptors
   * in the same srcset attribute. Duplicate descriptors (for instance, two
   * sources in the same srcset which are both described with 2x) are also
   * invalid.
   *
   * If the srcset attribute uses width descriptors, the sizes attribute must
   * also be present, or the srcset itself will be ignored.
   *
   * The user agent selects any of the available sources at its discretion.
   * This provides them with significant leeway to tailor their selection
   * based on things like user preferences or bandwidth conditions. See our
   * Responsive images tutorial for an example.
   */
  srcset?: StringAttribute;
  /**
   * The intrinsic width of the image in pixels. Must be an integer without a
   * unit.
   */
  width?: NumberAttribute;
  /**
   * The partial URL (starting with #) of an image map associated with the
   * element.
   */
  usemap?: StringAttribute;
};

type IFrameAttributes = Attributes & {
  /**
   * Specifies a Permissions Policy for the <iframe>. The policy defines what
   * features are available to the <iframe> (for example, access to the
   * microphone, camera, battery, web-share, etc.) based on the origin of the
   * request.
   *
   * See iframes in the Permissions-Policy topic for examples.
   */
  allow?: StringAttribute;
  /**
   * Set to true if the <iframe> can activate fullscreen mode by calling the
   * requestFullscreen() method.
   */
  allowfullscreen?: BooleanAttribute;
  /**
   * The height of the frame in CSS pixels. Default is 150.
   */
  height?: NumberAttribute;
  /**
   * Indicates when the browser should load the iframe:
   *
   * - eager
   *   Load the iframe immediately on page load (this is the default value).
   * - lazy
   *   Defer loading of the iframe until it reaches a calculated distance
   *   from the visual viewport, as defined by the browser. The intent is to
   *   avoid using the network and storage bandwidth required to fetch the
   *   frame until the browser is reasonably certain that it will be needed.
   *   This improves the performance and cost in most typical use cases,
   *   in particular by reducing initial page load times.
   */
  loading?: StringAttribute<"eager" | "lazy">;
  /**
   * A targetable name for the embedded browsing context. This can be used
   * in the target attribute of the <a>, <form>, or <base> elements; the
   * formtarget attribute of the <input> or <button> elements; or the
   * windowName parameter in the window.open() method.
   */
  name?: StringAttribute;
  /**
   * Indicates which referrer to send when fetching the frame's resource.
   */
  referrerpolicy?: StringAttribute<ReferrerPolicy>;
  /**
   * Controls the restrictions applied to the content embedded in the
   * <iframe>. The value of the attribute can either be empty to apply all
   * restrictions, or space-separated tokens to lift particular restrictions:
   *
   * - allow-downloads
   *   Allows downloading files through an <a> or <area> element with the
   *   download attribute, as well as through the navigation that leads to a
   *   download of a file. This works regardless of whether the user clicked
   *   on the link, or JS code initiated it without user interaction.
   * - allow-forms
   *   Allows the page to submit forms. If this keyword is not used, a form
   *   will be displayed as normal, but submitting it will not trigger input
   *   validation, send data to a web server, or close a dialog.
   * - allow-modals
   *   Allows the page to open modal windows by Window.alert(),
   *   Window.confirm(), Window.print() and Window.prompt(), while opening a
   *   <dialog> is allowed regardless of this keyword. It also allows the page
   *   to receive BeforeUnloadEvent event.
   * - allow-orientation-lock
   *   Lets the resource lock the screen orientation.
   * - allow-pointer-lock
   *   Allows the page to use the Pointer Lock API.
   * - allow-popups
   *   Allows popups (like from Window.open(), target="_blank",
   *   Window.showModalDialog()). If this keyword is not used, that
   *   functionality will silently fail.
   * - allow-popups-to-escape-sandbox
   *   Allows a sandboxed document to open a new browsing context without
   *   forcing the sandboxing flags upon it. This will allow, for example,
   *   a third-party advertisement to be safely sandboxed without forcing the
   *   same restrictions upon the page the ad links to. If this flag is not
   *   included, a redirected page, popup window, or new tab will be subject
   *   to the same sandbox restrictions as the originating <iframe>.
   * - allow-presentation
   *   Allows embedders to have control over whether an iframe can start a
   *   presentation session.
   * - allow-same-origin
   *   If this token is not used, the resource is treated as being from a
   *   special origin that always fails the same-origin policy (potentially
   *   preventing access to data storage/cookies and some JavaScript APIs).
   * - allow-scripts
   *   Allows the page to run scripts (but not create pop-up windows). If
   *   this keyword is not used, this operation is not allowed.
   * - allow-storage-access-by-user-activation Experimental
   *   Allows a document loaded in the <iframe> to use the Storage Access
   *   API to request access to unpartitioned cookies.
   * - allow-top-navigation
   *   Lets the resource navigate the top-level browsing context (the one
   *   named _top).
   * - allow-top-navigation-by-user-activation
   *   Lets the resource navigate the top-level browsing context, but only
   *   if initiated by a user gesture.
   * - allow-top-navigation-to-custom-protocols
   *   Allows navigations to non-http protocols built into browser or
   *   registered by a website. This feature is also activated by
   *   allow-popups or allow-top-navigation keyword.
   */
  sandbox?: StringAttribute<
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
  >;
};

type EmbedAttributes = Attributes & {
  height?: NumberAttribute;
  src?: StringAttribute;
  type?: StringAttribute;
  width?: NumberAttribute;
};

type ObjectAttributes = Attributes & {
  data?: StringAttribute;
  form?: StringAttribute;
  height?: NumberAttribute;
  name?: StringAttribute;
  type?: StringAttribute;
  width?: NumberAttribute;
};

type VideoAttributes = Attributes & {
  autoplay?: BooleanAttribute;
  controls?: StringAttribute;
  controlslist?: StringAttribute;
  crossorigin?: StringAttribute<"anonymous" | "use-credentials">;
  disablepictureinpicture?: BooleanAttribute;
  disableremoteplayback?: BooleanAttribute;
  height?: NumberAttribute;
  loop?: BooleanAttribute;
  muted?: BooleanAttribute;
  playsinline?: BooleanAttribute;
  poster?: StringAttribute;
  preload?: StringAttribute<"none" | "metadata" | "auto">;
  src?: StringAttribute;
  width?: NumberAttribute;
};

type AudioAttributes = Omit<VideoAttributes, "height" | "width">;

type SourceAttributes = Attributes & {
  type?: StringAttribute;
  src?: StringAttribute;
  srcset?: StringAttribute;
  sizes?: StringAttribute;
  media?: StringAttribute;
  height?: NumberAttribute;
  width?: NumberAttribute;
};

type CanvasAttributes = Attributes & {
  height?: NumberAttribute;
  width?: NumberAttribute;
};

type MapAttributes = Attributes & {
  name?: StringAttribute;
};

type AreaAttributes = Attributes & {
  alt?: StringAttribute;
  coords?: StringAttribute<"rect" | "circle" | "poly">;
  download?: BooleanAttribute;
  href?: StringAttribute;
  ping?: StringAttribute;
  referrerpolicy: StringAttribute<ReferrerPolicy>;
  rel?: StringAttribute;
  shape?: StringAttribute;
  target?: StringAttribute<"_self" | "_blank" | "_parent" | "_top">;
};

type ColgroupAttributes = Attributes & {
  /**
   * Specifies the number of consecutive columns the <colgroup> element
   * spans. The value must be a positive integer greater than zero. If
   * not present, its default value is 1.
   */
  span?: NumberAttribute;
};

type TDAttributes = Attributes & {
  /**
   * Contains a non-negative integer value that indicates how many columns
   * the data cell spans or extends. The default value is 1. User agents
   * dismiss values higher than 1000 as incorrect, setting to the default
   * value (1).
   */
  colspan?: NumberAttribute;
  /**
   * Contains a list of space-separated strings, each corresponding to the
   * id attribute of the <th> elements that provide headings for this table
   * cell.
   */
  headers?: StringAttribute;
  /**
   * Contains a non-negative integer value that indicates for how many rows
   * the data cell spans or extends. The default value is 1; if its value is
   * set to 0, it extends until the end of the table grouping section (<thead>,
   * <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to.
   * Values higher than 65534 are clipped to 65534.
   */
  rowspan?: NumberAttribute;
};

type THAttributes = Attributes & {
  /**
   * A short, abbreviated description of the header cell's content provided
   * as an alternative label to use for the header cell when referencing the
   * cell in other contexts. Some user-agents, such as speech readers, may
   * present this description before the content itself.
   */
  abbr?: StringAttribute;
  /**
   * A non-negative integer value indicating how many columns the header cell
   * spans or extends. The default value is 1. User agents dismiss values
   * higher than 1000 as incorrect, defaulting such values to 1.
   */
  colspan?: NumberAttribute;
  /**
   * A list of space-separated strings corresponding to the id attributes of
   * the <th> elements that provide the headers for this header cell.
   */
  headers?: StringAttribute;
  /**
   * A non-negative integer value indicating how many rows the header cell
   * spans or extends. The default value is 1; if its value is set to 0, the
   * header cell will extends to the end of the table grouping section
   * (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the <th>
   * belongs to. Values higher than 65534 are clipped at 65534.
   */
  rowspan?: NumberAttribute;
  /**
   * Defines the cells that the header (defined in the <th>) element relates
   * to. Possible enumerated values are:
   *
   * - row: the header relates to all cells of the row it belongs to;
   * - col: the header relates to all cells of the column it belongs to;
   * - rowgroup: the header belongs to a rowgroup and relates to all of its
   *   cells;
   * - colgroup: the header belongs to a colgroup and relates to all of its
   *   cells.
   *
   * If the scope attribute is not specified, or its value is not row, col,
   * rowgroup, or colgroup, then browsers automatically select the set of
   * cells to which the header cell applies.
   */
  scope?: StringAttribute<"row" | "col" | "rowgroup" | "colgroup">;
};

type FormAttributes = Attributes & {
  /**
   * The character encoding accepted by the server. The specification allows
   * a single case-insensitive value of "UTF-8", reflecting the ubiquity of
   * this encoding (historically multiple character encodings could be
   * specified as a comma-separated or space-separated list).
   */
  "accept-charset"?: StringAttribute;
  /**
   * Controls whether inputted text is automatically capitalized and, if so,
   * in what manner. See the autocapitalize global attribute page for more
   * information.
   */
  autocapitalize?: BooleanAttribute;
  /**
   * Indicates whether input elements can by default have their values
   * automatically completed by the browser. autocomplete attributes on form
   * elements override it on <form>. Possible values:
   *
   * - off: The browser may not automatically complete entries. (Browsers tend
   *   to ignore this for suspected login forms; see Managing autofill for
   *   login fields.)
   * - on: The browser may automatically complete entries.
   */
  autocomplete?: StringAttribute<"on" | "off">;
  /**
   * The name of the form. The value must not be the empty string, and must be
   * unique among the form elements in the forms collection that it is in, if
   * any.
   */
  name?: StringAttribute;
  /**
   * Controls the annotations and what kinds of links the form creates.
   * Annotations include external, nofollow, opener, noopener, and noreferrer.
   * Link types include help, prev, next, search, and license. The rel value
   * is a space-separated list of these enumerated values.
   */
  rel?: StringAttribute;
};

type FieldsetAttributes = Attributes & {
  /**
   * If this Boolean attribute is set, all form controls that are descendants
   * of the <fieldset>, are disabled, meaning they are not editable and won't
   * be submitted along with the <form>. They won't receive any browsing
   * events, like mouse clicks or focus-related events. By default browsers
   * display such controls grayed out. Note that form elements inside the
   * <legend> element won't be disabled.
   */
  disabled?: BooleanAttribute;
  /**
   * This attribute takes the value of the id attribute of a <form> element
   * you want the <fieldset> to be part of, even if it is not inside the form.
   * Please note that usage of this is confusing — if you want the <input>
   * elements inside the <fieldset> to be associated with the form, you need
   * to use the form attribute directly on those elements. You can check which
   * elements are associated with a form via JavaScript, using
   * HTMLFormElement.elements.
   */
  form?: StringAttribute;
  /**
   * The name associated with the group.
   */
  name?: StringAttribute;
};

type LabelAttributes = Attributes & {
  /**
   * The value of the for attribute must be a single id for a labelable
   * form-related element in the same document as the <label> element.
   * So, any given label element can be associated with only one form control.
   */
  for?: StringAttribute;
};

type InputAttributes = Attributes & {
  /** Hint for expected file type in file upload controls. */
  accept?: StringAttribute;
  /** alt attribute for the image type. Required for accessibility. */
  alt?: StringAttribute;
  /** Controls automatic capitalization in inputted text. */
  autocapitalize?: BooleanAttribute;
  /** Hint for form autofill feature. */
  autocomplete?: StringAttribute;
  /** Media capture input method in file upload controls. */
  capture?: StringAttribute;
  /** Whether the command or control is checked. */
  checked?: BooleanAttribute;
  /**
   * Name of form field to use for sending the element's directionality in
   * form submission.
   */
  dirname?: StringAttribute;
  /** Whether the form control is disabled. */
  disabled?: BooleanAttribute;
  /** Associates the control with a form element. */
  form?: StringAttribute;
  /** URL to use for form submission. */
  formaction?: StringAttribute;
  /** Form data set encoding type to use for form submission. */
  formenctype?: StringAttribute<FormEncType>;
  /** HTTP method to use for form submission. */
  formmethod?: StringAttribute;
  /** Bypass form control validation for form submission. */
  formonvalidate?: StringAttribute;
  /** Browsing context for form submission. */
  formtarget?: StringAttribute;
  /** Same as height attribute for <img>; vertical dimension. */
  height?: NumberAttribute;
  /** Value of the id attribute of the <datalist> of autocomplete options. */
  list?: StringAttribute;
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
  name?: StringAttribute;
  /** Pattern the value must match to be valid. */
  pattern?: StringAttribute;
  /** Text that appears in the form control when it has no value set. */
  placeholder?: StringAttribute;
  /** Designates an <input type="button"> as a control for a popover element. */
  popovertarget?: StringAttribute;
  /** Specifies the action that a popover control should perform. */
  popovertargetaction?: StringAttribute;
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
  src?: StringAttribute;
  /** Incremental values that are valid. */
  step?: NumberAttribute;
  /** Type of form control. */
  type?: StringAttribute<
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
  >;
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
  form?: StringAttribute;
  /**
   * The URL that processes the information submitted by the button. Overrides
   * the action attribute of the button's form owner. Does nothing if there is
   * no form owner.
   */
  formaction?: StringAttribute;
  /**
   * If the button is a submit button (it's inside/associated with a <form> and
   * doesn't have type="button"), specifies how to encode the form data that is
   * submitted.
   */
  formenctype?: StringAttribute<FormEncType>;
  /**
   * If the button is a submit button (it's inside/associated with a <form> and
   * doesn't have type="button"), this attribute specifies the HTTP method used
   * to submit the form.
   */
  formmethod?: StringAttribute;
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
  formtarget?: StringAttribute<"_self" | "_blank" | "_parent" | "_top">;
  /**
   * The name of the button, submitted as a pair with the button's value as
   * part of the form data, when that button is used to submit the form.
   */
  name?: StringAttribute;
  /**
   * Turns a <button> element into a popover control button; takes the ID of
   * the popover element to control as its value.
   */
  popovertarget?: StringAttribute;
  /**
   * Specifies the action to be performed on a popover element being controlled
   * by a control <button>.
   */
  popovertargetaction?: StringAttribute<"hide" | "show" | "toggle">;
  /** The default behavior of the button. */
  type?: StringAttribute<"submit" | "reset" | "button">;
  /**
   * Defines the value associated with the button's name when it's submitted
   * with the form data. This value is passed to the server in params when the
   * form is submitted using this button.
   */
  value?: StringAttribute;
};

type SelectAttributes = Attributes & {
  /** A string providing a hint for a user agent's autocomplete feature. */
  autocomplete?: StringAttribute;
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
  form?: StringAttribute;
  /**
   * This Boolean attribute indicates that multiple options can be selected in
   * the list. If it is not specified, then only one option can be selected at
   * a time. When multiple is specified, most browsers will show a scrolling
   * list box instead of a single line dropdown.
   */
  multiple?: BooleanAttribute;
  /** This attribute is used to specify the name of the control. */
  name?: StringAttribute;
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
  label?: StringAttribute;
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
  value?: StringAttribute;
};

type TextAreaAttributes = Attributes & {
  /**
   * Controls whether inputted text is automatically capitalized and, if so,
   * in what manner.
   */
  autocapitalize?: BooleanAttribute;
  /**
   * Controls whether entered text can be automatically completed by the
   * browser. Possible values are:
   *
   * - off: The user must explicitly enter a value into this field for every
   *   use, or the document provides its own auto-completion method; the
   *   browser does not automatically complete the entry.
   * - on: The browser can automatically complete the value based on values
   *   that the user has entered during previous uses.
   * - <token-list>: An ordered set of space-separated autofill detail tokens,
   *   optionally preceded by a sectioning token, a billing or shipping
   *   grouping token, and/or a token identifying the type of recipient.
   *
   * <textarea> elements that don't specify the autocomplete attribute inherit
   * the autocomplete on or off status set on the <textarea>'s form owner. The
   * form owner is either the <form> element that this <textarea> element is a
   * descendant of or the form element whose id is specified by the form
   * attribute of the input element. For more information, see the autocomplete
   * attribute in <form>.
   */
  autocomplete?: StringAttribute;
  /**
   * Controls whether automatic spelling correction and processing of text is
   * enabled while the user is editing this textarea. Permitted values are:
   *
   * - on
   *   Enable automatic spelling correction and text substitutions.
   * - off
   *   Disable automatic spelling correction and text substitutions.
   */
  autocorrect?: StringAttribute<"on" | "off">;
  /**
   * This Boolean attribute lets you specify that a form control should have
   * input focus when the page loads. Only one form-associated element in a
   * document can have this attribute specified.
   */
  autofocus?: BooleanAttribute;
  /**
   * The visible width of the text control, in average character widths. If
   * it is specified, it must be a positive integer. If it is not specified,
   * the default value is 20.
   */
  cols?: NumberAttribute;
  /**
   * This attribute is used to indicate the text directionality of the
   * element contents. For more information, see the dirname attribute.
   */
  dirname?: StringAttribute;
  /**
   * This Boolean attribute indicates that the user cannot interact with the
   * control. If this attribute is not specified, the control inherits its
   * setting from the containing element, for example <fieldset>; if there
   * is no containing element when the disabled attribute is set, the control
   * is enabled.
   */
  disabled?: BooleanAttribute;
  /**
   * The form element that the <textarea> element is associated with (its
   * "form owner"). The value of the attribute must be the id of a form element
   * in the same document. If this attribute is not specified, the <textarea>
   * element must be a descendant of a form element. This attribute enables
   * you to place <textarea> elements anywhere within a document, not just
   * as descendants of form elements.
   */
  form?: StringAttribute;
  /**
   * The maximum string length (measured in UTF-16 code units) that the user
   * can enter. If this value isn't specified, the user can enter an unlimited
   * number of characters.
   */
  maxlength?: NumberAttribute;
  /**
   * The minimum string length (measured in UTF-16 code units) required that
   * the user should enter.
   */
  minlength?: NumberAttribute;
  /**
   * The name of the control.
   */
  name?: StringAttribute;
  /**
   * A hint to the user of what can be entered in the control. Carriage returns
   * or line-feeds within the placeholder text must be treated as line breaks
   * when rendering the hint.
   */
  placeholder?: StringAttribute;
  /**
   * This Boolean attribute indicates that the user cannot modify the value of
   * the control. Unlike the disabled attribute, the readonly attribute does
   * not prevent the user from clicking or selecting in the control. The value
   * of a read-only control is still submitted with the form.
   */
  readonly?: BooleanAttribute;
  /**
   * This attribute specifies that the user must fill in a value before
   * submitting a form.
   */
  required?: BooleanAttribute;
  /**
   * The number of visible text lines for the control. If it is specified, it
   * must be a positive integer. If it is not specified, the default value is
   * 2.
   */
  rows?: NumberAttribute;
  /**
   * Specifies whether the <textarea> is subject to spell-checking by the
   * underlying browser/OS. The value can be:
   *
   * - true: Indicates that the element needs to have its spelling and grammar
   *   checked.
   * - default : Indicates that the element is to act according to a default
   *   behavior, possibly based on the parent element's own spellcheck value.
   * - false : Indicates that the element should not be spell-checked.
   */
  spellcheck?: BooleanAttribute | StringAttribute<"true" | "default" | "false">;
  /**
   * Indicates how the control should wrap the value for form submission.
   * Possible values are:
   *
   * - hard: The browser automatically inserts line breaks (CR+LF) so that each
   *   line is no longer than the width of the control; the cols attribute must
   *   be specified for this to take effect
   * - soft: The browser ensures that all line breaks in the entered value are
   *   a CR+LF pair, but no additional line breaks are added to the value.
   *
   *  If this attribute is not specified, soft is its default value.
   */
  wrap?: StringAttribute<"hard" | "soft">;
};

type OutputAttributes = Attributes & {
  /**
   * A space-separated list of other elements' ids, indicating that those
   * elements contributed input values to (or otherwise affected) the
   * calculation.
   */
  for?: StringAttribute;
  /**
   * The <form> element to associate the output with (its form owner). The
   * value of this attribute must be the id of a <form> in the same document.
   * (If this attribute is not set, the <output> is associated with its
   * ancestor <form> element, if any.)
   *
   * This attribute lets you associate <output> elements to <form>s anywhere
   * in the document, not just inside a <form>. It can also override an
   * ancestor <form> element. The <output> element's name and content are not
   * submitted when the form is submitted.
   */
  form?: StringAttribute;
  /**
   * The element's name. Used in the form.elements API.
   */
  name?: StringAttribute;
};

type DetailsAttributes = Attributes & {
  /**
   * This Boolean attribute indicates whether the details — that is, the
   * contents of the <details> element — are currently visible. The details
   * are shown when this attribute exists, or hidden when this attribute is
   * absent. By default this attribute is absent which means the details are
   * not visible.
   */
  open?: BooleanAttribute;
  /**
   * This attribute enables multiple <details> elements to be connected, with
   * only one open at a time. This allows developers to easily create UI
   * features such as accordions without scripting.
   *
   * The name attribute specifies a group name — give multiple <details>
   * elements the same name value to group them. Only one of the grouped
   * <details> elements can be open at a time — opening one will cause
   * another to close. If multiple grouped <details> elements are given the
   * open attribute, only the first one in the source order will be rendered
   * open.
   */
  name?: StringAttribute;
};

type PakertajaElement = Node | boolean | null | undefined | (() => string);

type PakertajaArgument<A extends Attributes = Attributes> =
  | Node
  | string
  | A
  | null
  | undefined
  | PakertajaElement[];

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

  fragment: (...args: PakertajaElement[]) => DocumentFragment;

  append: (root: Node, ...args: PakertajaElement[]) => Node;
  prepend: (root: Node, ...args: PakertajaElement[]) => Node;

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
