const ONE_DAY = 1000 * 60 * 60 * 24;

function dateToKoreanFormat(day) {
    const weekday = ["일", "월", "화", "수", "목", "금", "토"];

    let year = day.getFullYear();
    let month = day.getMonth() + 1;
    let date = day.getDate();
    let week = weekday[day.getDay()];

    return `${year}년 ${month}월 ${date}일 ${week}요일`;
}
/*
        const weekday = ["일", "월", "화", "수", "목", "금", "토"];
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        let week = weekday[today.getDay()];
*/