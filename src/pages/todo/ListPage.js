import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  // ListComponent에서 searchParams, page, size 다 사용하고 있으므로 기존 코드 삭제
  // 컴포넌트 중심으로 코드 개편

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo List Page Component</div>

      <ListComponent />
    </div>
  );
};

export default ListPage;
