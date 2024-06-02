function calamt(){
	var q=document.getElementById('qty').value;
	var r=document.getElementById('rate').value;
	var d=document.getElementById('dis').value;
	var a=(q*r)-(q*r*d)/100
	document.getElementById('amt').value=a;
}