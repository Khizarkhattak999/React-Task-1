const words = 'Keep it Simple, Get it done, Deliver for Customers and Win Together!';

const reverseSentence = str => {
   const arr = str.split(" ");
   const reversed = arr.map(el => {
      return el.split("").reverse().join("");
   });
   return reversed.join("+");
};
console.log(reverseSentence(words));


