import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);
    return (
        <div className= {styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68253941?s=60&v=4" alt="Alberto"/>
            <div>
                <strong>Alberto Consoli</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}