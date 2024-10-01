import React from 'react';
import styles from './Team.module.scss'; // Import the Sass module

const Team = ({ team }) => {
    return (
        <div>
            <p>Team:</p>
            {team?.map((member) => (
                <div className={styles.teamMember} key={member.name}>
                    <div className={styles.popupWrapper}>
                        <div className={styles.socialLinks}>
                            {
                                member.linkedin? 
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src="img/socials/linkedin.png" alt="LinkedIn" />
                                </a>
                                :
                                null
                            }
                            {
                                member.github?
                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                    <img src="img/socials/github.png" alt="GitHub" />
                                </a>
                                :
                                null
                            }
                        </div>
                        <p className={styles.memberName}>{member.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
