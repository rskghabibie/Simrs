$(document).ready(function(){
    $('.display').DataTable({
<<<<<<< HEAD
      "lengthChange": false,
      "scrollX": true
    });
=======
      "language": { "search": "", "searchPlaceholder": "Search..." },
      "lengthChange": false,
      "scrollX": true,
      dom: "<<'data-table-title'><'datatable-search'f>><'row'<'col-sm-12'tr>><<'pmd-datatable-pagination' l i p>>"
    });
    var t = $(".display").DataTable().rows().count();
    $(".data-table-title").html('<h3 style="display:inline;float:left;margin-top:0;" class="hidden-xs">Total: ' + t + '</h3>');
>>>>>>> 6fafb8cba01cdc2b831277d6d68d9e496c0f02ad
});
