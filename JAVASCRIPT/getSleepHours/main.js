

function getSleepHours(day) {
    let dayLower = day.toLowerCase();
    if (dayLower === 'lunedi') {
        return 1;
    } else if (dayLower === 'martedi') {
        return 10;
    } else if (dayLower === 'mercoledi') {
        return 10;
    } else if (dayLower === 'giovedi') {
        return 11;
    } else if (dayLower === 'venerdi') {
        return 6;
    } else if (dayLower === 'sabato') {
        return 9;
    } else if (dayLower === 'domenica') {
        return 10;
    }
}

function getActualSleepHours() {
    let totalSleep = parseInt(getSleepHours('domenica')) + parseInt(getSleepHours('lunedi')) + parseInt(getSleepHours('martedi')) + parseInt(getSleepHours('mercoledi')) + parseInt(getSleepHours('giovedi')) + parseInt(getSleepHours('sabato')) + parseInt(getSleepHours('venerdi'));
    return totalSleep;
}

function getIdealSleepHours() {
    let idealHours = 8 * 7;
    return idealHours;
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log(`hai dormito perfettamente questa settimana per un totale di ${actualSleepHours}`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`hai dormito poco questa settimana per un totale di ${actualSleepHours} a fronte di ${idealSleepHours}, hai un debito di ${idealSleepHours - actualSleepHours} ore`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`hai dormito parecchio questa settimana per un totale di ${actualSleepHours} ore`);
    }
}

calculateSleepDebt();





