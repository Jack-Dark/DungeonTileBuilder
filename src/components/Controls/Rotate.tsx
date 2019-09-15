import React from 'react';
import RotateClockwise from './RotateClockwise';
import RotateCounterClockwise from './RotateCounterClockwise';
import { tileType } from '../../App';

export interface RotateProps {
    rotateClockwise: Function;
    rotateCounterClockwise: Function;
    tileDetails: tileType;
}

export default class Rotate extends React.PureComponent<RotateProps> {
    render(): React.ReactNode {
        const {
            rotateCounterClockwise,
            rotateClockwise,
            tileDetails
        } = this.props;
        return (
            <React.Fragment>
                <RotateCounterClockwise
                    onClick={() => rotateCounterClockwise(tileDetails.id)}
                />
                <RotateClockwise
                    onClick={() => rotateClockwise(tileDetails.id)}
                />
            </React.Fragment>
        );
    }
}
