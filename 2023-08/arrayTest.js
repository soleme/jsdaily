const originalArray = [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 22, gender: 'male' }
];

const newArray = originalArray.map(item => {
    const { gender, ...rest } = item; // 필요한 컬럼을 제외한 나머지 속성을 rest로 추출
    return rest; // gender 컬럼을 제외한 객체 반환
});

// console.log(newArray);


const eventReason = 'LOACCL,LOAREQ,LOAPAR';

const emp = [
    {
        payId: "202301",
        userId: "Z12300058",
        username: "놀란크리스토퍼",
        department: "50000074",
        departmentName: "SF_EC운영담당",
        division: "91001300",
        divisionName: "PMI BU",
        subdivision: "91003000",
        subdivisionName: "ESG Division",
        team: "91080900",
        teamName: "SF Maintenance",
        part: "50000074",
        partName: "SF_EC Maintenance",
        fullDepartmentName: "롯데웰푸드>PMI본부>ESG부문>SuccessFactors운영팀>SF_EC운영담당",
        grade: "2020",
        gradeName: "M",
        title: "1300",
        titleName: "담당",
        costCenter: undefined,
        hireDate: "2023-08-16",
        hireDay: 228,
        workStatus: "재직",
        eventReason: "HIRNEW",
        point: 500000,
    },
    {
        payId: "202301",
        userId: "23",
        username: "김부팔",
        department: "91009100",
        departmentName: "인사팀",
        division: "91001300",
        divisionName: "PMI BU",
        subdivision: "91003000",
        subdivisionName: "ESG Division",
        team: "91009100",
        teamName: "인사팀",
        part: "",
        partName: "",
        fullDepartmentName: "롯데웰푸드>PMI본부>ESG부문>인사팀",
        grade: undefined,
        gradeName: undefined,
        title: undefined,
        titleName: undefined,
        costCenter: undefined,
        hireDate: "2022-10-25",
        hireDay: -67,
        workStatus: "재직",
        eventReason: "HIRNEW",
        point: 500000,
    },
    {
        payId: "202301",
        userId: "11009996",
        username: "이사라",
        department: "91024200",
        departmentName: "인사기획담당21",
        division: "91001300",
        divisionName: "PMI BU",
        subdivision: "91003000",
        subdivisionName: "ESG Division",
        team: "91009100",
        teamName: "인사팀",
        part: "91024200",
        partName: "인사기획담당",
        fullDepartmentName: "롯데웰푸드>PMI본부>ESG부문>인사팀>인사기획담당",
        grade: "2020",
        gradeName: "M",
        title: "1100",
        titleName: "매니저",
        costCenter: undefined,
        hireDate: "2023-05-01",
        hireDay: 121,
        workStatus: "재직",
        eventReason: "HIRNEW",
        point: 500000,
    }
]

const filteredEmployees = emp.filter(employee => {
    const allowedEventReasons = ['LOACCL', 'LOAREQ', 'LOAPAR'];
    return allowedEventReasons.includes(employee.eventReason);
});

console.log(filteredEmployees);