import React from 'react';
import {
    Row,
    message
} from 'antd';
import TeamSelector from '../../components/TeamSelector';
import SeasonSelector from '../../components/SeasonSelector';
import SubmitButton from '../../components/SubmitButton';
import AllSeasonsVisualizationContainer from '../AllSeasonsVisualizationContainer';
import SingleSeasonVisualizationContainer from '../SingleSeasonVisualizationContainer';
import './OneTeamContainer.css';

export default class OneTeamContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTeam: '',
            selectedSeason: ''
        }
    }

    handleTeamChange = (value) => {
        this.setState({
            selectedTeam: value
        });
    }

    handleSeasonChange = (value) => {
        this.setState({
            selectedSeason: value
        });
    }

    handleSubmit = () => {
        if(this.state.selectedTeam.length === 0) {
            message.error('Please select a team');
        } else if(this.state.selectedSeason.length === 0) {
            message.error('Please select a season');
        }
    }

    render() {
        return (
            <div className="one-team-container">
                <Row align="center">
                    <TeamSelector 
                        onChange={this.handleTeamChange} 
                    />
                </Row>
                <Row align="center">
                    <SeasonSelector 
                        onChange={this.handleSeasonChange} 
                    />
                </Row>
                <Row align="center">
                    <SubmitButton 
                        onClick={this.handleSubmit}
                    />
                </Row>
                <Row align="center" className="one-team-visualizations-container">
                    <AllSeasonsVisualizationContainer 
                        isTwoTeam={false} 
                    />
                </Row>
            </div>
        )
    }
}