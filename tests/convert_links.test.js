import { assert } from 'chai';

import convertLinksToHTML from '../public/assets/convert_links.js';

describe('Функция для преобразования ссылок', function () {
  it('пустой текст', function () {
    const expectedResult = '';
    const result = convertLinksToHTML('');
    assert.equal(expectedResult, result);
  });

  it('без ссылок', function () {
    const expectedResult = 'Всем привет!';
    const result = convertLinksToHTML('Всем привет!');
    assert.equal(expectedResult, result);
  });

  it('с ссылкой без протокола', function () {
    const expectedResult = 'Посетите наш сайт <a href="example.com">example.com</a>';
    const result = convertLinksToHTML('Посетите наш сайт example.com');
    assert.equal(expectedResult, result);
  });

  it('с ссылкой с протоколом', function () {
    const expectedResult = 'Посетите наш сайт <a href="http://example.com">http://example.com</a>';
    const result = convertLinksToHTML('Посетите наш сайт http://example.com');
    assert.equal(expectedResult, result);
  });

  it('с двумя ссылками', function () {
    const expectedResult = 'Подробная информация на наших сайтах: <a href="www.example.com">www.example.com</a> и <a href="example.ru">example.ru</a>';
    const result = convertLinksToHTML('Подробная информация на наших сайтах: www.example.com и example.ru');
    assert.equal(expectedResult, result);
  });

  it('ссылки с поддоменами', function () {
    const expectedResult = 'Подробная информация на наших сайтах: <a href="shop.adidas.com">shop.adidas.com</a> и <a href="ru.adidas.com">ru.adidas.com</a>';
    const result = convertLinksToHTML('Подробная информация на наших сайтах: shop.adidas.com и ru.adidas.com');
    assert.equal(expectedResult, result);
  });

  it('ссылка с протоколом, но без домена', function () {
    const expectedResult = 'Посетите наш сайт <a href="http://example">http://example</a>';
    const result = convertLinksToHTML('Посетите наш сайт http://example');
    assert.equal(expectedResult, result);
  });
});
