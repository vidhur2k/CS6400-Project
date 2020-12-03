import React from 'react';
import Plot from 'react-plotly.js';

export default class ShotSplitGroupedPieChart extends React.Component {

    render() {
        const data = [
            {
                values: this.props.shots[0],
                labels: ['Shots on Target', 'Shots not on Target'],
                type: 'pie',
                name: 'First'
            },
            {
                values: this.props.shots[1],
                labels: ['Shots on Target', 'Shots not on Target'],
                type: 'pie',
                name: 'Second'
            }
        ]
        return (
            <Plot
                data={data}
                layout={{
                    grid: {
                        rows: 1,
                        columns: 2
                    }
                }}
            />
        )
    }
}