
function add_numbers(){
    var first_number    = document.getElementById('first_number').value;
    var second_number   = document.getElementById('second_number').value;

    var result = Number(first_number) + Number(second_number);

    ons.notification.toast('Result: ' + result, {timeout:2000});
}

function clear_inputs(){
    document.getElementById('first_number').value = '';
    document.getElementById('second_number').value = '';
}