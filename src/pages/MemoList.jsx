import { useRecoilValue } from 'recoil';
import { memoAtomState } from '../atom';
const MemoList = () => {
  const memos = useRecoilValue(memoAtomState);
  console.log(memos);
  return <div>{memos}</div>;
};

export default MemoList;
