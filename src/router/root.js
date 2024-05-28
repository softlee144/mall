// 코드 스플링팅을 위해 import 한다.
// 지연 로딩 : 필요한 페이지만 로딩한다
import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));
const TodoList = lazy(() => import("../pages/todo/ListPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "todo",
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    // todoRouter 함수를 실행한 결과가 반환된다.
    children: todoRouter(),
  },
]);

export default root;
