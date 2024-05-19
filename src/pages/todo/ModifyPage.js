/*
 * 수정의 경우 수정된 결과를 확인할 수 있는 조회 화면으로 다시 이동이 가능해야 하고,
   삭제의 경우 목록 화면으로 이동하는 경우가 많다. 
   이를 위한 기능들을 useNavigate() 를 이용해서 작성한다.
 */

import { useNavigate } from "react-router-dom";

const ModifyPage = ({ tno }) => {
  const navigate = useNavigate();

  const moveToRead = () => {
    navigate({ pathname: "/todo/read/${tno}" });
  };

  const moveToList = () => {
    navigate({ pathname: "/todo/list" });
  };
  return <div className="text-3xl font-extrabold">Todo Modify Page</div>;
};

export default ModifyPage;
