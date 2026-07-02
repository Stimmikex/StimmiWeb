'use client';

import { useState } from 'react';
import WorkplaceStyle from './Workplace.module.scss';
import Workplace from './Workplace';

const WorkplaceList = ({ workplaces }) => {
    const [activeWorkplace, setActiveWorkplace] = useState(null);

    const toggleWorkplace = (name) => {
        setActiveWorkplace((prev) => (prev === name ? null : name));
    };

    return (
        <div className={WorkplaceStyle.workplaceContainer}>
            <h2 className={WorkplaceStyle.mainTitle}>Workplaces</h2>
            
            <div className={WorkplaceStyle.WorkplaceList}>
                {workplaces.map((work) => {
                    const isOpen = activeWorkplace === work.name;

                    return (
                        <div key={work.name} className={WorkplaceStyle.dropdownItem}>
                            
                            {/* THE DROPDOWN BUTTON */}
                            <button 
                                className={`${WorkplaceStyle.dropdownHeader} ${isOpen ? WorkplaceStyle.activeHeader : ''}`}
                                onClick={() => toggleWorkplace(work.name)}
                            >
                                <h3>{work.name}</h3>
                                <span className={WorkplaceStyle.arrow}>
                                    {isOpen ? '▲' : '▼'}
                                </span>
                            </button>

                            {/* THE TIMELINE CONTENT */}
                            {isOpen && (
                                <div className={WorkplaceStyle.dropdownContent}>
                                    <Workplace workplace={work} />
                                </div>
                            )}
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkplaceList;