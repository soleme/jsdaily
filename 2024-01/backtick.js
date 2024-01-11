const eventReason = [
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-10T07:14:35.392Z",
        modifiedBy: "anonymous",
        year: "2024",
        targetType: "R",
        code: "LOAACC",
        name: "산재휴직",
        targetYn: "Y",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-10T07:14:35.392Z",
        modifiedBy: "anonymous",
        year: "2024",
        targetType: "R",
        code: "LOACCL",
        name: "자녀입학돌봄휴직",
        targetYn: "Y",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-10T07:14:35.392Z",
        modifiedBy: "anonymous",
        year: "2024",
        targetType: "R",
        code: "LOAFAM",
        name: "가족돌봄휴직",
        targetYn: "Y",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-10T07:14:35.392Z",
        modifiedBy: "anonymous",
        year: "2024",
        targetType: "R",
        code: "LOAPAE",
        name: "육아휴직(확대)",
        targetYn: "Y",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-10T07:14:35.392Z",
        modifiedBy: "anonymous",
        year: "2024",
        targetType: "R",
        code: "LOAPAM",
        name: "육아휴직(남성의무)",
        targetYn: "Y",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-10T07:14:35.392Z",
        modifiedBy: "anonymous",
        year: "2024",
        targetType: "R",
        code: "LOAREQ",
        name: "일반휴직",
        targetYn: "Y",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-10T07:14:35.392Z",
        modifiedBy: "anonymous",
        year: "2024",
        targetType: "R",
        code: "TIOMAT",
        name: "출산휴가",
        targetYn: "Y",
    },
];

const eventReasonData = [
    {
        userId: "62281207",
        startDate: "2023-11-16",
        endDate: "2024-11-14",
        event: "1229",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
    {
        userId: "62281212",
        startDate: "2023-01-01",
        endDate: "2023-04-16",
        event: "1229",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
    {
        userId: "69470153",
        startDate: "2023-10-09",
        endDate: "2023-11-03",
        event: "1229",
        eventReason: "LOAILL",
        eventReasonName: "상병휴직",
    },
    {
        userId: "62281234",
        startDate: "2023-01-01",
        endDate: "2023-05-31",
        event: "1229",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
    {
        userId: "62281216",
        startDate: "2023-06-12",
        endDate: "2023-07-31",
        event: "1229",
        eventReason: "LOAPAE",
        eventReasonName: "육아휴직(확대)",
    },
    {
        userId: "62281216",
        startDate: "2023-12-30",
        endDate: "2024-12-29",
        event: "1229",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
    {
        userId: "62281239",
        startDate: "2023-07-13",
        endDate: "2023-07-31",
        event: "1229",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
    {
        userId: "62281226",
        startDate: "2023-01-01",
        endDate: "2023-05-31",
        event: "1229",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
    {
        userId: "62281248",
        startDate: "2023-01-01",
        endDate: "2023-05-31",
        event: "1229",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    }
]

const filteredEventReasonData = eventReasonData.filter(data => eventReason.some(reason => reason.code === data.eventReason));
const promotionDate = new Date('2020-02-01');

filteredEventReasonData.forEach(data => {
    const startDate = new Date(data.startDate);
    if (startDate > promotionDate) {
        console.log(`${data.startDate}의 날짜가 promotionDate보다 큽니다.`);
    } else {
        console.log(`${data.startDate}의 날짜가 promotionDate보다 작거나 같습니다.`);
    }
});