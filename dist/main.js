(()=>{"use strict";function r(r="computer"){return{player:r,playerBoard:{board:[...Array(10)].map((r=>Array(10).fill(null))),playedBoard:[...Array(10)].map((r=>Array(10).fill(null))),shipsAlive:0,placeShip:function(r,t,a,e){if("horizontal"===a)for(let a=0;a<e.length;a++)this.board[t][r+a]=e;else for(let a=0;a<e.length;a++)this.board[t+a][r]=e;this.shipsAlive++},receiveAttack:function(r,t){if(this.playedBoard[t][r])return;const a=this.board[t][r];a?(a.hit(),a.isSunk()&&this.shipsAlive--):this.board[t][r]=0,this.playedBoard[t][r]=1},allShipsSunk:function(){return!this.shipsAlive},playAvailable:function(){for(let r=0;r<10;r++)for(let t=0;t<10;t++)if(!this.playedBoard[r][t])return!0;return!1}},attack:function(r,t,a){r.receiveAttack(t,a)},aiRandom:function(r){if(!r.playAvailable())return;let t,a;do{t=Math.floor(10*Math.random()),a=Math.floor(10*Math.random())}while(r.playedBoard[a][t]);return{x:t,y:a}}}}!function(){const t=r("1"),a=(r("computer"),document.querySelector(".container"));t.playerBoard.board.forEach((r=>{r.forEach((r=>{console.log("blah");const t=document.createElement("div");t.classList.add("cell"),a.appendChild(t)}))}))}()})();