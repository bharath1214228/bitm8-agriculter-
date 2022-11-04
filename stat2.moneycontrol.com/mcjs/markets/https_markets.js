var IE = document.all?true:false;

function topnewstab(passtab)
{
	
	var tabhtmlfiles = new Array("", "tabbedtopnews_1.html", "tabbedtopnews_2.html", "tabbedtopnews_3.html", "tabbedtopnews_4.html", "tabbedtopnews_5.html");

	if(passtab==1)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/tabbedtopnews_1.html" );
	else if(passtab==2)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/tabbedtopnews_2.html" );
	else if(passtab==3)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/tabbedtopnews_3.html" );
	else if(passtab==4)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/tabbedtopnews_4.html" );
	else(passtab==5)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/tabbedtopnews_5.html" );

	for (tabcnt=1; tabcnt<=5; tabcnt++)
		{
			if(passtab==tabcnt)
				document.getElementById("toptab_"+tabcnt).className='on';			
			else
			{
				
				document.getElementById("toptab_"+tabcnt).className='';			
			}
		}	

			
			$('#topnews').fadeOut(1);
			$('#topnews').html("<div style='margin:50px 180px 50px 180px;'><img src='../../../../../img-d03.moneycontrol.co.in/images/markets_new_loader.gif' ></div>");	
			
//			$('#topnews').load('/mccode/markets/mkt_elements/tabbedtopnews_'+passtab+'.html ', '', function(data) 
	
			$('#topnews').load('/mccode/markets/mkt_elements/'+tabhtmlfiles[passtab], '', function(data) 
				{					
					//$('#topnews').fadeOut(1);
					$('#topnews').fadeIn(1000);
				});
}
				
/////////////

function updowntab(udtab)
{	
	for (tabcnt=1; tabcnt<=3; tabcnt++)
	{
		if(udtab==tabcnt)
		{
			if(document.getElementById("updowntab_"+tabcnt).className=='FL plus')
			{
				document.getElementById("updowntab_"+tabcnt).className='FL minus';	
				document.getElementById("updowndiv_"+tabcnt).className='PT5';
				$("#updowndiv_"+tabcnt).slideUp(1);
				$("#updowndiv_"+tabcnt).slideDown(500);
			}
			else
			{
				document.getElementById("updowntab_"+tabcnt).className='FL plus';
				$("#updowndiv_"+tabcnt).slideUp(500);
				document.getElementById("updowndiv_"+tabcnt).className='PT5 dnone';
			}
		}
		/*
		else
		{
			document.getElementById("updowntab_"+tabcnt).className='FL plus';
			$("#updowndiv_"+tabcnt).slideUp(500);
			document.getElementById("updowndiv_"+tabcnt).className='PT5 dnone';
		}
		*/
	}
}

function updowntools(udtool)
{	
	for (toolcnt=1; toolcnt<=5; toolcnt++)
	{
		if(udtool==toolcnt)
		{
			if(document.getElementById("updowntools_"+toolcnt).className=='plus2')
			{
				document.getElementById("updowntools_"+toolcnt).className='minus2';	
				document.getElementById("updowntooldiv_"+toolcnt).className='boxBg2';
				$("#updowntooldiv_"+toolcnt).slideUp(1);
				$("#updowntooldiv_"+toolcnt).slideDown(500);
				urchinTracker("/mccode/markets/mkt_elements/"+toolcnt);
			}
			else
			{
				document.getElementById("updowntools_"+toolcnt).className='plus2';
				$("#updowntooldiv_"+toolcnt).slideUp(500);
				document.getElementById("updowntooldiv_"+toolcnt).className='boxBg2 dnone';
			}
		}
		else
		{
			document.getElementById("updowntools_"+toolcnt).className='plus2';
			$("#updowntooldiv_"+toolcnt).slideUp(500);
			document.getElementById("updowntooldiv_"+toolcnt).className='boxBg2 dnone';
		}
	}
}

