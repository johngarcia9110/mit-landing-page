$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    console.log('loaded');
    $("#submit-button").click(function(event){
      
      var name = $('#inf_field_FirstName').val();
      var company = $('#inf_custom_Company0').val();
      var phone = $('#inf_field_Phone1').val();
      var email = $('#inf_field_Email').val();
      
      if(
        name === '' || company === '' || phone === '' || email === ''
      ){
        event.preventDefault();
        $('#alertMsg').show();
        console.log('no info submited');
      }else{
        $('#mitForm').submit();
      }
    });
});
