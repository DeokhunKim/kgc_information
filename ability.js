// define
let level = 1;
let star = 1;
let relic_atk = 0;
let relic_def = 0;
let relic_agi = 0;
let relic_spl = 0;

let hero = 'evan';
let base_hp = 250;
let base_atk = 25;
let base_spl = 20;
let base_agi = 120;
let base_moveSpeed = 150;
let desc

let levelFactor = [0, 1, 1.2, 1.4, 1.7, 2, 2.3, 2.6, 3, 3.4, 3.8, 4.2, 4.7, 5.2, 5.7];
let starFactor = [0, 1, 1.6, 2.6, 3.6, 4.8, 6, 7];

// click listener
//document.getElementById('item_1')
//    .addEventListener("click", displayItemModal);

document.getElementById('exitRelicModal')
    .addEventListener("click", hiddenItemModal);

document.getElementById('exitRelicModal')
    .addEventListener("click", enterRelic);

document.getElementById('relicTitle')
    .addEventListener("click", displayItemModal);

document.getElementById('levelMinus')
    .addEventListener("click", levelMinus);

document.getElementById('levelPlus')
    .addEventListener("click", levelPlus);

document.getElementById('starMinus')
    .addEventListener("click", starMinus);

document.getElementById('starPlus')
    .addEventListener("click", starPlus);


function CalculateDisplayValue() {
    let spell = Math.round(base_spl * levelFactor[level] * starFactor[star] * (100+Number(relic_spl))/100 );
    document.getElementById('hp').innerText = Math.round(base_hp * levelFactor[level] * starFactor[star] );
    document.getElementById('atk').innerText = Math.round(base_atk * levelFactor[level] * starFactor[star] + Number(relic_atk)) ;
    document.getElementById('spl').innerText = spell;
    document.getElementById('agi').innerText = Math.round((base_agi + (base_agi * 0.1 * (star - 1)) + base_agi * Number(relic_agi) / 100)  ) / 100;

    document.getElementById('description').innerHTML = getDescription(hero, spell, star);

}

function starMinus() {
    if (star != 1) {
        star -= 1;
        if (star == 1) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = 'coral';
        } else if (star == 2) {
            document.getElementById('star').innerText = '★★';
            document.getElementById('star').style.color = 'coral';
        }else if (star == 3) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = 'silver';
        }else if (star == 4) {
            document.getElementById('star').innerText = '★★';
            document.getElementById('star').style.color = 'silver';
        }else if (star == 5) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = 'gold';
        }else if (star == 6) {
            document.getElementById('star').innerText = '★★';
            document.getElementById('star').style.color = 'gold';
        }else if (star == 7) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = '#67A6FFFF';
        }
    }
    CalculateDisplayValue();
}

function starPlus() {
    if (star != 7) {
        star += 1;
        if (star == 1) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = 'coral';
        } else if (star == 2) {
            document.getElementById('star').innerText = '★★';
            document.getElementById('star').style.color = 'coral';
        }else if (star == 3) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = 'silver';
        }else if (star == 4) {
            document.getElementById('star').innerText = '★★';
            document.getElementById('star').style.color = 'silver';
        }else if (star == 5) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = 'gold';
        }else if (star == 6) {
            document.getElementById('star').innerText = '★★';
            document.getElementById('star').style.color = 'gold';
        }else if (star == 7) {
            document.getElementById('star').innerText = '★';
            document.getElementById('star').style.color = 'transparent';
            document.getElementById('star').style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(206,164,255,1) 32%)';
            document.getElementById('star').style.webkitBackgroundClip = 'text';
        }
    }
    CalculateDisplayValue();
}

function levelMinus() {
    if (level != 1) {
        level -= 1;
        document.getElementById('level').innerText = level;
    }
    if (level < 4) {
        document.getElementById('skill4').style.color = 'gray';
    }
    if (level < 8) {
        document.getElementById('skill8').style.color = 'gray';
    }
    CalculateDisplayValue();
}
function levelPlus() {
    if (level != 14) {
        level += 1;
        document.getElementById('level').innerText = level;
    }
    if (4 <= level) {
        document.getElementById('skill4').style.color = 'white';
    }
    if (8 <= level) {
        document.getElementById('skill8').style.color = 'white';
    }
    CalculateDisplayValue();
}

function displayItemModal() {
    document.getElementById('modal_relic').style.display = "flex";
}

function hiddenItemModal() {
    document.getElementById('modal_relic').style.display = "none";
}

function enterRelic() {
    let val1 = document.getElementById('relicValueInput1').value;
    let val2 = document.getElementById('relicValueInput2').value;
    let val3 = document.getElementById('relicValueInput3').value;
    let val4 = document.getElementById('relicValueInput4').value;

    relic_atk = val1;
    relic_def = val2;
    relic_agi = val3;
    relic_spl = val4;

    let resultHtml = '';
    if (val1 != '') {
        resultHtml += '<img src="src/main/resources/static/img/staticon/StatIcon_01.png" style="width: 16px">' + val1 + '% ';
    }
    if (val2 != '') {
        resultHtml += '<img src="src/main/resources/static/img/staticon/StatIcon_04.png" style="width: 16px">' + val2 + '% ';
    }
    if (val3 != '') {
        resultHtml += '<img src="src/main/resources/static/img/staticon/StatIcon_03.png" style="width: 16px">' + val3 + '% ';
    }
    if (val4 != '') {
        resultHtml += '<img src="src/main/resources/static/img/staticon/StatIcon_02.png" style="width: 16px">' + val4 + '% ';
    }

    document.getElementById('relicResult').innerHTML = resultHtml;
    CalculateDisplayValue();
}

function getDescription(hero, spell, star) {
    let desc = '';

    if (hero == 'evan') {
        let f1 = 999;
        let f2 = 999; //20 35
        if (1 <= star && star <= 2) {
            f1 = 1;
        } else if (3 <= star && star <= 4) {
            f1 = 3;
        } else if (5 <= star && star <= 6) {
            f1 = 5;
        } else /* if(7 == star) */{
            f1 = 7;
        }

        desc ='검기를 발사해 전방 가로 <span style="color: dodgerblue">' + f1 + '</span>칸의 일직선상에 있는 모든 적들에게 <span style="color: orange">20</span><span style="color: dodgerblue">+'
        + spell + '</span> 만큼의 피해를 입힙니다.';
    } else if (hero == 'who') {

    } else {
        desc = '해당 영웅의 설명은 미구현 상태 입니다.'
    }

    return desc;
}
CalculateDisplayValue();