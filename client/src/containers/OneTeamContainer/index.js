import React from 'react';
import TeamSelector from '../../components/TeamSelector';
import SeasonSelector from '../../components/SeasonSelector';
import './OneTeamContainer.css';

export default class OneTeamContainer extends React.Component {

    render() {
        return (
            <div className="one-team-container">
                <TeamSelector />
                <SeasonSelector />
            </div>
        )
    }
}