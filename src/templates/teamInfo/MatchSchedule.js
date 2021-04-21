import React from 'react';
import Calendar from '../../components/UIkit/Calendar';

const MatchSchedule = () => {

    return (
        <>
          <div className='main'>
              <div className='main-title'>
                <h2>試合日程・結果</h2>
              </div>
              <div className='main-content'>
                <Calendar></Calendar>
              </div>
          </div>
        </>
    )

}

export default MatchSchedule;