import React,  { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryTable } from '../../components/UIkit';
import { selectPlayer } from '../../reducks/Player/operations'

const columns = [
    { id: 'uniformNumber', label: '背番号', minWidth: 170 },
    { id: 'playerName', label: '選手名', minWidth: 170 },
    {
        id: 'height',
        label: '身長',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'bodyWeight',
        label: '体重',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'throwHand',
        label: '投',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'strikeHand',
        label: '打',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

const createData = (uniformNumber, playerName, height, bodyWeight, throwHand, strikeHand, size, population) => {
    const density = population / size;
    return { uniformNumber, playerName, height, bodyWeight, throwHand, strikeHand, density };
}

// ToDo:データベースから取得予定
const rows = [
    createData(1, '選手A', 182.2, 88.3, '右', '右'),
    createData(2, '選手B', 178.1, 79.5, '右', '右'),
    createData(3, '選手C', 179.1, 76.1, '右', '右'),
    createData(4, '選手D', 177.4, 74.6, '右', '右'),
    createData(5, '選手E', 183.6, 80.2, '右', '右'),
    createData(6, '選手F', 188.9, 90.4, '右', '右'),
    createData(7, '選手G', 171.6, 69.7, '右', '右'),
    createData(8, '選手H', 177.4, 77.3, '右', '右'),
    createData(9, '選手I', 177.6, 75.8, '右', '右'),
    createData(10, '選手J', 178.8, 80.4, '右', '右'),
    createData(11, '選手K', 190.4, 100.8, '右', '右'),
    createData(12, '選手L', 171.3, 78.1, '右', '右'),
    createData(13, '選手M', 176.7, 71.6, '右', '右'),
    createData(14, '選手N', 184.9, 83.2, '右', '右'),
    createData(15, '選手O', 187.7, 88.4, '右', '右'),
];

const PlayerList = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);

    // const [isOpenPlayerDetails, setIsOpenPlayerDetails] = useState(false);

    const openPlayerDetails = useCallback((data) => {
        dispatch(selectPlayer(data));
    }, [dispatch])

    console.log(selector.playerData);

    return (
        <>
            <div className='main'>
                <div className='main-content'>
                    <PrimaryTable
                        columns={columns}
                        rows={rows}
                        onClick={(data) => openPlayerDetails(data)}
                    >
                    </PrimaryTable>
                </div>
            </div>
        </>
    )
}

export default PlayerList;