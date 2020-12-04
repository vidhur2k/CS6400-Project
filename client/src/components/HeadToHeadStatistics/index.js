import React from 'react';
import {
    Row,
    Col,
    Card,
    Statistic
} from 'antd';
import './HeadToHeadStatistics.css';

export default class HeadToHeadStatistics extends React.Component {

    render() {
        return (
            <div className="head-to-head-statistics">
                <h3>{this.props.firstTeam}</h3>
                <Row>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Wins"
                                value={this.props.wins[0]}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Goals Per Game"
                                value={this.props.goals[0]}
                                precision={2}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Clean Sheets"
                                value={this.props.cleanSheets[0]}
                            />
                        </Card>
                    </Col>
                </Row>
                <h3>{this.props.secondTeam}</h3>
                <Row>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Wins"
                                value={this.props.wins[1]}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Goals Per Game"
                                value={this.props.goals[1]}
                                precision={2}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Clean Sheets"
                                value={this.props.cleanSheets[1]}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}