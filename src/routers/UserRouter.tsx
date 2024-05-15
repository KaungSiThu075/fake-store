import { RouteObject } from "react-router-dom";
import { DetailPageLayout, HomePageLayout } from "../layouts";
import { HomePage, DetailPage } from "../pages";

const userRouter: RouteObject[] = [
  {
    path: "/",
    element: <HomePageLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/product/:id",
    element: <DetailPageLayout />,
    children: [{ index: true, element: <DetailPage /> }],
  },
];

export default userRouter;
