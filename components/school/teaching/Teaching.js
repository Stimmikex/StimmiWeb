import React, { useState } from "react";
import teachingStyles from "./Teaching.module.scss";
import Years from "./Years.js";

const Teaching = ({ teaching }) => {
    const [showTeaching, setShowTeaching] = useState(false); // State to toggle the content

    if (!teaching) {
        return null;
    }

    const toggleTeachingVisibility = () => {
        setShowTeaching(!showTeaching); // Toggle the visibility state
    };

    return (
        <div className={teachingStyles.teaching}>
            {teaching ? <p>Teaching</p> : null}
            
            {/* Button to toggle the visibility */}
            <button 
                onClick={toggleTeachingVisibility} 
                className={teachingStyles.teaching__toggleButton}
            >
                {showTeaching ? "Hide" : "Show"} Teaching
            </button>

            {/* Teaching content with conditional classes for smooth transition */}
            <div
                className={`${teachingStyles.teaching__container} ${showTeaching ? teachingStyles.show : teachingStyles.hide}`}
            >
                {teaching?.map((teach) => (
                    <div className={teachingStyles.teach} key={teach.course}>
                        <p>{teach.course}</p>
                        <Years years={teach.years} key={teach.years}></Years>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teaching;
