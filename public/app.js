if (!localStorage.getItem('myName')) {
  localStorage.setItem('myName', 'Saqib');
  console.log('No Name');
} else {
  console.log(localStorage.getItem('myName'));
  localStorage.removeItem('myName');
}
