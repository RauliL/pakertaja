/* eslint-env amd, browser */

((global, factory) => {
  const Pakertaja = factory(global);

  if (typeof module === 'object' && module != null && module.exports) {
    module.exports = Pakertaja;
  } else if (typeof define === 'function' && define.amd) {
    define(() => Pakertaja);
  } else {
    const original = global.p;

    Pakertaja.noConflict = () => original;
    global.p = global.Pakertaja = Pakertaja;
  }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this, global => {
  const document = global.document;
  const entityMapping = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2f;'
  };

  /**
   * Tests whether given value is string.
   */
  function isString (value) {
    return typeof value === 'string';
  }

  /**
   * Tests whether given value is function.
   */
  function isFunction (value) {
    return typeof value === 'function';
  }

  /**
   * Tests whether given value is HTML element.
   */
  function isElement (value) {
    return typeof value === 'object' && value != null && value.nodeType === 1;
  }

  /**
   * Converts given value into string, and if it's a function, calls the
   * function with given this object and returns value returned by that
   * function.
   */
  function toStringWithCallback (thisObject, value) {
    if (isFunction(value)) {
      value = value.call(thisObject);
    }

    return value != null ? String(value) : '';
  }

  function applyStyleProperties (node, properties) {
    if (isFunction(properties)) {
      properties = properties.call(node);
    }
    if (isString(properties)) {
      node.setAttribute('style', properties);
    } else if (properties != null) {
      Object.keys(properties).forEach(key => {
        node.style[key] = toStringWithCallback(node, properties[key]);
      });
    }
  }

  function Pakertaja () {
    const node = document.createElement(arguments[0]);

    for (let i = 1, length = arguments.length; i < length; ++i) {
      const arg = arguments[i];

      if (isString(arg)) {
        node.textContent = arg;
      } else if (isElement(arg)) {
        node.appendChild(arg);
      } else if (arg != null) {
        Object.keys(arg).forEach(function (key) {
          var value = arg[key];

          if (key === 'text') {
            node.textContent = toStringWithCallback(node, value);
          } else if (key === 'html') {
            node.innerHTML = toStringWithCallback(node, value);
          } else if (key === 'style') {
            applyStyleProperties(node, value);
          } else if (/^on.+$/.test(key)) {
            node.addEventListener(key.substring(2), ev => {
              value.call(node, ev);
            });
          } else {
            node.setAttribute(key, toStringWithCallback(node, value));
          }
        });
      }
    }

    return node;
  }

  Pakertaja.escape = input => String(input).replace(/[&<>"'/]/g, s => entityMapping[s]);

  [
    // The root element
    'html',

    // Document metadata
    'head', 'title', 'base', 'link', 'meta', 'style',

    // Scripting
    'script', 'noscript',

    // Sections
    'body', 'section', 'nav', 'article', 'aside', 'h1', 'h2', 'h3', 'h4',
    'h5', 'h6', 'header', 'footer', 'address',

    // Grouping content
    'p', 'hr', 'br', 'pre', 'dialog', 'blockquote', 'ol', 'ul', 'li', 'dl',
    'dt', 'dd',

    // Text level semantics
    'a', 'q', 'cite', 'em', 'strong', 'small', 'mark', 'dfn', 'abbr',
    'time', 'progress', 'meter', 'code', 'var', 'samp', 'kbd', 'sub',
    'sup', 'span', 'i', 'b', 'bdo', 'ruby', 'rt', 'rp',

    // Edits
    'ins', 'del',

    // Embedded content
    'figure', 'img', 'iframe', 'embed', 'object', 'param', 'video', 'audio',
    'source', 'canvas', 'map', 'area',

    // Tabular data
    'table', 'caption', 'colgroup', 'col', 'tbody', 'thead', 'tfoot', 'tr',
    'td', 'th',

    // Forms
    'form', 'fieldset', 'label', 'input', 'button', 'select', 'datalist',
    'optgroup', 'option', 'textarea', 'output',

    // Interactive elements
    'details', 'command', 'bb', 'menu',

    // Miscanellaous elements
    'legend', 'div'
  ].forEach(tag => {
    Pakertaja[tag] = function () {
      const args = [tag];

      Array.prototype.push.apply(args, arguments);

      return Pakertaja.apply(null, args);
    };
  });

  return Pakertaja;
});
