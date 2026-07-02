import WorkplaceStyle from './Workplace.module.scss';

const Workplace = ({ workplace }) => {

    const groupedJobs = workplace.job.reduce((groups, job) => {
        const key = job.workplace;
        if (!groups[key]) groups[key] = [];
        groups[key].push(job);
        return groups;
    }, {});

    const groupedJobEntries = Object.entries(groupedJobs);

    return (
        <div className={WorkplaceStyle.workplace}>

            <h2>{workplace.name}</h2>

            <div className={WorkplaceStyle.workplace__job}>
                <p className={WorkplaceStyle.sectionTitle}>Jobs</p>

                {groupedJobEntries.map(([placeName, jobs], groupIndex) => (
                    <div key={groupIndex} className={WorkplaceStyle.workplaceGroup}>
                        
                        <h3 className={WorkplaceStyle.groupTitle}>{placeName}</h3>

                        <div className={WorkplaceStyle.timeline}>
                            {jobs.map((job, index) => (
                                <div
                                    key={index}
                                    className={`${WorkplaceStyle.timelineItem} ${
                                        index % 2 === 0 ? WorkplaceStyle.left : WorkplaceStyle.right
                                    }`}
                                >
                                    <div className={WorkplaceStyle.marker}>
                                        <span className={WorkplaceStyle.dot}></span>
                                        {index !== jobs.length - 1 && (
                                            <span className={WorkplaceStyle.line}></span>
                                        )}
                                    </div>

                                    <div className={WorkplaceStyle.content}>
                                        <img src={job.logo} alt={job.title} />
                                        <div>
                                            <p className={WorkplaceStyle.jobTitle}>{job.title}</p>
                                            <p className={WorkplaceStyle.jobYear}>{job.year}</p>
                                            <p>{job.description}</p>
                                        </div>
                                        <div>
                                            {job.Skills.map((skill, index) => (
                                                    <div key={index}>
                                                        <p>{skill.name}</p>
                                                        <p>{skill.description}</p>
                                                    </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CERTIFICATIONS */}
            <div className={WorkplaceStyle.workplace__cert}>
                <p className={WorkplaceStyle.sectionTitle}>Certification</p>
                <ul className={WorkplaceStyle.certList}>
                    {workplace.cert.map((cert, index) => (
                        <li key={index} className={WorkplaceStyle.certItem}>
                            <p>{cert.name}</p>
                            <img src={cert.logo} alt={cert.name} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Workplace;
