var pkDocumento;

$(document).ready(function(){
	
	$(function(){
   $('[data-toggle="tooltip"]').tooltip();
  })
  
  var opt = GetURLParameter("opt");
  
  switch(opt)
  {
  case "edit":
	$("#btn-quest-acept").attr("onclick","EditarOficio();");
	$("#btn-quest-cancel").attr("onclick","window.open('/covid19/index.dkl','_self')");
	$("#Header_alertQuestModal").html("EDITAR");
	$("#msg_alertQuestModal").html("POR FAVOR, ESCRIBE EL FOLIO Y APELLIDO PATERNO DEL PACIENTE PARA EDITAR SU INFORMACIÓN");
	$('#inputQuestModal1').attr('style', 'display:block');
	$('#inputQuestModal1').attr("placeholder", "Folio");
	$('#inputQuestModal2').attr('style', 'display:block');
	$('#inputQuestModal2').attr("placeholder", "Apellido paterno");
	$("#alertQuestModal").modal({backdrop:'static'});
  break;
  case "new":
  case undefined:
  break;
  default:
	$("#btnAlertInModal").attr("onclick"," window.open('/covid19/index.dkl','_self')");
	$("#btnAlertInModal").html("Regresar");
  	alertinModal("OPCIÓN INVÁLIDA");
  break;
  
  }
	
	$("input[name=sexos]").click(function () 
	{    
		if($('input:radio[name=sexos]:checked').val() == 2)
		{
			$('#estaembarazada').attr('style', 'display:block');
			
		}
		else
		{
			$('#estaembarazada').attr('style', 'display:none');
			limpiarElementos("estaembarazada");
		}
	});
	
	$("input[name=embarazada]").click(function () 
	{    
		if($('input:radio[name=embarazada]:checked').val() == 1)
		{
			$('#mesesembarazos').attr('style', 'display:block');
		}
		else
		{
			$('#mesesembarazos').attr('style', 'display:none');
			limpiarElementos("mesesembarazos");
		}
	});
	
	
	$("input[name=puerperio]").click(function () 
	{    
		if($('input:radio[name=puerperio]:checked').val() == 1)
		{
			$('#diaspuerperio').attr('style', 'display:block');
		}
		else
		{
			$('#diaspuerperio').attr('style', 'display:none');
			limpiarElementos("diaspuerperio");
		}
	});
	
	$("input[name=nacionalidad]").click(function () 
	{    
		if($('input:radio[name=nacionalidad]:checked').val() == 0)
		{
			$('#paisorigen').attr('style', 'display:block');
		}
		else
		{
			$('#paisorigen').attr('style', 'display:none');
			limpiarElementos("paisorigen");
		}
	});
	
	$("input[name=transmision]").click(function () 
	{    
		if($('input:radio[name=transmision]:checked').val() == 1)
		{
			$('#fechaviaje').attr('style', 'display:block');
			$('#aerolinea').attr('style', 'display:block');
			$('#fechallegada').attr('style', 'display:block');
		}
		else
		{
			$('#fechaviaje').attr('style', 'display:none');
			$('#aerolinea').attr('style', 'display:none');
			$('#fechallegada').attr('style', 'display:none');
			
			limpiarElementos("fechaviaje");
			limpiarElementos("aerolinea");
			limpiarElementos("fechallegada");
			
		}
	});
	
	$("input[name=personasintomatologia]").click(function () 
	{    
		if($('input:radio[name=personasintomatologia]:checked').val() == 1)
		{
			$('#lugarcontacto').attr('style', 'display:block');
			
		}
		else
		{
			$('#lugarcontacto').attr('style', 'display:none');
			limpiarElementos("lugarcontacto");
		}
	});
	
	$("input[name=animales]").click(function () 
	{    
		if($('input:radio[name=animales]:checked').val() == 1)
		{
			$('#contactoanimales').attr('style', 'display:block');
			$('#cualesanimales').attr('style', 'display:block');
		}
		else
		{
			$('#contactoanimales').attr('style', 'display:none');
			$('#cualesanimales').attr('style', 'display:none');
			
			limpiarElementos("contactoanimales");
			limpiarElementos("cualesanimales");
		}
	});
	
	$("input[name=mercadoanimales]").click(function () 
	{    
		if($('input:radio[name=mercadoanimales]:checked').val() == 1)
		{
			$('#mercadoanimales').attr('style', 'display:block');
			$('#fechamercadoanimales').attr('style', 'display:block');
		}
		else
		{
			$('#mercadoanimales').attr('style', 'display:none');
			$('#fechamercadoanimales').attr('style', 'display:none');
			
			limpiarElementos("mercadoanimales");
			limpiarElementos("fechamercadoanimales");
		}
	});
	
	$("input[name=antipiretico]").click(function () 
	{    
		if($('input:radio[name=antipiretico]:checked').val() == 1)
		{
			$('#fechainicioantipiretico').attr('style', 'display:block');
			$('#chkantipiretico').attr('style', 'display:block');
		}
		else
		{
			$('#fechainicioantipiretico').attr('style', 'display:none');
			$('#chkantipiretico').attr('style', 'display:none');
			
			limpiarElementos("fechainicioantipiretico");
			limpiarElementos("chkantipiretico");
		}
	});
	
	$("input[name=antiviral]").click(function () 
	{    
		if($('input:radio[name=antiviral]:checked').val() == 1)
		{
			$('#fechainicioantiviral').attr('style', 'display:block');
			$('#chkantiviral').attr('style', 'display:block');
		}
		else
		{
			$('#fechainicioantiviral').attr('style', 'display:none');
			$('#chkantiviral').attr('style', 'display:none');
			
			limpiarElementos("fechainicioantiviral");
			limpiarElementos("chkantiviral");
		}
	});
	
	$("input[name=antibiotico]").click(function () 
	{    
		if($('input:radio[name=antibiotico]:checked').val() == 1)
		{
			$('#fechainicioantibiotico').attr('style', 'display:block');
			$('#chkantibiotico').attr('style', 'display:block');
		}
		else
		{
			$('#fechainicioantibiotico').attr('style', 'display:none');
			$('#chkantibiotico').attr('style', 'display:none');
			
			limpiarElementos("fechainicioantibiotico");
			limpiarElementos("chkantibiotico");
		}
	});
	
	$("input[name=muestrapaciente]").click(function () 
	{    
		if($('input:radio[name=muestrapaciente]:checked').val() == 1)
		{
			$('#laboratoriodiagnostico').attr('style', 'display:block');
			$('#tipomuestra').attr('style', 'display:block');
			$('#fechasmuestra').attr('style', 'display:block');
			
		}
		else
		{
			$('#laboratoriodiagnostico').attr('style', 'display:none');
			$('#tipomuestra').attr('style', 'display:none');
			$('#fechasmuestra').attr('style', 'display:none');
			
			limpiarElementos("laboratoriodiagnostico");
			limpiarElementos("tipomuestra");
			limpiarElementos("fechasmuestra");
		}
	});
	
	
});

