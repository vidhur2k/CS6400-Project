import React from 'react';
import Plot from 'react-plotly.js';

export default class CardSplitPieChart extends React.Component {

    render() {
        const data = {
            values: this.props.cards,
            labels: ['Yellow Cards', 'Red Cards'],
            type: 'pie'
        }
        return (
            <Plot
                data={[data]}
            />
        )
    }
}