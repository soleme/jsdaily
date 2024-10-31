let overRallList = [
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14581L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "I",
        Year: "2023",
        PromotionGrade: null,
    },
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14580L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "M",
        Year: "2022",
        PromotionGrade: null,
    },
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14579L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "M",
        Year: "2021",
        PromotionGrade: null,
    },
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14578L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "I",
        Year: "2020",
        PromotionGrade: null,
    },
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14577L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "M",
        Year: "2019",
        PromotionGrade: null,
    },
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14576L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "M",
        Year: "2018",
        PromotionGrade: null,
    },
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14575L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "M",
        Year: "2017",
        PromotionGrade: null,
    },
    {
        __metadata: {
            uri: "https://api50.sapsf.com/odata/v2/Background_OverallResults(backgroundElementId=14574L,userId='20931176')",
            type: "SFOData.Background_OverallResults",
        },
        userId: "20931176",
        TotalGrade: "M",
        Year: "2016",
        PromotionGrade: null,
    },
]

// 연도와 기준값
const year = 2024;
const basicYear = 4;

// let i = 2024; 2024 > 2024 - 4; 2024--;

// 총 "N"의 개수 계산 함수
function countNValues(overRallList, year, basicYear) {
    let nCount = 0;

    // year부터 year - basicYear까지 탐색
    for (let i = year; i > year - basicYear; i--) {
        // console.log(i);
        const dataForYear = overRallList.find(item => item.Year === i.toString());
        console.log(dataForYear);

        // 해당 연도에 데이터가 있을 경우
        if (dataForYear) {
            if (i === year) {
                // 기준 연도에서는 PromotionGrade 체크
                if (dataForYear.PromotionGrade === "N" || dataForYear.PromotionGrade === null || dataForYear.PromotionGrade === undefined) {
                    nCount++;
                }
            } else {
                // 기준 연도 이외는 TotalGrade 체크
                if (dataForYear.TotalGrade === "N" || dataForYear.TotalGrade === null || dataForYear.TotalGrade === undefined) {
                    nCount++;
                }
            }
        } else {
            // 해당 연도 데이터가 없으면 "N"으로 처리
            nCount++;
        }
    }

    return nCount;
}

// 결과 출력
const nCount = countNValues(overRallList, year, basicYear);
console.log(`N의 개수: ${nCount}`);