function EditarOficio()
{
	var pk = $('#inputQuestModal1').val();
	var apellido = $('#inputQuestModal2').val();
	if(pk == "")
	{
		alertinModal("Requerido el folio, valídalo por favor.");
		return;
	}
	
	if(apellido == "")
	{
		alertinModal("Requerido el apellido paterno del paciente, valídalo por favor.");
		return;
	}
	
	var data={};
	data.pk = pk.trim();
	data.apellido_paterno = apellido.trim();
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-get-all.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					LlenarControles(JSON.parse(obj.data));
				}
				else
				{
					alertinModal(obj.data);
				}
			}
		}
	})
}

function fixDate(item)
{
	var fechareturn = "";
	
	try
	{
		var fecha = item.split("T");
		fechareturn = fecha[0].toString();
	}
	catch{}
	
	return fechareturn;
}

function pdf()
{
	loader("bodycovid", 1);
	var data={};
	data.pk = pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-print.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					setTimeout(
					function() 
					{
					window.open(obj.data,"_blank");
					loader("bodycovid", 0);
					}, 6000);
			
				}
				else
				{
					loader("bodycovid", 0);
					alertinModal(obj.data);
				}
			}
		}
	})
	
	
	
}

function actualizarHeadCaso()
{
	$("#headIdentificador").html(pkDocumento);
	$("#headIdentificador").attr("color","green");
	$("#btnPDF").removeAttr("disabled");
}

