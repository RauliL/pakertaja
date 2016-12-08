Pakertaja JavaScript library
============================

Pakertaja is an JavaScript library which main purpose is to provide an easy way
to generate HTML from JavaScript.

Usage example
-------------

```JavaScript
function renderProduct(product) {
  return p.div(
    {class: "product"},

    p.h1(product.title),

    p.p(product.description),

    p.form(
      p.label({for: "quantity"}, "Quantity: "),
      p.input({type: "number", id: "quantity", min: 10}),
      p.button(
        "Add to cart",
        {
          type: "submit",
          onclick: function(ev) {
            ev.preventDefault();
            alert("Added " + document.getElementById("quantity").value + " products into cart.");
          },
        }
      )
    )
  );
}

document.body.appendChild(renderProduct({
  title: "Battlefield Earth DVDs",
  description: "Critically acclaimed as one of the best movies ever made.",
}));
```
