const birthDate = new Date('1977-07-04');
const currentDate = new Date('2024-02-01'); // 승진정보관리의 승진기준일

// 생일이 지났는지 확인
const hasBirthdayPassed = (currentDate.getMonth() > birthDate.getMonth()) ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

// 연령 계산
let age = currentDate.getFullYear() - birthDate.getFullYear();
if (!hasBirthdayPassed) {
    age--;  // 생일이 지나지 않았으면 1을 빼서 정확한 연령을 계산
}

console.log('나이: ' + age);