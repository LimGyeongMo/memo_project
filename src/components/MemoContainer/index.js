import './index.css';

function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div>
        <h1>메모가 없습니다</h1>
        <h2>새로운 메모를 추가해주세요.</h2>
      </div>
    );
  }
  return (
    <div className="MemoContainer">
      <div>
        <input
          type="text"
          className="MemoContainer_Title"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updateAt: new Date().getDate(),
            });
          }}
        />
      </div>

      <div>
        <textarea
          className="MemoContainer_Content"
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updateAt: new Date().getDate(),
            });
          }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;
