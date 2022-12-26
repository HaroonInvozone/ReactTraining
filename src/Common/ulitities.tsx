import isValid from "date-fns/isValid";
// import isValid from "diagnostics_channel";

export const calculateTimeLeft  = date =>{
    if (!isValid(date)) return null;
    let comingDate: any = new Date(date);
    let  currentDate:any = new Date();
    const difference:any = comingDate - currentDate;
    let timeLeft = {};

    if (difference > 0){
        timeLeft = {
            days : Math.floor(difference / (1000 * 60 * 60 *24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return timeLeft;
};