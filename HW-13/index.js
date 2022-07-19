const convertString = () =>
  String.fromCharCode(Date.now().toString().slice(-5));

const getRandomChinese = (n) => {
  return new Promise((resolve, reject) => {
    if (n > 0) {
      let str = "";
      for (let i = 0; i < n; i++) {
        setTimeout(() => {
          str += convertString();
          if (i + 1 === n) {
            resolve(str);
          }
        }, (i + 1) * 50);
      }
    } else {
      reject();
    }
  });
};

getRandomChinese(4)
  .then((res) => {
    console.log(res);
  })
  .catch((reject) => {
    console.log("wrong num");
  });


export {getRandomChinese};