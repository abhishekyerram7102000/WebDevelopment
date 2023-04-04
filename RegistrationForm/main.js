window.addEventListener('load',()=>{
  const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

const task_delete_elAll = document.createElement('button');
		task_delete_elAll.classList.add('deleteAll');
		task_delete_elAll.textContent = 'Delete All Users';

userList.appendChild(task_delete_elAll);

const items=document.querySelectorAll('li');

const m1=new Map();

task_delete_elAll.addEventListener('mouseover',(e)=>{
  e.preventDefault();
  
  window.location.reload();
})

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter your name';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } 
  if(emailInput.value === '') {
    
    msg.classList.add('error');
    msg.innerHTML = 'Please enter your email';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } 
  else {
    // Create new list item with user
    const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions'); 

    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`Name: ${nameInput.value} , Email: ${emailInput.value}`));

    // Add HTML
     li.innerHTML = `<strong>Name</strong>: ${nameInput.value} , <strong>Email</strong>: ${emailInput.value}`;
    // Append to ul
    if(!m1.has(emailInput.value)){
      m1.set(emailInput.value,1);
    const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.textContent = 'Delete User';

    task_actions_el.appendChild(task_delete_el);

    li.appendChild(task_actions_el);
    userList.appendChild(li);
    task_delete_el.addEventListener('click', (e) => {
      userList.removeChild(li);
    }); 
  }
  else{
    msg.classList.add('error');
    msg.innerHTML = 'User Already Exists';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  }
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

});
