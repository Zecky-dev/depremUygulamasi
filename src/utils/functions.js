import moment from 'moment';
const functions = {
    getCurrentDate: () => {
        const millis = new Date().getTime();
        const date = new Date(millis);
        const currentDate = moment(date).subtract(1,'day').format('YYYY-MM-DD');
        const oneDayLater = moment(date).add(1,'day').format('YYYY-MM-DD');
        const dates = {currentDate,oneDayLater}
        return dates;
    }
}

export default functions;