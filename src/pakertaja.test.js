import { describe, expect, it, vi } from "vitest";

import p from "./pakertaja";

describe("Pakertaja", () => {
  it("should be able to create DOM elements", () => {
    const elements = {
      div: p("div"),
      a: p("a"),
      br: p("br"),
    };

    Object.keys(elements).forEach((tagName) => {
      const element = elements[tagName];

      expect(element).not.toBeUndefined();
      expect(element).toHaveProperty("childNodes");
      expect(element).toHaveProperty("style");
      expect(element).toHaveProperty("nodeType", 1);
      expect(element).toHaveProperty("tagName", tagName.toUpperCase());

      expect(element.childNodes).toHaveLength(0);
      expect(element.style).toHaveLength(0);
    });
  });

  it("should be able to create text nodes", () => {
    const node = p("text", "Test.");

    expect(node).toHaveProperty("nodeType", 3);
    expect(node).toHaveProperty("textContent", "Test.");
  });

  it("should have shortcut function for creating text nodes", () => {
    const node = p.text("Test.");

    expect(node).toHaveProperty("nodeType", 3);
    expect(node).toHaveProperty("textContent", "Test.");
  });

  it("should be able to set inner text", () => {
    const elements1 = [
      p("div", "Hello!"),
      p("div", { text: "Hello!" }),
      p("div", { text: () => "Hello!" }),
    ];
    const elements2 = [
      p("div", ""),
      p("div", { text: "" }),
      p("div", { text: null }),
      p("div", { text: () => "" }),
      p("div", { text: () => null }),
    ];

    elements1.forEach((element) => {
      expect(element).toHaveProperty(["childNodes", 0, "nodeType"], 3);
      expect(element.textContent).toEqual("Hello!");
    });
    elements2.forEach((element) => {
      expect(element.textContent).toHaveLength(0);
    });
  });

  it("should be able to set inner HTML", () => {
    const elements1 = [
      p("div", { html: "<b></b>" }),
      p("div", { html: () => "<b></b>" }),
    ];
    const elements2 = [
      p("div", { html: "" }),
      p("div", { html: () => "" }),
      p("div", { html: null }),
      p("div", { html: () => null }),
    ];

    elements1.forEach((element) => {
      expect(element).toHaveProperty("innerHTML", "<b></b>");
    });
    elements2.forEach((element) => {
      expect(element.innerHTML).toHaveLength(0);
    });
  });

  it("should be able to set CSS rules", () => {
    const elements = [
      p("div", { style: { color: "red" } }),
      p("div", { style: () => ({ color: "red" }) }),
    ];

    elements.forEach((element) => {
      expect(element).toHaveProperty(["style", "color"], "red");
    });
  });

  it("should be able to set CSS rules as a string", () => {
    expect(p("div", { style: "color: red" }).getAttribute("style")).toEqual(
      "color: red"
    );
  });

  it("should be able to add event listeners", () => {
    const onClick = vi.fn();
    const element = p("button", { onclick: onClick });

    element.dispatchEvent(new MouseEvent("click"));

    expect(onClick).toBeCalled();
  });

  it("should be able to create child nodes", () => {
    const element = p("div", p("div"), p("a"), p("div"));

    expect(element).toHaveProperty("childNodes");
    expect(element.childNodes).toHaveLength(3);
    expect(element.firstChild).not.toBeUndefined();
    expect(element.firstChild).toHaveProperty("tagName", "DIV");
    expect(element.getElementsByTagName("div")).toHaveLength(2);
    expect(element.getElementsByTagName("a")).toHaveLength(1);
  });

  it("should be able to set attributes", () => {
    const element = p("a", { href: "http://goatse.cx" });

    expect(element.getAttribute).toBeTypeOf("function");
    expect(element.getAttribute("href")).toEqual("http://goatse.cx");
  });

  it("should be able to escape HTML entities", () => {
    expect(p.escape).toBeTypeOf("function");
    expect(p.escape("foo & bar")).toEqual("foo &amp; bar");
    expect(p.escape("foo < bar")).toEqual("foo &lt; bar");
    expect(p.escape("foo > bar")).toEqual("foo &gt; bar");
    expect(p.escape('foo " bar')).toEqual("foo &quot; bar");
    expect(p.escape("foo ' bar")).toEqual("foo &#39; bar");
    expect(p.escape("foo / bar")).toEqual("foo &#x2f; bar");
  });

  it("should be able to append child nodes to an existing node", () => {
    const parent = p.div("First");

    p.append(parent, p.div("Second"));

    expect(parent).toHaveProperty("textContent", "FirstSecond");
  });

  it("should be able to append text nodes to an existing node", () => {
    const parent = p.div("First");

    p.append(parent, "Second");

    expect(parent).toHaveProperty("textContent", "FirstSecond");
  });

  it("should be able to prepend child nodes to an existing node", () => {
    const parent = p.div("First");

    p.prepend(parent, p.div("Second"));

    expect(parent).toHaveProperty("textContent", "SecondFirst");
  });

  it("should be able to append text nodes to an existing node", () => {
    const parent = p.div("First");

    p.prepend(parent, () => "Second");

    expect(parent).toHaveProperty("textContent", "SecondFirst");
  });

  it("should contain shortcut functions for node creation", () => {
    ["div", "h1", "p", "a", "strong"].forEach((tagName) => {
      expect(p[tagName]).toBeTypeOf("function");

      const element = p[tagName].call(p);

      expect(element).not.toBeUndefined();
      expect(element).toHaveProperty("tagName", tagName.toUpperCase());
    });
  });
});