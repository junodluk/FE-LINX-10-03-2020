import React from 'react';
import * as Colors from '../colors';

export const CancelIcon = props => {
    const { color = Colors.WHITE, width = '45px', ...rest } = props;
    return (
        <span {...rest}>
            <svg
                style={{ width: width }}
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
            >
                <path
                    style={{ fill: color }}
                    d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
                        L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
                        c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
                        c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"
                />
            </svg>
        </span>
    );
};
