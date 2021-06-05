import React from 'react';
import { useDispatch } from 'react-redux';
import { PlayerFrame } from '../../components/Main/index';

const PlayerEditList = () => {
    const dispatch = useDispatch();

    return (
        <PlayerFrame
            isEdit={true}
        >
        </PlayerFrame>
    )
    
}

export default PlayerEditList;