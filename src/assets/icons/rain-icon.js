import React from 'react';
import * as Colors from '../colors';

export const RainIcon = props => {
    const { color = Colors.WHITE, width = '45px', ...rest } = props;
    return (
        <span {...rest}>
            <svg
                style={{ width: width }}
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
            >
                <g>
                    <path
                        style={{ fill: color }}
                        d="M384,144c-0.336,0-0.672,0-0.992,0C375.104,80,321.168,32,256,32c-64.816,0-118.544,48.448-126.832,112.016
                        C128.784,144,128.384,144,128,144C57.424,144,0,201.424,0,272s57.424,128,128,128v-32c-52.944,0-96-43.056-96-96
                        c0-52.944,43.056-96,96-96c4.064,0,8.448,0.352,13.792,1.12c4.672,0.672,9.216-1.344,12.72-4.384
                        C158.016,169.696,160,164.64,160,160c0-52.944,43.056-96,96-96c52.944,0,96,43.056,96.016,95.456
                        c-0.032,0.384-0.08,1.424-0.08,1.824c0,4.64,2.016,9.04,5.52,12.08c3.504,3.04,8.128,4.4,12.752,3.744
                        C375.552,176.368,379.936,176,384,176c52.944,0,96,43.056,96,96c0,52.944-43.056,96-96,96v32c70.576,0,128-57.424,128-128
                        S454.576,144,384,144z"
                    />
                </g>
                <g>
                    <rect style={{ fill: color }} x="240" y="368" width="32" height="48" />
                </g>
                <g>
                    <rect style={{ fill: color }} x="304" y="432" width="32" height="48" />
                </g>
                <g>
                    <rect style={{ fill: color }} x="176" y="432" width="32" height="48" />
                </g>
                <g>
                    <rect style={{ fill: color }} x="304" y="368" width="32" height="32" />
                </g>
                <g>
                    <rect style={{ fill: color }} x="176" y="368" width="32" height="32" />
                </g>
                <g>
                    <rect style={{ fill: color }} x="112" y="448" width="32" height="32" />
                </g>
                <g>
                    <rect style={{ fill: color }} x="240" y="448" width="32" height="32" />
                </g>
                <g>
                    <rect style={{ fill: color }} x="368" y="448" width="32" height="32" />
                </g>
            </svg>
        </span>
    );
};
