(function(){
    /*AGREGAR Y QUITAR TELEFONOS*/
    var contador = 0;

    // evento para agregar filas
    $("#aProducto").on("click",function(){

        contador ++;

        var producto = $("#producto").val();
        var cantidad = $("#cantidad").val();
        var precio = 250;
        var precio_cantidad = cantidad*precio;


        var linea = "";

        linea += '<tr>';
        linea += 	'<td>'+ producto +'</td>';
        linea += 	'<td>'+ cantidad +'</td>';
        linea += 	'<td>'+ precio +'</td>';
        linea += 	'<td>'+ precio_cantidad +'</td>';
        linea += 	'<td><button class="mr-2 btn-icon btn-icon-only btn btn-danger del">Eliminar</button></td>';
        
        linea += '</tr>';

        $("#tablaProducto").append( linea );

    });

    // evento para eliminar la fila
    $("#tablaProducto").on("click", ".del", function(){
        $(this).parents("tr").remove();
    });
})();