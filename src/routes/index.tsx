import { createBrowserRouter } from "react-router";
import App from "../App";
import Tasks from "../pages/Tasks";
import User from "../pages/User";


const router =createBrowserRouter([
    {
        path: "/",
        // element: <App />,
        Component: App,
        children: [
            {
                index: true,
                // path: "/tasks",
                element: <Tasks />,
            },
            {
                path: "/tasks",
                element: <Tasks />,
            },
            {
                path: "/users",
                Component: User
            },
        ]
    },
]);

export default router;