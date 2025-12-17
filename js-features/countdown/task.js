const countdown = function() {
  const counter = document.getElementById(`timer`);
  counter.textContent -= 1;
  if (counter.textContent <= 0) {
    clearInterval(intervalId);
    alert(`Вы победили в конкурсе!`);
  }
};
const intervalId = setInterval(countdown, 1000);


// const counter = String(document.getElementById(`timer`));
// let scoreArray = counter.split(':');
// const countdown = function() {
//   counterArray[2] -= 1;
//   counter.textContent = counterArray.join(`:`);
//   if (counterArray[2] === 0) {
//     counterArray[1] -= 1;
//     if (counterArray[1] === 0) {
//       counterArray[0] -= 1;
//       if (counterArray === `00:00:00`) {
//         clearInterval(intervalId);
//         alert(`Вы победили в конкурсе!`);
//       }
//     }
//   }
// };

// const intervalId = setInterval(countdown, 1000);