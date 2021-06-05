import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectPlayer } from '../../reducks/Player/operations';
import { PlayerFrame } from '../../components/Main/index';

const PlayerInput = () => {
    const dispatch = useDispatch();

    let number = window.location.pathname.split('/player/edit')[1];
    if (number !== "") {
        number = number.split('/')[1];
    }

    const [uniformNumber, setUniformNunber] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [position, setPosition] = useState("");
    const [throwStrikeHand, setThrowStrikeHand] = useState("");
    const [baseballHistory, setBaseballHistory] = useState("");
    const [comment, setComment] = useState("");

    return (
        <PlayerFrame
            isEdit={true}
            onClick={() => dispatch(selectPlayer(uniformNumber, playerName, position, throwStrikeHand, baseballHistory, comment))}
        >
        </PlayerFrame>
    )
    
}

export default PlayerInput;