function mktroundtool(mkttool)
{	
	for (mktcnt=1; mktcnt<=4; mktcnt++)
	{
		if(mkttool==mktcnt)
		{
			if(document.getElementById("mktround_"+mktcnt).className=='off')
			{
				document.getElementById("mktround_"+mktcnt).className='on';	
				document.getElementById("mktrounddiv_"+mktcnt).className='table2';
				$("#mktrounddiv_"+mktcnt).slideUp(1);
				$("#mktrounddiv_"+mktcnt).slideDown(500);
			}
			else
			{
				document.getElementById("mktround_"+mktcnt).className='off';
				$("#mktrounddiv_"+mktcnt).slideUp(500);
				document.getElementById("mktrounddiv_"+mktcnt).className='table2 dnone';
			}
		}
		else
		{
			document.getElementById("mktround_"+mktcnt).className='off';
			$("#mktrounddiv_"+mktcnt).slideUp(500);
			document.getElementById("mktrounddiv_"+mktcnt).className='table2 dnone';
		}
	}
}

function bsensetool(bntool)
{	
	for (bncnt=1; bncnt<=2; bncnt++)
	{
		if(bntool==bncnt)
		{
			if(document.getElementById("bsense_"+bncnt).className=='plus')
			{
				document.getElementById("bsense_"+bncnt).className='minus';	
				document.getElementById("bsensediv_"+bncnt).className='table2';
				$("#bsensediv_"+bncnt).slideUp(1);
				$("#bsensediv_"+bncnt).slideDown(500);
			}
			else
			{
				document.getElementById("bsense_"+bncnt).className='plus';
				$("#bsensediv_"+bncnt).slideUp(500);
				document.getElementById("bsensediv_"+bncnt).className='table2 dnone';
			}
		}
		else
		{
			document.getElementById("bsense_"+bncnt).className='plus';
			$("#bsensediv_"+bncnt).slideUp(500);
			document.getElementById("bsensediv_"+bncnt).className='table2 dnone';
		}
	}
}


///////////////


function today_highlights(todaytab)
{
	
	if(todaytab==1)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/today_highlights_1.html" );
	else if(todaytab==2)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/today_highlights_2.html" );
	else if(todaytab==3)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/today_highlights_3.html" );
	else if(todaytab==4)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/today_highlights_4.html" );
	
	var tabhtmlfiles1 = new Array("", "today_highlights_1.html", "today_highlights_2.html", "today_highlights_3.html", "today_highlights_4.html");
	for (tabcnt=1; tabcnt<=4; tabcnt++)
		{
			if(todaytab==tabcnt)
				document.getElementById("highlights_tab_"+tabcnt).className='on';			
			else
				document.getElementById("highlights_tab_"+tabcnt).className='';			
		}	

			$('#today_highlights').fadeOut(1);

			$('#today_highlights').html("<div style='margin:100px 180px 100px 180px;'><img src='../../../../../img-d03.moneycontrol.co.in/images/markets_new_loader.gif' ></div>");
	
			$('#today_highlights').load('/mccode/markets/mkt_elements/'+tabhtmlfiles1[todaytab], '', function(data) 
				{					
					//$('#topnews').fadeOut(1);
					$('#today_highlights').fadeIn(1000);
				});
}
				
/////////////

function corporate_notices(noticestab)
{

	if(noticestab==1)
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/corporate_notices_bse.html" );
	else
		urchinTracker("https://www.moneycontrol.com/mccode/markets/mkt_elements/corporate_notices_nse.html" );

var noticehtml = new Array("", "corporate_notices_bse.html", "corporate_notices_nse.html");

	for (tabcnt=1; tabcnt<=2; tabcnt++)
		{
			if(noticestab==tabcnt)
				document.getElementById("corp_notices_tab"+tabcnt).className='on';			
			else
				document.getElementById("corp_notices_tab"+tabcnt).className='';			
		}	

			$('#corporate_notices').fadeOut(1);

			$('#corporate_notices').html("<div style='margin:60px 180px 60px 180px;'><img src='../../../../../img-d03.moneycontrol.co.in/images/markets_new_loader.gif' ></div>");
	
			$('#corporate_notices').load('/mccode/markets/mkt_elements/'+noticehtml[noticestab], '', function(data) 
				{					
					//$('#topnews').fadeOut(1);
					$('#corporate_notices').fadeIn(1000);
				});

}

//////////////////////// Search Functions
var ValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//// Top Stocks
function stock_search_frm_top()
{	
	var search_stk_top = LTrim(RTrim(document.stock_search_top.search_stk_top.value));
	
	
	if(search_stk_top.length < 1)
		{
			alert("Please enter minimum 1 character for search");
			return false;
		}

	document.stock_search_top.action = "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?fname=price&amp;companyname="+(document.stock_search_top.search_stk_top.value).replace(/&/,"%26");
	return true;
}


