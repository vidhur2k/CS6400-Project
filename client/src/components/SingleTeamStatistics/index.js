import React from 'react';
import {
    Row,
    Col,
    Card,
    Statistic
} from 'antd';
import './SingleTeamStatistics.css';

export default class SingleTeamStatistics extends React.Component {

    render() {
        return (
            <div className="single-team-statistics">
                <h3>{this.props.teamName}</h3>
                <Row>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Wins"
                                value={this.props.wins}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Goals per Game"
                                value={this.props.goals}
                                precision={2}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic 
                                title="Clean Sheets"
                                value={this.props.cleanSheets}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}