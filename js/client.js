$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        var product = $(this).attr('data-product');
        var productCode = $(this).attr('data-code')
        $("strong#product").text(product);
        $("strong#code").text(productCode);
        $('#toast').toast({ autohide: false }).toast('show');
    });
    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $('#toast').toast({ autohide: true }).toast('hide');
        }
    });
});