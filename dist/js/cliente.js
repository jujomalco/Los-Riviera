
    (function(){
        /*AGREGAR Y QUITAR TELEFONOS*/
        var contador = 0;
    
        // evento para agregar filas
        $("#aTelefono").on("click",function(){
    
            contador ++;
    
            var iNumerotelefono = $("#iNumerotelefono").val();
            var tlfPredeterminado = $("#tlfPredeterminado").val();
    
    
            var linea = "";
    
            linea += '<tr>';
            linea += 	'<td>'+ iNumerotelefono +'</td>';
            linea += 	'<td>'+ tlfPredeterminado +'</td>';
            linea += 	'<td><button class="mr-2 btn-icon btn-icon-only btn btn-danger del">Eliminar</button></td>';
            
            linea += '</tr>';
    
            $("#tablaTelefono").append( linea );
    
        });

        // evento para eliminar la fila
		$("#tablaTelefono").on("click", ".del", function(){
			$(this).parents("tr").remove();
        });
        /*AGREGAR Y QUITAR TELEFONOS*/




        /*AGREGAR Y QUITAR CORREOS*/
        var contadorc = 0;

    // evento para agregar filas
    $("#aCorreo").on("click",function(){

        contadorc ++;

        var iEmail = $("#iEmail").val();
        var correoPredeterminado = $("#correoPredeterminado").val();


        var lineac = "";

        lineac += '<tr>';
        lineac += 	'<td>'+ iEmail +'</td>';
        lineac += 	'<td>'+ correoPredeterminado +'</td>';
        lineac += 	'<td><button class="mr-2 btn-icon btn-icon-only btn btn-danger delc">Eliminar</button></td>';
        
        lineac += '</tr>';

        $("#tablaCorreo").append( lineac );

    });

    // evento para eliminar la fila
    $("#tablaCorreo").on("click", ".delc", function(){
        $(this).parents("tr").remove();
    });
    /*AGREGAR Y QUITAR CORREOS*/

    /*AGREGAR Y QUITAR DIRECIONES*/

    var contadord = 0;

    // evento para agregar filas
    $("#aDireccion").on("click",function(){

        contadord ++;

        var estado = $("#estado").val();
        var municipio = $("#municipio").val();
        var descDireccion = $("#descDireccion").val();
        var direccionPredeterminado = $("#direccionPredeterminado").val();


        var linead = "";

        linead += '<tr>';
        linead += 	'<td>'+ estado +'</td>';
        linead += 	'<td>'+ municipio +'</td>';
        linead += 	'<td>'+ descDireccion  +'</td>';
        linead += 	'<td>'+ direccionPredeterminado +'</td>';
        linead += 	'<td><button class="mr-2 btn-icon btn-icon-only btn btn-danger deld">Eliminar</button></td>';
        
        linead += '</tr>';

        $("#tablaDireccion").append( linead );

    });

    // evento para eliminar la fila
    $("#tablaCorreo").on("click", ".delc", function(){
        $(this).parents("tr").remove();
    });

    /*AGREGAR Y QUITAR DIRECIONES*/
    
})();



   

