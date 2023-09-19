import styles from "./HelpRequests.module.css";
import HelpNotification from "./HelpNotification";
import React, { useState, useEffect, useRef } from "react";

export default function HelpRequests() {
    const [contentHeight, setContentHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
    const [thumbPos, setThumbPos] = useState(0);
    const [thumbHeight, setThumbHeight] = useState(20);
    const content = useRef(null);
    const viewport = useRef(null);
    const scrollbar = useRef(null);
    const scrollbar_thumb = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollBarVisible, setScollBarVisible] = useState(false);

    const handleScroll = () => {
        const scrollHeight =
            content.current.scrollHeight - content.current.clientHeight;
        setScrollPosition(content.current.scrollTop / scrollHeight);
    };

    useEffect(() => {
        setThumbPos(
            scrollbar.current.clientHeight * scrollPosition -
                thumbHeight * scrollPosition
        );

        setThumbHeight(
            Math.round(
                (scrollbar.current.clientHeight /
                    content.current.scrollHeight) *
                    400
            )
        );
    });

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
                            <button>MARK AS DONE</button>
                        </div>

                        <div
                            className={styles.notifications}
                            ref={content}
                            onScroll={handleScroll}
                        >
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                            <HelpNotification />
                        </div>
                    </div>

                    <div className={styles.scrollbar_wrapper}>
                        <div className={styles.scrollbar} ref={scrollbar}>
                            <div className={styles.scrollbar_track}></div>
                            <div
                                className={styles.scrollbar_thumb}
                                ref={scrollbar_thumb}
                                style={{
                                    height: `${thumbHeight}px`,
                                    top: `${thumbPos}px`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
