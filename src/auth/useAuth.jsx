import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authed, setAuthed] = useState('');
    const [loadingState, setLoading] = useState(false);
    const [userData, setUserData] = useState({})
    const Navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:4000/api/load-user", {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            })
            .then((res) => {
                console.log(res);
                setLoading(false);
                if (res.status === 200) {
                    setAuthed(true);
                    // getUserData()
                } else {
                    setAuthed(false);
                }
            })
            .catch((err) => {
                setLoading(false);
                setAuthed(false);
                console.log(err);
            });
    }, []);

    const login = async (endpoint, email, password) => {

        console.log('login')
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
                    if(res.data.userState === 'teacher'){
                        Navigate('/teacher-dashboard/progress-tracker')
                    }else{
                        Navigate('/student-profile')
                    }
                    
                    console.log("Logged in successfully");
                } else {
                    setAuthed(false);
                    setLoading(false);
                    console.log("error loggin in");
                }
            })
            .catch((err) => {
                setLoading(false);
                setAuthed(false);
                console.log(err);
            });
    };
    const logout = async () => {
        localStorage.removeItem("token");
        setAuthed(false);
        setLoading(false);
        Navigate("/");
    };

    // const getUserData = async () => {
    //         axios
    //         .get("http://localhost:4000/api/loadUser", {
    //             headers: {
    //                 "x-access-token": localStorage.getItem("token"),
    //             },
    //         })
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 setUserData(res.data[0]);
    //             }
    //         })
    //         .catch((err) => console.log(err));
    // }

    return (
        <AuthContext.Provider
            value={{ authed, setAuthed, login, logout, loadingState, userData }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Finally creating the custom hook
export const useAuth = () => useContext(AuthContext);
