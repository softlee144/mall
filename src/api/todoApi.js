import axios from "axios";
/*
 * ajax 통신하는 함수 - 이 함수를 이용해서 컴포넌트를 만들 예정
 */
export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);

  return res.data;
};

// 파라미터를 여러 개 받을 때는 객체 스타일로 받는게 편하다.
// 바로 사용하는게 아니더라도 나중에 확장성을 생각해야 하기 때문이다.
// 객체 스타일로 받으면 나중에 파라미터의 개수가 늘어나지 않아도 되기 때문이다.
export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  const res = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });

  // aysnc 함수의 모든 리턴은 비동기, 즉 promise이다.
  return res.data;
};

export const postAdd = async (todoObj) => {
  // 기존에는 JSON 데이터를 서버로 보낼 때 JSON.stringfy(obj) 등의 처리가 필요하였음.
  // axios에서는 그대로 보내면 됨.
  const res = await axios.post(`${prefix}/`, todoObj);

  return res.data;
};
