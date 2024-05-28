// ReadComponent는 특정한 번호(tno)의 값에 의해서 todoApoi.js의 getOne()을 호출하도록 구성
// useEffect를 사용해서 번호가 변경되었을 때만 Axios를 이용하는 getOne()을 호출하도록 구성
// 비동기 통신으로 가져온 데이터는 컴포넌트 상태로 반영한다.

import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
//import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState); //아직 todo는 사용하지 않음

  //const { moveToList, moveToModify } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div className="border-2 border-sky-400 mt-10 m-2 p-4 ">
      {makeDiv("Tno", todo.tno)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Due Date", todo.dueDate)}
      {makeDiv("Complete", todo.complete ? "Completed" : "Not Yet")}
    </div>
  );
};

const makeDiv = (title, value) => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-right font-bold">{title}</div>
      <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);

export default ReadComponent;
