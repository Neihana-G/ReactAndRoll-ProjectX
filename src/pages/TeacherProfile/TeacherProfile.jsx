import HomeHeader from "../../Components/common/HomeHeader";
import styles from "./TeacherProfile.module.css";
import BlueBigFooter from "../../Components/common/BlueBigFooter";
import { useAuth } from "../../auth/useAuth";
import { Link } from "react-router-dom";
import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TeacherProfile() {
    const { userData, getUserData } = useAuth();
    const [editMode, setEditMode] = useState(false);
    const [school, setSchool] = useState(userData?.school || "");
    const [DOB, setDOB] = useState(
        moment(userData?.date_of_birth).format("YYYY-MM-DD") || ""
    );
    const [contactNo, setContactNo] = useState(userData?.contact_number || "");
    const [email, setEmail] = useState(userData?.email || "");

    axios.defaults.withCredentials = true;

    // useEffect(() => {
    //     // setSchool(userData?.school || '')
    //     // setDOB(userData?.date_of_birth || "");
    //     // setContactNo(userData?.contact_number || "");
    //     // setEmail(userData?.email || "");
    //     console.log(school, DOB, contactNo, email);
    // }, []);

    const handleOnChange = (e) => {
        console.log(e.target.value);
        if (e.target.id === "school") {
            setSchool(e.target.value);
        } else if (e.target.id === "email") {
            setEmail(e.target.value);
        } else if (e.target.id === "contact") {
            setContactNo(e.target.value);
        } else {
            setDOB(e.target.value);
        }
    };
    const handleSaveInfo = async () => {
        const updateData = {};
        if (school !== userData?.school && school != "") {
            updateData.school = school;
        }
        if (email !== userData?.email && email != "") {
            updateData.email = email;
        }
        if (contactNo !== userData?.contact_number && contactNo != "") {
            updateData.contact_number = contactNo;
        }
        if (DOB != moment(userData?.date_of_birth).format("YYYY-MM-DD")) {
            updateData.date_of_birth = DOB;
        }
        console.log(updateData);
        if (Object.keys(updateData).length) {
            axios
                .post(
                    "http://localhost:4000/api/update-teacher-profile",
                    updateData,

                    {
                        headers: {
                            "x-access-token": localStorage.getItem("token"),
                        },
                    }
                )
                .then((res) => {
                    getUserData();
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }

        setEditMode(false);
    };

    const cancelEdit = () => {
        setSchool(userData?.school || "");
        setEmail(userData?.email || "");
        setContactNo(userData?.contact_number || "");
        setDOB(moment(userData?.date_of_birth).format("YYYY-MM-DD") || "");
        setEditMode(false);
    };

    const handleEditProfile = () => {
        if (editMode) {
            cancelEdit();
        } else {
            setEditMode(true);
        }
    };

    return (
        <div>
            <HomeHeader />
            <div className={styles.profileBody}>
                <div className={styles.mainContent}>
                    <div className={styles.teacherInfo}>
                        <div className={styles.profileDisplayLeft}>
                            <img
                                style={{ borderRadius: "50%" }}
                                src={
                                    userData?.profile_pic ||
                                    "/images/default.png"
                                }
                                alt=""
                                teacher-profile
                            />
                            <button onClick={handleEditProfile}>
                                Edit Profile
                            </button>
                            <button>Change Photo</button>
                            <button>Settings</button>
                        </div>
                        <div className={styles.rightCont}>
                            <div className={styles.profileDisplayRight}>
                                <h2>{userData?.name}</h2>
                                <div className={styles.infoContainer}>
                                    <div>
                                        <p className={styles.infoType}>
                                            School
                                        </p>
                                    </div>
                                    <div>
                                        {!editMode ? (
                                            <p className={styles.info}>
                                                {userData?.school ||
                                                    "_________________"}
                                            </p>
                                        ) : (
                                            <input
                                                id="school"
                                                onChange={handleOnChange}
                                                value={school}
                                                className={styles.editInput}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className={styles.infoContainer}>
                                    <div>
                                        <p className={styles.infoType}>
                                            Date Of Birth
                                        </p>
                                    </div>
                                    <div>
                                        {!editMode ? (
                                            <p className={styles.info}>
                                                {userData.date_of_birth
                                                    ? moment(
                                                          userData?.date_of_birth
                                                      ).format("DD/MM/YYYY")
                                                    : "_________________"}
                                            </p>
                                        ) : (
                                            <input
                                                id="date"
                                                onChange={handleOnChange}
                                                type="date"
                                                value={DOB}
                                                className={styles.editInput}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className={styles.infoContainer}>
                                    <div>
                                        <p className={styles.infoType}>
                                            Contact No.
                                        </p>
                                    </div>
                                    <div>
                                        {!editMode ? (
                                            <p className={styles.info}>
                                                {userData?.contact_number ||
                                                    "_________________"}
                                            </p>
                                        ) : (
                                            <input
                                                id="contact"
                                                onChange={handleOnChange}
                                                value={contactNo}
                                                className={styles.editInput}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className={styles.infoContainer}>
                                    <div>
                                        <p className={styles.infoType}>
                                            Email Address
                                        </p>
                                    </div>
                                    <div>
                                        {!editMode ? (
                                            <p
                                                style={{
                                                    textTransform: "none",
                                                }}
                                                className={styles.info}
                                            >
                                                {userData?.email ||
                                                    "_________________"}
                                            </p>
                                        ) : (
                                            <input
                                                id="email"
                                                onChange={handleOnChange}
                                                value={email}
                                                className={styles.editInput}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.backButtons}>
                                {!editMode ? (
                                    <>
                                        <button
                                            style={{ background: "#43c0f6" }}
                                        >
                                            <Link>Back to projects</Link>
                                        </button>
                                        <button>
                                            <Link
                                                to={
                                                    "/teacher-dashboard/progress-tracker"
                                                }
                                            >
                                                back to dashboard
                                            </Link>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={cancelEdit}
                                            style={{ background: "red" }}
                                        >
                                            <Link>Cancel</Link>
                                        </button>
                                        <button
                                            onClick={handleSaveInfo}
                                            style={{ background: "green" }}
                                        >
                                            <Link>Save Changes</Link>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlueBigFooter />
        </div>
    );
}
