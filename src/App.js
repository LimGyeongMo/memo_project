import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'First Memo',
      content: 'This is the first memo.',
      createAt: 124321413124312,
      updateAt: 312312547986678,
    },
    {
      title: 'Second Memo',
      content: 'This is the second memo.',
      createAt: 124321413124312,
      updateAt: 312312547986678,
    },
  ]);

  const [selectMemoIndex, setSelectMemoIndex] = useState(0);
  const setMemo = (memo) => {
    memos[selectMemoIndex] = memo;

    setMemos([...memos]);
  };

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer memo={memos[selectMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
