$(function(){
  function buildHTML(comment){
    var html = `<p>
                  <strong>
                    <a href=${comment.id}>${comment.user_name}</a>
                    ：
                  </strong>
                  ${comment.text}
                </p>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    // var href = window.location.href + '/comments'
    // var $form = $(this);
    console.log(this)
    console.log($(this))
    var aaa = this.action
    console.log(aaa)
    $.ajax({
      url: $form.attr('action'),
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comments').append(html)
      $('.textbox').val('')
    })
    .fail(function(){
      alert('error');
    })
  })
});
