// ReadComponent는 특정한 번호(tno)의 값에 의해서 todoApoi.js의 getOne()을 호출하도록 구성
// useEffect를 사용해서 번호가 변경되었을 때만 Axios를 이용하는 getOne()을 호출하도록 구성
// 비동기 통신으로 가져온 데이터는 컴포넌트 상태로 반영한다.

import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
//import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  content: "", // 책에서는 writer, api에 어떻게 설정했는지에 따라 달라짐
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState); //아직 todo는 사용하지 않음

  // 어떤 상황이 되었을 때 아래 코드가 동작할 것인가?
  // 렌더링이 일어나더라도 tno가 바뀌지 않으면 호출하지 않는다.
  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return <div></div>;
};

export default ReadComponent;
