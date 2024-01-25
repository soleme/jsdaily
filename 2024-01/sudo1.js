// Define a separate function to handle the logic inside the forEach loop
function handleEventReasonData(data, vYear, promotionDate, cust_timeInJobGrade, extractionYn, nonTargetReason, userId) {
    const basicPromotion = vYear + '-02-01';
    const calcPromotionDate = promotionDate;
    const standardStayLength = this.calYearToDay(cust_timeInJobGrade);
    const frontDay = this.calDiffDay(new Date(basicPromotion), new Date(calcPromotionDate));
    const restDay = this.calDiffDay(new Date(data.startDate), new Date(data.endDate));
    let result = frontDay - restDay;
    if ((data.startDate > promotionDate && data.userId === userId) || (data.userId === userId && result < standardStayLength)) {
        extractionYn = 'X';
        nonTargetReason += '[휴직] ';
    }
}

// Use the extracted function inside the forEach loop
const filteredEventReasonData = eventReasonData.filter(data => eventReason.some(reason => reason.code === data.eventReason));
filteredEventReasonData.forEach(data => {
    handleEventReasonData(data, vYear, promotionDate, cust_timeInJobGrade, extractionYn, nonTargetReason, userId);
});