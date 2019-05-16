
$("#forms").submit(function(event) {
  console.log($(this).serializeArray());
  event.preventDefault();
});

formArray = {}
function objectifyForm(formArray) {//serialize data function

    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }