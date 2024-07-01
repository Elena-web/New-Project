import { assert } from 'chai';

import validateEmail from '../public/assets/validate_email.js';

describe('Функция для проверки валидности email-адреса', function () {
  it('пустой текст', function () {
    const expectedResult = false;
    const result = validateEmail('');
    assert.equal(expectedResult, result);
  });

  it('без email', function () {
    const expectedResult = false;
    const result = validateEmail('hello');
    assert.equal(expectedResult, result);
  });

  it('вместо email ссылка на сайт', function () {
    const expectedResult = false;
    const result = validateEmail('example.com');
    assert.equal(expectedResult, result);
  });

  it('ссылка на сайт с символом "@" в начале строки', function () {
    const expectedResult = false;
    const result = validateEmail('@gmail.com');
    assert.equal(expectedResult, result);
  });

  it('ссылка на сайт с символом "@" в конце строки', function () {
    const expectedResult = false;
    const result = validateEmail('mail.ru@');
    assert.equal(expectedResult, result);
  });

  it('email содержит 2 символа "@"', function () {
    const expectedResult = false;
    const result = validateEmail('name@55@mail.ru');
    assert.equal(expectedResult, result);
  });

  it('email без символа "@"', function () {
    const expectedResult = false;
    const result = validateEmail('ivanovmail.ru');
    assert.equal(expectedResult, result);
  });

  it('email без домена', function () {
    const expectedResult = false;
    const result = validateEmail('ivanov@mail');
    assert.equal(expectedResult, result);
  });

  it('валидный email', function () {
    const expectedResult = true;
    const result = validateEmail('ivanov@gmail.com');
    assert.equal(expectedResult, result);
  });

  it('валидный email, содержащий имя пользователя с символами', function () {
    const expectedResult = true;
    const result = validateEmail('ivanov.ivan@gmail.com');
    assert.equal(expectedResult, result);
  });
});
