const START_DATE_STRING = "startDate";
const END_DATE_STRING = "endDate";

export default {
    setStart(date, time){
        localStorage.setItem(START_DATE_STRING, this.parseDate(date, time).getTime().toString());
    },
    setEnd(date, time){
        localStorage.setItem(END_DATE_STRING, this.parseDate(date, time).getTime().toString());
    },
    parseDate(date, time){
        let d = new Date();

        if((date !== undefined && time !== undefined) && (date !== null && time !== null)){
            let dateSplit = date.split('-');
            let timeSplit = time.split(':');

            d.setFullYear(parseInt(dateSplit[0]), parseInt(dateSplit[1]) - 1, parseInt(dateSplit[2]));
            d.setHours(parseInt(timeSplit[0]), parseInt(timeSplit[1]), 0);
        }

        return d;
    },
    getStart(){
        return new Date(parseInt(localStorage.getItem(START_DATE_STRING)));
    },
    dateStringFromDate(date){
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    },
    timeStringFromDate(date){
        return date.getHours() + ':' + date.getMinutes();
    },
    getStartDateString(){
       return this.dateStringFromDate(this.getStart());
    },
    getStartTimeString(){
        return this.timeStringFromDate(this.getStart());
    },
    getEnd(){
        return new Date(parseInt(localStorage.getItem(END_DATE_STRING)));
    },
    getEndDateString(){
        return this.dateStringFromDate(this.getEnd());
    },
    getEndTimeString(){
        return this.timeStringFromDate(this.getEnd());
    },
    isSessionStarted(){
        return false;
    },
    isSessionEnded(){
        return true;
    },
    isDuringSession(){
        return false;
    }
}
