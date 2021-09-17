function toggle(from, to) {
      $(from).toggleClass('hide');
      $(from).closest('.action').closest('.row').find(to).toggleClass('hide');
      $(from).closest('.action').closest('.row').siblings('.item-text').toggleClass('checked');
      $(from).closest('.action').closest('.row').siblings('.circle').find('.img').toggleClass('hide');
      $(from).closest('.action').closest('.row').siblings('.circle').toggleClass('green');
    }
    function init() {
      $('.delete').on('click', function () {
        $(this).closest('.list-item').remove();
      });
      $('.list-item').on('mouseenter', function () {
        $('.action').addClass('hide');
        $(this).find('.action').removeClass('hide');
      });
      $(".done").unbind('click');
      $(".undone").unbind('click');
      $('.done').on('click', function () {
        toggle(this, '.undone');
      });
      $('.undone').on('click', function () {
        toggle(this, '.done');
      });
    }
    init();
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
      init();
    });