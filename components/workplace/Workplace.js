import { useState, useEffect, useRef } from 'react';
import WorkplaceStyle from './Workplace.module.scss';

const Workplace = ({ workplace }) => {

    return (
        <div className={WorkplaceStyle.workplace}>
            <p>{workplace.name}</p>
            <div className={WorkplaceStyle.workplace__job}>
                <p>Jobs</p>
                <ul>
                    {workplace.job.map((job, index) => (
                        <div
                            key={index}
                        >
                            <p>{job.workplace}</p>
                            <img src={job.logo} alt={job.title}></img>
                            <p>{job.title}</p>
                            <p>{job.year}</p>
                            <p>{job.description}</p>
                        </div>
                    ))}
                </ul>
            </div>
            <div className={WorkplaceStyle.workplace__cert}>
                <p>Certification</p>
                <ul>
                    {workplace.cert.map((cert, index) => (
                        <div key={index}>
                            <p>{cert.name}</p>
                            <img src={cert.logo} alt={cert.name}></img>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Workplace;