//// Stocks
function stock_search_frm()
{	
	var search_stk = LTrim(RTrim(document.stock_search.search_stk.value));
	
	
	if(search_stk.length < 1)
		{
			alert("Please enter minimum 1 character for search");
			return false;
		}

	document.stock_search.action = "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?fname=price&amp;companyname="+(document.stock_search.search_stk.value).replace(/&/,"%26");
	return true;
}


//// Views
function stockadvice_frm()
{
	var search_views = LTrim(RTrim(document.stockadvice.search_views.value));	
	
	if(search_views.length < 3)
		{
			alert("Please enter minimum 3 characters for search");
			return false;
		}

	document.stockadvice.action = "https://www.moneycontrol.com/mccode/news/searchresult.php?expert=1&amp;search_str="+(document.stockadvice.search_views.value).replace(/&/,"%26");
	return true;	
}

//// MF search 1
function mf_frm_1_submit()
{
	var f_compname = LTrim(RTrim(document.mf_frm_1.f_compname.value));	
	
	if(f_compname.length < 3)
		{
			alert("Please enter minimum 3 characters for search");
			return false;
		}	
}

//// MF search 1
function mf_frm_2_submit()
{
	var sel_sector = LTrim(RTrim(document.mf_frm_2.sel_sector.value));	
	
	if(sel_sector.length < 1)
		{
			alert("Please select a sector");
			return false;
		}	
}
// Removes leading whitespaces
function LTrim( value ) {
	
	var re = /\s*((\S+\s*)*)/;
	return value.replace(re, "$1");
	
}

// Removes ending whitespaces
function RTrim( value ) {
	
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");
	
}

///////// Search Functions End

///////////////////////////////////////   Stock Screener


function post_hpstkscreener()
{
	var sel_sector = document.getElementById("sel_code").value;
	var sel_criteria = document.getElementById("screen_crit").value;
	if(sel_sector == "")
	{
		alert("Please select a sector to screen");
		document.getElementById("sel_code").focus();
		return false;
	}

	if(sel_criteria == "")
	{
		alert("Please select a criteria to screen companies on");
		document.getElementById("screen_crit").focus();
		return false;
	}

	if(sel_criteria == "pe" || sel_criteria == "cashpe")
	{
		sector = sel_sector;	// -1;
		if(sel_criteria == "pe")
			document.getElementById("mktinfo_scr_frm").action = "https://www.moneycontrol.com/stocks/marketinfo/pe/bse/index.php?indcode="+sector+"&sortcode=0";
		else
			document.getElementById("mktinfo_scr_frm").action = "https://www.moneycontrol.com/stocks/marketinfo/pe/bse/index.php?indcode="+sector+"&sortcode=2";

		document.getElementById("indcode").value = sector;
		document.getElementById("optex").value = "BSE";

	}
	else if(sel_criteria == "marketcap" || sel_criteria == "netsales" || sel_criteria == "netprofit" || sel_criteria == "totassets")
	{
		var sel_sector = document.getElementById("sel_code").options[document.getElementById("sel_code").options.selectedIndex].text;
		document.getElementById("mktinfo_scr_frm").action = "https://www.moneycontrol.com/stocks/marketinfo/"+sel_criteria+".php?indcode="+sel_sector+"&optex=BSE";
		document.getElementById("indcode").value = sel_sector;
		document.getElementById("optex").value = "BSE";

	}
	else if(sel_criteria == "qtrgrowth")
	{
		sector = sel_sector - 1;
		document.getElementById("mktinfo_scr_frm").action = "https://www.moneycontrol.com/stocks/marketinfo/"+sel_criteria+"/index.php?indcode="+sector+"&call_option=N";
		document.getElementById("indcode").value = sel_sector;
		document.getElementById("call_option").value = "N";
	}
	else
	{
		document.getElementById("mktinfo_scr_frm").action = "https://www.moneycontrol.com/stocks/marketinfo/"+sel_criteria+"/bse/index.php?indcode="+sel_sector;
		document.getElementById("indcode").value = sel_sector;
	}

	document.getElementById("mktinfo_scr_frm").submit();
	return false;
}
////////////////  SENSEX Values:


