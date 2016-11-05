export function newFabricCanvas(onSeatClick, closeSeatDetails) {

  const canvas = new fabric.Canvas('floorPlan');
  const myDataUrl = require('../img/plan.png');

  canvas.setBackgroundImage(myDataUrl, canvas.renderAll.bind(canvas));
  canvas.selection = false;

  //prevent objects from moving beyond canvas border
  canvas.on('object:moving', function (e) {
    let obj = e.target;
    obj.setCoords();        
    // top-left  corner
    if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){
        obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);
        obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);
    }
    // bot-right corner
    if(obj.getBoundingRect().top+obj.getBoundingRect().height  > obj.canvas.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > obj.canvas.width){
        obj.top = Math.min(obj.top, obj.canvas.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);
        obj.left = Math.min(obj.left, obj.canvas.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);
    }
  });

  canvas.on('object:modified', (options)=>{
    let {id, left, top} = options.target;
    left = Math.floor(left)
    top = Math.floor(top)
    console.log('mod', {id, left, top})
  })


  canvas.on('object:selected', function(options) {
    let clicked = options.target;
    if (clicked.id) {
      onSeatClick(clicked.id);
    }
    if (canvas._selectedSeat) {
      clearSelection(canvas._selectedSeat);
    }
    canvas._selectedSeat = clicked;
    getByID('highlight', clicked).set('strokeWidth', 3)
    canvas.renderAll();
  })

  canvas.on('before:selection:cleared', function(options) {
    closeSeatDetails();
    clearSelection(options.target);
  });

  function clearSelection(seat) {
    canvas._selectedSeat = undefined;
    getByID('highlight', seat).set('strokeWidth', 0)
    canvas.renderAll();
  }

  function getByID(id, collection = canvas) {
    return collection.getObjects().find((obj) => {
      return obj.id === id
    })
  }

  return canvas;
}

export function updateFabricSeats(seats, canvas) {
  const seatImgLink = require('../img/seat.svg');

  var group = [];
  fabric.loadSVGFromURL(seatImgLink, function(objects, options) {
      var obj = new fabric.Group(group);
      obj.setAngle(90);
      seats.map((item) => {
        if (!item.coordinates) {return;}
        let x = parseInt(item.coordinates.x)
        let y = parseInt(item.coordinates.y)
        obj.clone((seat) => {
          seat.set({
            id: item.seatId,
            left: x + (x < 30 ? 30 : 0),
            top: y + (y < 10 ? 10 : 0),
            hasControls: false,
            hasBorders: false,
          });
          seat.addWithUpdate(new fabric.Circle({
            id: 'highlight',
            stroke: '#F44336',
            fill: 'transparent',
            strokeWidth: 0,
            strokeDashArray: [12, 5],
            radius: 20,
            left: seat.left-(seat.width/2)-22,
            top: seat.top-(seat.height/2)+3
          }))

          canvas.add(seat);
          canvas.renderAll();
        });        
      })
      // for (var i = 1; i <= 10; i++) {
      //   obj.clone((seat) => {
      //     seat.set({
      //       id: i,
      //       left: Math.random()*1000,
      //       top: Math.random()*600,
      //       hasControls: false,
      //       hasBorders: false,
      //     });

      //     seat.addWithUpdate(new fabric.Circle({
      //       id: 'highlight',
      //       stroke: '#F44336',
      //       fill: 'transparent',
      //       strokeWidth: 0,
      //       strokeDashArray: [12, 5],
      //       radius: 20,
      //       left: seat.left-(seat.width/2)-22,
      //       top: seat.top-(seat.height/2)+3
      //     }))

      //     canvas.add(seat);
      //     if (i===10) canvas.setActiveObject(getByID(1));
      //     canvas.renderAll();
      //   });
      // }
    },
    function (element, object) {
      object.id = element.getAttribute('id');
      group.push(object);
    }
  )
}
    // canvas.deactivateAllWithDispatch().renderAll()
    // canvas.setActiveObject(getByID('111'));