import styles from "./HelpRequests.module.css";
import HelpNotification from "./HelpNotification";
import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

export default function HelpRequests() {
    const [contentHeight, setContentHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
    const [thumbPos, setThumbPos] = useState(0);
    const [thumbHeight, setThumbHeight] = useState(0);
    const content = useRef(null);
    const viewport = useRef(null);
    const scrollbar = useRef(null);
    const scrollbar_thumb = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollBarVisible, setScollBarVisible] = useState(true);

    // Draggin scrollbar thumb
    const [isDragging, setIsDragging] = useState(false);
    const [initialScrollTop, setInitialScrollTop] = useState(0);
    const [initialThumbPos, setInitialThumbPos] = useState(0);
    const [scrollStartPos, setScrollStartpos] = useState(0);

    //Info from the backend and keeping track of checkboxes
    const [helpRequests, setHelpRequests] = useState([]);
    const [selectedHelpRequests, setSelectedHelpRequests] = useState({});

    const handleCheckbox = (e) => {
        setSelectedHelpRequests((prevState) => {
            return {
                ...prevState,
                [e.target.value]: e.target.checked,
            };
        });
        console.log(selectedHelpRequests);
    };

    const handleMarkAsDone = (e) => {
        const request_ids = [];
        for (const key in selectedHelpRequests) {
            if (selectedHelpRequests[key] === true) {
                request_ids.push(key);
            }
        }
        if (request_ids.length != 0) {
            axios
                .put("http://localhost:4000/api/help_requests", {
                    request_ids: request_ids,
                })
                .then((resp) => {
                    console.log(resp.data);
                    updateGetAllHelpRequests();
                })
                .catch((err) => console.log(err));
        }
    };

    const updateGetAllHelpRequests = () => {
        console.log(helpRequests ? true : false);
        axios
            .get("http://localhost:4000/api/help_requests")
            .then((resp) => {
                console.log(resp.data);
                setHelpRequests(resp.data);
            })
            .catch((err) => console.log(err));
    };

    const handleMouseDown = useCallback((e) => {
        e.preventDefault();
        // e.stopPropagation();
        setScrollStartpos(e.clientY);
        if (content.current) setInitialScrollTop(content.current.scrollTop);
        setIsDragging(true);
    }, []);

    const handleMouseUp = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isDragging) {
                setIsDragging(false);
            }
        },
        [isDragging]
    );

    const handleThumbMousemove = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isDragging) {
            const deltaY = scrollStartPos - e.clientY;
            content.current.scrollTop = initialScrollTop - deltaY * 2;
        }
    });
    useEffect(() => {
        document.addEventListener("mousemove", handleThumbMousemove);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleThumbMousemove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseUp);
        };
    }, [handleThumbMousemove, handleMouseUp]);

    const handleScroll = () => {
        if (scrollbar.current && content.current) {
            const scrollHeight =
                content.current.scrollHeight - content.current.clientHeight;
            setScrollPosition(content.current.scrollTop / scrollHeight);
        }
    };
    const resizeScrollBar = () => {
        setThumbHeight(
            Math.round(
                (scrollbar.current.clientHeight /
                    content.current.scrollHeight) *
                    600
            )
        );
        if (content.current.clientHeight >= content.current.scrollHeight) {
            setScollBarVisible(false);
        }
    };

    useEffect(() => {
        if (scrollbar.current && content.current) {
            resizeScrollBar();
        }
    }, [helpRequests]);

    useEffect(() => {
        if (scrollbar.current && content.current) {
            setThumbPos(
                scrollbar.current.clientHeight * scrollPosition -
                    thumbHeight * scrollPosition
            );
        }
    }, [scrollPosition]);

    useEffect(() => {
        console.log("Load help requests");
        updateGetAllHelpRequests();
    }, []);

    return (
        <div className={styles.helpBody}>
            <div className={styles.helpWrapper}>
                <div className={styles.helpMainContent}>
                    <h3>HELP REQUESTS</h3>
                    {/* Custom scroll bar */}

                    <div className={styles.notificationWrapper} ref={viewport}>
                        <div className={styles.actionButtons}>
                            <button>
                                <i class="fa-solid fa-reply"></i>
                                REPLY
                            </button>
                            <button onClick={handleMarkAsDone}>
                                MARK AS DONE
                            </button>
                        </div>

                        {helpRequests.length != 0 ? (
                            <div
                                className={styles.notifications}
                                ref={content}
                                onScroll={handleScroll}
                            >
                                {helpRequests.map(
                                    ({
                                        request_id,
                                        name,
                                        profile_pic,
                                        date_created,
                                    }) => {
                                        return (
                                            <HelpNotification
                                                key={request_id}
                                                id={request_id}
                                                name={name}
                                                icon={profile_pic}
                                                datetime={date_created}
                                                handleCheckbox={handleCheckbox}
                                            />
                                        );
                                    }
                                )}
                            </div>
                        ) : null}
                    </div>
                    {scrollBarVisible ? (
                        <div className={styles.scrollbar_wrapper}>
                            <div className={styles.scrollbar} ref={scrollbar}>
                                <div className={styles.scrollbar_track}></div>
                                <div
                                    onMouseDown={handleMouseDown}
                                    onTouchStart={handleMouseDown}
                                    className={styles.scrollbar_thumb}
                                    ref={scrollbar_thumb}
                                    style={{
                                        height: `${thumbHeight}px`,
                                        top: `${thumbPos}px`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
