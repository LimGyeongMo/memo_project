import { useCallback, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/Sidebar';
import { setItem, getItem } from './components/lib/storge';
import debounce from 'lodash.debounce';

const debouncedSetItem = debounce(setItem, 500);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || {});

  const [selectMemoIndex, setSelectMemoIndex] = useState(0);
  const setMemo = useCallback(
    (memos) => {
      setMemos((prevMemos) => {
        console.log('a', selectMemoIndex);
        debouncedSetItem('memo', memos);
        return prevMemos.map((m, index) =>
          index === selectMemoIndex ? { ...memos } : m,
        );
      });
    },
    [selectMemoIndex],
  );

  const addMemo = useCallback(() => {
    const now = new Date().getTime();
    const newMemos = [
      ...memos,
      {
        title: 'untitled',
        content: '',
        createAt: now,
        updateAt: now,
      },
    ];
    setMemos(newMemos);
    setSelectMemoIndex(memos.length);
    debouncedSetItem('memo', newMemos);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      const newMemo = [...memos];

      newMemo.splice(index, 1);

      setMemos(newMemo);

      if (index === selectMemoIndex) {
        setSelectMemoIndex(0);
      }
      debouncedSetItem('memo', newMemo);
      // setMemos((prevMemos) => prevMemos.filter((_, index) => index!== selectMemoIndex));
      // if (selectMemoIndex >= memos.length) {
      //   setSelectMemoIndex(memos.length - 1);
      // }
    },
    [memos, selectMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectMemoIndex={selectMemoIndex}
        setSelectedMemoIndex={setSelectMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
