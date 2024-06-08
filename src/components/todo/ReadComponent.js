// ReadComponent는 특정한 번호(tno)의 값에 의해서 todoApoi.js의 getOne()을 호출하도록 구성
// useEffect를 사용해서 번호가 변경되었을 때만 Axios를 이용하는 getOne()을 호출하도록 구성
// 비동기 통신으로 가져온 데이터는 컴포넌트 상태로 반영한다.

import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
//import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "", // 책에서는 writer, api에 어떻게 설정했는지에 따라 달라짐
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState); //아직 todo는 사용하지 않음

  // 이동과 관련된 기능은 모두 useCustomMove()
  const { moveToList, moveToModify } = useCustomMove();

  // 어떤 상황이 되었을 때 아래 코드가 동작할 것인가?
  // 렌더링이 일어나더라도 tno가 바뀌지 않으면 호출하지 않는다.
  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4 ">
      {makeDiv("Tno", todo.tno)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Due Date", todo.dueDate)}
      {makeDiv("Complete", todo.complete ? "Completed" : "Not Yet")}

      {/* button start */}
      <div className="flex justify-end p-4">
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={() => moveToList()}
        >
          List
        </button>

        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={() => moveToModify(tno)}
        >
          Modify
        </button>
      </div>
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
