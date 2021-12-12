// 집 모델
var home_mesh = new Object();
loadDAE("images/untitled.dae", home_mesh, function (obj) {
  scene.add(obj);
  obj.rotation.set(-90 * PI_PER_180, 0, -90 * PI_PER_180);
  obj.position.set(0, 3, 0);
});


// // 바닥
// var floor;
// loader.load(
//   "http://dreamplan7.cafe24.com/canvas/img/floor1.jpg",
//   function (texture) {
//     floor = new THREE.Mesh(new THREE.BoxGeometry(100, 10, 100));
//     floor.material = new THREE.MeshStandardMaterial({ map: texture });
//     floor.material.map.repeat.x = 3;
//     floor.material.map.repeat.y = 3;
//     floor.material.map.wrapS = THREE.RepeatWrapping;
//     floor.material.map.wrapT = THREE.RepeatWrapping;
//     floor.position.set(0, -3, 0);
//     floor.receiveShadow = true;
//     scene.add(floor);
//   }
// );
