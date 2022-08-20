export default function characterState(character) {
  if (character.health > 50 && character.health <= 100) {
    return 'healthy';
  } if (character.health >= 15 && character.health <= 50) {
    return 'wounded';
  } if (character.health < 15) {
    return 'critical';
  }
  return null;
}
