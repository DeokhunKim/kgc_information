// define
let level = 1;
let star = 1;
let relic_atk = 0;
let relic_def = 0;
let relic_agi = 0;
let relic_spl = 0;

let hero_name = '에반';
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

document.getElementById('heroInput')
    .addEventListener("change", getHeroInfo);



function getHeroInfo() {
    let innerText = document.getElementById('heroInput').value;
    let heroByName = getHeroByName(innerText);
    if (heroByName != null) {
        hero_name = heroByName.name
        base_hp = heroByName.hp
        base_agi = heroByName.agi
        base_atk = heroByName.atk
        base_spl = heroByName.spl
        base_moveSpeed = heroByName.spd
        CalculateDisplayValue()
        changeDisplayInfoByChangeHero()
    }
}

function getHeroByName(name) {
    for (let i = 0; i < heroData.length; i++) {
        if (heroData[i].name == name) {
            return heroData[i];
        }
    }
}

function changeDisplayInfoByChangeHero(){
    let heroSrc = '<img src="src/main/resources/static/img/charater_dot/'
            + hero_name
            +'.png" style="width: 150px" >'
    document.getElementById('heroImgSrc').innerHTML = heroSrc;

    let skillSrc = '<img src="src/main/resources/static/img/skill/'
        + hero_name
        +'.png">'
    document.getElementById('skillImgSrc').innerHTML = skillSrc;




    //<img src="src/main/resources/static/img/skill/에반.png">
}

function CalculateDisplayValue() {
    let spell = Math.round(base_spl * levelFactor[level] * starFactor[star] * (100+Number(relic_spl))/100 );
    document.getElementById('hp').innerText = Math.round(base_hp * levelFactor[level] * starFactor[star] );
    document.getElementById('atk').innerText = Math.round(base_atk * levelFactor[level] * starFactor[star] + Number(relic_atk)) ;
    document.getElementById('spl').innerText = spell;
    document.getElementById('agi').innerText = Math.round((base_agi + (base_agi * 0.1 * (star - 1)) + base_agi * Number(relic_agi) / 100)  ) / 100;

    document.getElementById('description').innerHTML = getDescription(hero_name, spell, star);

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
        resultHtml += '<img src="src/main/resources/static/img/staticon/StatIcon_01.png" style="width: 16px">' + val1 ;
    }
    if (val2 != '') {
        resultHtml += '<img src="src/main/resources/static/img/staticon/StatIcon_04.png" style="width: 16px">' + val2 ;
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


CalculateDisplayValue();