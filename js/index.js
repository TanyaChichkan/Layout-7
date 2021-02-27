const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");


// const todos = [
//   {
//     text: "Buy milk",
//     done: false
//   },
//   {
//     text: "Play with dog",
//     done: true
//   }
// ];


// $add.on('click', function(e) {
//   e.preventDefault();
//   if ($input.val() == '') {
//     alert('Add new task please..');
//   } else {
//     $list.prepend('<li class="item"><span class="item-text">' + $input.val() + '</span>' + ' <button class="item-remove">Remove</button></li>');
//     todos.push({text:$input.val(), done: false});
//     $input.val('');
//   }
// });

// function removeItem() {
//   $(this).closest('li').remove();
// }

// $(document).on('click', '.item-remove', removeItem);


const $obj = {
  arr:  [  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }],

  todolist(){
    $add.on('click', function(e) {
      e.preventDefault();
      console.log($input.val());
      if ($input.val() == '') {
        alert('Add new task please..');
      } else {
        $list.prepend('<li class="item"><span class="item-text">' + $input.val() + '</span>' + ' <button class="item-remove">Remove</button></li>');
        $obj.arr.push({text:$input.val(), done: false});
        $input.val('');

        $('.item-text').on('click', function (e){
          console.log($obj.arr);
          let currentItem = e.target;
          currentItem.style.textDecoration = "line-through";
        });
      }
    });

    function removeItem() {
      $(this).closest('li').remove();
    };

    $(document).on('click', '.item-remove', removeItem);

  }
}


$list.pluginToDo = $obj.todolist;

$list.pluginToDo();


const $searchForm = $('.form-search');
let $searchInput = $('#search-input');

$(document).ready(function(){

  let value;


  $searchInput.on('keyup',function(e){

    value = $searchInput.val().toLowerCase();


    $('.item').toArray().forEach(el=>{
      let currentText = el.firstElementChild.textContent.toLowerCase();

      if(currentText.indexOf(value) === -1) {
        el.style.display = "none";

      } if(currentText.indexOf(value) !== -1) {
        el.style.display = "block";
      }
      localStorage.setItem('task', value);
    });


  });

  $searchInput.val('');

});





