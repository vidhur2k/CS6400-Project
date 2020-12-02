import React from 'react';
import {
    Select
} from 'antd';
import './TeamSelector.css';

const { Option } = Select;
export default class TeamSelector extends React.Component {

    render() {
        const TEAMS = [
            'Arsenal','Liverpool','Norwich','Sunderland','Swansea','West Brom','West Ham','Chelsea',
            'Crystal Palace','Man City','Aston Villa','Everton','Fulham','Hull','Newcastle','Southampton','Stoke',
            'Cardiff','Tottenham','Man United','Leicester','QPR','Burnley','Bournemouth','Watford','Middlesbrough',
            'Brighton','Huddersfield','Wolves'
        ];
        const options = TEAMS.map(team => <Option value={team}>{team}</Option>);
        return (
            <Select
                className="team-selector"
                size="large"
                placeholder="Please select a team"
                onChange={this.props.onChange}
            >
                {options}
            </Select>
        )
    }
}