import React from 'react';
import {
    Empty
} from 'antd';

export default class EmptyStatistics extends React.Component {

    render() {
        return (
            <Empty 
                description={
                    <span>Please select a team and a season</span>
                }
            />
        )
    }
}