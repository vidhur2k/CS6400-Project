import React from 'react';
import Plot from 'react-plotly.js';

export default class ShotSplitGroupedPieChart extends React.Component {

    render() {
        const data = [
            {
                values: this.props.shots[0],
                labels: ['Shots on Target', 'Shots not on Target'],
                type: 'pie',
                name: 'First',
                domain: {
                    row: 0,
                    column: 0
                }
            },
            {
                values: this.props.shots[1],
                labels: ['Shots on Target', 'Shots not on Target'],
                type: 'pie',
                name: 'Second',
                domain: {
                    row: 0,
                    column: 1
                }
            }
        ]
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