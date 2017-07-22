# Pakertaja JavaScript library [![travis][travis-image]][travis-url] [![coveralls][coveralls-image]][coveralls-url] [![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/RauliL/pakertaja/master.svg
[travis-url]: https://travis-ci.org/RauliL/pakertaja
[coveralls-image]: https://coveralls.io/repos/github/RauliL/pakertaja/badge.svg
[coveralls-url]: https://coveralls.io/github/RauliL/pakertaja
[npm-image]: https://img.shields.io/npm/v/pakertaja.svg
[npm-url]: https://npmjs.org/package/pakertaja

Pakertaja is an JavaScript library which main purpose is to provide an easy way
to generate HTML from JavaScript.

Usage example
-------------

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
          onclick: ev => {
            ev.preventDefault();
            alert(`Added ${document.getElementById('quantity').value} products into cart.`);
          },
        }
      )
    )
  );
}

document.body.appendChild(renderProduct({
  title: 'Battlefield Earth DVDs',
  description: 'Critically acclaimed as one of the best movies ever made.',
}));
```
