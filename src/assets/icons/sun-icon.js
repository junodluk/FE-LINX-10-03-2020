import React from 'react';
import * as Colors from '../colors';

export const SunIcon = props => {
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
                        d="M256,96c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S344.224,96,256,96z M256,384
			            c-70.576,0-128-57.424-128-128s57.424-128,128-128s128,57.424,128,128S326.576,384,256,384z"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="240"
                        width="32"
                        height="64"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="240"
                        y="448"
                        width="32"
                        height="64"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="448"
                        y="240"
                        width="64"
                        height="32"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        y="240"
                        width="64"
                        height="32"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="374.064"
                        y="71.995"
                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 57.2811 314.2776)"
                        width="67.887"
                        height="32"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="88.009"
                        y="54.06"
                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -31.7648 99.321)"
                        width="32"
                        height="67.887"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="70.067"
                        y="407.995"
                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -269.3453 197.7316)"
                        width="67.887"
                        height="32"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="391.993"
                        y="390.064"
                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -180.3201 412.6833)"
                        width="32"
                        height="67.887"
                    />
                </g>
            </svg>
        </span>
    );
};
