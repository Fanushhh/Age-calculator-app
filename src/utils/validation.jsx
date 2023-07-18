export const validateYear = (year) => {
    const formattedYear = Number(year);
    const validityPayload = {
        error: false,
        message: '',
    }
    if(!formattedYear){
        validityPayload.error = true;
        validityPayload.message = 'Year cannot be empty or zero';
        return validityPayload;
    }
    if(formattedYear > new Date().getFullYear()){
        validityPayload.error = true;
        validityPayload.message = 'Must be in the past';
        return validityPayload;
    }
    if(formattedYear < 1900){
        validityPayload.error = true;
        validityPayload.message = 'Too much in the past.';
        return validityPayload;
    }
    
    return validityPayload;
    
}

export const validateMonth = (month) => {
    const formattedMonth = Number(month);
    
    const validityPayload = {
        error: false,
        message: '',
    }
    if(!formattedMonth){
        validityPayload.error = true;
        validityPayload.message = 'Month cannot be empty or zero';
        return validityPayload;
    }
    if(formattedMonth > 12 || formattedMonth < 0){
        validityPayload.error = true;
        validityPayload.message = 'Must be a valid month.';
        return validityPayload;
    }
    
    return validityPayload;
    
}
export const validateDay = (day, month) => {
    
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];
    const formattedDay = Number(day);
    const formattedMonth = Number(month);
    let monthDays = months[formattedMonth];
    console.log(monthDays);
    const validityPayload = {
        error: false,
        message: '',
    }
    if(!formattedDay){
        validityPayload.error = true;
        validityPayload.message = 'Day cannot be empty or zero';
        return validityPayload;
    }
    if(formattedDay > monthDays || formattedDay < 0) {
        validityPayload.error = true;
        validityPayload.message = 'Invalid day.';
        return validityPayload;
    }
    
    return validityPayload;
    
}