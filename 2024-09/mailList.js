let mail = [{
    "langExamCode": null,
    "langExamName": null,
    "langScore": null,
    "langGradeCode": null,
    "langGradeName": null,
    "langResult": "N",
    "confirmYn": "1",
    "email": "JSPKKK@SPC.CO.KRm",
},{
    "langExamCode": null,
    "langExamName": null,
    "langScore": null,
    "langGradeCode": null,
    "langGradeName": null,
    "langResult": "N",
    "confirmYn": "1",
    "email": "JSPKKK@SPC.CO.KRm",
}]

const mailList = 'Æ' + mail.map(o=> o.email).join('Æ');

console.log(mailList);

