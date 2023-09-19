import styles from "./HelpRequests.module.css";
import HelpNotification from "./HelpNotification";
import React, { useState, useEffect, useRef, useCallback } from "react";

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
    useEffect(() => {
        if (scrollbar.current && content.current && thumbHeight == 0) {
            console.log(content.current.clientHeight);
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
        }
    }, [content]);

    useEffect(() => {
        if (scrollbar.current && content.current) {
            setThumbPos(
                scrollbar.current.clientHeight * scrollPosition -
                    thumbHeight * scrollPosition
            );
        }
    }, [scrollPosition]);

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
