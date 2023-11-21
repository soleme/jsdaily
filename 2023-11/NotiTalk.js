function makeNotiTalk(oData) {
    return {
        items: {
            DEST_PHONE: oData.DEST_PHONE,
            DEST_NAME: oData.DEST_NAME,
            SUBJECT: StatusEnum.NOTITALK('HR0013'), // StatusEnum.NOTITALK 함수의 사용에 주의해야 합니다.
            MSG_BODY: "",
            USER1: 'HR0013'
        }
    };
}

// StatusEnum.NOTITALK 함수가 정의되어 있다고 가정
const StatusEnum = {
    NOTITALK: function(user) {
        // 실제 로직에 따라 상태를 반환하는 함수
        return "상태 정보";
    }
};

let oData = {
    DEST_PHONE: '010-1234-4056',
    DEST_NAME: '홍길동'
}

// 함수 호출 및 결과 출력
const result = makeNotiTalk(oData);
console.log(result);