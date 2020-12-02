import React from 'react';
import {
    Select
} from 'antd';
import './SeasonSelector.css';

const { Option } = Select;
export default class SeasonSelector extends React.Component {

    render() {
        const SEASONS = [
            'All', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19'
        ];
        const options = SEASONS.map(team => <Option value={team}>{team}</Option>);
        return (
            <Select
                className="season-selector"
                size="large"
                placeholder="Please select a season"
                onChange={this.props.onChange}
            >
                {options}
            </Select>
        )
    }
}