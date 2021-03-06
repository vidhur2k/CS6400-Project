import React from 'react';
import {
    Row,
    Col
} from 'antd';
import GameStatsBarChart from '../../components/GameStatsBarChart';
import GameStatsGroupedBarChart from '../../components/GameStatsGroupedBarChart';
import ShotSplitPieChart from '../../components/ShotSplitPieChart';
import ShotSplitGroupedPieChart from '../../components/ShotSplitGroupedPieChart';
import GoalSplitPieChart from '../../components/GoalSplitPieChart';
import GoalSplitGroupedPieChart from '../../components/GoalSplitGroupedPieChart';
import HeadToHeadStatistics from '../../components/HeadToHeadStatistics';
import SingleTeamStatistics from '../../components/SingleTeamStatistics';
export default class AllSeasonsVisualizationContainer extends React.Component {

    render() {
        const h2h = this.props.isTwoTeam ?
            <HeadToHeadStatistics 
                firstTeam={this.props.firstTeamName}
                secondTeam={this.props.secondTeamName}
                wins={[this.props.stats[0][8], this.props.stats[1][8]]}
                goals={[this.props.stats[0][9], this.props.stats[1][9]]}
                cleanSheets={[this.props.stats[0][10], this.props.stats[1][10]]}
            /> :
            <SingleTeamStatistics 
                teamName={this.props.teamName}
                wins={this.props.stats[8]}
                goals={this.props.stats[9]}
                cleanSheets={this.props.stats[10]}
            />;
        const gameStats = this.props.isTwoTeam ?
            <GameStatsGroupedBarChart 
                firstTeamStats={[this.props.stats[0][5], this.props.stats[0][2], this.props.stats[0][0], this.props.stats[0][1]]}
                firstTeamName={this.props.firstTeamName}
                secondTeamStats={[this.props.stats[1][5], this.props.stats[1][2], this.props.stats[1][0], this.props.stats[1][1]]}
                secondTeamName={this.props.secondTeamName}
            /> :
            <GameStatsBarChart 
                teamStats={[this.props.stats[5], this.props.stats[2], this.props.stats[0], this.props.stats[1]]}
                teamName={this.props.teamName}
            />;
        const shotSplit = this.props.isTwoTeam ?
            <ShotSplitGroupedPieChart 
                names={[this.props.firstTeamName, this.props.secondTeamName]}
                shots={[[this.props.stats[0][3], this.props.stats[0][4]], [this.props.stats[1][3], this.props.stats[1][4]]]}
            /> :
            <ShotSplitPieChart 
                shots={[this.props.stats[3], this.props.stats[4]]}
            />
        const goalSplit = this.props.isTwoTeam ?
            <GoalSplitGroupedPieChart 
                names={[this.props.firstTeamName, this.props.secondTeamName]}
                goals={[[this.props.stats[0][6], this.props.stats[0][7] - this.props.stats[0][6]], [this.props.stats[1][6], this.props.stats[1][7] - this.props.stats[1][6]]]}
            /> :
            <GoalSplitPieChart 
                goals={[this.props.stats[6], this.props.stats[7] - this.props.stats[6]]}
            />            
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
                        {goalSplit}
                    </Col>  
                </Row>
                <Row>
                    <Col span={12}>
                        {shotSplit}
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>
            </div>
        )
    }
}   