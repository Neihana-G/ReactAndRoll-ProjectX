import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // ------ CONSTANTS -------- //
    const [authed, setAuthed] = useState("");
    const [loadingState, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const Navigate = useNavigate();
    axios.defaults.withCredentials = true;

    // -----ON PAGE LOAD, check if user is logged in and get user data
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    // Passes through the JWT token to check if user is logged in and who the user is
    const getUserData = () => {
        axios
            .get("http://localhost:4000/api/load-user", {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setAuthed(res.data.userState);
                    setUserData(res.data.result[0]);
                } else {
                    setAuthed("");
                }
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setAuthed("");
                setUserData({});
                console.log(err);
            });
    };

    //Login function
    const login = async (endpoint, email, password, errorFunction) => {
        console.log("login");
        setLoading(true);
        axios
            .post(`http://localhost:4000/api/${endpoint}`, {
                email,
                password,
                withCredentials: true,
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    setAuthed(res.data.userState);
                    setLoading(false);
                    localStorage.setItem("token", res.data.token);
                    document.body.style.overflowY = "scroll";
                    if (res.data.userState === "teacher") {
                        Navigate("/teacher-dashboard/progress-tracker");
                    } else {
                        Navigate("/student-profile");
                    }
                    getUserData();
                    return true;
                    // console.log("Logged in successfully");
                } else {
                    setAuthed(false);
                    setLoading(false);
                    return { message: "Unexpected error loggin in" };
                    // console.log("error logging in");
                }
            })
            .catch((err) => {
                setLoading(false);
                setAuthed(false);
                console.log(err);
                errorFunction(err.response.data.message);
                return { message: err.response.data.message };
                // console.log(err);
            });
    };
    const logout = async () => {
        localStorage.removeItem("token");
        setAuthed(false);
        setLoading(false);
        // setUserData({});
        Navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                authed,
                setAuthed,
                login,
                logout,
                loadingState,
                userData,
                getUserData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Finally creating the custom hook
export const useAuth = () => useContext(AuthContext);
