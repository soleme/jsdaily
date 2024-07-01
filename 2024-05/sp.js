const data = {
    "companyCode": "5000",
    "cust_orgLevel": "2",
    "name": "DD사업본부",
    "externalCode": "34300225",
    "categories": [
        {
            "companyCode": "5000",
            "cust_orgLevel": "5",
            "name": "DD생산센터",
            "externalCode": "50012279",
            "categories": [
                {
                    "companyCode": "5000",
                    "cust_orgLevel": "7",
                    "name": "관리팀",
                    "externalCode": "50010431",
                    "categories": [],
                    "empSearch": false,
                    "type": "dept"
                }
            ],
            "empSearch": false,
            "type": "dept"
        }
    ],
    "empSearch": false,
    "type": "dept"
};

function parseJSON(data) {
    const rows = [];
    const columns = ['companyCode', 'orgLevel2Code', 'orgLevel2Name',
                             'orgLevel5Code', 'orgLevel5Name', 'orgLevel7Code', 'orgLevel7Name'];

    function recurse(node, levels) {
        const currentLevel = { companyCode: node.companyCode };

        if (node.cust_orgLevel === '2') {
            currentLevel.orgLevel2Code = node.externalCode;
            currentLevel.orgLevel2Name = node.name;
        } else if (node.cust_orgLevel === '5') {
            currentLevel.orgLevel5Code = node.externalCode;
            currentLevel.orgLevel5Name = node.name;
        } else if (node.cust_orgLevel === '7') {
            currentLevel.orgLevel7Code = node.externalCode;
            currentLevel.orgLevel7Name = node.name;
        }

        levels.push(currentLevel);

        rows.push(Object.assign({}, ...levels));

        if (node.categories && node.categories.length > 0) {
            node.categories.forEach(category => recurse(category, levels));
        }

        levels.pop();
    }

    recurse(data, []);

    return rows;
}

const parsedData = parseJSON(data);
console.log(parsedData);
// const columns = ['companyCode', 'orgLevel2Code', 'orgLevel5Code', 'orgLevel7Code'];
//
// // 결과를 테이블 형식으로 출력
// console.log(columns.join('\t'));  // 헤더 출력
// parsedData.forEach(row => {
//     console.log(columns.map(col => row[col] || '').join('\t'));  // 각 행 출력
// });
