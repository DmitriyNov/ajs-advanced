export default function sortPropertys(obj, order) {
  const resultOrder = [];
  const resultAlphabet = [];
  for (const prop in obj) {
    if (order.includes(prop)) {
      resultOrder[order.indexOf(prop)] = {
        key: prop,
        value: obj[prop],
      };
    } else {
      resultAlphabet.push({
        key: prop,
        value: obj[prop],
      });
    }
  }
  resultAlphabet.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
      // Тут ESlint ругается что else после return, но это же разные части логического выражения
    } else {
      return -1;
    }
  });
  return resultOrder.concat(resultAlphabet);
}
// Получилось так себе, приходится делить массив на две части и потом сортировать вторую
// Нигде не нашёл, как в for in получить доступ к следующему свойству, можно было бы проще написать
