let animations = ["animate__animated animate__bounce","animate__animated animate__flash","animate__animated animate__pulse","animate__animated animate__rubberBand",
    "animate__animated animate__shakeX","animate__animated animate__shakeY","animate__animated animate__headShake","animate__animated animate__swing",
    "animate__animated animate__tada","animate__animated animate__wobble","animate__animated animate__jello","animate__animated animate__heartBeat"]


$(function(){

    h1Animation();
    hoverColor();
    toast();
    birthdateFormat();
    uncheckFirefox();
    toggleBalloonImages();
    checkUncheckAll();
    
});

function hoverColor(){
    $('.form-check-label').hover(function(){
        $('.form-check-label').mouseover(function(){
            var color = $(this).attr('for');
            $('#animate').css("color",color);
        }) 
    },
        function(){
            $('#animate').css("color","black");
        });
}

function toggleBalloonImages(){
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
}

function h1Animation(){
    // animate h1 element
    $('#animate').addClass(animations[Math.ceil(Math.random()*animations.length-1)]);
}

function toast(){
    //Added toast element for selecting submit without any ballons selected
    $('#submit').on('click', function(e){
        e.preventDefault();
        if($(".form-check input:checkbox:checked").length == 0){
            $("#toast").toast({autohide:false}).toast('show');
            setTimeout(function(){$('#toast').hide();}, 5000);
        }
    });
}

function checkUncheckAll(){
    $('#checkall').on('click',function(){
        if($(".form-check input:checkbox:checked").length == 0){
            $(".form-check-input").each(function(){
                $(this).prop('checked',true);
            });
            $('.ball').each(function(){
                $(this).css('visibility','visible');
                $(this).addClass('animate__animated animate__bounceInDown');
            })
        }
        else{
           $('.form-check-input').each(function(){
            $(this).prop('checked',false);
            toggleBalloonImages();
           });
           //I cannot figure out how to make the animation happen more than once
           $('.ball').each(function(){
            $(this).css('visibility','visible');
            $(this).addClass('animate__animated animate__bounceOutUp');
           })
        }
    });
}

function birthdateFormat(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
}

function uncheckFirefox(){
     // uncheck all checkboxes (FireFox)
     $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
}