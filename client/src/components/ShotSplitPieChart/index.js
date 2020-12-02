import React from 'react';
import Plot from 'react-plotly.js';

export default class ShotSplitPieChart extends React.Component {

    render() {
        const data = {
            values: this.props.shots,
            labels: ['Shots on Target', 'Shots not on Target'],
            type: 'pie'
        }
        return (
            <Plot
                data={[data]}
            />
        )
    }
}