let originalData = [
    {
        "DEST_PHONE": "",
        "DEST_NAME": "",
        "SUBJECT": "선물 지급 대상자 미신청 안내",
        "MSG_BODY": "{성명}님이 신청하신 {신청년도,2023}년 추석 선물을 신청하시기 바랍니다.",
        "USER1": "HR0013"
    },
    {
        "DEST_PHONE": "",
        "DEST_NAME": "",
        "SUBJECT": "선물 지급 대상자 미신청 안내",
        "MSG_BODY": "{성명}님이 신청하신 {신청년도,2023}년 추석 선물을 신청하시기 바랍니다.",
        "USER1": "HR0013"
    }
];

let transformedData = {
    "items": originalData.map(item => {
        return {
            "DEST_PHONE": "010-3304-4056",
            "DEST_NAME": "테스트",
            "SUBJECT": "선물 지급 대상자 미신청 안내",
            "MSG_BODY": "롯데님이 2023년 추석 선물을 신청하시기 바랍니다.",
            "USER1": "HR0013"
        };
    })
};

console.log(JSON.stringify(transformedData, null, 2));