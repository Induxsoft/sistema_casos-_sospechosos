var Devkron =
{
    tokenData: null, //Variable auxiliar para SessionData
    sessionPrin: null, //Variable auxiliar para almacenar el id de sesión (Login)
    sessionSec: null, //Variable auxiliar para almacenar el id de sesión (LoginAlter)
    Post: function (URL, prms, success, fail) {
        $.ajax({
            type: "POST",
            url: URL,
            data: $.param(prms),
            success: success,
            error: function (obj, txt, err) { fail(txt); },
            dataType: "text"
        });

    },

    Login: function (url, app, database, userid, password, success, fail) {
        var p = { "user": userid, "pwd": password, "cmd": "connect" };

        this.Post
        (url + "?app=" + app + "&db=" + database, p,
            function (data) {
                try {
                    //alert(data);
                    var r = $.parseJSON(data);

                    if (!r.success)
                        throw r.data;

                    r = $.parseJSON(r.data);
                    r.ServiceProvider = url;
                    tokenData = r;
                    sessionPrin = tokenData.token;
                    success(r);
                }
                catch (e) {
                    fail(e);
                }
            },
            fail
        );
    },

    NewEntity: function (datasesion, nameEntity, success, fail) {
        var p = { "cmd": "new_entity", "typ": nameEntity, "idses": datasesion.token };
        var qname = datasesion.qname;
        var auxConn = qname.split("@");

        this.Post(datasesion.ServiceProvider + "?app=" + auxConn[1] + "&db=" + auxConn[0], p, function (data) {
            try {
                var r = $.parseJSON(data);
                if (!r.success)
                    throw r.data
                success($.parseJSON(r.data));
            }
            catch (e) {
                try {
                    var x = e;
                    var error = $.parseJSON(e)
                    console.log(error.Message);
                    cosole.log(e);
                }
                catch (e) {
                    console.log(x);
                    fail(x);
                }
            }
        }
        , fail);

    },
    SetField:function(data,fieldName, value) {
        
            if(data==undefined) throw new Error("No se ha definido el objeto entidad o se encuentra nulo");
            if(data==null) throw new Error("No se ha definido el objeto entidad o se encuentra nulo");
    
            switch("_"+fieldName)
            {
                case "_isdirty":
                    data._isdirty=value;
                    
                    return;
                case "_loadlevel":
                    data._loadlevel=value;
                    
                    return;
                case "_sys_deleted":
                    data._sys_deleted=value;
                   
                    return;
                case "_sys_dtcreated":
                    data._sys_dtcreated=value;
                   
                    return;
                case "_sys_guid":
                    data._sys_guid=value;
                    
                    return;
                case "_sys_lock":
                    data._sys_lock=value;
                    
                    return;
                case "_sys_pk":
                    data._sys_pk=value;
                    
                    return;
                case "_sys_recver":
                    data._sys_recver=value;
                    
                    return;
                case "_sys_timestamp":
                    data._sys_timestamp=value;
                    
                    return;
                case "_type":
                    data._type=value;
                    
                    return;
                case "_onlyread":
                    data._onlyread=value;
                    
                    return;
            }
    
            for(var i=0;i<data._field.length;i++)
            {
                if(fieldName==data._field[i]._name)
                {
                    data._field[i]._value=value;
                    data._field[i]._isdirty=true;
                    data._isdirty=true;
                    
                    return;
                }
            }
    
            for(var i=0;i<data._reference.length;i++)
                if(fieldName==data._reference[i]._name)
                {
                    data._reference[i]._keyvalue=value;
                    data._reference[i]._isdirty=true;
                    data._reference[i]._entity._isdirty=false;
                    data._reference[i]._entity._sys_pk=value;
                    data._isdirty=true;
                    
                    return;
                }
            throw new Error("El campo '"+fieldName+"' no existe en la colección de campos relacionada a la entidad");
    },
    GetField: function (data, fieldName) {
        try{
            if(data==undefined) throw new Error( "No se ha definido el objeto entidad o se encuentra nulo");
            if(data==null) throw new Error("No se ha definido el objeto entidad o se encuentra nulo");
            
            switch("_"+fieldName)
            {
                case "_isdirty":
                    return String(data._isdirty).toLowerCase().trim()=="true";
                case "_loadlevel":
                    return data._loadlevel;
                case "_sys_deleted":
                    return String(data._sys_deleted).toLowerCase().trim()=="true";
                case "_sys_dtcreated":
                    return data._sys_dtcreated;
                case "_sys_guid":
                    return data._sys_guid;
                case "_sys_lock":
                    return data._sys_lock;
                case "_sys_pk":
                    return data._sys_pk;
                case "_sys_recver":
                    return data._sys_recver;
                case "_sys_timestamp":
                    return data._sys_timestamp;
                case "_type":
                    return data._type;
                case "_onlyread":
                    return data._onlyread;
            }
    
            for(var i=0;i<data._field.length;i++)
            {
                if(fieldName==data._field[i]._name)
                {
                    var x=data._field[i]._value;
                    var y=String(x).toLowerCase().trim();
                    if(y=="false") return false;
                    if(y=="true") return true;
                    return x;
                }
            }
    
            for(var i=0;i<data._reference.length;i++)
                if(fieldName==data._reference[i]._name)
                {
                    return  Number(data._reference[i]._keyvalue);
                }
    
            throw new Error("El campo '"+fieldName+"' no existe en la colección de campos relacionada a la entidad");
        }
        catch (e) { fail(e); }
        
    },
    DelEntity: function (datasesion, entityName, pkey, physical, success, fail) {

        var p = { "cmd": "del_entity", "idses": datasesion.token, "typ": entityName, "pk": pkey.toString(), "delfis": physical };
        var qname = datasesion.qname;
        var auxConn = qname.split("@");

        this.Post(datasesion.ServiceProvider + "?app=" + auxConn[1] + "&db=" + auxConn[0], p, function (data) {
            try {
                var r = $.parseJSON(data);
                if (!r.success)
                    throw r.data
                success(r.data);
            }
            catch (e) {
                try {
                    var x = e;
                    var error = $.parseJSON(e)
                    console.log(error.Message);
                    cosole.log(e);
                }
                catch (e) {
                    console.log(x);
                    fail(x);
                }
            }
        }
        , fail);
    },

    GetEntity: function (datasesion, entityName, searchKey, success, fail) {

        var p = { "cmd": "get_entity", "exp": searchKey, "typ": entityName, "idses": datasesion.token, "loadLevel": "Level1" };

        var qname = datasesion.qname;
        var auxConn = qname.split("@");

        this.Post(datasesion.ServiceProvider + "?app=" + auxConn[1] + "&db=" + auxConn[0], p, function (data) {
            try {
                var r = $.parseJSON(data);
                if (!r.success)
                    throw r.data
                success(JSON.parse(r.data));
            }
            catch (e) {
                try {
                    var x = e;
                    var error = $.parseJSON(e)
                    console.log(error.Message);
                    cosole.log(e);
                }
                catch (e) {
                    console.log(x);
                    fail(x);
                }
            }
        }
        , fail);

    },

    SaveEntity: function (datasesion, objEntity, success, fail) {

        var p = { "cmd": "put_entity", "idses": datasesion.token, "entity": JSON.stringify(objEntity), "typ": objEntity._type };
        var qname = datasesion.qname;
        var auxConn = qname.split("@");

        this.Post(datasesion.ServiceProvider + "?app=" + auxConn[1] + "&db=" + auxConn[0], p, function (data) {
            try {
                var r = $.parseJSON(data);
                if (!r.success)
                    throw r.data
                success(JSON.parse(r.data));
            }
            catch (e) {
                try {
                    var x = e;
                    var error = $.parseJSON(e)
                    console.log(error.Message);
                    cosole.log(e);
                }
                catch (e) {
                    console.log(x);
                    fail(x);
                }
            }
        }
        , fail);

    },


    Call: function (datasesion, servicename, params, success, fail) {
        var p = { "cmd": "put_action", "act": servicename, "idses": datasesion.token, "params": params };
        var qname = datasesion.qname;
        var auxConn = qname.split("@");
        this.Post(datasesion.ServiceProvider + "?app=" + auxConn[1] + "&db=" + auxConn[0], p, function (data) {
            try {
                var r = $.parseJSON(data);
                if (!r.success)
                    throw r.data
                success($.parseJSON(r.data));
            }
            catch (e) {
                try {
                    var x = e;
                    var error = $.parseJSON(e)
                    console.log(error.Message);
                    cosole.log(e);
                }
                catch (e) {
                    console.log(x);
                    fail(x);
                }
            }
        }
        , fail);
    },

    parseTable: function (obj) {
        try {
            var o = $.parseJSON(obj.Data);
            var table = {
                columns: [],
                schema: o.$schema,
                data: o.Table
            };
            for (var i = 1; i < table.schema.Info.length; i++) {
                table.columns.push(table.schema.Info[i]);
                i = i + 2;
            };
            return table;
        }
        catch (e) {
            console.log(e);
        }
    },

    Logout: function (datases, success, fail) {
        var qname = datases.qname;
        var auxConn = qname.split("@");
        var p = { "cmd": "disconnect", "idses": datases.token };
        this.Post
        (datases.ServiceProvider + "?app=" + auxConn[1] + "&db=" + auxConn[0], p, function (s) {
            try {
                var Result = $.parseJSON(s);
                if (!Result.success)
                    throw Result.data;
                    success(Result.data);
            }
            catch (e) {
                try {
                    var x = e;
                    var error = $.parseJSON(e)
                    console.log(error.Message);
                }
                catch (e) {
                    console.log(x);
                }
            }
        },
        fail
        );
    },


    pull_file: function (datasesion, guid, success, fail) {
        var qname = datasesion.qname;
        var auxConn = qname.split("@");

        var p = { "cmd": "pull_file", "idses": datasesion.token, "id_file": guid + ".idgroup", "id_group": "idgroup", "inout": "false", "attributes": null, "storage": datasesion.folderupload };
        this.Post(datasesion.ServiceProvider + "?app=" + auxConn[1] + "&db=" + auxConn[0], p, function (data) {
            try {
                var r = $.parseJSON(data);
                if (!r.success)
                    throw r.data
                console.log(r.data);
            }
            catch (e) {
                try {
                    var x = e;
                    var error = $.parseJSON(e)
                    console.log(error.Message);
                }
                catch (e) {
                    console.log(x);
                }
            }
        }
        , fail);
    },

    uploadFile: function (_datasesion, guid, _file, success, fail) {
        try {
			$("#pb_guidarchivo_solicitudes").width(0 + '%');
            var datasesion = _datasesion;
            var file = _file;
            var fd = new FormData();
            var xhr = new XMLHttpRequest();

            xhr.upload.addEventListener('progress', onprogressHandler, false);
            //xhr.open('POST', urlUpload , true);
            xhr.open('POST', datasesion.serverupload, true);
			
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.setRequestHeader("X-File-Name", file.name);
            var fixed = btoa(datasesion.qname);
            try {
                fd.append("upload", encodeURIComponent(datasesion.folderupload));
				console.log(encodeURIComponent(datasesion.folderupload));
                fd.append("id", guid);
                fd.append("session", datasesion.token);
                fd.append("qname", datasesion.qname);
                fd.append("file", file);

                xhr.send(fd);
            }
            catch (e) {
                console.log(e);
            }

            Devkron.idfile = guid;
            function onprogressHandler(evt) {
                var percent = evt.loaded / evt.total * 100;
                // console.log('Upload progress: ' + percent + '%');
				
				$("#pb_guidarchivo_solicitudes").width(percent + '%');
				
				
				
				if (percent == 100)
				{
					Devkron.pull_file(datasesion, guid, null, null);
					$("#guidarchivo_solicitudes").val(guid);
					
				}
				
            }
        }
        catch (e) {
            console.log(e);
        }


    },

    downloadFile: function (_datasesion, idfile, extension, success, fail) {

        try {
            if (idfile == "null") {
                console.log("No se encuentra el archivo a descargar");
            }
            else {
                var datasesion = _datasesion;
                var storage = datasesion.folderdownload;
                var urlDownload = datasesion.serverdownload;
                var url = datasesion.serverdownload + "?id=" + idfile + "." + extension + "&storage=" + encodeURIComponent(datasesion.folderdownload) + "&qname=" + datasesion.qname + "&session=" + datasesion.token + "&inout=false";
                console.log(url);
                //window.open(url, "_self", "location=1,status=1,scrollbars=1");
                window.location.href = url;
            }
        }
        catch (e) {
            console.log("No se encuentra el archivo a descargar");
        }

    },

    getSession: function (idsession, url, app, db, success, fail) {
        var p = { "idses": idsession, "cmd": "get_session" };

        this.Post
        (url + "?app=" + app + "&db=" + db, p,
            function (data) {
                try {
                    var r = $.parseJSON(data);

                    if (!r.success)
                        throw r.data;

                    r = $.parseJSON(r.data);
                    r.ServiceProvider = url;
                    tokenData = r;
                    console.log(r);
                    success(r);

                }
                catch (e) {
                    fail(e);
                }
            },
            fail
        );
    }


};

