const document = (typeof window !== 'undefined' ? window : global).document;
const entityMapping = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '/': '&#x2f;'
};


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
  if (typeof value === 'function') {
    value = value.call(thisObject);
  }

  return value != null ? String(value) : '';
}

function applyStyleProperties (node, properties) {
  if (typeof properties === 'function') {
    properties = properties.call(node);
  }
  if (typeof properties === 'string') {
    node.setAttribute('style', properties);
  } else if (properties != null) {
    Object.keys(properties).forEach(key => {
      node.style[key] = toStringWithCallback(node, properties[key]);
    });
  }
}

function Pakertaja () {
  const node = (
    arguments[0] === 'text'
      ? document.createTextNode('')
      : document.createElement(arguments[0])
  );

  for (let i = 1, length = arguments.length; i < length; ++i) {
    const arg = arguments[i];

    if (typeof arg === 'string') {
      node.textContent = arg;
    } else if (isElement(arg)) {
      node.appendChild(arg);
    } else if (arg != null) {
      Object.keys(arg).forEach((key) => {
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

Pakertaja.append = (root, ...children) => {
  const fragment = document.createDocumentFragment();

  children.forEach((child) => fragment.appendChild(
    isElement(child) ? child : document.createTextNode(toStringWithCallback(root, child))
  ));
  root.appendChild(fragment);

  return root;
};

Pakertaja.prepend = (root, ...children) => {
  const fragment = document.createDocumentFragment();

  children.forEach((child) => fragment.appendChild(
    isElement(child) ? child : document.createTextNode(toStringWithCallback(root, child))
  ));
  root.insertBefore(fragment, root.firstChild);

  return root;
};

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
  'legend', 'div',

  // Text node
  'text'
].forEach(tag => {
  Pakertaja[tag] = function () {
    const args = [tag];

    Array.prototype.push.apply(args, arguments);

    return Pakertaja.apply(null, args);
  };
});

export default Pakertaja;
