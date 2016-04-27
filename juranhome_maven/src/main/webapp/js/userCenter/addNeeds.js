// Release requirements form validation 发布需求验证
	 $(function(){
		 
        var ok1=false;
        var ok2=false;
        var ok3=false;
        var ok4=false;
        var ok5=false;
        var ok6=false;
        var ok7=false;
        var ok8=false;
        var ok9=false;
        var ok10=false;
        var ok11=false;
        var ok12=false;
        var ok13=false;
        var ok14=false;
        var ok15=false;
        var ok16=false;


        //电话
        $('input[name="phone"]').focus(function(){
            $(this).next().text('请输入手机号码').removeClass('state1').removeClass('state3 state4').addClass('state2');
            $(this).attr('style','border: 1px #ddd solid');
        }).blur(function(){	
            var pattern = /^1[34578]\d{9}$/;
            if(pattern.test($(this).val())){
                $(this).next().text('输入成功').removeClass('state1').removeClass('state3').addClass('state4');
                ok1=true;
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok1=false;
                $(this).next().text('格式错误').removeClass('state1').removeClass("state4").addClass('state3');
                $(this).attr('style','border: 1px red solid');
            }
        
        });

        //房屋类型
        $('select[name="dd"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 0){
                ok2=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok2=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择房屋类型').removeClass('state1 state4').addClass('state3');
            }
        
        });
        
        //房屋面积
        $('#h_mesure').focus(function(){
        	$(this).next().text('输入整数不大于6位，小数不大于2位的数字').removeClass('state1').removeClass('state3 state4').addClass('state2');
            $(this).attr('style','border: 1px #ddd solid');
        }).blur(function(){
        	var rf_reg= /^\d{0,6}$|^\d{0,6}\.\d{1,2}$/;
            if($(this).val()> 0 && $(this).val().length <=20 && $(this).val()!=''){
            	if(!rf_reg.test($(this).val())){
            		ok3=false;
                    $('#h_mesure').next().text('输入整数不大于6位，小数不大于2位的数字').removeClass('state1').removeClass("state4").addClass('state3');
                    $('#h_mesure').attr('style','border: 1px red solid');
            	}else{
            		$(this).next().text('输入成功').removeClass('state1').addClass('state4');
            		ok3=true;
            		$(this).attr('style','border: 1px #ddd solid');
            	}
            }else{
            	ok3=false;
                $(this).next().text('输入整数不大于6位，小数不大于2位的数字').removeClass('state1').addClass('state3');
                $(this).attr('style','border: 1px red solid');
            }
        });

        //设计预算
        $('select[name="design_budget"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 0){
                ok4=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok4=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择设计预算').removeClass('state1 state4').addClass('state3');
            }
        
        }); 
        
      //装修预算
        $('select[name="Decoratebudget"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 0){
                ok5=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok5=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择装修预算').removeClass('state1 state4').addClass('state3');
            }
        
        });
        
        //风格
        $('select[name="renovationStylereq"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 0){
                ok6=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok6=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择装修风格').removeClass('state1 state4').addClass('state3');
            }
        
        });

        //项目地址1
        $('select[name="s_province"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 1){
                ok7=true;
                ok8=false;
                ok9=false;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
                $('#seachcity').next().text('').removeClass('state3 state4').addClass('state1');
                $('#seachcity').attr('style','border: 1px #ddd solid');
                $('#seachdistrict').next().text('').removeClass('state3 state4').addClass('state1');
                $('#seachdistrict').attr('style','border: 1px #ddd solid');
            }else{
            	ok7=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择省').removeClass('state1 state4').addClass('state3');
            }
        });

        //项目地址2
        $('select[name="s_city"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 1){
                ok8=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok8=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择市').removeClass('state1 state4').addClass('state3');
            }
        
        });

        //项目地址3
        $('select[name="s_county"]').focus(function(){
        }).blur(function(){	
        	var districtCount=document.getElementById("seachdistrict").options.length;
        	if(districtCount>1){
	            if($(this).val().length > 1){
	                ok9=true;
	                $(this).next().text('').removeClass('state1').addClass('state4');
	                $(this).attr('style','border: 1px #ddd solid');
	            }else{
	            	ok9=false;
	                $(this).attr('style','border: 1px red solid');
	                $(this).next().text('请选择区').removeClass('state1 state4').addClass('state3');
	            }
            }else{
            	ok9=true;
            }
        });
        
        
        //小区名称校验
        $('input[name="house-name"]').focus(function(){
        	$(this).next().text('请输入字数在2-32位之间.').removeClass('state1').removeClass('state3 state4').addClass('state2');
            $(this).attr('style','border: 1px #ddd solid');
        }).blur(function(){
            if($(this).val().length >= 2 && $(this).val().length <=32 && $(this).val()!=''){
                $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                ok10=true;
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok10=false;
                $(this).next().text('请输入字数在2-32位之间').removeClass('state1').removeClass("state4").addClass('state3');
                $(this).attr('style','border: 1px red solid');
            }
        });

        //戶型1
        $('select[name="type_lv_room"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 0){
                ok11=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok11=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择户型').removeClass('state1 state4').addClass('state3');
            }
        
        });

        //戶型2
        $('select[name="type_room"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 0){
                ok12=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok12=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择户型').removeClass('state1 state4').addClass('state3');
            }
        
        });

        //戶型3
        $('select[name="type_rst_room"]').focus(function(){
        }).blur(function(){	
            if($(this).val().length > 0){
                ok13=true;
                $(this).next().text('').removeClass('state1').addClass('state4');
                $(this).attr('style','border: 1px #ddd solid');
            }else{
            	ok13=false;
                $(this).attr('style','border: 1px red solid');
                $(this).next().text('请选择户型').removeClass('state1 state4').addClass('state3');
            }
        
        });
          
   

