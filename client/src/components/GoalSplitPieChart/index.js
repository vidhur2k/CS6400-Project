import React from 'react';
import Plot from 'react-plotly.js';

export default class GoalSplitPieChart extends React.Component {

    render() {
        const data = {
            values: this.props.goals,
            labels: ['First Half Goals', 'Second Half Goals'],
            type: 'pie'
        }
        return (
            <Plot
                data={[data]}
            />
        )
    }
}