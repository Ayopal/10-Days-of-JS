let nums = [1, 2, 3, 6, 9, 8, 7, 4];
let ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById('btn5');

btn5.onclick = () => {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById('btn' + ids[i]).innerHTML=nums[i];
  }
}