import React from 'react';
import {
    Row,
    Col,
    message
} from 'antd';
import axios from 'axios';
import TeamSelector from '../../components/TeamSelector';
import SeasonSelector from '../../components/SeasonSelector';
import SubmitButton from '../../components/SubmitButton';
import AllSeasonsVisualizationContainer from '../AllSeasonsVisualizationContainer';
import './TwoTeamContainer.css';

export default class TwoTeamContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFirstTeam: '',
            selectedSecondTeam: '',
            selectedSeason: ''
        }
    }

    handleTeamChange = (value) => {
        this.setState({
            selectedFirstTeam: value
        });
    }

    handleSecondTeamChange = (value) => {
        this.setState({
            selectedSecondTeam: value
        });
    }

    handleSeasonChange = (value) => {
        this.setState({
            selectedSeason: value
        });
    }

    handleSubmit = async () => {
        if(this.state.selectedFirstTeam.length === 0 || this.state.selectedSecondTeam.length === 0) {
            message.error('Please select a team');
        } else if(this.state.selectedSeason.length === 0) {
            message.error('Please select a season');
        } else if(this.state.selectedSeason === 'All') {
            await this.setState({
                data: {}
            })
            await axios.get(`http://localhost:3000/FindGamesByTeams?firstTeam=${this.state.selectedFirstTeam}&secondTeam=${this.state.selectedSecondTeam}`)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            // await axios.get(`http://localhost:3000/FindGamesByTeamAndSeason?name=${this.state.selectedTeam}&season=${this.state.selectedSeason}`)
            // .then(res => {
            //     console.log(res.data);
            // })
            // .catch(err => {
            //     console.log(err);
            // })
        }
    }

    render() {
        return (
            <div className="two-team-container">
                <Row className="selector-container" justify="center" align="center">
                    <Col span={12}>
                        <TeamSelector 
                            onChange={this.handleTeamChange} 
                        />
                    </Col>
                    <Col span={12}>
                        <TeamSelector 
                            onChange={this.handleSecondTeamChange} 
                        />
                    </Col>
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
                <Row align="center" className="two-team-visualizations-container">
                    <AllSeasonsVisualizationContainer isTwoTeam={true} />
                </Row>
            </div>
        )
    }
}