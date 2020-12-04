import React from 'react';
import Plot from 'react-plotly.js';

export default class GoalSplitGroupedPieChart extends React.Component {

    render() {
        const labels = [];
        const data = [
            {
                values: this.props.goals[0],
                labels: ['First Half Goals', 'Second Half Goals'],
                type: 'pie',
                name: 'First',
                domain: {
                    row: 0,
                    column: 0
                }
            },
            {
                values: this.props.goals[1],
                labels: ['First Half Goals', 'Second Half Goals'],
                type: 'pie',
                name: 'Second',
                domain: {
                    row: 0,
                    column: 1
                }
            }
        ];

        return (
            <Plot
                data={data}
                
                layout={{
                    title: this.props.names[0] + ' vs ' + this.props.names[1],
                    grid: {
                        rows: 1,
                        columns: 2
                    }
                }}
            />
        )
    }
}