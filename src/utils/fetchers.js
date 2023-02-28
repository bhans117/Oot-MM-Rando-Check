export const localStorageFetcher = key => {
  let item = localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item);
}


// const fetchLocalStorage = new Promise((resolve, reject) => {
//   try {
//     let data = localStorage.getItem(key);
//     resolve(data);
//   } catch (error) {
//     reject(error);
//   }
// });