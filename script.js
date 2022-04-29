var total_roll, total, dice, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// to display the rolls
function to_display_the_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  total_roll.unshift(randomMember(dice));
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  total_roll.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list.appendChild(new_li);
  });
  let element_total = document.getElementById('total');
  element_total.innerText = total_roll.reduce((a,b) => a+b, 0);
}


total_roll = [];
dice = [1, 2, 3, 4, 5, 6];
to_display_the_rolls();


document.getElementById('button_roll').addEventListener('click', (event) => {
  to_display_the_rolls();
  total = total_roll.reduce((a,b) => a+b, 0);
  if (total < 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'Game Still On';
  } else if (total > 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You lost!';
  }
  if (total == 11) {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'You won!';
  } else if (total > 16) {
    total_roll = [];
    let element_list2 = document.getElementById('list');
    element_list2.replaceChildren();
    let element_total2 = document.getElementById('total');
    element_total2.innerText = 0;
  }

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total3 = document.getElementById('total');
  total = total;
  element_total3.innerText = total;

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  total_roll = [];
  let element_list4 = document.getElementById('list');
  element_list4.replaceChildren();
  let element_total4 = document.getElementById('total');
  element_total4.innerText = 0;

});