function LlenarControles(obj)
{
	if(obj == null)
	{
		alertinModal("No se encontró ninguna coincidencia, favor de validar sus datos.");
		return;
	}
	pkDocumento = obj.sys_pk;
	
	actualizarHeadCaso();
	actualizarTablaContacto();
	actualizarTablaViaje();
	
	//NOTIFICANTE
	$("#entidad_notificante").val(obj.entidad);	
	$("#jurisdiccion_notificante").val(obj.jurisdiccion);
	$("#municipio_notificante").val(obj.municipio);
	$("#nombre_unidad_medica_notificante").val(obj.nombreunidadmedica);
	$("#institucion_notificante").val(obj.institucion);
	$("#clues_notificante").val(obj.clues);
	
	//GENERALES
	$("#fecha_ingreso_generales").val(fixDate(obj.fechaingresounidad));	
	$("#primer_apellido_generales").val(obj.primerapellido);	
	$("#segundo_apellido_generales").val(obj.segundoapellido);	
	$("#nombres_generales").val(obj.nombres);	
	$("#dia_fecha_nacimiento").val(obj.fechanacimientodia);	
	$("#mes_fecha_nacimiento").val(obj.fechanacimientomes);	
	$("#anio_fecha_nacimiento").val(obj.fechanacimientoanio);	
	$("#edad").val(obj.edad);	
	$("#curp").val(obj.curp);
	$("input[name=sexos][value=" + obj.sexo + "]").prop('checked', true);
	$("input[name=sexos][value=" + obj.sexo + "]").click();
	$("input[name=embarazada][value=" + obj.embarazo + "]").prop('checked', true);
	$("input[name=embarazada][value=" + obj.embarazo + "]").click();
	$("#meses_embarazo").val(obj.mesesembarazo);
	$("input[name=puerperio][value=" + obj.puerperio + "]").prop('checked', true);
	$("input[name=puerperio][value=" + obj.puerperio + "]").click();
	$("#dias_purperio").val(obj.diaspuerperio);
	$("input[name=nacionalidad][value=" + obj.nacionalidad + "]").prop('checked', true);
	$("input[name=nacionalidad][value=" + obj.nacionalidad + "]").click();
	$("#dg_paisorigen").val(obj.paisorigen);
	$("#num_expediente_seguro_social").val(obj.nexpedientesegsocial);
	$("#entidad_nacimiento").val(obj.entidadnacimiento);
	$("#entidad_delegacion_residencia").val(obj.entidadresidencia);
	$("#municipio_residencia").val(obj.municipioresidencia);
	$("#localidad").val(obj.localidadresidencia);
	$("#calle").val(obj.calleresidencia);
	$("#num_externo").val(obj.numeroexternoresidencia);
	$("#num_interno").val(obj.numerointernoresidencia);
	$("#entrecalle1").val(obj.entrecallesresidencia);
	$("#entrecalle2").val(obj.entrecallesresidencia2);
	$("#colonia").val(obj.coloniaresidencia);
	$("#codigo_postal").val(obj.codigopostalresidencia);
	$("#telefono").val(obj.telefono);
	$("input[name=indigena][value=" + obj.esindigena + "]").prop('checked', true);
	$("input[name=indigena][value=" + obj.esindigena + "]").click();
	$("input[name=lenguaindigena][value=" + obj.lenguaindigena + "]").prop('checked', true);
	$("input[name=lenguaindigena][value=" + obj.lenguaindigena + "]").click();
	$("#ocupacion").val(obj.ocupacion);
	$("input[name=migrante][value=" + obj.esmigrante + "]").prop('checked', true);
	
	//ANTECEDENTES
	$("input[name=transmision][value=" + obj.viajetranslocalcom + "]").prop('checked', true);
	$("input[name=transmision][value=" + obj.viajetranslocalcom + "]").click();
	$("input[name=residente][value=" + obj.residentetranlocalcom + "]").prop('checked', true);
	$("input[name=residente][value=" + obj.residentetranlocalcom + "]").click();
	$("#fecha_viaje").val(fixDate(obj.fechaviajetranslocalcom));
	$("#txtaerolinea").val(obj.aerolineaviajetranslocalcom);
	$("#fecha_llegada").val(fixDate(obj.fechallegadaviajetranslocalcom));
	$("input[name=personasintomatologia][value=" + obj.contactopersonasintomas + "]").prop('checked', true);
	$("input[name=personasintomatologia][value=" + obj.contactopersonasintomas + "]").click();
	$("#lugar_contacto_combo").val(obj.lugarcontactopersonasintomas);
	$("input[name=animales][value=" + obj.contactoanimales + "]").prop('checked', true);
	$("input[name=animales][value=" + obj.contactoanimales + "]").click();
	$("#cual_animal").val(obj.contactoanimalescual);
	$("#tipo_contacto_combo").val(obj.tipocontactoanimales);
	$("input[name=mercadoanimales][value=" + obj.visitamercadoanimales + "]").prop('checked', true);
	$("input[name=mercadoanimales][value=" + obj.visitamercadoanimales + "]").click();
	$("#lugar_mercardo").val(obj.lugarmercadoanimales);	
	$("#fecha_mercado").val(fixDate(obj.fechamercadoanimales));	
	$("input[name=sospecha][value=" + obj["14diascontactosospechoso"] + "]").prop('checked', true);
	$("input[name=sospecha][value=" + obj["14diascontactosospechoso"] + "]").click();
	$("input[name=confirmada][value=" + obj["14diascontactoconfirmado"] + "]").prop('checked', true);
	$("input[name=confirmada][value=" + obj["14diascontactoconfirmado"] + "]").click();
	$("input[name=contactotransmision][value=" + obj["14diascontactoviajado"] + "]").prop('checked', true);
	$("input[name=contactotransmision][value=" + obj["14diascontactoviajado"] + "]").click();
	
	//DATOSCLINICOS
	$("#fecha_inicio_sintomas").val(fixDate(obj.dc_fechainiciosintomas));
	
	$('#chksintomas input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var objvalueincheck = obj[key];
		if(objvalueincheck)
		{
			$(this).prop('checked',true);
		}
        else
		{
			$(this).prop('checked',false);
		}
	});
	
	$("#dc_otrossintomas").val(obj.dc_otrossintomas);	
	$("#dc_otraenfermedad").val(obj.dc_otraenfermedad);	
	
	//UNIDADMEDICA
	$("#servicio_ingreso").val(obj.servicioingreso);
	$("#fecha_ingreso_unidad").val(fixDate(obj.fechadeingresounidad));
	$("#tipo_paciente_combo").val(obj.tipopaciente);
	$("input[name=uci][value=" + obj.casoingresadouci + "]").prop('checked', true);
	$("input[name=uci][value=" + obj.casoingresadouci + "]").click();
	$("input[name=intubado][value=" + obj.casointubado + "]").prop('checked', true);
	$("input[name=intubado][value=" + obj.casointubado + "]").click();
	$("input[name=neumoniaclinica][value=" + obj.neumoniaclinica + "]").prop('checked', true);
	$("input[name=neumoniaclinica][value=" + obj.neumoniaclinica + "]").click();
	$("input[name=neumoniaradiologica][value=" + obj.neumoniaradiologica + "]").prop('checked', true);
	$("input[name=neumoniaradiologica][value=" + obj.neumoniaradiologica + "]").click();
	
	//TRATAMIENTO
	$("input[name=antipiretico][value=" + obj.tratamientoantipiretico + "]").prop('checked', true);
	$("input[name=antipiretico][value=" + obj.tratamientoantipiretico + "]").click();
	$("#fecha_inicio_tratamiento_analgesico").val(fixDate(obj.fechatratamientoantipiretico));
	$('#chkantipiretico input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var objvalueincheck = obj[key];
		if(objvalueincheck)
		{
			$(this).prop('checked',true);
		}
        else
		{
			$(this).prop('checked',false);
		}
	});
	$("#ap_otro").val(obj.ap_otro);
	$("input[name=antiviral][value=" + obj.tratamientoantiviral + "]").prop('checked', true);
	$("input[name=antiviral][value=" + obj.tratamientoantiviral + "]").click();
	$("#fecha_inicio_tratamiento_antiviral").val(fixDate(obj.fechatratamientoantiviral));
	$('#chkantiviral input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var objvalueincheck = obj[key];
		if(objvalueincheck)
		{
			$(this).prop('checked',true);
		}
        else
		{
			$(this).prop('checked',false);
		}
	});
	$("#av_otro").val(obj.av_otro);
	
	$("input[name=antibiotico][value=" + obj.tratamientoantibiotico + "]").prop('checked', true);
	$("input[name=antibiotico][value=" + obj.tratamientoantibiotico + "]").click();
	
	$("#fecha_inicio_tratamiento_antibiotico").val(fixDate(obj.fechatratamientoantibiotico));
	$('#chkantibiotico input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var objvalueincheck = obj[key];
		if(objvalueincheck)
		{
			$(this).prop('checked',true);
		}
        else
		{
			$(this).prop('checked',false);
		}
	});
	$("#ab_otro").val(obj.ab_otro);
	
	//LABORATORIO
	$("input[name=muestrapaciente][value=" + obj.muestrapaciente + "]").prop('checked', true);
	$("input[name=muestrapaciente][value=" + obj.muestrapaciente + "]").click();
	$("#laboratorio_diagnostico").val(obj.laboratoriodiagnostico);
	$('#tipomuestra input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var objvalueincheck = obj[key];
		if(objvalueincheck)
		{
			$(this).prop('checked',true);
		}
        else
		{
			$(this).prop('checked',false);
		}
	});
	
	$("#fecha_toma_muestra").val(fixDate(obj.fechatomamuestra));
	$("#fecha_envio_muestra").val(fixDate(obj.fechaenviomuestra));
	$("#fecha_recepcion_muestra").val(fixDate(obj.fecharecepcionmuestra));
	$("#fecha_resultado_muestra").val(fixDate(obj.fecharesultado));
	$("#evolucion_combo").val(obj.resultado);
	
	//EVOLUCIÓN
	$("#resultado").val(obj.evolucion);
	$("#fecha_ingreso").val(fixDate(obj.fechaingreso));
	$("#fechadefuncion").val(fixDate(obj.fechadefuncion));
	$("#foliocerficiadodefuncion").val(fixDate(obj.fechaingreso));
	$('#checkcovid19 input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var objvalueincheck = obj[key];
		if(objvalueincheck)
		{
			$(this).prop('checked',true);
		}
        else
		{
			$(this).prop('checked',false);
		}
	});
	
	//CONTACTO
	$("#nombre_elaboro").val(obj.nombreycargoelaboro);
	$("#nombre_autorizo").val(obj.nombreycargoautorizo);
	$("#contacto_elaboro").val(obj.contactoelaboro);
	$("#fecha_elaboro").val(fixDate(obj.fechaelaboracion));
	$("#alertQuestModal").modal('hide');
}

