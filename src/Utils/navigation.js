export const toggleItems = (array) => {
  for (let i of array) {
    document.querySelector(i).classList.toggle("disable")
  }
};