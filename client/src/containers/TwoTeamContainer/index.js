import React from 'react';
import {
    Row,
    Col
} from 'antd';
import TeamSelector from '../../components/TeamSelector';
import SeasonSelector from '../../components/SeasonSelector';
import './TwoTeamContainer.css';

export default class TwoTeamContainer extends React.Component {

    render() {
        return (
            <div className="two-team-container">
                <Row justify="center">
                    <Col span={12}>
                        <TeamSelector />
                        <SeasonSelector />
                    </Col>
                    <Col span={12}>
                        <TeamSelector />
                        <SeasonSelector />
                    </Col>
                </Row>
            </div>
        )
    }
}