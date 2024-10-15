console.log("Callbacks");
//Callbacks, Pirma uzduotis
// console.log("Pirma uzduotis");

// function calculate(number, time, otherFunc){

//     setTimeout(time);

//     otherFunc(5);

// }

// function showResult(result) {
//     console.log(result);
// }

// calculate(5, 1000, showResult);


//Callbacks, Antra uzduotis
console.log("--------------");
// console.log("Antra uzduotis");

// function processList(anyList, anyFunc){

//     const results = [];

//     for(let i = 0; i<anyList.length; i++){

//         setTimeout(()=> {
//             var element = processItem(anyList[i]);
//             results.push(element);
//         },1000)    
//     }

//     anyFunc(results);
// }

// function processItem(item){

//     item = item * 2;
//     return item;
// }

// function showResults(results){
//     console.log(results);
// }
    

// processList([1, 2, 3, 4, 5], showResults);


//Promises
//Pirma uzduotis
// console.log("Promises, 1 uzduotis");

// function delay(time){
//     const myPromise = new Promise((resolve, reject) => {
//         console.log('Promise pradėtas...');

//         setTimeout(() => {
//             console.log('Promise pavyko.');
//             resolve('Pavyko'); // Pavyko
//         }, time);
//     });
//     return myPromise;
// }

// delay(3000).then(result => {
//     console.log(result);
// })

//Promises
//Antra uzduotis
console.log("Promises, 2 uzduotis");

// function conditionalDelay(time, anyBool){
//     var myPromise = new Promise((resolve, reject)=>{
        
//         console.log('Promise pradėtas...');

//         setTimeout(() => {
//             if(anyBool==false){
//                 console.log('Promise nepavyko.');
//                 reject('Nepavyko'); // Nepavyko
//             }
//             else{
//                 console.log('Promise pavyko.');
//                 resolve('Pavyko'); // Pavyko
//             }
            
//         }, time);


//     });

//     return myPromise;
// }


// conditionalDelay(1000, true).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error(error);
// });

//Acync await
console.log("Async await 1 uzduotis");

function delay(time){

    console.log("promise pradetas");

    var myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("pavyko");
        },time);
        
    
        
    });
    
    return myPromise;   
}

async function waitForMessage(time2){
    return await delay(time2);
    console.log("laikas praejo");
}

waitForMessage(1000).then(result=>{
    console.log(result);
});

// console.log("Async await 2 uzduotis");

// async function fetchData() {

//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json();
//         return data;
        
//     }

//     catch (error) {
//         console.error('Klaida:', error); // Gaudome klaidas
//     }

    
// }

// fetchData().then(result=>{
//     console.log(result);
// });



