function sensex_markets_auto()
{

   var rn_cach = new Date().getTime() + Math.floor(Math.random() * (324-102)) + 340;
   $.getJSON("https://www.moneycontrol.com/sensex_nifty/current_tick.php?f_domain=cross&amp;format=json&amp;_="+rn_cach,function(data){	
   
		if(data[0].BValue.length > 2 && data[1].NValue.length > 2)
		{			
			var currentcloseprice_nse = parseFloat(data[1].NValue);
			currentcloseprice_nse = currentcloseprice_nse.toFixed(2);
			var change_nse = parseFloat(data[1].Nchg);
			change_nse = change_nse.toFixed(2);

			var pchange_nse = parseFloat(data[1].Npchg);
			pchange_nse = pchange_nse.toFixed(2);

			var currentcloseprice_bse = parseFloat(data[0].BValue);
			currentcloseprice_bse = currentcloseprice_bse.toFixed(2);
			var change_bse = parseFloat(data[0].Bchg);
			change_bse = change_bse.toFixed(2);

			var pchange_bse = parseFloat(data[0].Bpchg);
			pchange_bse = pchange_bse.toFixed(2);

			if(change_bse > 0)
				var img_arr_bse = "<img src='../../../../../img-d03.moneycontrol.co.in/images/stocktracker/green_arrow.gif'>";
			else
				var img_arr_bse = "<img src='../../../../../img-d03.moneycontrol.co.in/images/stocktracker/red_arrow.gif'>";
			if(change_nse > 0)
				var img_arr_nse = "<img src='../../../../../img-d03.moneycontrol.co.in/images/stocktracker/green_arrow.gif'>";
			else
				var img_arr_nse = "<img src='../../../../../img-d03.moneycontrol.co.in/images/stocktracker/red_arrow.gif'>";									

			document.getElementById("mkt_sensex").innerHTML=currentcloseprice_bse;
			
			document.getElementById("mkt_sensex_cng").innerHTML=change_bse;
			document.getElementById("mkt_nifty").innerHTML=currentcloseprice_nse;
			
			document.getElementById("mkt_nifty_cng").innerHTML=change_nse;
			document.getElementById("mkt_chgimgbse").innerHTML=img_arr_bse;
			document.getElementById("mkt_chgimgnse").innerHTML=img_arr_nse;

			document.getElementById("mkt_sensex_percng").innerHTML='(' + pchange_bse + '%)';
			document.getElementById("mkt_nifty_percng").innerHTML='(' + pchange_nse + '%)';
		}  
	});	

}

////////////////////// Futures & options fucntion

function fut_opt_quotes(noticestab)
{
	if(noticestab==1)
	{
		document.getElementById("future_options_menu1").className='on';
		document.getElementById("future_options_tab1").style.display='block';
		document.getElementById("future_options_menu2").className='';
		document.getElementById("future_options_tab2").style.display='none';
	}
	else
	{
		document.getElementById("future_options_menu2").className='on';
		document.getElementById("future_options_tab2").style.display='block';
		document.getElementById("future_options_menu1").className='';
		document.getElementById("future_options_tab1").style.display='none';
	}				

}


////////////////////// Hot Stocks section fucntion

function hotstockstab1(sttab)
{
	var htmlfiles = new Array("", "onlybuyers.html", "onlysellers.html", "blockdeals.html", "intradayhigh.html", "intradaylow.html", "hourlygainers.html", "hourlylosers.html");

	
	for (tabcnt=1; tabcnt<=7; tabcnt++)
		{
			if(sttab==tabcnt)
				document.getElementById("hotstocks_"+tabcnt).className='on';			
			else
				document.getElementById("hotstocks_"+tabcnt).className='';
		}	

			$('#hotstockdatadiv').fadeOut(1);

			$('#hotstockdatadiv').html("<div style='margin:150px 100px 15px 100px;'><img src='../../../../../img-d03.moneycontrol.co.in/images/markets_new_loader.gif' ></div>");

			urchinTracker("/mccode/markets/hotstocks/"+htmlfiles[sttab]);
	
			$('#hotstockdatadiv').load('/mccode/markets/hotstocks/'+htmlfiles[sttab], '', function(data) 
				{					
					//$('#topnews').fadeOut(1);
					$('#hotstockdatadiv').fadeIn(1000);
				});

}