function AbrirModalViajes()
{
	$("#pais_viajo").val("");
	$("#ciudad_viajo").val("");
	$("#llegada_viajo").val("");
	$("#salida_viajo").val("");
	$("#aerolinea_viajo").val("");
	$("#btnModalViaje").attr("onclick","AddViaje()");
	$("#formAddViajes").modal({backdrop:'static'});
}

function EditInModalViajes()
{
	var obj = vmBrwCiudades.arr2obj(rowSelected);
	$("#pais_viajo").val(obj.pais_visitado);
	$("#ciudad_viajo").val(obj.ciudad_visitada);
	$("#llegada_viajo").val(obj.fecha_llegada);
	$("#salida_viajo").val(obj.fecha_salida);
	$("#aerolinea_viajo").val(obj.aerolinea_vuelo);
	$("#btnModalViaje").attr("onclick","EditViaje("+obj.sys_pk+")");
	$("#formAddViajes").modal({backdrop:'static'});
}

function DelModalViajes()
{
	$("#btn-quest-acept").attr("onclick","DelViaje();");
	$("#Header_alertQuestModal").html("Viaje");
	$("#msg_alertQuestModal").html("¿Desea eliminar el registro seleccionado?");
	$("#alertQuestModal").modal({backdrop:'static'});
}

