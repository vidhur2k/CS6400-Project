import React from 'react';
import {
    Row
} from 'antd';
import TeamSelector from '../../components/TeamSelector';
import SeasonSelector from '../../components/SeasonSelector';
import AllSeasonsVisualizationContainer from '../AllSeasonsVisualizationContainer';
import SingleSeasonVisualizationContainer from '../SingleSeasonVisualizationContainer';
import './OneTeamContainer.css';

export default class OneTeamContainer extends React.Component {

    render() {
        return (
            <div className="one-team-container">
                <TeamSelector />
                <SeasonSelector />
                <Row align="center" className="one-team-visualizations-container">
                    <AllSeasonsVisualizationContainer isTwoTeam={false} />
                </Row>
            </div>
        )
    }
}