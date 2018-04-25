const should = require('should');
const nodom = require('nodom');

global.document = new nodom.Document();

describe('Pakertaja', () => {
  const p = require('./pakertaja');

  it('should be able to create DOM elements', () => {
    const elements = {
      'div': p('div'),
      'a': p('a'),
      'br': p('br')
    };

    Object.keys(elements).forEach(tagName => {
      const element = elements[tagName];

      should.exist(element);
      should.exist(element.childNodes);
      should.exist(element.style);
      should.exist(element.nodeType);
      should.exist(element.tagName);

      should.strictEqual(element.tagName, tagName);
      should.strictEqual(element.nodeType, 1);
      element.childNodes.should.be.empty();
      element.style.should.be.empty();
    });
  });

  it('should be able to set inner text', () => {
    const elements1 = [
      p('div', 'Hello!'),
      p('div', { text: 'Hello!' }),
      p('div', { text: () => 'Hello!' })
    ];
    const elements2 = [
      p('div', ''),
      p('div', { text: '' }),
      p('div', { text: null }),
      p('div', { text: () => '' }),
      p('div', { text: () => null })
    ];

    elements1.forEach(element => {
      should.exist(element.childNodes);
      should.exist(element.childNodes[0]);
      should.strictEqual(element.childNodes[0].nodeType, 3);
      should.exist(element.textContent);
      should.strictEqual(element.textContent, 'Hello!');
    });
    elements2.forEach(element => {
      should.exist(element.textContent);
      element.textContent.should.be.empty();
    });
  });

  it('should be able to set inner HTML', () => {
    const elements1 = [
      p('div', { html: '<b></b>' }),
      p('div', { html: () => '<b></b>' })
    ];
    const elements2 = [
      p('div', { html: '' }),
      p('div', { html: () => '' }),
      p('div', { html: null }),
      p('div', { html: () => null })
    ];

    elements1.forEach(element => {
      should.exist(element.innerHTML);
      element.innerHTML.should.not.be.empty();
      should.strictEqual(element.innerHTML, '<b></b>');
    });
    elements2.forEach(element => {
      should.exist(element.innerHTML);
      element.innerHTML.should.be.empty();
    });
  });

  it('should be able to set CSS rules', () => {
    const elements = [
      p('div', { style: { color: 'red' } }),
      p('div', { style: () => ({ color: 'red' } )})
    ];

    elements.forEach(element => {
      element.style.should.not.be.empty();
      element.style.color.should.not.be.empty();
    });
  });

  it('should be able to set CSS rules as a string', () => {
    should.strictEqual(p('div', { style: 'color: red' }).getAttribute('style'), 'color: red');
  });

  it('should be able to create child nodes', () => {
    const element = p('div', p('div'), p('a'), p('div'));

    should.exist(element.childNodes);
    should.strictEqual(element.childNodes.length, 3);
    should.exist(element.firstChild);
    should.exist(element.firstChild.tagName);
    should.strictEqual(element.firstChild.tagName, 'div');
    should.strictEqual(element.getElementsByTagName('div').length, 2);
    should.strictEqual(element.getElementsByTagName('a').length, 1);
  });

  it('should be able to set attributes', () => {
    const element = p('a', { href: 'http://goatse.cx' });

    should.exist(element.getAttribute);
    should.strictEqual(element.getAttribute('href'), 'http://goatse.cx');
  });

  it('should be able to escape HTML entities', () => {
    p.escape.should.be.Function();
    should.strictEqual(p.escape('foo & bar'), 'foo &amp; bar');
    should.strictEqual(p.escape('foo < bar'), 'foo &lt; bar');
    should.strictEqual(p.escape('foo > bar'), 'foo &gt; bar');
    should.strictEqual(p.escape('foo " bar'), 'foo &quot; bar');
    should.strictEqual(p.escape('foo \' bar'), 'foo &#39; bar');
    should.strictEqual(p.escape('foo / bar'), 'foo &#x2f; bar');
  });

  it('should contain shortcut functions for node creation', () => {
    ['div', 'h1', 'p', 'a', 'strong'].forEach(tagName => {
      should.exist(p[tagName]);
      p[tagName].should.be.Function();

      const element = p[tagName].call(p);
      should.exist(element);
      should.exist(element.tagName);
      should.strictEqual(element.tagName, tagName);
    });
  });
});
