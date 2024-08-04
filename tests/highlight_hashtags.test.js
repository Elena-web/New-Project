import { assert } from 'chai';

import highlightHashtags from '../public/assets/highlight_hashtags.js';

describe('Функция для замены хэш-тегов на ссылку', function () {
  it('пустой текст', function () {
    const expectedResult = '';
    const result = highlightHashtags('');
    assert.equal(expectedResult, result);
  });

  it('без  хэш-тегов', function () {
    const expectedResult = 'Всем привет!';
    const result = highlightHashtags('Всем привет!');
    assert.equal(expectedResult, result);
  });

  it('с одним хэш-тегом', function () {
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> ?';
    const result = highlightHashtags('Кто еще изучает #javascript ?');
    assert.equal(expectedResult, result);
  });

  it('с двумя хэш-тегами', function () {
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> и <a href="/search?tag=pyton">#pyton</a> ?';
    const result = highlightHashtags('Кто еще изучает #javascript и #pyton ?');
    assert.equal(expectedResult, result);
  });

  it('хэш-теги разделены запятыми', function () {
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> , <a href="/search?tag=pyton">#pyton</a> , <a href="/search?tag=java">#java</a> ?';
    const result = highlightHashtags('Кто еще изучает #javascript , #pyton , #java ?');
    assert.equal(expectedResult, result);
  });

  it('хэш-теги с разными регистрами', function () {
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> и <a href="/search?tag=PYTON">#PYTON</a> ?';
    const result = highlightHashtags('Кто еще изучает #javascript и #PYTON ?');
    assert.equal(expectedResult, result);
  });

  it('хэш-теги с символами', function () {
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript_library">#javascript_library</a> и <a href="/search?tag=python">#python</a> ?';
    const result = highlightHashtags('Кто еще изучает #javascript_library и #python ?');
    assert.equal(expectedResult, result);
  });

  it('несколько хэш-тегов подряд', function () {
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a><a href="/search?tag=pyton">#pyton</a><a href="/search?tag=java">#java</a> ?';
    const result = highlightHashtags('Кто еще изучает #javascript#pyton#java ?');
    assert.equal(expectedResult, result);
  });
});
