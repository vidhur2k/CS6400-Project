import React from 'react';
import {
    Row,
    Col
} from 'antd';
import GameStatsGroupedBarChart from '../../components/GameStatsGroupedBarChart';
import ShotSplitPieChart from '../../components/ShotSplitPieChart';
import CardSplitPieChart from '../../components/CardSplitPieChart';
import HeadToHeadStatistics from '../../components/HeadToHeadStatistics';

export default class AllSeasonsVisualizationContainer extends React.Component {

    render() {
        return (
            <div>
                <Row align="center">
                    <HeadToHeadStatistics 
                        firstTeam="Arsenal"
                        secondTeam="Burnley"
                        wins={[4, 5]}
                    />
                </Row>
                <Row>
                    <Col span={12}>
                        <GameStatsGroupedBarChart 
                            firstTeamStats={[9, 5, 1]}
                            firstTeamName="Arsenal"
                            secondTeamStats={[11, 3, 3]}
                            secondTeamName="Burnley"
                        />
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