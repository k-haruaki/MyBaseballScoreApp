import React from 'react';
import { PrimaryTable } from '../../components/UIkit';

const columns = [
    { id: 'name', label: '選手', minWidth: 100},
    { id: 'battingRate', label: '打率', minWidth: 50},
    { id: 'gameNum', label: '試合数', minWidth: 50},
    { id: 'daseki', label: '打席数', minWidth: 50},
    { id: 'battingNum', label: '打数', minWidth: 50},
    { id: 'point', label: '得点', minWidth: 50},
    { id: 'hit', label: '安打', minWidth: 50},
    { id: 'twoHit', label: '二塁打', minWidth: 50},
    { id: 'threeHit', label: '三塁打', minWidth: 50},
    { id: 'hr', label: '本塁打', minWidth: 50},
    { id: 'ruida', label: '塁打', minWidth: 50},
    { id: 'daten', label: '打点', minWidth: 50},
    { id: 'torui', label: '盗塁', minWidth: 50},
    { id: 'missTorui', label: '盗塁刺', minWidth: 50},
    { id: 'bunt', label: '犠打', minWidth: 50},
    { id: 'giseiFly', label: '犠飛', minWidth: 50},
    { id: 'fourBall', label: '四球', minWidth: 50},
    { id: 'keien', label: '故意四球', minWidth: 50},
    { id: 'deadBall', label: '死球', minWidth: 50},
    { id: 'threeStrike', label: '三振', minWidth: 50},
    { id: 'doubulePlay', label: '併殺打', minWidth: 50},
    { id: 'tyoudaritsu', label: '長打率', minWidth: 50},
    { id: 'syuturuiritsu', label: '出塁率', minWidth: 50},
]

const createData = (
        name, battingRate, gameNum, daseki, battingNum, point,
        hit, twoHit, threeHit, hr, ruida, daten, torui, missTorui, bunt, giseiFly,
        fourBall, keien, deadBall, threeStrike, doubulePlay, tyoudaritsu, syuturuiritsu,
        stadium, size, population
    ) => {

    const density = population / size;
    
    return {
        name, battingRate, gameNum, daseki, battingNum, point,
        hit, twoHit, threeHit, hr, ruida, daten, torui, missTorui, 
        bunt, giseiFly, fourBall, keien, deadBall, threeStrike, 
        doubulePlay, tyoudaritsu, syuturuiritsu, stadium, density
    }
}

// ToDo:データベースから取得予定
const rows = [
    createData('川平 陽明', '.376', '22', '97', '93', '16', '35', '3', '0', '5', '53', '10', '1', '1', '0', '0', '4', '0', '0', '14', '0', '.570', '.402'),
    createData('佐藤 貴裕', '.376', '22', '97', '93', '16', '35', '3', '0', '5', '53', '10', '1', '1', '0', '0', '4', '0', '0', '14', '0', '.570', '.402'),
    createData('下家 健人', '.376', '22', '97', '93', '16', '35', '3', '0', '5', '53', '10', '1', '1', '0', '0', '4', '0', '0', '14', '0', '.570', '.402'),
];

const ButterPerformance = () => {

    return (
        <>
          <div className='main'>
              <div className='main-title'>
                <h2>打者成績</h2>
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

export default ButterPerformance;