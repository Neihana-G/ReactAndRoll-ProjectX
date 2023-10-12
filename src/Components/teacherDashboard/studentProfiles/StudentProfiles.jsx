// import ScrollableContainer from "./ScrollableContainer"; // Adjust the import path
import StudentCards from "./studentCards/StudentCards";
import styles from "./StudentProfiles.module.css";
// import ScrollableContainer from "./scrollContainer/ScrollContainer";
// import ScrollableContent from "./scrollContainer/ScrollContainer";
import React, { useState, useEffect, useRef } from "react";

export default function StudentProfiles() {
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
        (scrollbar.current.clientHeight / content.current.scrollHeight) * 400
      )
    );
  });

  return (
    <div className={styles.helpBody}>
      <div className={styles.helpWrapper}>
        <div className={styles.helpMainContent}>
          {/* <h3>BEGINNER COURSE</h3> */}
          {/* Custom scroll bar */}

          <div className={styles.notificationWrapper} ref={viewport}>
            <div className={styles.actionButtons}>
              <h3>BEGINNER COURSE</h3>
              <button>
                {/* <i class="fa-regular fa-file-export"></i> */}
                EXPORT AS SPREADSHEET
              </button>
            </div>

            <div
              className={styles.notifications}
              ref={content}
              onScroll={handleScroll}
            >
              <StudentCards />
              {/* <StudentCards />
              <StudentCards />
              <StudentCards />
              <StudentCards />
              <StudentCards />
              <StudentCards />
              <StudentCards />
              <StudentCards />
              <StudentCards />
              <StudentCards /> */}
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
    </div>
  );
}
