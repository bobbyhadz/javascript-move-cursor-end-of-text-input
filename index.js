console.log('bobbyhadz.com');

const input = document.getElementById('first_name');

const end = input.value.length;

// ✅ Move focus to END of input field
input.setSelectionRange(end, end);
input.focus();

// ✅ Move focus to END of input field on button click
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  // 👇️ get length right before clicking button
  const end = input.value.length;

  input.setSelectionRange(end, end);
  input.focus();
});
