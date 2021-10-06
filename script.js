function toggle(from, to) {
      $(from).toggleClass('hide');
      $(from).closest('.action').closest('.row').find(to).toggleClass('hide');
      $(from).closest('.action').closest('.row').siblings('.item-text').toggleClass('checked');
      $(from).closest('.action').closest('.row').siblings('.circle').find('.img').toggleClass('hide');
      $(from).closest('.action').closest('.row').siblings('.circle').toggleClass('green');
    }

$('.list').on('click','.delete',function(e){ 
  $(this).closest('.list-item').remove();
});
$('.list').on('click','.done',function(e){ 
  toggle(this, '.undone');
});
$('.list').on('click','.undone',function(e){ 
  toggle(this, '.done');
});
$('.list').on('mouseenter','.list-item',function(e){ 
  $('.action').addClass('hide');
        $(this).find('.action').removeClass('hide');
});

$('input').on('keydown',function(e){ 
  if(e.key=='Enter') $('.add-btn').click();
});
$('.add-btn').on('click', function () {
  let input = $(this).siblings('.input').val();
  if (input == '') return;
  let element = '<div class="list-item"><div class="circle"><img src="Vector.png" loading="lazy" width="15" height="15" alt="checked" class="img hide"></div><div class="item-text">';
  element += input;
  element += '</div><div class="row"><div class="action hide"><div class="undone hide">Undone</div><div class="done">Done</div><div class="delete">Delete</div></div></div></div>'
  $('.list').append(element);
  window.scrollBy(0, 100);
  $('.list').last().css('overflow-wrap', 'break-word');
  $('.list').last().css('word-wrap', 'break-word');
});
