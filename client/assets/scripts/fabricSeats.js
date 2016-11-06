export function newFabricCanvas(onSeatSelect, closeDetails, onSeatMove) {

  const canvas = new fabric.Canvas('floorPlan', {renderOnAddRemove: false});
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
    left = Math.floor(left) + 35;
    top = Math.floor(top) + 10;
    onSeatMove({id, left, top});
  })


  canvas.on('object:selected', function(options) {
    let clicked = options.target;
    if (clicked.id) {
      onSeatSelect(clicked.id);
    }
    if (canvas._selectedSeat) {
      clearSelection(canvas._selectedSeat);
    }
    canvas._selectedSeat = clicked;
    getByID('highlight', clicked).set('strokeWidth', 3)
    canvas.renderAll();
  })

  canvas.on('before:selection:cleared', function(options) {
    closeDetails();
    clearSelection(options.target);
  });

  function clearSelection(seat) {
    canvas._selectedSeat = undefined;
    getByID('highlight', seat).set('strokeWidth', 0)
    canvas.renderAll();
  }

  return canvas;
}

export function updateFabricSeats(canvas, seats, lockMovement) {
  const seatImgLink = require('../img/seat.svg');
  function ensureRemove(objects) {
    objects.map((obj) => {
      canvas.remove(obj);
    })
    if (canvas.getObjects().length === 0) {
      return;
    }
    ensureRemove(canvas.getObjects());
  }
  ensureRemove(canvas.getObjects());

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
            top: y + (y < 12 ? 12 : 0),
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
          seat.lockMovementX = seat.lockMovementY = lockMovement;
          if (item.userId) {seat.getObjects()[1].fill = '#90CAF9';}
          canvas.add(seat);
          canvas.renderAll();
        });        
      })
    },
    function (element, object) {
      object.id = element.getAttribute('id');
      group.push(object);
    }
  )
}

export function highlightFabricSeat(canvas, seatId) {
  let object = getByID(seatId, canvas);
  if (object) {
    canvas.setActiveObject(object).renderAll();
  }
}

function getByID(id, collection) {
  return collection.getObjects().find((obj) => {
    return obj.id === id
  })
}