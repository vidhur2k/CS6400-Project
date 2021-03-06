import React from 'react';
import Plot from 'react-plotly.js';

export default class GameStatsBarChart extends React.Component {

    render() {
        const stats = ['Corners', 'Fouls', 'Yellow Cards', 'Red Cards']
        const data = [
            {
                x: stats,
                y: this.props.teamStats,
                name: this.props.teamName,
                type: 'bar'
            }
        ];
        return (
            <Plot 
                data={data}
                layout={{
                    barmode: 'group'
                }}
            />
        )
    }
}