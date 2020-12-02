import React from 'react';
import {
    Button
} from 'antd';

export default class SubmitButton extends React.Component {

    render() {
        return (
            <Button
                type="primary"
                shape="round"
                onClick={this.props.onClick}
            >
                Show Statistics
            </Button>
        )
    }
}