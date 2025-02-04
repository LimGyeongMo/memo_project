import MemoList from '../MemoList';
import SideBarFooter from '../SidebarFooter';
import SideBarHeader from '../SidebarHeader';
import './index.css';
function SideBar({
  memos = [],
  selectMemoIndex,
  addMemo = () => {},
  setSelectedMemoIndex = () => {},
  deleteMemo = () => {},
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectMemoIndex={selectMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
