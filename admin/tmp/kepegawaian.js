// Avatar
var reader  = new FileReader();
reader.addEventListener("load", function() {
  $("#photoPreview").attr('src', reader.result);
}, false);
$("input[name=photo]").change(function() {
  reader.readAsDataURL(this.files[0]);
});
// Datepicker
$( function() {
  $( ".datepicker" ).datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+0",
  });
} );
$(document).ready(function(){
<<<<<<< HEAD
    $('.display').DataTable({
      "lengthChange": false,
      "scrollX": true
    });
=======
  $('.display').DataTable({
    "language": { "search": "", "searchPlaceholder": "Search..." },
    "lengthChange": false,
    "scrollX": true,
    dom: "<<'data-table-title'><'datatable-search'f>><'row'<'col-sm-12'tr>><<'pmd-datatable-pagination' l i p>>"
  });
>>>>>>> 6fafb8cba01cdc2b831277d6d68d9e496c0f02ad
});
