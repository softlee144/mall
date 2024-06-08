import { useCallback } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  const { tno } = useParams();

  // useNavigate : 동적으로 이동하는 처리
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  const queryStr = createSearchParams({ page, size }).toString();

  // 내가 props로 써야 할 것과 router로 써야 할 것을 구분하면서 공부해야 한다.
  const moveToModify = useCallback(
    (tno) => {
      navigate({
        pathname: `/todo/modify/${tno}`,
        search: queryStr,
      });
    },
    [tno, page, size]
  );

  const moveToList = useCallback(() => {
    navigate({ pathname: `/todo/list`, search: queryStr });
  }, [page, size]);

  return (
    <div className="text-3xl font-extrabold">
      Todo Read Page Component {tno}
      <ReadComponent tno={tno}></ReadComponent>
    </div>
  );
};

export default ReadPage;
