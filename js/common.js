console.log('I am in common.js');
console.log($);

var submitForm = function (e) {
    console.log("in submitForm");
    e.preventDefault();

    var form = $(e.target),
    data = form.serialize(),
    url = form.attr('action');

    console.log(form);
    console.log(data);
    console.log(url);

    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        // dataType : 'JSON'
    });

    request.done(function(msg) {
        alert(msg);
        // var mes = msg.mes,
        //     status = msg.status;
        // if (status === 'OK') {
        //     form.append('<p class="success">' + mes + '</p>');
        // } else {
        //     form.append('<p class="error">' + mes + '</p>');
        // }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

$('#order-form').on('submit', submitForm);