function AddViaje()
{
	if(pkDocumento == undefined)
	{
		alertinModal("Se necesita tener guardada la unidad notificante");
		return;
	}
	var data={};
	data.pais_visitado = $("#pais_viajo").val();
	data.ciudad_visitada = $("#ciudad_viajo").val();
	data.fecha_llegada = $("#llegada_viajo").val();
	data.fecha_salida = $("#salida_viajo").val();
	data.aerolinea_vuelo = $("#aerolinea_viajo").val();
	
	if(data.pais_visitado == "" || data.ciudad_visitada == "" || data.fecha_llegada == "" || data.fecha_salida == "" || data.aerolinea_vuelo == "")
	{
		alertinModal("Faltan algunos datos favor de validar.");
		return;
	}
	
	data.fK_ee = pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-ins-Viaje.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					actualizarTablaViaje();
				}
				else
				{
					alertinModal(obj.data);
				}
			}
		}
	})
			
}

function limpiarElementos(id)
{
	$("#"+id).find(':input').each(function() {
    switch(this.type) {
        case 'password':
        case 'text':
        case 'textarea':
        case 'file':
        case 'select-one':
        case 'select-multiple':
        case 'date':
        case 'number':
        case 'tel':
        case 'email':
            $(this).val('');
            break;
    }
  });
}

function EditViaje(param)
{
	if(pkDocumento == undefined)
	{
		alertinModal("Se necesita tener guardada la unidad notificante");
		return;
	}
	var data={};
	data.pais_visitado = $("#pais_viajo").val();
	data.ciudad_visitada = $("#ciudad_viajo").val();
	data.fecha_llegada = $("#llegada_viajo").val();
	data.fecha_salida = $("#salida_viajo").val();
	data.aerolinea_vuelo = $("#aerolinea_viajo").val();
	
	if(data.pais_visitado == "" || data.ciudad_visitada == "" || data.fecha_llegada == "" || data.fecha_salida == "" || data.aerolinea_vuelo == "")
	{
		alertinModal("Faltan algunos datos favor de validar.");
		return;
	}
	
	data.pk = param;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Viaje.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					actualizarTablaViaje();
				}
				else
				{
					
					alertinModal(obj.data);
				}
			}
		}
	})
			
}

function DelViaje()
{
	$("#alertQuestModal").modal("hide");
	var obj = vmBrwCiudades.arr2obj(rowSelected);
	var data={};
	data.pk = obj.sys_pk;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-del-Viaje.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					actualizarTablaViaje();
				}
				else
				{
					
					alertinModal(obj.data);
				}
			}
		}
	})
			
}

function actualizarTablaViaje()
{
	$("#formAddViajes").modal("hide");
	var data={};
	data.fK_ee = pkDocumento;
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-refresh-Viaje.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					var table = $('#vmBrwCiudades ').DataTable();
					table.clear().draw();
					if (obj.data != "null")
					{
						
					var t = JSON.parse(obj.data);
					vmBrwCiudades.fill(t.Table);
					}
				}
			}
		}
	})
	
}


function AbrirModalContactos()
{
	$("#primerape_contacto").val("");
	$("#segundoape_contacto").val("");
	$("#nombre_contacto").val("");
	$("input[name=sexocontacto][value=" + 1 + "]").prop('checked', true);
	$("#edad_contacto").val("");
	$("input[name=tipocontacto][value=" + 1 + "]").prop('checked', true);
	$("#email_contacto").val("");
	$("input[name=sintomascontacto][value=" + 0 + "]").prop('checked', true);
	$("#observaciones_contacto").val("");
	$("#btnModalContactos").attr("onclick","AddContacto()");
	$("#formAddContactos").modal({backdrop:'static'});
}

function EditInModalContactos()
{
	var obj = vmBrwContactos.arr2obj(rowSelected);
	$("#primerape_contacto").val(obj.primerapellido);
	$("#segundoape_contacto").val(obj.segundoapellido);
	$("#nombre_contacto").val(obj.nombres);
	$("input[name=sexocontacto][value=" + obj.sexo + "]").prop('checked', true);
	$("#edad_contacto").val(obj.edad);
	$("input[name=tipocontacto][value=" + obj.tipo_contacto + "]").prop('checked', true);
	$("#email_contacto").val(obj.correo);
	$("input[name=sintomascontacto][value=" + obj.sintomas + "]").prop('checked', true);
	$("#observaciones_contacto").val(obj.observaciones);
	$("#btnModalContactos").attr("onclick","EditContacto("+obj.sys_pk+")");
	$("#formAddContactos").modal({backdrop:'static'});
}

function DelModalContactos()
{
	$("#btn-quest-acept").attr("onclick","DelContacto();");
	$("#Header_alertQuestModal").html("Contacto");
	$("#msg_alertQuestModal").html("¿Desea eliminar el registro seleccionado?");
	$("#alertQuestModal").modal({backdrop:'static'});
}

