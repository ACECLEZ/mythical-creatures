//--add UI patch in actual version
const playerCount = prompt("请输入玩家数量");

const setTwo = ["预言家", "女巫", "狼人", "狼人"];
const setThree = ["预言家", "女巫", "猎人", "狼人", "狼人", "白狼王"];
const setFour = ["预言家", "女巫", "猎人", "守卫", "狼人", "狼人", "狼美人", "隐狼"];

const drawPile = [];

var gameSet;

if (5 < playerCount && playerCount < 8) {
    drawPile.push(...setTwo);
    gameSet = ["预言家", "女巫", "狼人"];
} else if (7 < playerCount && playerCount < 11) {
    drawPile.push(...setThree);
    gameSet = ["预言家", "女巫", "猎人", "狼人", "白狼王"];
} else if (10 < playerCount && playerCount < 14) {
    drawPile.push(...setFour);
    gameSet = ["预言家", "女巫", "猎人", "守卫", "狼人", "狼美人", "隐狼"];
}

//--debug usage
console.log("current draw pile length: ", drawPile.length);

while (drawPile.length < playerCount) {
    drawPile.push("平民");
}

console.log("您的当前游戏配置为： ", drawPile);

var playerRoles = {};

var count = 1;
var neutralCount = 0;
while (drawPile.length !== 0) {
    var randomIndex = Math.floor(Math.random() * drawPile.length);
    var elementToRemove = drawPile[randomIndex];
    playerRoles["player" + count] = elementToRemove;
    drawPile.splice(randomIndex, 1);
    count++;
    neutralCount++;
}

console.log(playerRoles);

//---end of role sorting

//--add UI patch in actual version
count = 0;
while (gameSet.length !== count) {
    prompt(gameSet[count], "请睁眼确认身份");
    count++;
}
console.log("done");
//user can check for errors if present

//---end of confirming roles
