
// 보육수당 cust_ChildcareAllow_ToPayroll
// 임원학자금 cust_ExecutivesTuition_ToPayroll

const vType = 'CHILDTYPE';
const vUri = 'cust_ChildcareAllow_ToPayroll';
const vInnerUri = 'cust_toChildcareAllowDetails';
const vReqId = '1000001';
const vEmpId = 'Z12300035';

const result = makeFormat(vType, vUri, vInnerUri, vEmpId, vReqId, '150000');
console.log(result);

function makeFormat(type, uri, innerUri, empId, reqId, amount) {

    let params = null;

    if(type === 'CHILDTYPE'){
        params = {
            __metadata: {
                "uri": `/${uri}`
            },
            externalCode: empId
        };

        params[innerUri] = {
            [uri + '_externalCode']: empId,
            externalCode: reqId,
            cust_approvalDate: "/Date(1697340701270)/",
            cust_amount: amount
        };
    }else{
        params = {
            __metadata: {
                "uri": `/${uri}`
            },
            externalCode: empId
        };

        params[innerUri] = {
            [uri + '_externalCode']: empId,
            externalCode: reqId,
            cust_approvalDate: "/Date(1697340701270)/",
            cust_amount: amount,
            cust_requestDate: "/Date(1697340701270)/",
        };
    }


    //console.log(params);
    return params;
}

// function makeFormat(uri, innerUri, empId){
//     let params = [];
//     let innerParams = {};
//
//     params.push({
//         __metadata: {
//             "uri": `/${uri}`
//         },
//         externalCode: `${empId}`,
//         [innerUri]: innerParams
//     })
//
//     innerParams[uri + `_externalCode`] = `${empId}`;
//     innerParams['externalCode'] = 1000002;
//     innerParams['cust_approvalDate'] = "/Date(1697340701270)/";
//     innerParams['cust_amount'] = "150000";
//
//     console.log(params);
// }

// function makeFormat(uri, empId) {
//     let params = {};
//
//     params.__metadata = {
//         "uri": `/${uri}`
//     };
//
//     params.externalCode = empId;
//     params[uri] = 'test';
//
//     console.log(params);
// }
//
// makeFormat('cust_ChildcareAllow_ToPayroll', 'Z12300035');

