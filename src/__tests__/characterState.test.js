import characterState from '../characterState';

const character1 = { name: 'Маг', health: 90 };
const character2 = { name: 'Маг', health: 49 };
const character3 = { name: 'Маг', health: 1 };
const character4 = { name: 'Маг', health: 101 };

test('test characterState function', () => {
  expect(characterState(character1)).toBe('healthy');
});

test('test characterState function', () => {
  expect(characterState(character2)).toBe('wounded');
});

test('test characterState function', () => {
  expect(characterState(character3)).toBe('critical');
});

test('test characterState function', () => {
  expect(characterState(character4)).toBeNull();
});
