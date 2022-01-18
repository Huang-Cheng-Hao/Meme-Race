// 腳色移動
let scoreInterval;
let score = 0;
let SetBlockInterval;
let checkDeadInterval;
let difficulityGloabal = 0;
window.addEventListener("keydown", move, false);
function move(e){
    let characterElement = document.getElementById("character");
    
    if(parseInt(window.getComputedStyle(characterElement).getPropertyValue("top")) + parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("height")) > parseInt(window.getComputedStyle(document.getElementById("road")).getPropertyValue("height"))){
        characterElement.style.top = parseInt(window.getComputedStyle(document.getElementById("road")).getPropertyValue("height")) -parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("height")) + "px";
        
    }else if (parseInt(window.getComputedStyle(characterElement).getPropertyValue("top"))<0){
        characterElement.style.top = 0 +"px";
    }else if(parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("left")) < 0){
        characterElement.style.left = "0px";
    }else if(parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("left")) > parseInt(window.getComputedStyle(document.getElementById("road")).getPropertyValue("width"))-parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("width"))){
        characterElement.style.left = parseInt(window.getComputedStyle(document.getElementById("road")).getPropertyValue("width")) - parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("width")) + "px";
    }
    
    if(e.key.toLowerCase() == "w" || e.key.toLowerCase() == "arrowup"){
        
        characterElement.style.top = parseInt(window.getComputedStyle(characterElement).getPropertyValue("top")) - 15 + "px";
    }
    if(e.key.toLowerCase() == "a" || e.key.toLowerCase() == "arrowleft"){
        
        characterElement.style.left = parseInt(window.getComputedStyle(characterElement).getPropertyValue("left")) - 15 + "px";
    }
    if(e.key.toLowerCase() == "s" || e.key.toLowerCase() == "arrowdown"){
        
        characterElement.style.top = parseInt(window.getComputedStyle(characterElement).getPropertyValue("top")) + 15 + "px";
        
    }
    if(e.key.toLowerCase() == "d" || e.key.toLowerCase() == "arrowright"){
        
        characterElement.style.left = parseInt(window.getComputedStyle(characterElement).getPropertyValue("left")) + 15 + "px";
    }
}



function changebg()
{
    const images = [
        'url("meme_background.jpg")',
        'url("2.jpg")',
        'url("3.jpg")',
        'url("5.jfif")',
        'url("6.jpg")',
        'url("9.jpg")',
        'url("10.jpg")',
        'url("11.png")'
    ]
    const section = document.querySelector("body");
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}

var a=setInterval(changebg, 2000);

function setback(x)
{
    const images = [
        'url("1.jpg")',
        'url("4.jpg")',
        'url("7.jpg")',
        'url("8.jpg")'
    ]
    const section = document.querySelector("body");
    const bg = images[x];
    section.style.backgroundImage = bg;
    clearInterval(a);
    if(difficulityGloabal == 0){
        alert("請選擇難度！");
    }
    else{
        if(x==1){
            document.getElementById("blackman").focus();
            start(1);
        }
        if(x==3){
            document.getElementById("hotpot").focus();
            start(3);
        }
        if(x==0){
            document.getElementById("milos").focus();
            start(0);
        }
        if(x==2){
            document.getElementById("squidgame").focus();
            start(2);
        }
    }
}
function loadSearches() {
    var length = localStorage.length; // number of key-value pairs
    var tags = []; // create empty array

    // load all keys
    for (var i = 0; i < length; ++i) 
    {
        tags[i] = localStorage.key(i);
    } 
    tags.sort(function(a, b) {
        return a - b;
    });
    tags.reverse();
    let n=1;
    var makeup = '<h2>排行榜</h2><br><table style="width: 100%;"><thead><th>排名</th><th>名稱</th><th>分數</th></thead><tbody>';
    for (var i=0; i<10; i++)
    {
        var query = localStorage.getItem(tags[i]);
        makeup +=   "<tr><td>" + n + "</td><td id='name"+ n +"'>" + query + "</td><td id='score" + n + "'>" + tags[i] + "</td></tr>";
        n++;
    } 
    makeup += "</tbody></table>";
    console.log(makeup);
    document.getElementById("block1").innerHTML = makeup;
}
function gameover(){
    document.getElementById("bgm").pause();
    document.getElementById("over").play();
    clearInterval(checkDeadInterval);
    clearInterval(SetBlockInterval);
    clearInterval(scoreInterval);
    document.getElementById("block_1").style.animationPlayState = "paused";
    document.getElementById("block_2").style.animationPlayState = "paused";
    document.getElementById("block_3").style.animationPlayState = "paused";
    document.getElementById("StartScreen").style.display = "inline";
    document.getElementById("container").style.display = "none";
    
    setTimeout(function(){var name = prompt('Please input your name');
    var Score = score;
   
    localStorage.setItem(Score, name);
    difficulityGloabal = 0;
    loadSearches();
    },100);
    
    
}

