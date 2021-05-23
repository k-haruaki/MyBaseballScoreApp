import React from 'react';
import { PrimaryTable } from '../../components/UIkit';

const columns = [
  { id: 'name', label: '選手', minWidth: 100},
  { id: 'bougyoritsu', label: '防御率', minWidth: 50},
  { id: 'touban', label: '登板', minWidth: 50},
  { id: 'win', label: '勝利', minWidth: 50},
  { id: 'lose', label: '敗北', minWidth: 50},
  { id: 'save', label: 'セーブ', minWidth: 50},
  { id: 'hold', label: 'ホールド', minWidth: 50},
  { id: 'hp', label: 'HP', minWidth: 50},
  { id: 'kantou', label: '完投', minWidth: 50},
  { id: 'kanpu', label: '完封勝', minWidth: 50},
  { id: 'noFourBall', label: '無四球', minWidth: 50},
  { id: 'winRitsu', label: '勝率', minWidth: 50},
  { id: 'buttingPlayer', label: '打者', minWidth: 50},
  { id: 'toukyuNum', label: '投球回', minWidth: 50},
  { id: 'hr', label: '本塁打', minWidth: 50},
  { id: 'fourBall', label: '四球', minWidth: 50},
  { id: 'keien', label: '故意四球', minWidth: 50},
  { id: 'deadBall', label: '死球', minWidth: 50},
  { id: 'threeStrike', label: '三振', minWidth: 50},
  { id: 'boutou', label: '暴投', minWidth: 50},
  { id: 'boark', label: 'ボーク', minWidth: 50},
  { id: 'sitten', label: '失点', minWidth: 50},
  { id: 'zisekiten', label: '自責点', minWidth: 50},
]

const createData = (
    name, bougyoritsu, touban, win, lose, save, hold, hp, kantou, kanpu, noFourBall,
    winRitsu, buttingPlayer, toukyuNum, hr, fourBall, keien, deadBall, threeStrike,
    boutou, boark, sitten, zisekiten, stadium, size, population
  ) => {

  const density = population / size;

  return {
    name, bougyoritsu, touban, win, lose, save, hold, hp, kantou, kanpu, noFourBall,
    winRitsu, buttingPlayer, toukyuNum, hr, fourBall, keien, deadBall, threeStrike,
    boutou, boark, sitten, zisekiten, stadium, density
  }
}

const rows = [
  createData('川平 陽明', '1.82', '11', '6', '0', '0', '0', '10', '6', '2', '.647', '559', '148.2', '106', '13', '23', '2', '0', '148', '3', '0', '33', '30'),
  createData('佐藤 貴裕', '1.82', '11', '6', '0', '0', '0', '10', '6', '2', '.647', '559', '148.2', '106', '13', '23', '2', '0', '148', '3', '0', '33', '30'),
  createData('下家 健人', '1.82', '11', '6', '0', '0', '0', '10', '6', '2', '.647', '559', '148.2', '106', '13', '23', '2', '0', '148', '3', '0', '33', '30'),
];

const PitcherPerformance = () => {

  return (
    <>
      <div className='main'>
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

export default PitcherPerformance;