function hotstockstab(sttab)
{
	var htmlfiles = new Array("", "mostactive.html", "topgainers.html", "toplosers.html", "52wkhigh.html", "52wklow.html");
	
	for (tabcnt=1; tabcnt<=5; tabcnt++)
		{
			if(sttab==tabcnt)
				document.getElementById("hotstocks_"+tabcnt).className='on';			
			else
				document.getElementById("hotstocks_"+tabcnt).className='';
		}	

			$('#hotstockdatadiv').fadeOut(1);

			$('#hotstockdatadiv').html("<div style='margin:150px 100px 15px 100px;'><img src='../../../../../img-d03.moneycontrol.co.in/images/markets_new_loader.gif' ></div>");

			urchinTracker("/mccode/markets/hotstocks/"+htmlfiles[sttab]);
	
			$('#hotstockdatadiv').load('/mccode/markets/hotstocks/'+htmlfiles[sttab], '', function(data) 
				{					
					//$('#topnews').fadeOut(1);
					$('#hotstockdatadiv').fadeIn(1000);
				});

}

//////////////////// live market map

function livemarketmap(maptab)
{
	for (tabcnt=1; tabcnt<=2; tabcnt++)
		{
			if(maptab==tabcnt)
				document.getElementById("marketsmap_"+tabcnt).className='on';			
			else
				document.getElementById("marketsmap_"+tabcnt).className='';
		}	

		if(maptab==1)
		{
			marketmapdata="<iframe id='bsegraph' name='bsegraph' src='https://www.moneycontrol.com/mcplus/marketmap/bse/square_mapsmall.php' framespacing='0' frameborder='no' scrolling='no' width='264px' height='230px'></iframe>";
		}
		else
		{
			marketmapdata="<iframe id='bsegraph' name='bsegraph' src='https://www.moneycontrol.com/mcplus/marketmap/nse/square_mapsmall.php' framespacing='0' frameborder='no' scrolling='no' width='264px' height='230px'></iframe>";			
		}
		
		$('#bsense_map').fadeOut(1);

		$('#bsense_map').html(marketmapdata);

		$('#bsense_map').fadeIn(1000);
}

///////////////////////////// cnbccolumns

function cnbccolumns(npre)
{
	document.getElementById("cnbc_columns_0").style.display="none";
	var filldot = "../../../../../img-d03.moneycontrol.co.in/images/mc2008/markets/filldot.gif";
	var nofilldot = "../../../../../img-d03.moneycontrol.co.in/images/mc2008/markets/nofilldot.png";

	if(npre==0)
	{
		
		if(cnbccnt==1)
		return false;		

		cnbccnt--;

		for (i=1;i<=3 ;i++)
		{
			
			if(cnbccnt==i)
			{					
				$("#cnbccol_"+i).attr("src",filldot);
				$('#cnbc_columns_'+i).fadeIn(1000);
				$('#cnbc_columns_'+i).show();
				
			}
			else
			{
				$("#cnbccol_"+i).attr("src",nofilldot);
				$('#cnbc_columns_'+i).hide();
				$('#cnbc_columns_'+i).fadeOut(1);
			}
		}
	}
	else
	{
		
		if(cnbccnt==3)
		return false;

		cnbccnt++;

		for (i=1;i<=3 ;i++)
		{
			
			if(cnbccnt==i)
			{					
				$("#cnbccol_"+i).attr("src",filldot);
				$('#cnbc_columns_'+i).fadeIn(1000);
				$('#cnbc_columns_'+i).show();
				
			}
			else
			{
				
				$("#cnbccol_"+i).attr("src",nofilldot);
				$('#cnbc_columns_'+i).hide();
				$('#cnbc_columns_'+i).fadeOut(1);
				
			}
		}
		

	}
}

function hot_msgsmmb(stkmsg)
{
	for (msgcnt=1; msgcnt<=3; msgcnt++)
	{
		if(stkmsg==msgcnt)
			document.getElementById("hot_msgs_"+msgcnt).className='on';			
		else
			document.getElementById("hot_msgs_"+msgcnt).className='';			
	}	
	
	if(stkmsg==1)
		var todaytab="https://www.moneycontrol.com/india/messageboard/hot_stocks1_mkt.html";
	else if(stkmsg==2)
		var todaytab="https://www.moneycontrol.com/india/messageboard/latest_stocks.php";
	else if(stkmsg==3)
		var todaytab="https://www.moneycontrol.com/india/messageboard/hot_topics1.php";	

	$('#hot_msgs').fadeOut(1);
	$('#hot_msgs').load(todaytab, '', function(data) 
	{					
		$('#hot_msgs').fadeIn(1000);
	});

}