function difficulity(x){
    
    if(x==0){
        difficulityGloabal = 1;
        document.getElementById("easy").focus;
        
    }
    if(x==1){
        difficulityGloabal = 2;
        document.getElementById("normal").focus;
    }
    if(x==2){
        difficulityGloabal = 3;
        document.getElementById("hard").focus;
    }
    
}
function start(char) {
    
    document.getElementById("block_1").style.animationPlayState = "running";
    document.getElementById("block_2").style.animationPlayState = "running";
    document.getElementById("block_3").style.animationPlayState = "running";
    switch (char){
        case 0:
            document.getElementById("character").setAttribute("src", "米洛斯.png");
            document.getElementById("block_1").setAttribute("src", "米洛斯_障礙物.png");
            document.getElementById("block_2").setAttribute("src", "米洛斯_障礙物.png");
            document.getElementById("block_3").setAttribute("src", "米洛斯_障礙物.png");
            document.getElementById("bgm").setAttribute("src","milos.mp3");
            document.getElementById("over").setAttribute("src","milosOver.mp3");
            document.getElementById("bgm").play();
            break;
        case 1:
            document.getElementById("character").setAttribute("src", "黑人抬棺.png");
            document.getElementById("block_1").setAttribute("src", "黑人抬棺_障礙物.png");
            document.getElementById("block_2").setAttribute("src", "黑人抬棺_障礙物.png");
            document.getElementById("block_3").setAttribute("src", "黑人抬棺_障礙物.png");
            document.getElementById("bgm").setAttribute("src","黑人抬棺bgm.mp3");
            document.getElementById("over").setAttribute("src","黑人抬棺over.mp3");
            document.getElementById("bgm").play();
            break;
        case 2:
            document.getElementById("character").setAttribute("src", "魷魚遊戲.png");
            document.getElementById("block_1").setAttribute("src", "魷魚遊戲_障礙物_1.png");
            document.getElementById("block_2").setAttribute("src", "魷魚遊戲_障礙物_2.png");
            document.getElementById("block_3").setAttribute("src", "魷魚遊戲_障礙物_3.png");
            document.getElementById("bgm").setAttribute("src","魷魚遊戲bgm.mp3");
            document.getElementById("over").setAttribute("src","魷魚遊戲over.mp3");
            document.getElementById("bgm").play();
            break;
        case 3:
            document.getElementById("character").setAttribute("src", "統神.png");
            document.getElementById("block_1").setAttribute("src", "統神_障礙物.png");
            document.getElementById("block_2").setAttribute("src", "統神_障礙物.png");
            document.getElementById("block_3").setAttribute("src", "統神_障礙物.png");
            document.getElementById("bgm").setAttribute("src","統神端火鍋bgm.mp3");
            document.getElementById("over").setAttribute("src","統神端火鍋Over.mp3");
            document.getElementById("bgm").play();
            break;
    }
    document.getElementById("character").style.top = "90%";
    document.getElementById("character").style.left = "0%";
    // console.log(difficulityGloabal);
    let dif = 100; // 難度
    score = 0;
    let d = 1;
    // 切換成遊戲畫面
    document.getElementById("StartScreen").style.display = "none";
    document.getElementById("container").style.display = "inline";
    // 計算分數
    let scoreElement = document.getElementById("scoreCount");
    
    switch (difficulityGloabal){
        case 3:
            document.getElementById("block_1").style.animation = "block 2s infinite linear";
            document.getElementById("block_2").style.animation = "block 2s 350ms infinite linear";
            document.getElementById("block_3").style.animation = "block 2s 700ms infinite linear";
            dif = 60;
            break;
        case 2:
            document.getElementById("block_1").style.animation = "block 2.5s infinite linear";
            document.getElementById("block_2").style.animation = "block 2.5s 350ms infinite linear";
            document.getElementById("block_3").style.animation = "block 2.5s 700ms infinite linear";
            dif = 80;
            break;
        case 1:
            dif = 100;
            document.getElementById("block_1").style.animation = "block 3s infinite linear";
            document.getElementById("block_2").style.animation = "block 3s 350ms infinite linear";
            document.getElementById("block_3").style.animation = "block 3s 700ms infinite linear";
            break;
    }
    scoreInterval = window.setInterval(setScore, dif);
    function setScore(){
        score += d;
        scoreElement.innerHTML = score; 
    }

    // 設定障礙物位置
    SetBlockInterval = window.setInterval(SetBlock,500);
    function SetBlock(){
        
        let BlockElement1 = document.getElementById("block_1");
        let BlockElement2 = document.getElementById("block_2");
        let BlockElement3 = document.getElementById("block_3");
        // console.log(window.getComputedStyle(BlockElement1).getPropertyValue("top"));
        if(parseInt(window.getComputedStyle(BlockElement1).getPropertyValue("top")) < -100 ){
            BlockElement1.style.left = Math.floor(Math.random()*(parseInt(window.getComputedStyle(document.getElementById("road")).getPropertyValue("width"))-parseInt(window.getComputedStyle(BlockElement1).getPropertyValue("width")))) + "px";
        }
        if(parseInt(window.getComputedStyle(BlockElement2).getPropertyValue("top")) < -100 ){
            BlockElement2.style.left = Math.floor(Math.random()*(parseInt(window.getComputedStyle(document.getElementById("road")).getPropertyValue("width"))-parseInt(window.getComputedStyle(BlockElement2).getPropertyValue("width")))) + "px";
        }
        if(parseInt(window.getComputedStyle(BlockElement3).getPropertyValue("top")) < -100 ){
            BlockElement3.style.left = Math.floor(Math.random()*(parseInt(window.getComputedStyle(document.getElementById("road")).getPropertyValue("width"))-parseInt(window.getComputedStyle(BlockElement3).getPropertyValue("width")))) + "px";
        }
    }

    // check death

    checkDeadInterval = window.setInterval(checkDead,100);

    function checkDead(){
        let characterElement = document.getElementById("character");
        let block_1Element = document.getElementById("block_1");
        let block_2Element = document.getElementById("block_2");
        let block_3Element = document.getElementById("block_3");

        let charLeft, charRight, charTop, charBot;
        let block_1Left, block_1Right, block_1Top;
        let block_2Left, block_2Right, block_2Top;
        let block_3Left, block_3Right, block_3Top;
        charLeft = parseInt(window.getComputedStyle(characterElement).getPropertyValue("left"));
        charRight = charLeft + parseInt(window.getComputedStyle(characterElement).getPropertyValue("width"));
        charTop = parseInt(window.getComputedStyle(characterElement).getPropertyValue("top"));
        charBot = charTop + parseInt(window.getComputedStyle(characterElement).getPropertyValue("height"));
        
        block_1Left = parseInt(window.getComputedStyle(block_1Element).getPropertyValue("left"));
        block_1Right = block_1Left + parseInt(window.getComputedStyle(block_1Element).getPropertyValue("width"));
        block_1Top = parseInt(window.getComputedStyle(block_1Element).getPropertyValue("top"));
        
        block_2Left = parseInt(window.getComputedStyle(block_2Element).getPropertyValue("left"));
        block_2Right = block_2Left + parseInt(window.getComputedStyle(block_2Element).getPropertyValue("width"));
        block_2Top = parseInt(window.getComputedStyle(block_2Element).getPropertyValue("top"));
        

        block_3Left = parseInt(window.getComputedStyle(block_3Element).getPropertyValue("left"));
        block_3Right = block_3Left + parseInt(window.getComputedStyle(block_3Element).getPropertyValue("width"));
        block_3Top = parseInt(window.getComputedStyle(block_3Element).getPropertyValue("top"));

       
        if(charRight-block_1Left >= 0 && charRight-block_1Left <= parseInt(window.getComputedStyle(characterElement).getPropertyValue("width")) +  parseInt(window.getComputedStyle(block_1Element).getPropertyValue("width"))&& charBot-block_1Top >= 0 && charBot-block_1Top <= parseInt(window.getComputedStyle(characterElement).getPropertyValue("height")) + parseInt(window.getComputedStyle(block_1Element).getPropertyValue("height"))){

            // block_1Element.style.animation = "none";
            // document.getElementById("music").play(); 
            gameover();
            
        
        }
        if(charRight-block_2Left >= 0 && charRight-block_2Left <= parseInt(window.getComputedStyle(characterElement).getPropertyValue("width")) +  parseInt(window.getComputedStyle(block_1Element).getPropertyValue("width")) && charBot-block_2Top >= 0 && charBot-block_2Top <= parseInt(window.getComputedStyle(characterElement).getPropertyValue("height")) + parseInt(window.getComputedStyle(block_1Element).getPropertyValue("height"))){
            
            // block_2Element.style.animation = "none";
            gameover();
            
        }
        if(charRight-block_3Left >= 0 && charRight-block_3Left <= parseInt(window.getComputedStyle(characterElement).getPropertyValue("width")) +  parseInt(window.getComputedStyle(block_1Element).getPropertyValue("width")) && charBot-block_3Top >= 0 && charBot-block_3Top <= parseInt(window.getComputedStyle(characterElement).getPropertyValue("height")) + parseInt(window.getComputedStyle(block_1Element).getPropertyValue("height"))){
            
            // block_3Element.style.animation = "none";
            gameover();
            
        }
    }
                    
}