function actualizarTablaContacto()
{
	$("#formAddContactos").modal("hide");
	var data={};
	data.fK_ee = pkDocumento;
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-refresh-Contacto.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					var table = $('#vmBrwContactos').DataTable();
					table.clear().draw();
					if (obj.data != "null")
					{
						
					var t = JSON.parse(obj.data);
					vmBrwContactos.fill(t.Table);
					}
				}
			}
		}
	})
	
}


function AddContacto()
{
	if(pkDocumento == undefined)
	{
		alertinModal("Se necesita tener guardada la unidad notificante");
		return;
	}
	var data={};
	data.primerapellido = $("#primerape_contacto").val();
	data.segundoapellido = $("#segundoape_contacto").val();
	data.nombres = $("#nombre_contacto").val();
	data.sexocontacto = $('input:radio[name=sexocontacto]:checked').val();
	data.edad_contacto = $("#edad_contacto").val();
	data.tipocontacto = $('input:radio[name=tipocontacto]:checked').val();
	data.email_contacto = $("#email_contacto").val();
	data.sintomascontacto = $('input:radio[name=sintomascontacto]:checked').val();
	data.observaciones_contacto = $("#observaciones_contacto").val();
	data.fK_ee = pkDocumento;
	
	if(data.nombre_contacto == "" || data.sexocontacto=="" || data.edad_contacto =="" || data.tipocontacto == ""|| data.email_contacto == "" || data.sintomascontacto == "" || data.sintomascontacto == "")
	{
		alertinModal("Faltan algunos datos favor de validar.");
		return;
	}
	
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-ins-Contacto.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					actualizarTablaContacto();
				}
				else
				{
					alertinModal(obj.data);
				}
			}
		}
	})
			
}

function EditContacto(param)
{
	if(pkDocumento == undefined)
	{
		alertinModal("Se necesita tener guardada la unidad notificante");
		return;
	}
	var data={};
	data.primerapellido = $("#primerape_contacto").val();
	data.segundoapellido = $("#segundoape_contacto").val();
	data.nombres = $("#nombre_contacto").val();
	data.sexocontacto = $('input:radio[name=sexocontacto]:checked').val();
	data.edad_contacto = $("#edad_contacto").val();
	data.tipocontacto = $('input:radio[name=tipocontacto]:checked').val();
	data.email_contacto = $("#email_contacto").val();
	data.sintomascontacto = $('input:radio[name=sintomascontacto]:checked').val();
	data.observaciones_contacto = $("#observaciones_contacto").val();
	
	if(data.nombre_contacto == "" || data.sexocontacto=="" || data.edad_contacto =="" || data.tipocontacto == ""|| data.email_contacto == "" || data.sintomascontacto == "" || data.sintomascontacto == "")
	{
		alertinModal("Faltan algunos datos favor de validar.");
		return;
	}
	
	data.pk = param;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Contacto.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					actualizarTablaContacto();
				}
				else
				{
					alertinModal(obj.data);
				}
			}
		}
	})
			
}

function DelContacto()
{
	$("#alertQuestModal").modal("hide");
	var obj = vmBrwCiudades.arr2obj(rowSelected);
	var data={};
	data.pk = obj.sys_pk;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-del-Contacto.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					actualizarTablaContacto();
				}
				else
				{
					alertinModal(obj.data);
				}
			}
		}
	})
			
}







function CollapsesbyID(id)
{
	var nextID = id + 1;
	$('#collapse'+id).collapse('hide');
	
	
	if (id == 1)
	{
		Notificante(nextID);
	}
	else if(pkDocumento != undefined && id==2)
	{
		DatosGenerales(nextID);
	}
	else if(pkDocumento != undefined && id==3)
	{
		Antecedentes(nextID);
	}
	else if(pkDocumento != undefined && id==4)
	{
		DatosClinicos(nextID);
	}
	else if(pkDocumento != undefined && id==5)
	{
		UnidadMedica(nextID);
	}
	else if(pkDocumento != undefined && id==6)
	{
		Tratamiento(nextID);
	}
	else if(pkDocumento != undefined && id==7)
	{
		Laboratorio(nextID);
	}
	else if(pkDocumento != undefined && id==8)
	{
		Evolucion(nextID);
	}
	else if(pkDocumento != undefined && id==9)
	{
		Contactos(nextID);
	}
	else
	{
		alertinModal("Antes de seguir, debe de insertar un dato.");
		$('#collapse'+id).addClass("show");
	}
}

function DecollapsesbyID(id)
{
	var lastID = id -1;
	$('#collapse'+id).collapse('hide');
	$('#collapse'+lastID).addClass( "show" );
}

