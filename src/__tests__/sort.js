import sort from '../js/for-in';

const dataList = [
  [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ['name', 'level'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    {
      name: 'лучник',
      health: 50,
      level: 1,
      attack: 50,
      defence: 20,
    },
    ['level', 'attack', 'health'],
    [
      { key: 'level', value: 1 },
      { key: 'attack', value: 50 },
      { key: 'health', value: 50 },
      { key: 'defence', value: 20 },
      { key: 'name', value: 'лучник' },
    ],
  ],
];
const handler = test.each(dataList);
handler('Testing the sort function', (obj, order, expected) => {
  const result = sort(obj, order);
  expect(result).toEqual(expected);
});
