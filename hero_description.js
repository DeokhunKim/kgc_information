function getDescription(hero, spell, star) {
    let desc = '';

    if (hero == '에반') {
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