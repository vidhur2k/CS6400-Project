import React from 'react';
import {
    Row,
    message,
    Spin
} from 'antd';
import axios from 'axios';
import EmptyStatistics from '../../components/EmptyStatistics';
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
            },
            stats: []
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

    performCalculationsForViz = (games, teamId) => {
        // Yellow, Red, Fouls, Shots, Shots OT, Corners, Half-Time Goals, Total Goals, Wins
        let stats = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        for(let i = 0; i < games.length; i++) {
            let game = games[i];
            if(game['HomeTeam'] === teamId) {
                stats[0] += game['HY'];
                stats[1] += game['HR'];
                stats[2] += game['HF'];
                stats[3] += game['HS'];
                stats[4] += game['HST'];
                stats[5] += game['HC'];
                stats[6] += game['HTHG'];
                stats[7] += game['FTHG'];
                stats[8] += game['FTHG'] > game['FTAG'] ? 1 : 0;
            } else {
                stats[0] += game['AY'];
                stats[1] += game['AR'];
                stats[2] += game['AF'];
                stats[3] += game['AS'];
                stats[4] += game['AST'];
                stats[5] += game['AC'];
                stats[6] += game['HTAG'];
                stats[7] += game['FTAG'];
                stats[8] += game['FTHG'] < game['FTAG'] ? 1 : 0;
            }
        }

        return stats;
    }

    handleSubmit = async () => {
        if(this.state.selectedTeam.length === 0) {
            message.error('Please select a team');
        } else if(this.state.selectedSeason.length === 0) {
            message.error('Please select a season');
        } else if(this.state.selectedSeason === 'All'){
            await this.setState({
                data: {
                    loading: true,
                    games: []
                }
            });
            await axios.get(`http://localhost:3000/FindGamesByTeam?name=${this.state.selectedTeam}`)
                .then(async res => {
                    await this.setState({
                        stats: this.performCalculationsForViz(res.data['games'], res.data.teamId),
                        data: {
                            loading: false,
                            games: res.data
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            await this.setState({
                data: {
                    loading: true,
                    games: []
                }
            });
            await axios.get(`http://localhost:3000/FindGamesByTeamAndSeason?name=${this.state.selectedTeam}&season=${this.state.selectedSeason}`)
                .then(async res => {
                    await this.setState({
                        stats: this.performCalculationsForViz(res.data['games'], res.data.teamId),
                        data: {
                            loading: false,
                            games: res.data
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        const body = this.state.stats.length === 0 ?
            <EmptyStatistics /> :
            <AllSeasonsVisualizationContainer 
                isTwoTeam={false} 
                teamName={this.state.selectedTeam}
                stats={this.state.stats}
            />;

        return (
            <div className="one-team-container">
                <Spin spinning={this.state.data.loading}>
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
                        {body}
                    </Row>
                </Spin>
            </div>
        )
    }
}