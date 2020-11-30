import React from 'react';
import {
    Layout,
    Switch
} from 'antd';

import OneTeamContainer from '../OneTeamContainer';
import TwoTeamContainer from '../TwoTeamContainer';
import './MainContainer.css';

const { Header, Content } = Layout;

export default class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOneTeam: true
        }
    }

    render() {
        const container = this.state.isOneTeam ? <OneTeamContainer /> : <TwoTeamContainer />;
        return (
            <div>
                <Layout className="main-layout">
                    <Header>
                        <h1>EPL Team Analytics</h1>
                    </Header>
                    <Content className="main-content">
                        <Switch
                            checkedChildren="Two Team"
                            unCheckedChildren="One Team"
                            onChange={() => this.setState({isOneTeam: !this.state.isOneTeam})}
                        />
                        {container}
                    </Content>
                </Layout>
            </div>
        )
    }
}