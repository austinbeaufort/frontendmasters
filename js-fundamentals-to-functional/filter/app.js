// FILTER

// callback returns a boolean to decide if true or false.

// const _ = {};

// _.filter = function(arr, callback) {
//     // create a new array
//     const storage = [];
//     // loop through array
//     _.each(arr, function(val) {
//         if (callback(val) === true) {
//             storage.push(item);
//         }
//     });
    // for (let i = 0; i < arr.length; i++) {
    //     // check if callback returns true
    //     if (callback(arr[i], i, arr) === true) {
    //     // if true push item into array
    //         storage.push(arr[i]);
    //     }
    // }
    // return array
//     return storage;
// }

// const videoData = [
//     {
//         name: 'Miss Scarlet',
//         present: true
//     },
//     {
//         name: 'Mrs. White',
//         present: false,
//     },
//     {
//         name: 'Reverend Green',
//         present: true,
//     },
//     {
//         name: 'Rusty',
//         present: false
//     },
//     {
//         name: 'Colonel Mustard',
//         present: true
//     },
//     {
//         name: 'Professor Plum',
//         present: true
//     }
// ];

// let peoplePresent = videoData.filter(function(obj) {
//     // will only return if it is true.
//     return obj.present;
// });

// console.log(peoplePresent);