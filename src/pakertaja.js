/* istanbul ignore next */
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
  return value != null && typeof value === 'object' && (
    value.nodeType === 1 ||
    value.nodeType === 3 ||
    value.nodeType === 11
  );
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
    for (const key of Object.keys(properties)) {
      node.style[key] = toStringWithCallback(node, properties[key]);
    }
  }
}

function applyDataProperties (node, properties) {
  if (typeof properties === 'function') {
    properties = properties.call(node);
  }
  if (properties != null) {
    for (const key of Object.keys(properties)) {
      node.dataset[key] = toStringWithCallback(node, properties[key]);
    }
  }
}

function process (root, arg) {
  if (isElement(arg)) {
    root.appendChild(arg);
  } else if (Array.isArray(arg)) {
    for (const child of arg) {
      process(root, child);
    }
  } else if (arg != null && arg !== false) {
    root.appendChild(document.createTextNode(toStringWithCallback(root, arg)));
  }
}

function Pakertaja () {
  const node = (
    (arguments[0] === 'text' || arguments[0] === Pakertaja.text)
      ? document.createTextNode('')
      : (arguments[0] === 'fragment' || arguments[0] === Pakertaja.fragment)
      ? document.createDocumentFragment()
      : document.createElement(arguments[0])
  );

  for (let i = 1, length = arguments.length; i < length; ++i) {
    const arg = arguments[i];

    if (typeof arg === 'string') {
      node.textContent = arg;
    } else if (isElement(arg)) {
      node.appendChild(arg);
    } else if (Array.isArray(arg)) {
      for (const child of arg) {
        process(node, child);
      }
    } else if (arg != null) {
      for (const key of Object.keys(arg)) {
        const value = arg[key];

        if (key === 'text') {
          node.textContent = toStringWithCallback(node, value);
        } else if (key === 'html') {
          node.innerHTML = toStringWithCallback(node, value);
        } else if (key === 'style') {
          applyStyleProperties(node, value);
        } else if (key === 'data') {
          applyDataProperties(node, value);
        } else if (/^on.+$/.test(key)) {
          node.addEventListener(key.substring(2), ev => {
            value.call(node, ev);
          });
        } else if (value === true) {
          node.setAttribute(key, key);
        } else if (value === false || value == null) {
          node.removeAttribute(key);
        } else {
          node.setAttribute(key, toStringWithCallback(node, value));
        }
      }
    }
  }

  return node;
}

Pakertaja.escape = input => String(input).replace(/[&<>"'/]/g, s => entityMapping[s]);

Pakertaja.fragment = (...children) => {
  const fragment = document.createDocumentFragment();

  for (const child of children) {
    process(fragment, child);
  }

  return fragment;
};

Pakertaja.append = (root, ...children) => {
  root.appendChild(Pakertaja.fragment(...children));

  return root;
};

Pakertaja.prepend = (root, ...children) => {
  root.insertBefore(Pakertaja.fragment(...children), root.firstChild);

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
