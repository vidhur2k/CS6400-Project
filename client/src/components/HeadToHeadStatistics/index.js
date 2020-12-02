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
                <h3>Head to Head</h3>
                <Row>
                    <Col span={12}>
                        <Card>
                            <Statistic 
                                title={this.props.firstTeam}
                                value={this.props.wins[0]}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic 
                                title={this.props.secondTeam}
                                value={this.props.wins[1]}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}