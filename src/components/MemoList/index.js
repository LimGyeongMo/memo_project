import MemoItem from '../MemoItem';

function MemoList({
  memos,
  selectMemoIndex,
  setSelectedMemoIndex = () => {},
  deleteMemo = () => {},
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={() => {
            console.log('isSelected:', index === selectMemoIndex);
            setSelectedMemoIndex(index);
          }}
          onClickDelete={(e) => {
            console.log('onClickDelete:');
            deleteMemo(index);
            e.preventDefault(); // 이 2개가 클릭이벤트롤 가져 오는거 같음
            e.stopPropagation();
          }}
          isSelected={index === selectMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
