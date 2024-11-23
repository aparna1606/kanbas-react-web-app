import { useSelector } from "react-redux";

export default function ProtectedEdit({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return children;
    } 
    // else {
    //     return <Navigate to="/Kanbas/Account/Signin" />;
    // }
}