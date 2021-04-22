import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Calendar from 'react-calendar';

const CustomCalendar = () => {

    const [calendarData, setCalendarData] = useState(
        {
            date: new Date (new Date()),
            month_item: {
                20210401: {team: 'サトワラーズ', score: '◯ 4-1 '},
                20210419: {team: 'シモチャンズ', score: '● 1-3 '},
                20210421: {team: 'タニダーズ', score: '◯ 4-1 '},
                20210425: {team: 'タカーズ', score: '◯ 5-4 '}
            }
        }
    );

    const getTileContent = (date) => {
        if ('month' === date.view) {
            const datetime = DateTime.fromISO(date.date.toISOString());
            const targetDate = datetime.toFormat('yyyyMMdd');
            return calendarData.month_item[targetDate] && calendarData.month_item[targetDate].team ?
                <div>
                    <p>{calendarData.month_item[targetDate].team}</p>
                    <p>{calendarData.month_item[targetDate].score}</p>
                </div>
                :null
        }
    }

    return (
        <Calendar
            locale="ja-JP"
            calendarType="US"
            minDetail="month"
            value={calendarData.date}
            tileContent={getTileContent}
        />
    )

}

export default CustomCalendar;