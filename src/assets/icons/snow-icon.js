import React from 'react';
import * as Colors from '../colors';

export const SnowIcon = props => {
    const { color = Colors.WHITE, width = '45px', ...rest } = props;
    return (
        <span {...rest}>
            <svg
                style={{ width: width }}
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
            >
                <polygon
                    style={{ fill: color }}
                    points="512,240 374.624,240 475.312,139.312 452.688,116.688 329.376,240 272,240 272,166.624 395.312,43.312 
                            372.688,20.688 272,121.376 272,0 240,0 240,121.376 139.312,20.688 116.688,43.312 240,166.624 240,240 166.624,240 
                            43.312,116.688 20.688,139.312 121.376,240 0,240 0,272 121.376,272 20.688,372.688 43.312,395.312 166.624,272 240,272 
                            240,345.376 116.688,468.688 139.312,491.312 240,390.624 240,512 272,512 272,390.624 372.688,491.312 395.312,468.688 
                            272,345.376 272,272 329.376,272 452.688,395.312 475.312,372.688 374.624,272 512,272"
                />
            </svg>
        </span>
    );
};