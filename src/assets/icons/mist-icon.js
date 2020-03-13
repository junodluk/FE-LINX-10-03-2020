import React from 'react';
import * as Colors from '../colors';

export const MistIcon = props => {
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
                        d="M432,70c-44.112,0-80,35.888-80,80h32c0-26.464,21.536-48,48-48s48,21.536,48,48s-21.536,48-48,48H0v32h432 c44.112,0,80-35.888,80-80S476.112,70,432,70z"
                    />
                </g>
                <g>
                    <path
                        style={{ fill: color }}
                        d="M80,310h432v-32H80c-44.112,0-80,35.888-80,80s35.888,80,80,80s80-35.888,80-80h-32c0,26.464-21.536,48-48,48 s-48-21.536-48-48S53.536,310,80,310z"
                    />
                </g>
                <g>
                    <path
                        style={{ fill: color }}
                        d="M456,358H208v32h248c13.232,0,24,12.768,24,26s-10.768,26-24,26s-24-20-24-20h-32c0,16,25.12,52,56,52s56-27.12,56-58 S486.88,358,456,358z"
                    />
                </g>
                <g>
                    <path
                        style={{ fill: color }}
                        d="M56,118c-13.232,0-24-8.768-24-22s10.768-22,24-22s24,12,24,28h32c0-32-25.12-60-56-60S0,63.12,0,94s25.12,56,56,56h248 v-32H56z"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="160"
                        y="438"
                        width="160"
                        height="32"
                    />
                </g>
                <g>
                    <rect
                        style={{ fill: color }}
                        x="160"
                        y="38"
                        width="160"
                        height="32"
                    />
                </g>
            </svg>
        </span>
    );
};
