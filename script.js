/*
function test() {
	var uid = document.getElementById("name").value;
	var latti = document.getElementById("lattitude").value;
	var longi = document.getElementById("longitude").value;
	var phoneno = document.getElementById("phonenumber").value;
	var termi = document.getElementById("terminal").value;
	var view = document.getElementById("viewdata");
	alert(uid + latti + longi + phoneno + termi);

	const out1= document.getElementById('output');
	function fun1() {
		out1.innerHTML = text.out1;	// body...
	}

	view.addEventListener('click',out1);


	// body...
	var name = localStorage.setItem("uid", uid);
	var latti = localStorage.setItem("latti", latti);
	var longi = localStorage.setItem("longi", longi);
	var phoneno = localStorage.setItem("phoneno", phoneno);
	var termi = localStorage.setItem("termi", termi);
	
	*/
	

	
	
		
		var uname = [];
		var ulattitude = [];
		var ulongitude = [];
		var uterminal = [];

		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			uname[x] = document.getElementById("name").value;
			ulattitude[x] = document.getElementById("lattitude").value;
			ulongitude[x] = document.getElementById("longitude").value;
			uterminal[x] = document.getElementById("terminal").value;

/*			btnInsert.onclick = function(){
				const name = list1[x].value;
				const lattitude = list2[x].value;
				const longitude = list3[x].value;
				const terminal = list4[x].value;
				console.log(name);
				console.log(lattitude);
				console.log(longitude);
				console.log(terminal);

			}*/
			

			var terminalData={name:uname[x],lattitude:ulattitude[x],lattitude:ulongitude[x],lattitude:uterminal[x]};
			
			var ListArray=[];
			ListArray.push(terminalData);
			if(name || latti || latti || termi == null ){
				alert("please enter valid data")
			}
			else{




			var name = localStorage.setItem("Name", uname[x]);
			var latti = localStorage.setItem("Lattitude", ulattitude[x]);
			var longi = localStorage.setItem("longitude", ulongitude[x]);
			var termi = localStorage.setItem("terminal", uterminal[x]);


	
						
			const viewdata = JSON.stringify(terminalData);
			localStorage.setItem("viewdata",viewdata);

			
			let text = localStorage.getItem("viewdata");
			let obj = JSON.parse(text);
			document.getElementById("viewinfo").innerHTML=obj.name + obj.lattitude + obj.longitude + obj.terminal;

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
			var cel5 = NewRow.insertCell(4);
			var cel6 = NewRow.insertCell(5)

			
			cel1.innerHTML = uname[x];
			cel2.innerHTML = ulattitude[x];
			cel3.innerHTML = ulongitude[x];
			cel4.innerHTML = uterminal[x];
			cel5.innerHTML = '<button onclick ="deleteData()">edit</button>';
			cel6.innerHTML = '<button>delete</button>';
			n++;
			x++;
		}

		}

			/*function saveData()
			{
			let name,email,psw;
			name=document.getElementById("name").value;
			email=document.getElementById("email").value;

			psw=document.getElementById("psw").value;

			let user_records=new Array();
			user_records=JSON.parse(localStorage.getItem("list1[x]"))?JSON.parse(localStorage.getItem("list2[x]")
				?JSON.parse(localStorage.getItem("list3[x]")?JSON.parse(localStorage.getItem("list4[x]")):[]
			if(user_records.some((v)=>{return v.termi==termi}))
			{
			  alert("duplicate data");
			}
			else
			{
			  user_records.push({
			  "Name":name,
			  "Lattitude":latti,
			  "longitude":longi,
			  "terminal":termi
			})
			localStorage.setItem("users",JSON.stringify(user_records));
			}

			}*/

	
	
		

