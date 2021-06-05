import { PinDropSharp } from '@material-ui/icons';
import React,  { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryTable } from '../UIkit';
import { selectPlayer } from '../../reducks/Player/operations';

const PlayerFrame = (props) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);

    const [rows, setRows] = useState([]);

    const columns = [
        { id: 'uniformNumber', label: '背番号', minWidth: 50 },
        { id: 'playerName', label: '選手名', minWidth: 170 },
        { id: 'position', label: 'ポジション', minWidth: 170 },
        { id: 'throwStrikeHand', label: '投／打', minWidth: 170 },
        { id: 'baseballHistory', label: '野球歴', minWidth: 170 },
        { id: 'comment', label: 'コメント', minWidth: 250 },
    ];

    // ToDo:データベースから取得予定
    useEffect(() => {
        fetchPlayerData();
    }, []);

    const fetchPlayerData = () => {
        setRows([
            createData(1, '選手A', 'ピッチャー', '右／右', '4年', 'よろしく！'),
            createData(2, '選手B', 'キャッチャー', '右／右', '4年', 'よろしく！'),
            createData(3, '選手C', 'ファースト', '右／右', '4年', 'よろしく！'),
            createData(4, '選手D', 'セカンド', '右／右', '4年', 'よろしく！'),
            createData(5, '選手E', 'サード', '右／右', '4年', 'よろしく！'),
            createData(6, '選手F', 'ショート', '右／右', '4年', 'よろしく！'),
            createData(7, '選手G', 'レフト', '右／右', '4年', 'よろしく！'),
            createData(8, '選手H', 'センター', '右／右', '4年', 'よろしく！'),
            createData(9, '選手I', 'ライト', '右／右', '4年', 'よろしく！'),
        ]);
    }
    
    const openPlayerDetails = useCallback((data) => {
        dispatch(selectPlayer(data));
    }, [dispatch])

    const createData = (uniformNumber, playerName, position, throwStrikeHand, baseballHistory, comment, size, population) => {
        const density = population / size;
        return {uniformNumber, playerName, position, throwStrikeHand, baseballHistory, comment, density };
    }

    return (
        <>
            <div className='main'>
                <div className='main-content'>
                    <PrimaryTable
                        columns={columns}
                        rows={rows}
                        isEdit={props.isEdit}
                        onClick={(data) => openPlayerDetails(data)}
                    >
                    </PrimaryTable>
                </div>
            </div>
        </>
    )
}

export default PlayerFrame;