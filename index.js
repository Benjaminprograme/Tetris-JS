//Creat board
let board=[]
for(i=0;i<240;i++){
  let cube=document.createElement("div");
  const tetrisBoard=document.getElementById("tetrisBoard");

  cube.className="cube";
  cube.innerText=i;
 tetrisBoard.appendChild(cube)
board.unshift(null)

}


let randomColor=(Math.floor(Math.random()*4))+1//1=red,2=green,3=blue,4=yellow
const spawnPoint=5;

function createI(){
randomColor=(Math.floor(Math.random()*4))+1
for(i=0;i<4;i++){
board[spawnPoint+10*i]=randomColor;
}
visualeBoard()
}


function createJ(){
  randomColor=(Math.floor(Math.random()*4))+1
  for(i=0;i<4;i++){
    if(i<=2 ){
  board[spawnPoint+10*i]=randomColor;
    }else{
      board[(spawnPoint+10*(i-1))-1]=randomColor;
    }
  }
  visualeBoard()
  }


  function createL(){
    randomColor=(Math.floor(Math.random()*4))+1
    for(i=0;i<4;i++){
      if(i<=2 ){
    board[spawnPoint+10*i]=randomColor;
      }else{
        board[(spawnPoint+10*(i-1))+1]=randomColor;
      }
    }
    visualeBoard()
    }


    function createO(){
      randomColor=(Math.floor(Math.random()*4))+1
      for(i=0;i<4;i++){
        if(i<=1 ){
      board[spawnPoint+i]=randomColor;
        }else{
          board[(spawnPoint+10)+(i-2)]=randomColor;
        }
      }
      visualeBoard()
      }

      
      function createZ(){
        randomColor=(Math.floor(Math.random()*4))+1
        for(i=0;i<4;i++){
          if(i<=1 ){
        board[spawnPoint+i]=randomColor;
          }else{
            board[(spawnPoint+10)+(i-2)+1]=randomColor;
          }
        }
        visualeBoard()
        }


        function createT(){
          randomColor=(Math.floor(Math.random()*4))+1
          for(i=0;i<4;i++){
            if(i==0){
            board[spawnPoint]=randomColor;
            }else{
              board[spawnPoint+8+i]=randomColor;
            }
           }
          visualeBoard()
          }
  

          
      function createS(){
        randomColor=(Math.floor(Math.random()*4))+1
        for(i=0;i<4;i++){
          if(i<=1 ){
        board[spawnPoint+i]=randomColor;
          }else{
            board[(spawnPoint+10)-(i-2)]=randomColor;
          }
        }
        visualeBoard()
        }


let cubes=document.getElementsByClassName("cube");


function visualeBoard(){
  for(i=0;i<240;i++){
if(board[i]!=null){
  if(board[i]==1){
cubes[i].style. backgroundColor="red"
  }
  else if(board[i]==2){
    cubes[i].style. backgroundColor="green"
      }
      else if(board[i]==3){
        cubes[i].style. backgroundColor="blue"
          }
          else if(board[i]==4){
            cubes[i].style. backgroundColor="yellow"
              }
            }
          }
        }
  

        let randomShape=(Math.floor(Math.random()*7))+1


       function createRandomShape(){
       if(randomShape==1){
            createI();
          }else if(randomShape==2){
            createJ();
        }else if(randomShape==3){
          createL();
      }else if(randomShape==4){
        createO();
      }else if(randomShape==5){
        createS();
      }else if(randomShape==6){
        createT();
      }else{
        createZ();
      }

      randomShape=(Math.floor(Math.random()*7))+1;
    }


      createRandomShape();