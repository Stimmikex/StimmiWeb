import React, { useState } from "react";
import teachingStyles from "./Teaching.module.scss";
import Years from "./Years.js";

const Teaching = ({ teaching }) => {
    const [showPopup, setShowPopup] = useState(false); // State to toggle the popup visibility

    const togglePopupVisibility = () => {
        setShowPopup((prev) => !prev); // Toggle popup visibility
    };

    return (
        <div className={teachingStyles.teaching}>
            {/* Button to toggle the visibility */}
            <button
                onClick={togglePopupVisibility}
                className={teachingStyles.teaching__toggleButton}
            >
                {showPopup ? "Hide Teaching" : "Show Teaching"}
            </button>

            {/* Popup displayed below the button */}
            <div className={`${teachingStyles.popup} ${showPopup ? teachingStyles.show : ""}`}>
                <div className={teachingStyles.popupContent}>
                    <button className={teachingStyles.closeButton} onClick={() => setShowPopup(false)}>
                        &times;
                    </button>
                    <h2>Teaching</h2>
                    {teaching?.map((teach) => (
                        <div className={teachingStyles.teach} key={teach.course}>
                            <p><strong>Course:</strong> {teach.course}</p>
                            <Years years={teach.years} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teaching;