function Notificante(nextID)
{
		var data={};
		data.entidad = $("#entidad_notificante").val();
		data.jurisdiccion = $("#jurisdiccion_notificante").val();
		data.municipio = $("#municipio_notificante").val();
		data.unidadmedica = $("#nombre_unidad_medica_notificante").val();
		data.institucion = $("#institucion_notificante").val();
		data.clues = $("#clues_notificante").val();
			
		if (pkDocumento == undefined)
		{
			$.ajax(
			{
				type: 'post',
				url: 'https://devkron.com/covid19/services/svc-ins-Notificante.dkl',
				data: $.param(data),
				success: function(datos)
				{
					if(datos != null)
					{
						var obj = JSON.parse(datos);
						if(obj.success)
						{
							pkDocumento = obj.data;
							actualizarHeadCaso();
							console.log(pkDocumento);
							$('#collapse'+nextID).addClass("show");
						}
						else
						{
							$('#collapse'+(nextID-1)).addClass("show");
							alertinModal(obj.data);
						}
					}
				}
			})
		}
		else
		{
			data.pk=pkDocumento;
			$.ajax(
			{
				type: 'post',
				url: 'https://devkron.com/covid19/services/svc-upd-Notificante.dkl',
				data: $.param(data),
				success: function(datos)
				{
					if(datos != null)
					{
					var obj = JSON.parse(datos);
						if(obj.success)
						{
							$('#collapse'+nextID).addClass("show");
							console.log(obj.data);
						}
						else
						{
							$('#collapse'+(nextID-1)).addClass("show");
							alertinModal(obj.data);
						}
					}
				}
			})
		}
}

