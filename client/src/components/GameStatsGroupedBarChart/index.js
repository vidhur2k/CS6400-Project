import React from 'react';
import Plot from 'react-plotly.js';

export default class GameStatsGroupedBarChart extends React.Component {

    render() {
        const stats = ['Corners', 'Fouls', 'Half-time Goals']
        const data = [
            {
                x: stats,
                y: this.props.firstTeamStats,
                name: this.props.firstTeamName,
                type: 'bar'
            },
            {
                x: stats,
                y: this.props.secondTeamStats,
                name: this.props.secondTeamName,
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