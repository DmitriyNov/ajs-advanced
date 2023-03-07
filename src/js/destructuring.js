export default function getSpecialAttack({ special } = obj) {
  return special.map((element) => {
    const { description = 'Описание недоступно' } = element;
    element.description = description;
    return element;
  });
}
