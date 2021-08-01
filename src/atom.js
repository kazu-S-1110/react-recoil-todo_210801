import { atom } from 'recoil';

export const memoAtomState = atom({
  key: 'memoAtom',
  default: ['とりまデフォルトだよ〜ん'],
});
