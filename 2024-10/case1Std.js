function calculateStandardPoint(basicYear, promotionYear2, originalStartDateYear, nCount) {
    // 기준연한 x 3
    const basicYearTimes3 = basicYear * 3;

    // ((승진대상연도 - 입사연도) + 1) * 3
    const promotionPeriodTimes3 = ((promotionYear2 - originalStartDateYear) + 1) * 3;

    // MIN(기준연한 x 3, N등급 개수 x 3)
    const minNCount = Math.min(basicYearTimes3, nCount * 3);

    // ((승진대상연도 - 입사연도) + 1) * 3 - MIN(기준연한 x 3, N등급 개수 x 3)
    const adjustedPromotionPeriod = promotionPeriodTimes3 - minNCount;

    // MIN(기준연한 x 3, adjustedPromotionPeriod)
    const minAdjustedPromotionPeriod = Math.min(basicYearTimes3, adjustedPromotionPeriod);

    // 기준포인트 계산: MAX(0, minAdjustedPromotionPeriod)
    const standardPoint = Math.max(0, minAdjustedPromotionPeriod);

    return standardPoint;
}

// 예시 사용법
const basicYear = 4;
const promotionYear2 = 2024;
const originalStartDateYear = 2020;
const nCount = 2;

const standardPoint = calculateStandardPoint(basicYear, promotionYear2, originalStartDateYear, nCount);
console.log(`기준포인트: ${standardPoint}`);
