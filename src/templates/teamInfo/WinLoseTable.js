import React from 'react';
import { PrimaryTable } from '../../components/UIkit';

const columns = [
    { id: 'gameDate', label: '試合日', minWidth: 170 },
    { id: 'myTeam', label: '自チーム名', minWidth: 170 },
    { id: 'Score', label: 'スコア', minWidth: 170 },
    { id: 'enemyTeam', label: '相手チーム名', minWidth: 170 },
]

const createData = (gameDate, myTeam, Score, enemyTeam, size, population) => {
    const density = population / size;
    return { gameDate, myTeam, Score, enemyTeam, density };
}

// ToDo:データベースから取得予定
const rows = [
    createData('2021/04/01', 'ハルワラーズ', '◯ 8-3', 'サトワラーズ'),
    createData('2021/04/02', 'ハルワラーズ', '● 4-5', 'シモカープ'),
    createData('2021/04/03', 'ハルワラーズ', '● 1-2', 'ハルカーズ'),
    createData('2021/04/04', 'ハルワラーズ', '◯ 2-0', 'サトモンズ'),
    createData('2021/04/05', 'ハルワラーズ', '◯ 4-3', 'シーモーズ'),
    createData('2021/04/06', 'ハルワラーズ', '● 1-6', 'ハールーブウェーブ'),
    createData('2021/04/07', 'ハルワラーズ', '◯ 6-5', 'サトガーズ'),
];

const WinLoseTable = () => {

    return (
        <>
            <div className='main'>
                <div className='main-title'>
                    <h2>勝敗表</h2>
                </div>
                <div className='main-content'>
                    <PrimaryTable
                        columns={columns}
                        rows={rows}
                        // onClick={(data) => openPlayerDetails(data)}
                    >
                    </PrimaryTable>
                </div>
            </div>
        </>
    )
}

export default WinLoseTable;