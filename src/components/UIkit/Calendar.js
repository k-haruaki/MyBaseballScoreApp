import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Calendar from 'react-calendar';

const CustomCalendar = () => {

    const [calendarData, setCalendarData] = useState(
        {
            date: new Date (new Date()),
            month_item: {
                20210419: {text: '試合'},
                20210421: {text: '今日の予定'}
            }
        }
    );

    const getTileContent = (date) => {
        if ('month' === date.view) {
            const datetime = DateTime.fromISO(date.date.toISOString());
            const targetDate = datetime.toFormat('yyyyMMdd');
            return calendarData.month_item[targetDate] && calendarData.month_item[targetDate].text ?
                <div>
                    <p>{calendarData.month_item[targetDate].text}</p>
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