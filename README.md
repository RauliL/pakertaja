# Pakertaja JavaScript library [![travis][travis-image]][travis-url] [![coveralls][coveralls-image]][coveralls-url] [![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/RauliL/pakertaja/master.svg
[travis-url]: https://travis-ci.org/RauliL/pakertaja
[coveralls-image]: https://coveralls.io/repos/github/RauliL/pakertaja/badge.svg
[coveralls-url]: https://coveralls.io/github/RauliL/pakertaja
[npm-image]: https://img.shields.io/npm/v/pakertaja.svg
[npm-url]: https://npmjs.org/package/pakertaja

Pakertaja is a minimal JavaScript library for constructing DOM elements.

## Example

```JavaScript
function renderProduct(product) {
  return p.div(
    { class: 'product' },

    p.h1(product.title),

    p.p(product.description),

    p.form(
      p.label({ for: 'quantity' }, 'Quantity: '),
      p.input({ type: 'number', id: 'quantity', min: 10 }),
      p.button(
        'Add to cart',
        {
          type: 'submit',
          onclick: (ev) => {
            ev.preventDefault();
            alert(`Added ${document.getElementById('quantity').value} products into cart.`);
          },
        }
      )
    )
  );
}

p.append(document.body, renderProduct({
  title: 'Battlefield Earth DVDs',
  description: 'Critically acclaimed as one of the best movies ever made.',
}));
```

## API

### p( tagName[, ...args ] )

Constructs and returns HTML element of given `tagName`, such as `div`, `h1` and
so on. Optional arguments might consist from other HTML elements which will be
inserted as child elements of the created parent element, text content or
objects which contain HTML attributes for the created element.

Shortcuts for most HTML5 elements exist for this function, which allows to
create HTML elements of certain type more conveniently. These shortcuts are:
`html`, `head`, `title`, `base`, `link`, `meta`,
`style`, `script`, `noscript`, `body`, `section`, `nav`, `article`, `aside`,
`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `footer`, `address`, `p`, `hr`,
`br`, `pre`, `dialog`, `blockquote`, `ol`, `ul`, `li`, `dl`, `dt`, `dd`, `a`,
`q`, `cite`, `em`, `strong`, `small`, `mark`, `dfn`, `abbr`, `time`, `progress`,
`meter`, `code`, `var`, `samp`, `kbd`, `sub`, `sup`, `span`, `i`, `b`, `bdo`,
`ruby`, `rt`, `rp`, `ins`, `del`, `figure`, `img`, `iframe`, `embed`, `object`,
`param`, `video`, `audio`, `source`, `canvas`, `map`, `area`, `table`,
`caption`, `colgroup`, `col`, `tbody`, `thead`, `tfoot`, `tr`, `td`, `th`,
`form`, `fieldset`, `label`, `input`, `button`, `select`, `datalist`,
`optgroup`, `option`, `textarea`, `output`, `details`, `command`, `bb`, `menu`,
`legend` and `div`.

### p.append( root[, ...children ] )

Inserts given child elements to the end of given root element. Child elements
might consist from other HTML elements, strings or function callbacks which
return strings.

### p.prepend( root[, ...children ] )

Inserts given child elements to the beginning of given root element. Child
elements might consist from other HTML elements, strings or function callbacks
which return strings.

### p.escape( input )

Escapes HTML entities from given string input and returns result.
