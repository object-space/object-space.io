// 집 모델
var home_mesh = new Object();
	loadDAE(
		'images/object.dae',
		home_mesh,
		function(obj){
			scene.add( obj );
			obj.rotation.set(-90 * PI_PER_180, 0, -90 * PI_PER_180); 
			obj.position.set(0,3,0);
		}
	);

// 섬 모델
var land_mesh = new Object();
	loadDAE(
		'island3.dae',
		land_mesh,
		function(obj){
			scene.add( obj );
			obj.rotation.set(-90 * PI_PER_180, 0, 0); 
			obj.position.set(0,-50,50);
			obj.scale.set(300,300,300);
		}
	);
