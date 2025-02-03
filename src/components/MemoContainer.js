function MemoContainer({ memo, setMemo }) {
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
