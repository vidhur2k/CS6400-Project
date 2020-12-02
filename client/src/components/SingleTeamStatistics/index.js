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
                    <Col span={12}>
                        <Card>
                            <Statistic 
                                title="Wins"
                                value={this.props.wins}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic 
                                title="Goals"
                                value={this.props.goals}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}