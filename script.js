// retrieving from localStorage
const init=[
  {text: "Take vaccine tomorrow",done: false},
  {text: "Meet my friend at evening",done: false},
  {text: "Doing assignment",done: true},
  {text: "Watch football match",done: false},
];
const existingTodo = JSON.parse(localStorage.getItem('todos'));
const todoList = existingTodo || init;
todoList.forEach(element => {
  appendUi(element);
});
// saving stuff to local storage

function addToList(input){
  appendUi(input);
  todoList.push(input);
  localStorage.setItem('todos',JSON.stringify(todoList));
}
function removeToList(index){
  todoList.splice(index, 1);
  localStorage.setItem('todos',JSON.stringify(todoList));
}
function updateToList(done,index){
  todoList[index].done = done;
  localStorage.setItem('todos',JSON.stringify(todoList));
}
//-----------------------

function toggle(from, to) {
      $(from).toggleClass('hide');
      $(from).closest('.action').closest('.row').find(to).toggleClass('hide');
      $(from).closest('.action').closest('.row').siblings('.item-text').toggleClass('checked');
      $(from).closest('.action').closest('.row').siblings('.circle').find('.img').toggleClass('hide');
      $(from).closest('.action').closest('.row').siblings('.circle').toggleClass('green');
    }

$('.list').on('click','.delete',function(e){ 
  $(this).closest('.list-item').remove();
  removeToList($(this).closest('.list-item').index());
});
$('.list').on('click','.done',function(e){ 
  toggle(this, '.undone');
  updateToList(true,$(this).closest('.list-item').index());
});
$('.list').on('click','.undone',function(e){ 
  toggle(this, '.done');
  updateToList(false,$(this).closest('.list-item').index());
});
$('.list').on('mouseenter','.list-item',function(e){ 
  $('.action').addClass('hide');
        $(this).find('.action').removeClass('hide');
});

$('input').on('keydown',function(e){ 
  if(e.key=='Enter') $('.add-btn').click();
});
function appendUi(input){
  let element;
  if(input.done)
    element = '<div class="list-item"><div class="circle green"><img src="Vector.png" loading="lazy" width="15" height="15" alt="checked" class="img"></div><div class="item-text checked">';
  else
    element = '<div class="list-item"><div class="circle"><img src="Vector.png" loading="lazy" width="15" height="15" alt="checked" class="img hide"></div><div class="item-text">';
  element += input.text;
  if(input.done)
    element += '</div><div class="row"><div class="action hide"><div class="undone">Undone</div><div class="done hide">Done</div><div class="delete">Delete</div></div></div></div>'
  else
    element += '</div><div class="row"><div class="action hide"><div class="undone hide">Undone</div><div class="done">Done</div><div class="delete">Delete</div></div></div></div>'
  
  $('.list').append(element);

  window.scrollBy(0, 100);
}
$('.add-btn').on('click', function () {
  let input = $(this).siblings('.input').val();
  if (input == '') return;
  addToList({text:input,done: false});
});


