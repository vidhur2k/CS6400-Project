import React from 'react';
import {
    Row,
    Col,
    message,
    Spin
} from 'antd';
import axios from 'axios';
import EmptyStatistics from '../../components/EmptyStatistics';
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
            selectedSeason: '',
            data: {
                loading: false,
                games: []
            },
            stats: [[], []]
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

    performCalculationsForViz = (games, firstTeamId, secondTeamId, isPostgres) => {
        // Yellow, Red, Fouls, Shots, Shots OT, Corners, Half-Time Goals, Total Goals, Wins
        let firstTeamStats = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        let secondTeamStats = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        if(isPostgres === 1) {
            console.log('in here');
            for(let i = 0; i < games.length; i++) {
                let game = games[i];
                if(game['home_team'] === firstTeamId) {
                    firstTeamStats[0] += game['hy'];
                    firstTeamStats[1] += game['hr'];
                    firstTeamStats[2] += game['hf'];
                    firstTeamStats[3] += game['hs'];
                    firstTeamStats[4] += game['hst'];
                    firstTeamStats[5] += game['hc'];
                    firstTeamStats[6] += game['hthg'];
                    firstTeamStats[7] += game['fthg'];
                    firstTeamStats[8] += game['fthg'] > game['ftag'] ? 1 : 0;
                    secondTeamStats[0] += game['ay'];
                    secondTeamStats[1] += game['ar'];
                    secondTeamStats[2] += game['af'];
                    secondTeamStats[3] += game['_as'];
                    secondTeamStats[4] += game['ast'];
                    secondTeamStats[5] += game['ac'];
                    secondTeamStats[6] += game['htag'];
                    secondTeamStats[7] += game['ftag'];
                    secondTeamStats[8] += game['fthg'] < game['ftag'] ? 1 : 0;
                } else {
                    secondTeamStats[0] += game['hy'];
                    secondTeamStats[1] += game['hr'];
                    secondTeamStats[2] += game['hf'];
                    secondTeamStats[3] += game['hs'];
                    secondTeamStats[4] += game['hst'];
                    secondTeamStats[5] += game['hc'];
                    secondTeamStats[6] += game['hthg'];
                    secondTeamStats[7] += game['fthg'];
                    secondTeamStats[8] += game['fthg'] > game['ftag'] ? 1 : 0;
                    firstTeamStats[0] += game['ay'];
                    firstTeamStats[1] += game['ar'];
                    firstTeamStats[2] += game['af'];
                    firstTeamStats[3] += game['_as'];
                    firstTeamStats[4] += game['ast'];
                    firstTeamStats[5] += game['ac'];
                    firstTeamStats[6] += game['htag'];
                    firstTeamStats[7] += game['ftag'];
                    firstTeamStats[8] += game['fthg'] < game['ftag'] ? 1 : 0;
                }
            }
        } else {
            for(let i = 0; i < games.length; i++) {
                let game = games[i];
                if(game['HomeTeam'] === firstTeamId) {
                    firstTeamStats[0] += game['HY'];
                    firstTeamStats[1] += game['HR'];
                    firstTeamStats[2] += game['HF'];
                    firstTeamStats[3] += game['HS'];
                    firstTeamStats[4] += game['HST'];
                    firstTeamStats[5] += game['HC'];
                    firstTeamStats[6] += game['HTHG'];
                    firstTeamStats[7] += game['FTHG'];
                    firstTeamStats[8] += game['FTHG'] > game['FTAG'] ? 1 : 0;
                    secondTeamStats[0] += game['AY'];
                    secondTeamStats[1] += game['AR'];
                    secondTeamStats[2] += game['AF'];
                    secondTeamStats[3] += game['AS'];
                    secondTeamStats[4] += game['AST'];
                    secondTeamStats[5] += game['AC'];
                    secondTeamStats[6] += game['HTAG'];
                    secondTeamStats[7] += game['FTAG'];
                    secondTeamStats[8] += game['FTHG'] < game['FTAG'] ? 1 : 0;
                } else {
                    secondTeamStats[0] += game['HY'];
                    secondTeamStats[1] += game['HR'];
                    secondTeamStats[2] += game['HF'];
                    secondTeamStats[3] += game['HS'];
                    secondTeamStats[4] += game['HST'];
                    secondTeamStats[5] += game['HC'];
                    secondTeamStats[6] += game['HTHG'];
                    secondTeamStats[7] += game['FTHG'];
                    secondTeamStats[8] += game['FTHG'] > game['FTAG'] ? 1 : 0;
                    firstTeamStats[0] += game['AY'];
                    firstTeamStats[1] += game['AR'];
                    firstTeamStats[2] += game['AF'];
                    firstTeamStats[3] += game['AS'];
                    firstTeamStats[4] += game['AST'];
                    firstTeamStats[5] += game['AC'];
                    firstTeamStats[6] += game['HTAG'];
                    firstTeamStats[7] += game['FTAG'];
                    firstTeamStats[8] += game['FTHG'] < game['FTAG'] ? 1 : 0;
                }
            }
        }

        return [firstTeamStats, secondTeamStats];
    }

    handleSubmit = async () => {
        if(this.state.selectedFirstTeam.length === 0 || this.state.selectedSecondTeam.length === 0) {
            message.error('Please select a team');
        } else if(this.state.selectedSeason.length === 0) {
            message.error('Please select a season');
        } else if(this.state.selectedSeason === 'All') {
            await this.setState({
                data: {
                    loading: true,
                    games: []
                }
            });
            await axios.get(`http://localhost:3000/FindGamesByTeams?firstTeam=${this.state.selectedFirstTeam}&secondTeam=${this.state.selectedSecondTeam}`)
                .then(async res => {
                    await this.setState({
                        stats: this.performCalculationsForViz(res.data['games'], res.data.firstTeamId, res.data.secondTeamId, res.data.isPostgres),
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
            await axios.get(`http://localhost:3000/FindGamesByTeamsAndSeason?firstTeam=${this.state.selectedFirstTeam}&secondTeam=${this.state.selectedSecondTeam}&season=${this.state.selectedSeason}`)
            .then(async res => {
                await this.setState({
                    stats: this.performCalculationsForViz(res.data['games'], res.data.teamId, res.data.isPostgres),
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
        const body = this.state.stats[0].length === 0 ?
        <EmptyStatistics /> :
        <AllSeasonsVisualizationContainer 
            isTwoTeam={true} 
            firstTeamName={this.state.selectedFirstTeam}
            secondTeamName={this.state.selectedSecondTeam}
            stats={this.state.stats}
        />;
        return (
            <div className="two-team-container">
                <Spin spinning={this.state.data.loading}>
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
                        {body}
                    </Row>
                </Spin>
            </div>
        )
    }
}