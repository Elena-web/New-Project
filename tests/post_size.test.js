import { assert } from 'chai';

import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', function () {
  it('без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });

  it('без ссылок, но содержит доменное имя', function () {
    const expectedResult = 110;
    const result = postSize('.info domains are popular choices for websites that aim to provide accurate and reliable information to users.');
    assert.equal(expectedResult, result);
  });

  it('без ссылок, но содержит протокол', function () {
    const expectedResult = 32;
    const result = postSize('часто используемый протокол www.');
    assert.equal(expectedResult, result);
  });

  it('содержит ссылку с протоколом', function () {
    const expectedResult = 53;
    const result = postSize('Посетите наш сайт www.example.com и дайте нам знать, что вы думаете.');
    assert.equal(expectedResult, result);
  });

  it('содержит ссылку без протокола', function () {
    const expectedResult = 53;
    const result = postSize('Посетите наш сайт example.com и дайте нам знать, что вы думаете.');
    assert.equal(expectedResult, result);
  });

  it('после ссылки стоит точка', function () {
    const expectedResult = 19;
    const result = postSize('Посетите наш сайт www.example.com.');
    assert.equal(expectedResult, result);
  });

  it('содержит 2 ссылки', function () {
    const expectedResult = 24;
    const result = postSize('Посетите эти сайты: http://example.ru и example.by.');
    assert.equal(expectedResult, result);
  });

  it('содержит 2 ссылки через запятую', function () {
    const expectedResult = 18;
    const result = postSize('Посетите сайты http://example.ru, example.by.');
    assert.equal(expectedResult, result);
  });

  it('ссылка заключена в скобки', function () {
    const expectedResult = 21;
    const result = postSize('Посетите этот сайт (http://example.ru)');
    assert.equal(expectedResult, result);
  });

  it('ссылка заключена в кавычки', function () {
    const expectedResult = 21;
    const result = postSize('Посетите этот сайт "http://example.ru"');
    assert.equal(expectedResult, result);
  });

  it('содержит ссылку с протоколом и перед ссылкой стоит цифра', function () {
    const expectedResult = 1;
    const result = postSize('1http://example.ru');
    assert.equal(expectedResult, result);
  });

  it('содержит слово, которое начинается с протокола, но без доменного имени', function () {
    const expectedResult = 33;
    const result = postSize('Посетите этот сайт http://example');
    assert.equal(expectedResult, result);
  });
});
