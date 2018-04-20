//lets you uncheck radio buttons
var allRadios = document.getElementsByName('inlineRadioOptions');
var booRadio;
for(x = 0; x < allRadios.length; x++){

    allRadios[x].onclick = function() {
        if(booRadio == this){
            this.checked = false;
            booRadio = null;
        }else{
            booRadio = this;
        }
    };
}


//nav var from fixed to not fixed
$( document ).ready(function() {

    // $(window).resize(function () {
    //     var viewportWidth = $(window).width();
    //     if (viewportWidth < 576) {
    //         $(".navbar").removeClass("fixed-top");
    //     }if (viewportWidth > 576) {
    //         $(".navbar").addClass("fixed-top");
    //     }
    // });
    // $(window).on('load', function () {
    //     var viewportWidth = $(window).width();
    //     if (viewportWidth < 576) {
    //         $(".navbar").removeClass("fixed-top");
    //     } else {
    //         $(".navbar").addClass("fixed-top");
    //     }
    // });


    // Open navbarSide when button is clicked
    $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });



    // $(':text:first').focus();
    $('#other').hide();

//slides down radio and enables it
    $('#radio4').click(function () {
        if($(this).prop('checked')) {
            $('#other').show('fast');
            $("#number").prop('disabled', false);
        }
        else {
            $('#other').hide('fast');
            $("#number").prop('disabled', true);
        }
    }); //end click
    //disables other amount
    $('#radio1, #radio2, #radio3').click(function () {
        if($(this).prop('checked')) {
            $("#number").prop('disabled', true);
        }
    }); //end click


//validate
    $('#the_form').validate({
        rules:{
            email: {
                required: true,
                email: true
            },
            zip: {
                required: true,
                zipcodeUS: true
            },

            address: {
                required: true,
                addressUS: true
            },
            creditcard: {
                required: true,
                creditcard: true
            },
            number: {
                required: true,
                number: true
            }
        },
        messages:{
            email: {
                required:"Please supply an e-mail",
                email: "This is not a valid e-mail"
            },
            zip: {
                required: "Please supply a zip code",
                zipcodeUS: "This is not a valid zip code"
            },

            address: {
                required: "Please supply an address",
                addressUS: 'This is not a valid address'
            },
            creditcard: {
                required: "Please enter credit card",
                creditcard: "Please enter valid credit card"
            },
            number: {
                required: "Please enter other amount",
                number: "Please enter valid decimal"
            }
        },
        errorPlacement: function (error, element) {
            if(element.is(":radio") || element.is(":checkbox")) {
                error.appendTo( element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });

});
