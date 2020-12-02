import React from 'react';
import {
    Row,
    message
} from 'antd';
import axios from 'axios';
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
            selectedSeason: '',
            data: {
                loading: false,
                games: []
            }
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

    handleSubmit = async () => {
        if(this.state.selectedTeam.length === 0) {
            message.error('Please select a team');
        } else if(this.state.selectedSeason.length === 0) {
            message.error('Please select a season');
        } else if(this.state.selectedSeason === 'All'){
            await this.setState({
                data: {}
            })
            await axios.get(`http://localhost:3000/FindGamesByTeam?name=${this.state.selectedTeam}`)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            await axios.get(`http://localhost:3000/FindGamesByTeamAndSeason?name=${this.state.selectedTeam}&season=${this.state.selectedSeason}`)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
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