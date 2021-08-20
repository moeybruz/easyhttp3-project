let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
};

// let order = (fruitName, callback) => {

//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruitName]} was selected`);
//     callback();
//   }, 2000);
// };

// let production = () => {

//   setTimeout(() => {
//     console.log('Production has started');
//     setTimeout(() => {
//       console.log('Fruit has been chopped');
//       setTimeout(() => {
//         console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} has been added`);
//         setTimeout(() => {
//           console.log('The machines been started');
//           setTimeout(() => {
//             console.log(`${stocks.holder[0]} has been selected`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} has been topped`);
//               setTimeout(() => {
//                 console.log('Ready to serve');
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(2, production);


// With Promise

let isShopOpen = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if(isShopOpen) {
//       setTimeout(() => {
//         resolve(work())
//       }, time);
//       } else {
//       reject(console.log('Our shop is closed'));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log('Production has started'));
//   })
//   .then(() => {
//     return order(2000, () => console.log('Fruit has been chopped'));
//   })
//   .then(() => {
//     return order(1000, () => console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} has been added`));
//   })
//   .then(() => {
//     return order(1000, () => console.log('The machines been started'));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`${stocks.holder[0]} has been selected`));
//   })
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} has been topped`));
//   })
//   .then(() => {
//     return order(2000, () => console.log('Ready to serve'));
//   })

//   .catch(() => console.log('Customer left without icecream'))

//   .finally(() => console.log('Business ended, Shop has been closed'))


// With Async-Await
function time(ms) {
  return new Promise((resolve, reject) => {
    if(isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('Shop is close'));
    }
  });
}

async function kitchen(){
  try{
    await time(2000)
    console.log(`${stocks.fruits[0]} was selected`)

    await time(0000)
    console.log('Production has started')

    await time(2000)
    console.log('Fruit has been chopped')

    await time(1000)
    console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} has been added`)

    await time(1000)
    console.log('The machines been started')

    await time(2000)
    console.log(`${stocks.holder[0]} has been selected`)
    
    await time(3000)
    console.log(`${stocks.toppings[0]} has been topped`)
    
    await time(2000)
    console.log('Ready to serve')
  }
  catch(error){
    console.log('Customer left');
  }
  finally{
    console.log('End of the business, Shop has been closed')
  }
}

kitchen();