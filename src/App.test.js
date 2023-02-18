import { render, screen } from '@testing-library/react';
import App from './App';

test('shuffle array', () => {
  let villagers = ['pietro', 'eunice', 'chrissy', 'broccolo', 'dizzy', 'marshal', 'merengue', 'nibbles']
  let villagersOriginal = ['pietro', 'eunice', 'chrissy', 'broccolo', 'dizzy', 'marshal', 'merengue', 'nibbles']
  function shuffleArray(arr) {
    let i, j, index
    for (index = arr.length-1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1))
      i = arr[index]
      arr[index] = arr[j]
      arr[j] = i
    }
    return arr
  }
  expect(shuffleArray(villagers)).not.toEqual(villagersOriginal);
});

