import React from 'react';
import {
    Row,
    Col
} from 'antd';
import GameStatsBarChart from '../../components/GameStatsBarChart';
import GameStatsGroupedBarChart from '../../components/GameStatsGroupedBarChart';
import ShotSplitPieChart from '../../components/ShotSplitPieChart';
import CardSplitPieChart from '../../components/CardSplitPieChart';
import HeadToHeadStatistics from '../../components/HeadToHeadStatistics';
import SingleTeamStatistics from '../../components/SingleTeamStatistics';
export default class AllSeasonsVisualizationContainer extends React.Component {

    render() {
        const h2h = this.props.isTwoTeam ?
            <HeadToHeadStatistics 
                firstTeam="Arsenal"
                secondTeam="Burnley"
                wins={[4, 5]}
            /> :
            <SingleTeamStatistics 
                teamName="Arsenal"
                wins={11}
                goals={30}
            />;
        const gameStats = this.props.isTwoTeam ?
            <GameStatsGroupedBarChart 
                firstTeamStats={[9, 5, 1]}
                firstTeamName="Arsenal"
                secondTeamStats={[11, 3, 3]}
                secondTeamName="Burnley"
            /> :
            <GameStatsBarChart 
                teamStats={[9, 5, 1]}
                teamName="Arsenal"
            />;

        return (
            <div>
                <Row align="center">
                    {h2h}
                </Row>
                <Row>
                    <Col span={12}>
                        {gameStats}
                    </Col>
                    <Col span={12}>
                        <CardSplitPieChart cards={[15, 15]}/>            
                    </Col>  
                </Row>
                <Row>
                    <Col span={12}>
                        <ShotSplitPieChart shots={[9, 19]}/>
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>
            </div>
        )
    }
}   