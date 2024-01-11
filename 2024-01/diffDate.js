const startDate = new Date(filteredEventReasonData[0].startDate);
const promotionDate = new Date('2020-02-01');

if (startDate > promotionDate) {
    console.log("startDate의 날짜가 promotionDate보다 큽니다.");
} else {
    console.log("startDate의 날짜가 promotionDate보다 작거나 같습니다.");
}