import { assert } from 'chai';

import convertTime from '../public/assets/convert_time.js';

describe('Функцию преобразующая дату и время публикации поста и текущее время в текстовый формат', function () {
  it('разница между датами менее 1 секунды', function () {
    const expectedResult = 'Только что';
    const result = convertTime('2024-05-27T12:34:56', '2024-05-27T12:34:56');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 1 секунду', function () {
    const expectedResult = '1 секунду назад';
    const result = convertTime('2024-05-27T12:34:56', '2024-05-27T12:34:57');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 5 секунд', function () {
    const expectedResult = '5 секунд назад';
    const result = convertTime('2024-05-27T12:34:50', '2024-05-27T12:34:55');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 1 минуту', function () {
    const expectedResult = '1 минуту назад';
    const result = convertTime('2024-05-27T12:34:50', '2024-05-27T12:35:40');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 25 минут', function () {
    const expectedResult = '25 минут назад';
    const result = convertTime('2024-05-27T12:10:03', '2024-05-27T12:35:40');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 1 час', function () {
    const expectedResult = '1 час назад';
    const result = convertTime('2024-05-27T12:10:03', '2024-05-27T13:05:33');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 8 часов', function () {
    const expectedResult = '8 часов назад';
    const result = convertTime('2024-05-27T12:10:03', '2024-05-27T20:48:23');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 1 день', function () {
    const expectedResult = '1 день назад';
    const result = convertTime('2024-05-27T12:10:03', '2024-05-28T14:48:23');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 3 дня', function () {
    const expectedResult = '3 дня назад';
    const result = convertTime('2024-05-15T12:10:03', '2024-05-18T10:22:23');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 1 месяц', function () {
    const expectedResult = '1 месяц назад';
    const result = convertTime('2024-05-15T12:10:03', '2024-06-10T15:22:23');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 6 месяцев', function () {
    const expectedResult = '6 месяцев назад';
    const result = convertTime('2024-03-15T11:10:03', '2024-09-10T17:22:23');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 1 год', function () {
    const expectedResult = '1 год назад';
    const result = convertTime('2023-03-15T11:10:03', '2024-09-02T17:22:23');
    assert.equal(expectedResult, result);
  });

  it('разница между датами 5 лет', function () {
    const expectedResult = '5 лет назад';
    const result = convertTime('2019-06-12T11:10:03', '2024-07-11T15:10:40');
    assert.equal(expectedResult, result);
  });
});