//        //装修地址
//        $('div[name="select-name"]').blur(function(){
//            /!*if($(this).find('option').text('省份'||'地级市'||'县级市')){*!/
//            if($(this).find('select').text()!=$(this).find('option').eq(0).text()){
//                ok14=true;
//                $(this).attr('style','border: 1px #ddd solid');
//            }else{
//                $(this).attr('style','border: 1px red solid');
//            }
//            var text = $('select option:selected').text();
//
//
//            if( text=='省'||'市'||'区'||'室'||'厅'||'卫'||'选择风格'||'请选择'){
//                return false ;
//            }else{
//                ok15=true;//不写此返回值也行，此时就直接提交了
//            }
//
//        });

        //提交按钮,所有验证通过方可提交
        $('.button').click(function(){
        	var districtCount=document.getElementById("seachdistrict").options.length;
        	if(districtCount<=1)
        	{
        		ok9 = true;
        	}
        	else
        	{
        		ok9 = $('#seachdistrict').val()> 0;
        	}
            if(ok1 && ok2 && ok3 &&  ok4 && ok5 && ok6 && ok7 && ok8 && ok9 && ok10 && ok11 && ok12 && ok13){
            }else{
        		if(ok1==false){
        			if($('#phone').val().length == 0){
            		$('#phone').next().text('请输入手机号码').removeClass('state1').addClass('state3');
            		$('#phone').attr('style','border: 1px red solid');
            		return false;
        			}
        			else
        			{
        				ok1=true;
        			}
            	}
            	if(ok2==false){
            		$('#dd').next().text('请选择房屋类型').removeClass('state1').addClass('state3');
        			$('#dd').attr('style','border: 1px red solid');
        			return false;
            	}
            	if(ok3==false){
            		$('#h_mesure').next().text('请填写房屋面积').removeClass('state1').addClass('state3');
            		$('#h_mesure').attr('style','border: 1px red solid');
        			return false;
            	}
        		if(ok4==false){
        			$('#design_budget').next().text('请选择设计预算').removeClass('state1').addClass('state3');
        			$('#design_budget').attr('style','border: 1px red solid');
        			return false;
            	}
        		
        		if(ok5==false){
        			$('#decoration_budget').next().text('请选择装修预算').removeClass('state1').addClass('state3');
        			$('#decoration_budget').attr('style','border: 1px red solid');
        			return false;
            	}
        		if(ok6==false){
        			$('#renovationStylereq').next().text('请选择装修风格').removeClass('state1').addClass('state3');
        			$('#renovationStylereq').attr('style','border: 1px red solid');
        			return false;
            	}
        		if(ok7==false){
        			$('#seachprov').next().text('请选择装修地址').removeClass('state1').addClass('state3');
        			$('#seachprov').attr('style','border: 1px red solid');
        			return false;
            	}
        		if(ok8==false){
        			$('#seachcity').next().text('请选择').removeClass('state1').addClass('state3');
        			$('#seachcity').attr('style','border: 1px red solid');
        			return false;
            	}
        		
	        		if(ok9==false){
	        			$('#seachdistrict').next().text('请选择').removeClass('state1').addClass('state3');
	        			$('#seachdistrict').attr('style','border: 1px red solid');
	        			return false;
	            	}
        		
        		if(ok10==false){
        			$('#house-name').next().text('请填写小区名称').removeClass('state1').addClass('state3');
        			$('#house-name').attr('style','border: 1px red solid');
        			return false;
            	}
        		if(ok11==false){
        			$('#room').next().text('请选择户型').removeClass('state1').addClass('state3');
        			$('#room').attr('style','border: 1px red solid');
        			return false;
            	}
        		if(ok12==false){
        			$('#livingroomCountreq').next().text('请选择户型').removeClass('state1').addClass('state3');
        			$('#livingroomCountreq').attr('style','border: 1px red solid');
        			return false;
            	}
        		if(ok13==false){
        			$('#bathroomCountreq').next().text('请选择户型').removeClass('state1').addClass('state3');
        			$('#bathroomCountreq').attr('style','border: 1px red solid');
        			return false;
            	}
                return false;
            }
            
        });

    });
	 

	//普通js function 
	function ValidateNumber(e, pnumber)
	{
	    if (!/^\d+$/.test(pnumber))
	    {
	        var newValue =/^\d+/.exec(e.value);         
	        if (newValue != null)         
	        {             
	            e.value = newValue;        
	        }      
	        else     
	        {          
	            e.value = "";    
	        } 
	    }
	    return false;
	}
	function ValidateFloat(e, pnumber)
	{
	if (!/^\d+[.]?\d*$/.test(pnumber))
	{
	    var newValue = /^\d+[.]?\d*/.exec(e.value);         
	    if (newValue != null)         
	    {             
	        e.value = newValue;        
	    }      
	    else     
	    {          
	        e.value = "";    
	    } 
	}
	return false;
	}
	// only string & int
	function ValidateString(e, string)
	{
		if (!/^[A-Za-z0-9\u4e00-\u9fa5]+$/.test(string))
		{
		    var newValue = /^[A-Za-z0-9\u4e00-\u9fa5]+/.exec(e.value);
		    
		    if (newValue != null)         
		    {             
		        e.value = newValue;        
		    }      
		    else     
		    {          
		        e.value = "";    
		    } 
		}
		return false;
	}
	 