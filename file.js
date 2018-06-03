let state = { 
};

let n = 3;

let count = 2;

function init(){
//    state.result = [[undefined,undefined,1], [0,undefined,0], [undefined, 0, 1]];
    state.result = [];
    for(let i = 0; i < n; i++) {
      state.result.push(new Array(n));   
    }
  }
//function synchronize(){
//    state.result.forEach( function(arrayFirst, i){
//        arrayFirst.forEach(function(arraySecond, j){
//        document.write('<td>' + state.result[i][j] + '</td>') 
//                     
//        })
////     console.log(arrayFirst);  
//    })
//}
//
//init(n);
//synchronize();
//console.log(state);
//console.log(state);

function myCreateFunction(i,j) {
    let element = document.getElementById('Element' + i +j);    
    console.log(element);
    if (count % 2 == 0) {
       element.innerHTML = '0';
       state.result[i][j] = 0
    }
    else{
       element.innerHTML = 'x'; 
       state.result[i][j] = 1;
    }    
    count++;
    console.log(state.result);
    console.log('iteration', count);
}
