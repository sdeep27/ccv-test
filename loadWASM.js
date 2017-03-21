// var CCV;
// var Module = {};
// function loadWASM () {
//   const cMath = {};
//   return new Promise((resolve, reject) => {
//     fetch('./build/ccv.wasm')
//         .then(response => {
//           // console.log(response);
//           return response.arrayBuffer();
//         })
//         .then(buffer => {
//             Module.wasmBinary = buffer;

//             var script = document.createElement('script');
//             script.src = './build/ccv.js';

//             // console.log(Module);
//             script.onload = function () {
//               if (!WebAssembly.instantiate) {
//                 console.log('couldnt load WASM');
//                 let newObj = { test: "this is working" };
//                 reject(newObj);
//               }
//               console.log('Emscripten boilerplate loaded.');
//               resolve(Module);
//             };
//             document.body.appendChild(script);
//         });
//   });
// }

// loadWASM().then((m) => {
//   console.log(m, 'check');
//   CCV = m;
//   const image = new CCV.ccv_dense_matrix_t();
//   console.log(image);
// }).catch((n) => {
//   console.log(n, 'catch');
// });
// // console.log(CCV);
// const image = new CCV.ccv_dense_matrix_t();
// // console.log(image);


Module = {};
fetch('build/ccv.wasm')
  .then(response => response.arrayBuffer())
  .then(buffer => {
    Module.wasmBinary = buffer;
    const script = document.createElement('script');
    script.src = 'build/ccv.js';
    document.body.appendChild(script);
    script.onload = function () {
      console.log(Module.wasmBinary);
      console.log(Module);
      // Module._foo();
    };
  });