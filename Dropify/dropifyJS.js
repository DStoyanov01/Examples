$('#btnGoogle').click(function(){
    swal({
        title: "Leave this site?",
        text: "If you click 'OK' you will be redirected to http://google.com",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "OK",
        closeOnConfirm: false
    },
    function(){
        /*swal("Deleted!", "Your imaginary file has been deleted.", "success");*/
         window.location.href = "http://www.google.bg";
    });
});

$('#btnFB').click(function(){
    swal({
        title: "Leave this site?",
        text: "If you click 'OK' you will be redirected to http://facebook.com",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "OK",
        closeOnConfirm: false
    },
    function(){
        /*swal("Deleted!", "Your imaginary file has been deleted.", "success");*/
        window.location.href = "http://www.facebook.com";
    });
});

$('.dropify').dropify();
// $(".dropify-clear").click(); 


$('#testBtn').on('click', function(e){

    var $el = $('#clearForm');
    $el.wrap('<form>').closest('form').get(0).reset();
    $el.unwrap();  
   
    var $el = $('#collapseTwo');
    $el.wrap('<form>').closest('form').get(0).reset();
    $el.unwrap();  
   
    var $el = $('#test');
    $el.wrap('<form>').closest('form').get(0).reset();
    $el.unwrap();  

    
});