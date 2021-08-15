new WOW().init();

$('#brif-form').validate({
    rules: {
        username: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        phone: "required",
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        username: {
            required: "Заполните поле"
        },
        phone: {
            required: "Заполните поле"
        },
        email: {
            required: "Заполните поле"
        }
    }, 
    errorClass: "invalid"
});



$('#input-phone').inputmask({"mask": "+38 (099) 999-99-99"});




