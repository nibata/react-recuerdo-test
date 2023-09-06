import React from 'react';
import Plot from 'react-plotly.js';

const PlotExamplePlotly2 = () => (
    <Plot
        data={[
            {
                z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
                type: 'heatmap'
            }
        ]}
        layout={ {width: 1000, height: 240000/320, title: 'PlotExamplePlotly2 Component'} }
    />
)

export default PlotExamplePlotly2;