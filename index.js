$(function () {
	var bcave = new webcave('webcave');

	var spinner = new Spinner();
	spinner.spin(document.getElementById("net-container"));

	$.get('cfs-net-1.txt', function (n) {
	//$.get('filt-net-web-colors-annot.txt', function (n) {
		bcave.loadNetwork(n);
		bcave.rebuildScene();
		bcave.resetView();
		//bcave.animate();
		//bcave.displayLabels();
		//bcave.displayPerturb();
		spinner.stop();
	});
	//});

	['camera', 'background', 'colorBy', 'solvents', 'primaryStructure', 'secondaryStructure', 'surface', 'opacity', 'wireframe', 'ligand', 'effect'].forEach(function (opt) {
		$('#' + opt).click(function (e) {
			var options = {};
			options[opt] = e.target.innerText;
			bcave.rebuildScene(options);
			//bcave.animate();
			bcave.render();
		})
	});

	
	window.addEventListener( 'resize', function() {
		bcave.onWindowResize();
	}, false);
		
	/*
	['nolayers'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();

			var spinner = new Spinner();
			spinner.spin(document.getElementById("net-container"));

			$.get('proteom-full.txt', function (n) { 
				bcave.destroyScene();
				bcave.loadNetwork(n);
				bcave.rebuildScene();
				bcave.resetView();
				spinner.stop();
				document.getElementById("edge-info").innerHTML = "";
				document.getElementById("nodeSearch").value = "";
			});

			document.getElementById("nolayers").className = "btn btn-primary disabled";
			document.getElementById("2layers").className = "btn btn-primary enabled";
			document.getElementById("3layers").className = "btn btn-primary enabled";

		});
	
	});


	['2layers'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();

			var spinner = new Spinner();
			spinner.spin(document.getElementById("net-container"));

			$.get('proteom-full-2layers.txt', function (n) { 
				bcave.destroyScene();
				bcave.loadNetwork(n);
				bcave.rebuildScene();
				bcave.resetView();
				spinner.stop();
				document.getElementById("edge-info").innerHTML = "";
				document.getElementById("nodeSearch").value = "";
			});

			document.getElementById("2layers").className = "btn btn-primary disabled";
			document.getElementById("nolayers").className = "btn btn-primary enabled";
			document.getElementById("3layers").className = "btn btn-primary enabled";

		});
	
	});


	['3layers'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();

			var spinner = new Spinner();
			spinner.spin(document.getElementById("net-container"));

			$.get('proteom-full-3layers.txt', function (n) { 
				bcave.destroyScene();
				bcave.loadNetwork(n);
				bcave.rebuildScene();
				bcave.resetView();
				spinner.stop();
				document.getElementById("edge-info").innerHTML = "";
				document.getElementById("nodeSearch").value = "";
			});

			document.getElementById("3layers").className = "btn btn-primary disabled";
			document.getElementById("nolayers").className = "btn btn-primary enabled";
			document.getElementById("2layers").className = "btn btn-primary enabled";

		});
	
	});
	*/

	['search', 'deneme'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			//bcave[func]();
			bcave.searchNode();
		});
	});

	['searchMod'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			bcave.showModule();
		});
	});

	['filterMod'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			bcave.filterModule();
		});
	});

	['searchCell'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			bcave.showCell();
		});
	});

	['filterCell'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			bcave.filterCell();
		});
	});

	['resetNet'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			bcave.resetNetwork();
		});
	});

	['label0'].forEach(function (func) {
		$('#' + func).click(function (e) {
			showLabels = 0;
			bcave.displayLabels();
		});
	});

	['label1'].forEach(function (func) {
		$('#' + func).click(function (e) {
			showLabels = 1;
			bcave.displayLabels();
		});
	});

	['label2'].forEach(function (func) {
		$('#' + func).click(function (e) {
			showLabels = 2;
			bcave.displayLabels();
		});
	});

	['upPerturb'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			//bcave[func]();
			bcave.upPerturb();

			document.getElementById("upPerturb").className = "btn btn-primary disabled";
			document.getElementById("downPerturb").className = "btn btn-primary enabled";
		});
	});

	['downPerturb'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			//bcave[func]();
			bcave.downPerturb();

			document.getElementById("downPerturb").className = "btn btn-primary disabled";
			document.getElementById("upPerturb").className = "btn btn-primary enabled";
		});
	});

	['filtAcute'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			//bcave[func]();
			bcave.filterAcute();

			document.getElementById("filtAcute").className = "btn btn-primary disabled";
			document.getElementById("filtConv").className = "btn btn-primary enabled";
		});
	});

	['filtConv'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			//bcave[func]();
			bcave.filterConv();

			document.getElementById("filtAcute").className = "btn btn-primary enabled";
			document.getElementById("filtConv").className = "btn btn-primary disabled";
		});
	});

	['filtCommon'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			//bcave[func]();
			bcave.filterCommon();
			
			if(document.getElementById("filtCommon").innerText == "Hide Common")
				document.getElementById("filtCommon").innerText = "Show Common";

			else
				document.getElementById("filtCommon").innerText = "Hide Common";
		});
	});

	['resetView', 'exportView'].forEach(function (func) {
		$('#' + func).click(function (e) {
			e.preventDefault();
			bcave[func]();
		})
	});

	$('').click(function (e) {
		var file = $('#file').get(0);
		if (!window.FileReader || !file || !file.files || !file.files[0]) {
			alert("No file is selected. Or File API is not supported in your browser. Please try Firefox or Chrome.");
			return;
		}
		var reader = new FileReader();
		reader.onload = function () {
			bcave.loadMolecule(reader.result);
		};
		reader.readAsText(file.files[0]);
	});

	var rf = new Worker('rf.js');
	rf.onmessage = function (ev) {
		if (ev.data === undefined) {
			rf.postMessage(JSON.stringify({
				x: [2097,673,710,17,125,39,39,0,499,167,164,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,585,174,183,6]
			}));
		} else {
			console.log(ev.data);
		}
	};
	$.get('trainx.csv', function (trainxcsv) {
	$.get('trainy.csv', function (trainycsv) {
		rf.postMessage(JSON.stringify({
			x: trainxcsv.split('\n').map(function (line) {
				return line.split(',').map(function (token) {
					return parseFloat(token);
				});
			}),
			y: trainycsv.split('\n').map(function (line) {
				return parseFloat(line);
			}),
		}));
	});
	});
});
