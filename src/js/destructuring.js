export default function getSpecialAttack(obj) {
  // Не уверен, что правильно понял суть задания, вроде функция делает то, что должна,
  // но можно было написать проще без деструктуризации
  const { special } = obj;
  const result = special.map((element) => {
    const { description = 'Описание недоступно' } = element;
    // Вот тут ESlint ругается на то, что я меняю параметр функции, это сильно критично?
    element.description = description;
    return element;
  });
  return result;
}