function DatosGenerales(nextID)
{
	var data={};
		data.fechaingreso = $("#fecha_ingreso_generales").val();
		data.primerapellido = $("#primer_apellido_generales").val();
		data.segundoapellido = $("#segundo_apellido_generales").val();
		data.nombres = $("#nombres_generales").val();
		data.fechanacimientodia = $("#dia_fecha_nacimiento").val();
		data.fechanacimientomes = $("#mes_fecha_nacimiento").val();
		data.fechanacimientoanio = $("#anio_fecha_nacimiento").val();
		data.fechanacimientoedad = $("#edad").val();
		data.curp = $("#curp").val();
		data.dia_fecha_nacimiento = $("#dia_fecha_nacimiento").val();
		data.sexo = $('input:radio[name=sexos]:checked').val();
		data.embarazo = $('input:radio[name=embarazada]:checked').val();
		data.mesembarazo = $("#meses_embarazo").val();
		data.puerperio = $('input:radio[name=puerperio]:checked').val();
		data.diaspuerperio = $("#dias_purperio").val();
		data.nacionalidad = $('input:radio[name=nacionalidad]:checked').val();
		data.paisorigen = $("#dg_paisorigen").val();
		data.numeroexpediente = $("#num_expediente_seguro_social").val();
		data.entidadnacimiento = $("#entidad_nacimiento").val();
		data.entidadresidencia = $("#entidad_delegacion_residencia").val();
		data.municipioresidencia = $("#municipio_residencia").val();
		data.localidad = $("#localidad").val();
		data.calle = $("#calle").val();
		data.numeroexterno = $("#num_externo").val();
		data.numerointerno = $("#num_interno").val();
		data.entrecalle1 = $("#entrecalle1").val();
		data.entrecalle2 = $("#entrecalle2").val();
		data.colonia = $("#colonia").val();
		data.codigopostal = $("#codigo_postal").val();
		data.telefono = $("#telefono").val();
		data.indigena = $('input:radio[name=indigena]:checked').val();
		data.lenguaindigena = $('input:radio[name=lenguaindigena]:checked').val();
		data.ocupacion = $("#ocupacion").val();
		data.migrante = $('input:radio[name=migrante]:checked').val();
		
		data.pk=pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Generales.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					console.log(pkDocumento);
					$('#collapse'+nextID).addClass("show");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function Antecedentes(nextID)
{
	var data={};
	data.viajetranslocalcom = $('input:radio[name=transmision]:checked').val();
	data.residentetranlocalcom = $('input:radio[name=residente]:checked').val();
	data.fechaviajetranslocalcom = $("#fecha_viaje").val();
	data.aerolineaviajetranslocalcom = $("#txtaerolinea").val();
	data.fechallegadaviajetranslocalcom = $("#fecha_llegada").val();
	data.contactopersonasintomas = $('input:radio[name=personasintomatologia]:checked').val();
	data.lugarcontactopersonasintomas = $("#lugar_contacto_combo").val();
	data.contactoanimales = $('input:radio[name=animales]:checked').val();
	data.contactoanimalescual = $('#cual_animal').val();
	data.tipocontactoanimales = $('#tipo_contacto_combo').val();
	data.visitamercadoanimales = $('input:radio[name=mercadoanimales]:checked').val();
	data.lugarmercadoanimales = $('#lugar_mercardo').val();
	data.fechamercadoanimales = $('#fecha_mercado').val();
	data.diascontactosospechoso = $('input:radio[name=sospecha]:checked').val();
	data.diascontactoconfirmado = $('input:radio[name=confirmada]:checked').val();
	data.diascontactoviajado = $('input:radio[name=contactotransmision]:checked').val();
	data.pk=pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Antecedentes.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					console.log(pkDocumento);
					$('#collapse'+nextID).addClass("show");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function DatosClinicos(nextID)
{
	var data={};
	data.dc_fechainiciosintomas = $('#fecha_inicio_sintomas').val();
	$('#chksintomas input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var value;
		if($(this).prop("checked") == true){
               value = 1;
            }
            else if($(this).prop("checked") == false){
               value = 0;
            }
		data[key] = value;
	});
	
	data.dc_otrossintomas = $('#dc_otrossintomas').val();
	data.dc_otraenfermedad = $('#dc_otraenfermedad').val();
	
	data.pk=pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Clinicos.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					console.log(pkDocumento);
					$('#collapse'+nextID).addClass("show");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function UnidadMedica(nextID)
{
	var data={};
	data.servicioingreso = $('#servicio_ingreso').val();
	data.tipopaciente = $('#tipo_paciente_combo').val();
	data.fechadeingresounidad = $('#fecha_ingreso_unidad').val();
	data.casoingresadouci = $('input:radio[name=uci]:checked').val();
	data.casointubado = $('input:radio[name=intubado]:checked').val();
	data.neumoniaclinica = $('input:radio[name=neumoniaclinica]:checked').val();
	data.neumoniaradiologica = $('input:radio[name=neumoniaradiologica]:checked').val();
	data.pk=pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-UnidadMedica.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					console.log(pkDocumento);
					$('#collapse'+nextID).addClass("show");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function Tratamiento(nextID)
{
	var data={};
	data.antipiretico = $('input:radio[name=antipiretico]:checked').val();
	data.fecha_inicio_tratamiento_analgesico = $('#fecha_inicio_tratamiento_analgesico').val();
	$('#chkantipiretico input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var value;
		if($(this).prop("checked") == true){
               value = 1;
            }
            else if($(this).prop("checked") == false){
               value = 0;
            }
		data[key] = value;
	});
	data.ap_otro = $('#ap_otro').val();
	
	data.antiviral = $('input:radio[name=antiviral]:checked').val();
	data.fecha_inicio_tratamiento_antiviral = $('#fecha_inicio_tratamiento_antiviral').val();
	$('#chkantiviral input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var value;
		if($(this).prop("checked") == true){
               value = 1;
            }
            else if($(this).prop("checked") == false){
               value = 0;
            }
		data[key] = value;
	});
	data.av_otro = $('#av_otro').val();
	
	data.antibiotico = $('input:radio[name=antibiotico]:checked').val();
	data.fecha_inicio_tratamiento_antibiotico = $('#fecha_inicio_tratamiento_antibiotico').val();
	$('#chkantibiotico input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var value;
		if($(this).prop("checked") == true){
               value = 1;
            }
            else if($(this).prop("checked") == false){
               value = 0;
            }
		data[key] = value;
	});
	data.ab_otro = $('#ab_otro').val();
	data.pk=pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Tratamiento.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					console.log(pkDocumento);
					$('#collapse'+nextID).addClass("show");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function Laboratorio(nextID)
{
	var data={};
	data.muestrapaciente = $('input:radio[name=muestrapaciente]:checked').val();
	data.laboratorio_diagnostico = $('#laboratorio_diagnostico').val();
	$('#tipomuestra input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var value;
		if($(this).prop("checked") == true){
               value = 1;
            }
            else if($(this).prop("checked") == false){
               value = 0;
            }
		data[key] = value;
	});
	
	data.fecha_toma_muestra = $('#fecha_toma_muestra').val();
	data.fecha_recepcion_muestra = $('#fecha_recepcion_muestra').val();
	data.fecha_envio_muestra = $('#fecha_envio_muestra').val();
	data.fecha_resultado_muestra = $('#fecha_resultado_muestra').val();
	data.resultado = $('#resultado').val();
	data.pk=pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Laboratorio.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					console.log(pkDocumento);
					$('#collapse'+nextID).addClass("show");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function Evolucion(nextID)
{
	var data={};
	
	data.evolucion_combo = $('#evolucion_combo').val();
	data.fecha_ingreso = $('#fecha_ingreso').val();
	data.fechadefuncion = $('#fechadefuncion').val();
	data.foliocerficiadodefuncion = $('#foliocerficiadodefuncion').val();
	
	$('#checkcovid19 input[type=checkbox]').each(function()
	{
		var key = $(this).val();
		var value;
		if($(this).prop("checked") == true){
               value = 1;
            }
            else if($(this).prop("checked") == false){
               value = 0;
            }
		data[key] = value;
	});

	data.pk=pkDocumento;
	
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Evolucion.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					console.log(pkDocumento);
					$('#collapse'+nextID).addClass("show");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function Contactos(nextID)
{
	var data={};
	
	data.nombre_elaboro = $('#nombre_elaboro').val();
	data.nombre_autorizo = $('#nombre_autorizo').val();
	data.contacto_elaboro = $('#contacto_elaboro').val();
	data.fecha_elaboro = $('#fecha_elaboro').val();
	
	data.pk=pkDocumento;
	$.ajax(
	{
		type: 'post',
		url: 'https://devkron.com/covid19/services/svc-upd-Contactos.dkl',
		data: $.param(data),
		success: function(datos)
		{
			if(datos != null)
			{
				var obj = JSON.parse(datos);
				if(obj.success)
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data, "Éxito");
				}
				else
				{
					$('#collapse'+(nextID-1)).addClass("show");
					alertinModal(obj.data);
				}
			}
		}
	})
}

function GetURLParameter(sParam)
  {
   var sPageURL = window.location.search.substring(1);
   var sURLVariables = sPageURL.split("&");
   for (var i = 0; i < sURLVariables.length; i++) 
   {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) 
    {
     return sParameterName[1];
    }
   }
  }