var msjstation;
function threeStart(el) {
    el = document.getElementById(el)
    var initOption = {
        antialias: true,
        showHelpGrid: false,
        clearCoolr: 0xffffff,
        divHeight:el.offsetHeight,
        divWidth:el.offsetWidth
    };
    msjstation = new msj3D();
    for(var storey=0;storey<5;storey++){

    }
    var Aobjects = {
        objects: [
            //墙体
            {
                show: true,
                uuid: "",
                name: 'wall',
                objType: 'wall',
                thick: 1,
                length: 100,
                height: 240,
                wallData: [
                   {//wall1
                       uuid: "",
                       name: 'wall1_1',
                     style: {
                       imgurl: "images/storey3.png",
                       // skinColor: 0x8ac9e2,
                     },
                     skin: {
                       opacity:1,
                       skin_left: {
                         skinColor: 0x98750f,
                         imgurl: "images/storey3.png"
                       }
                     },
                       thick: 1,
                       height: 240,
                       startDot: {
                           x: -500,
                           y: 240,
                           z: -350
                       },
                       endDot: {
                           x: 500,
                           y: 240,
                           z: -350
                       },
                       rotation: [{ direction: 'x', degree: 0 }] // 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                   },
                  {//wall1
                    uuid: "",
                    name: 'wall2_1',
                    thick: 1,
                    height: 240,
                    skin: {
                      opacity:1,
                      skin_fore: {
                        skinColor: 0x94623b,
                        imgurl: "images/storey3.png"
                      }
                    },
                    startDot: {
                      x: 500,
                      y: 240,
                      z: -350
                    },
                    endDot: {
                      x: 500,
                      y: 240,
                      z: 350
                    },
                    rotation: [{ direction: 'x', degree: 0 }] // 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                  },
                  {//wall1
                    uuid: "",
                    name: 'wall3_1',
                    thick: 1,
                    height: 240,
                    skin: {
                      opacity:1,
                      skin_right: {
                        skinColor: 0x94623b,
                        imgurl: "images/storey3.png"
                      }
                    },
                    startDot: {
                      x: 500,
                      y: 240,
                      z: 350
                    },
                    endDot: {
                      x: -500,
                      y: 240,
                      z: 350
                    },
                    rotation: [{ direction: 'x', degree: 0 }] // 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                  },
                  {//wall1
                    uuid: "",
                    name: 'wall4_1',
                    thick: 1,
                    height: 240,
                    skin: {
                      opacity:1,
                      skin_behind: {
                        skinColor: 0x94623b,
                        imgurl: "images/storey3.png"
                      }
                    },
                    startDot: {
                      x: -500,
                      y: 240,
                      z: 350
                    },
                    endDot: {
                      x: -500,
                      y: 240,
                      z: -350
                    },
                    rotation: [{ direction: 'x', degree: 0 }] // 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                  }
                ],
                style: {
                    skinColor: 0x8ac9e2
                }
            },
          //地板
          {
            show: true,
            uuid: "",
            name: 'floor',
            objType: 'floor',
            length: 3000,
            width: 3000,
            height: 10,
            rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
            x: 0,
            y: 120,
            z: 0,
            style: {
              skinColor: 0x8ac9e2,
              skin: {
                skin_up: {
                  skinColor: 0x98750f,
                  imgurl: "images/sky.gif",
                  repeatx: true,
                  repeaty: true,
                  width: 3000,
                  height: 3000
                },
                skin_down: {
                  skinColor: 0x8ac9e2,
                },
                skin_fore: {
                  skinColor: 0x8ac9e2,
                }
              }
            }
          },
          {
            show: true,
            uuid: "",
            name: 'floor',
            objType: 'floor',
            length: 1000,
            width: 700,
            height: 0,
            rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
            x: 0,
            y: 120+6*240-10,
            z: 0,
            style: {
              skinColor: 0x8ac9e2,
              skin: {
                skin_up: {
                  skinColor: 0x98750f,
                  imgurl: "images/floor_top.png",
                  repeatx: true,
                  repeaty: true,
                  width: 200,
                  height: 200
                },
                skin_down: {
                  skinColor: 0x8ac9e2,
                },
                skin_fore: {
                  skinColor: 0x8ac9e2,
                }
              }
            }
          }
        ],
        events: {
            dbclick: [
                {
                    obj_name: "doorRight",
                    obj_uuid: "",
                    obj_event: function (_obj) {
                        openRightDoor(_obj, function () { });
                        console.dir(_obj)
                    }
                },
                {
                    obj_name: "doorLeft",
                    obj_uuid: "",
                    obj_event: function (_obj) {
                        var doorstate = "close";
                        var tempobj = null;
                        if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
                            doorstate = _obj.doorState;
                            tempobj = _obj.parent;
                        } else {
                            console.log("add parent");
                            var _objparent = _obj.parent;
                            tempobj = new THREE.Object3D();
                            tempobj.position.set(_obj.position.x + _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
                            _obj.position.set(-_obj.geometry.parameters.width / 2, 0, 0);
                            tempobj.add(_obj);
                            _objparent.add(tempobj);
                        }
                        _obj.doorState = (doorstate == "close" ? "open" : "close");
                        new createjs.Tween(tempobj.rotation).to({
                            y: (doorstate == "close" ? -0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
                        }, 10000, createjs.Ease.elasticOut);
                    }
                },
                 {
                     obj_name: "cabinetdoor3_1",
                     obj_uuid: "",
                     obj_event: function (_obj) {
                         opcabinetdoor(_obj);
                     }
                 },
                  {
                    findObject:function(_objname){//查找某一类符合名称的对象
                      if (_objname.indexOf("wall") >= 0) {
                        return true;
                      } else {
                        return false;
                      }
                    },
                    obj_uuid: "",
                    obj_event: function (_obj) {
                      let reg1 = /([^_]+)$/;
                      let storey = _obj.name.match(reg1)[1];
                      let reg2 = /([/][^/]+)$/
                      alert('点击进去第'+storey+'层');
                      console.log(window.location.href.replace(reg2, ""))
                      window.location.href=window.location.href.replace(reg2, "")+'/index1.html'
                    }
                  },
                 {
                     findObject:function(_objname){//查找某一类符合名称的对象
                         if (_objname.indexOf("cabinet") >= 0 && _objname.indexOf("door") >= 0) {
                             return true;
                         } else {
                             return false;
                         }
                     },
                     obj_uuid: "",
                     obj_event: function (_obj) {
                         opcabinetdoor(_obj);
                     }
                 },
                 {
                     findObject: function (_objname) {//查找某一类符合名称的对象
                         if (_objname.indexOf("equipment") >= 0 && _objname.indexOf("card") >= 0) {
                             return true;
                         } else {
                             return false;
                         }
                     },
                     obj_uuid: "",
                     obj_event: function (_obj) {
                         var cardstate = "in";
                         if (_obj.cardstate != null && typeof (_obj.cardstate) != 'undefined') {
                             cardstate = _obj.cardstate;
                         } else {
                             _obj.cardstate = "out";
                         }
                         new createjs.Tween(_obj.position).to({
                             x: (cardstate == "in" ? _obj.position.x - 50 : _obj.position.x + 50),
                         }, 1000,createjs.Ease.linear).call(function () { _obj.cardstate = cardstate == "in" ? "out" : "in"; });
                     }
                 }
            ],
          mouseDown:[],
            mouseUp: [
              {
                findObject:function(_objname){//查找某一类符合名称的对象
                  if (_objname.indexOf("wall") >= 0) {
                    return true;
                  } else {
                    return false;
                  }
                },
                obj_uuid: "",
                  obj_event: function (_obj) {
                console.log(_obj);
              }
            }
            ],
            mouseMove:  [
              {
                findObject:function(_objname){//查找某一类符合名称的对象
                  if (_objname.indexOf("wall") >= 0) {
                    return true;
                  } else {
                    return false;
                  }
                },
                obj_uuid: "",
                obj_event: function (_obj) {
                  // _obj.color.setHex('')
                  //不停循环的动画已经是在不断渲染 因此无需在添加一个渲染
                  //renderer.render( scene, camera );
                  console.log(_obj)
                }
              }
            ]
        },
        btns: [
            {
                btnid: "btn_reset",
                btnTitle: "场景复位",
                btnimg: "images/reset.png",
                event: function () {
                    // $('#').empty();
                    document.getElementById('canvas-frame').innerHTML = ''
                    msjstation = null; msj3DObj = null;
                    msjstation = new msj3D();
                    msjstation.initmsj3D('canvas-frame', initOption, Aobjects);
                    msjstation.start();
                    // var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
                    // new createjs.Tween(mainCamera.position).to({
                    //    x: 0, y: 1000, z: -1800,
                    // }, 1000,createjs.Ease.linear);
                    // mainCamera.lookAt({ x: 0, y: 0, z: 0 });
                }
            },
            {
                btnid: "btn_connection",
                btnTitle: "走线管理",
                btnimg: "images/connection.png",
                event: function () {
                }
            },
            {
                btnid: "btn_usage",
                btnTitle: "机柜利用率",
                btnimg: "images/usage.png",
                event: function () {
                }
            },
            {
                btnid: "btn_edit",
                btnTitle: "拖拽机柜",
                btnimg: "images/edit.png",
                event: function () {
                }
            },
            {
                btnid: "btn_alarm",
                btnTitle: "告警巡航",
                btnimg: "images/alarm.png",
                event: function () {
                    var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
                    var doorRight = msj3DObj.commonFunc.findObject("doorRight");
                    mainCamera.lookAt(doorRight.position);
                    console.log(createjs)
                    new createjs.Tween(mainCamera.position).to({
                        x:-300, y:200, z:-700,
                    }, 5000,createjs.Ease.linear).call(function () {

                        openRightDoor(msj3DObj.commonFunc.findObject("doorRight"), function () {
                            var cabinet3_1 = msj3DObj.commonFunc.findObject("cabinet3_1");
                            mainCamera.lookAt(cabinet3_1.position);
                            new createjs.Tween(mainCamera.position).to({
                                x: -300, y: 150, z: -200,
                            }, 5000,createjs.Ease.linear).call(function () {
                                mainCamera.lookAt(cabinet3_1.position);
                            });
                        });
                    });


                }
            },
        ]
    }
      for (var i = 1; i <=6;i++){
          if (i != 1) {
            Aobjects.objects[0].wallData.push({
              show: true,
              copyfrom: 'wall1',
              name: 'wall1'+'_'+ i,
              uuid: '',
              objType: 'cloneObj',
              thick: 1,
              height: 240,
              skin: {
                opacity:1,
                skin_left: {
                  skinColor: 0x98750f,
                  imgurl: "images/storey3.png"
                }
              },
              startDot: {
                x: -500,
                y: 240*i,
                z: -350
              },
              endDot: {
                x: 500,
                y: 240*i,
                z: -350
              },
            });
            Aobjects.objects[0].wallData.push({
              show: true,
              copyfrom: 'wall2',
              name: 'wall2'+'_'+ i,
              uuid: '',
              objType: 'cloneObj',
              thick: 1,
              height: 240,
              skin: {
                opacity:1,
                skin_fore: {
                  skinColor: 0x98750f,
                  imgurl: "images/storey3.png"
                }
              },
              startDot: {
                x: 500,
                y: 240*i,
                z: -350
              },
              endDot: {
                x: 500,
                y: 240*i,
                z: 350
              },
              rotation: [{ direction: 'x', degree: 0 }]
            });
            Aobjects.objects[0].wallData.push({
              show: true,
              copyfrom: 'wall3',
              name: 'wall3'+'_'+ i,
              uuid: '',
              objType: 'cloneObj',
              thick: 1,
              height: 240,
              skin: {
                opacity:1,
                skin_right: {
                  skinColor: 0x98750f,
                  imgurl: "images/storey3.png"
                }
              },
              startDot: {
                x: 500,
                y: 240*i,
                z: 350
              },
              endDot: {
                x: -500,
                y: 240*i,
                z: 350
              },
              rotation: [{ direction: 'x', degree: 0 }]
            });
            Aobjects.objects[0].wallData.push({
              show: true,
              copyfrom: 'wall4',
              name: 'wall4'+'_'+ i,
              uuid: '',
              objType: 'cloneObj',
              thick: 1,
              height: 240,
              skin: {
                opacity:1,
                skin_behind: {
                  skinColor: 0x98750f,
                  imgurl: "images/storey3.png"
                }
              },
              startDot: {
                x: -500,
                y: 240*i,
                z: 350
              },
              endDot: {
                x: -500,
                y: 240*i,
                z: -350
              },
              rotation: [{ direction: 'x', degree: 0 }]
            });
          }
      }
    //复制机柜
    // for (var i = 1; i <=3;i++){
    //     for (var j = 1; j <=6; j++) {
    //         if (i != 1 || j != 1) {
    //         Aobjects.objects.push({
    //             show: true,
    //             copyfrom: 'cabinet1_1',
    //             name: 'cabinet'+i+'_'+j,
    //             uuid: '',
    //             objType: 'cloneObj',
    //             position: { x:-(i-1)*200, y:0 , z:(j-1)*100 },
    //             scale: { x: 1, y: 1, z: 1 }
    //         });
    //         }
    //     }
    // }
    msjstation.initmsj3D('canvas-frame', initOption, Aobjects);
    msjstation.start();
}
function opcabinetdoor(_obj) {
    console.log(_obj)
    var doorstate = "close";
    var tempobj = null;
    if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
        doorstate = _obj.doorState;
        tempobj = _obj.parent;
    } else {
        var _objparent = _obj.parent;
        tempobj = new THREE.Object3D();
        tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2);
        _obj.position.set(0, 0, -_obj.geometry.parameters.depth / 2);
        tempobj.add(_obj);
        _objparent.add(tempobj);
    }
    _obj.doorState = (doorstate == "close" ? "open" : "close");
    new createjs.Tween(tempobj.rotation).to({
        y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
    }, 1000, createjs.Ease.linear);
}
function openRightDoor(_obj,func) {
    var doorstate = "close";
    var tempobj = null;
    if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
        doorstate = _obj.doorState;
        tempobj = _obj.parent;
    } else {
        var _objparent = _obj.parent;
        tempobj = new THREE.Object3D();
        tempobj.position.set(_obj.position.x - _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
        _obj.position.set(_obj.geometry.parameters.width / 2, 0, 0);
        tempobj.add(_obj);
        _objparent.add(tempobj);
    }
    _obj.doorState = (doorstate == "close" ? "open" : "close");
    new createjs.Tween(tempobj.rotation).to({
        y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
    }, 10000, createjs.Ease.elasticOut);
}