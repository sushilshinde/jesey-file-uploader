	Ext.onReady(function () {
		
		var msg = function(title, msg) {
	        Ext.Msg.show({
	            title: title,
	            msg: msg,
	            minWidth: 200,
	            modal: true,
	            icon: Ext.Msg.INFO,
	            buttons: Ext.Msg.OK
	        });
	    };

		
		
		 Ext.create('Ext.form.Panel', {
		        renderTo: 'win',
		        width: 500,
		        frame: true,
		        title: 'Upload error test',
		        bodyPadding: '10 10 0',

		        defaults: {
		            anchor: '100%',
		            allowBlank: false,
		            msgTarget: 'side',
		            labelWidth: 70
		        },

		        items: [{
		            xtype: 'textfield',
		            fieldLabel: 'Name'
		        },{
		            xtype: 'filefield',
		            id: 'form-file-fail',
		            emptyText: 'Select an image',
		            fieldLabel: 'Photo',
		            name: 'file',
		            buttonText: '',
		            buttonConfig: {
		                iconCls: 'upload-icon'
		            }
		        }, {
		            xtype: 'numberfield',
		            fieldLabel: 'HTTP status',
		            value: 200,
		            minValue: 200,
		            maxValue: 599,
		            allowBlank: false,
		            name: 'returnResponse'
		        }],

		        buttons: [{
		            text: 'Save',
		            handler: function(){
		                var form = this.up('form').getForm();
		                if(form.isValid()){
		                    form.submit({
		                        //url: 'upload',
		                    	url:'webapi/file/upload',
		                        waitMsg: 'Uploading your photo...',
		                        success: function(fp, o) {
		                        	console.log(fp,o);
		                            msg('Success', 'Processed file "' + o.result.file + '" on the server');
		                        },
		                        failure: function() {
		                            Ext.Msg.alert("Error", Ext.JSON.decode(this.response.responseText).message);
		                        }
		                    });
		                }
		            }
		        },{
		            text: 'Reset',
		            handler: function() {
		                this.up('form').getForm().reset();
		            }
		        }]
		    });
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});

