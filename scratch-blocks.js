class PocketRender extends Blockly.blockRendering.Renderer {
  constructor() {
    super('PocketRender');
  }
  makeConstants_() {
    const constants = super.makeConstants_();
    constants.CORNER_RADIUS = 12;
    constants.NOTCH_WIDTH = 5;
    constants.NOTCH_HEIGHT = 0;
    constants.MIN_BLOCK_HEIGHT = 20;
    constants.FIELD_TEXT_FONTFAMILY = 'monospace';
    constants.FIELD_TEXT_FONTWEIGHT = 'italic';
    constants.NOTCH = {
      type: constants.SHAPE_IN_OUT,
      width: 0,
      height: 0,
      pathLeft: 'h 0',
      pathRight: 'h 0'
    };
    return constants;
  }
}

Blockly.blockRendering.register('PocketRender', PocketRender);

if (!Blockly.registry.getClass(Blockly.registry.Type.FIELD, 'field_colour')) {
  const ColourClass = (window.FieldColour && (FieldColour.FieldColour || FieldColour.default || FieldColour)) || Blockly.FieldColour;
  if (ColourClass) {
    Blockly.fieldRegistry.register('field_colour', ColourClass);
  }
}

Blockly.defineBlocksWithJsonArray([
  {
    "type": "limpiar_pantalla",
    "message0": "Clear Screen",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 1
  },
  {
    "type": "beginPath",
    "message0": "Begin Path",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 204
  },
  {
    "type": "closePath",
    "message0": "Close Path",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 204
  },
  {
    "type": "moveTo",
    "message0": "Move To\n X: %1\n Y:%2",
    "args0": [
      { "type": "input_value", "name": "moveToX", "check": "Number" },
      { "type": "input_value", "name": "moveToY", "check": "Number" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 204
  },
  {
    "type": "lineTo",
    "message0": "Line To\nX: %1\nY:%2",
    "args0": [
      { "type": "input_value", "name": "lineToX", "check": "Number" },
      { "type": "input_value", "name": "lineToY", "check": "Number" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 204
  },
  {
    "type": "playnote",
    "message0": "Play Note\nNote: %1\nOctave:%2",
    "args0": [
      { "type": "input_value", "name": "playnoteNote", "check": "Number" },
      { "type": "input_value", "name": "playNoteOc", "check": "Number" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 304
  },
  {
    "type": "stroke",
    "message0": "Stroke",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 204
  },
  {
    "type": "al_iniciar",
    "message0": "When Game Start: %1",
    "args0": [{ "type": "input_statement", "name": "SUBSTACK" }],
    "colour": 180
  },
  {
    "type": "dibujar_rectangulo",
    "message0": "Draw Rectangle \nColor: %1 \nWidth: %2 \nHeight: %3 \nX: %4 \nY: %5",
    "args0": [
      { "type": "field_colour", "name": "draw_rect_color", "colour": "#ff0000" },
      { "type": "input_value", "name": "draw_rect_width", "check": "Number" },
      { "type": "input_value", "name": "draw_rect_height", "check": "Number" },
      { "type": "input_value", "name": "draw_rect_x", "check": "Number" },
      { "type": "input_value", "name": "draw_rect_y", "check": "Number" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0
  },
  {
    "type": "print",
    "message0": "Print: %1",
    "args0": [{ "type": "input_value", "name": "print_message", "check": "String" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 1
  },
  {
    "type": "warning",
    "message0": "Warning: %1",
    "args0": [{ "type": "input_value", "name": "warning_message", "check": "String" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 1
  },
  {
    "type": "error",
    "message0": "Error: %1",
    "args0": [{ "type": "input_value", "name": "error_message", "check": "String" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 1
  },
  {
    "type": "printv",
    "message0": "Virtual Print: %1",
    "args0": [{ "type": "input_value", "name": "printv_message", "check": "String" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 1
  },
  {
    "type": "warningv",
    "message0": "Virtual Warning: %1",
    "args0": [{ "type": "input_value", "name": "warningv_message", "check": "String" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 1
  },
  {
    "type": "errorv",
    "message0": "Virtual Error: %1",
    "args0": [{ "type": "input_value", "name": "errorv_message", "check": "String" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 1
  },
  {
    "type": "forever",
    "message0": "por siempre %1 %2",
    "args0": [
      { "type": "input_dummy" },
      { "type": "input_statement", "name": "DO" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  },
  {
    "type": "start",
    "message0": "inicio",
    "nextStatement": null,
    "colour": 160,
    "deletable": false
  },
  {
    "type": "end",
    "message0": "fin",
    "previousStatement": null,
    "colour": 20
  }
]);

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  renderer: 'PocketRender',
  zoom: { controls: true, wheel: true, startScale: 0.8, maxScale: 3, minScale: 0.3 },
  grid: { spacing: 20, length: 3, colour: '#ccc', snap: true }
});

Blockly.JavaScript.forBlock['forever'] = function(block, generator) {
  Blockly.JavaScript.forBlock['forever'].counter = (Blockly.JavaScript.forBlock['forever'].counter || 0) + 1;
  const id = Blockly.JavaScript.forBlock['forever'].counter;
  const innerCode = generator.statementToCode(block, 'DO');
  return `function loop_${id}(){\n${innerCode}requestAnimationFrame(loop_${id});\n}\nloop_${id}();\n`;
};

Blockly.JavaScript.forBlock['limpiar_pantalla'] = function() {
  return `clear_screen();\n`;
};

Blockly.JavaScript.forBlock['al_iniciar'] = function(block, generator) {
  const codigoSiguiente = generator.statementToCode(block, 'SUBSTACK');
  const listaVariables = block.workspace.getAllVariables();
  let declaraciones = '';
  if (listaVariables.length > 0) {
    declaraciones = 'let ' + listaVariables.map(v => v.name).join(', ') + ';\n';
  }
  return `${declaraciones}${codigoSiguiente}`;
};

Blockly.JavaScript.forBlock['variables_get'] = function(block) {
  return [block.getFieldValue('VAR'), Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.forBlock['variables_set'] = function(block, generator) {
  const variableName = block.getFieldValue('VAR');
  const argument0 = generator.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return variableName + ' = ' + argument0 + ';\n';
};

Blockly.JavaScript.forBlock['dibujar_rectangulo'] = function(block, generator) {
  const color = block.getFieldValue('draw_rect_color');
  const width = generator.valueToCode(block, 'draw_rect_width', Blockly.JavaScript.ORDER_ADDITION) || '0';
  const height = generator.valueToCode(block, 'draw_rect_height', Blockly.JavaScript.ORDER_ADDITION) || '0';
  const x = generator.valueToCode(block, 'draw_rect_x', Blockly.JavaScript.ORDER_ADDITION) || '0';
  const y = generator.valueToCode(block, 'draw_rect_y', Blockly.JavaScript.ORDER_ADDITION) || '0';
  return `drawRect("${color}", ${width}, ${height}, ${x}, ${y});\n`;
};

Blockly.JavaScript.forBlock['print'] = function(block, generator) {
  const message = generator.valueToCode(block, 'print_message', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `console.log(${message});\n`;
};

Blockly.JavaScript.forBlock['warning'] = function(block, generator) {
  const message = generator.valueToCode(block, 'warning_message', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `console.warn(${message});\n`;
};

Blockly.JavaScript.forBlock['error'] = function(block, generator) {
  const message = generator.valueToCode(block, 'error_message', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `console.error(${message});\n`;
};

Blockly.JavaScript.forBlock['printv'] = function(block, generator) {
  const message = generator.valueToCode(block, 'printv_message', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `swal.fire({ text:${message}, icon:"info"});\n`;
};

Blockly.JavaScript.forBlock['warningv'] = function(block, generator) {
  const message = generator.valueToCode(block, 'warningv_message', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `swal.fire({ text:${message}, icon:"warning"});\n`;
};

Blockly.JavaScript.forBlock['errorv'] = function(block, generator) {
  const message = generator.valueToCode(block, 'errorv_message', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `swal.fire({text:${message} , icon:"error"});\n`;
};

Blockly.JavaScript.forBlock['beginPath'] = function(block, generator) {
  return `ctx.beginPath();\n`;
};

Blockly.JavaScript.forBlock['closePath'] = function(block, generator) {
  return `ctx.closePath();\n`;
};

Blockly.JavaScript.forBlock['stroke'] = function(block, generator) {
  return `ctx.stroke();\n`;
};

Blockly.JavaScript.forBlock['moveTo'] = function(block, generator) {
  const x = generator.valueToCode(block, 'moveToX', Blockly.JavaScript.ORDER_ADDITION) || '0';
  const y = generator.valueToCode(block, 'moveToY', Blockly.JavaScript.ORDER_ADDITION) || '0';
  return `ctx.moveTo(${x}, ${y});\n`;
};

Blockly.JavaScript.forBlock['lineTo'] = function(block, generator) {
  const x = generator.valueToCode(block, 'lineToX', Blockly.JavaScript.ORDER_ADDITION) || '0';
  const y = generator.valueToCode(block, 'lineToY', Blockly.JavaScript.ORDER_ADDITION) || '0';
  return `ctx.lineTo(${x}, ${y});\n`;
};

function see_code() {
  let code = Blockly.JavaScript.workspaceToCode(workspace);
  swal.fire({
    title: "Generated Javascript",
    text: code, 
    icon: "info"});
}

function run_code() {
  let code = Blockly.JavaScript.workspaceToCode(workspace);
  eval(code);
}

function stop_code() {
  clear_screen();
}