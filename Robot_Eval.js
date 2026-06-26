/******************* 
 * Robot_Eval *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Robot_Eval';  // from the Builder filename that created this script
let expInfo = {
    'Participant ': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'Session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent_routineRoutineBegin());
flowScheduler.add(consent_routineRoutineEachFrame());
flowScheduler.add(consent_routineRoutineEnd());
flowScheduler.add(demo_routineRoutineBegin());
flowScheduler.add(demo_routineRoutineEachFrame());
flowScheduler.add(demo_routineRoutineEnd());
flowScheduler.add(iri_routineRoutineBegin());
flowScheduler.add(iri_routineRoutineEachFrame());
flowScheduler.add(iri_routineRoutineEnd());
flowScheduler.add(instructions_routineRoutineBegin());
flowScheduler.add(instructions_routineRoutineEachFrame());
flowScheduler.add(instructions_routineRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(end_routineRoutineBegin());
flowScheduler.add(end_routineRoutineEachFrame());
flowScheduler.add(end_routineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience and participation! :) ', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience and participation! :) ', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'ref_sheet.xlsx', 'path': 'ref_sheet.xlsx'},
    {'name': 'stim/scen_1.png', 'path': 'stim/scen_1.png'},
    {'name': 'stim/a1.png', 'path': 'stim/a1.png'},
    {'name': 'stim/b1.png', 'path': 'stim/b1.png'},
    {'name': 'stim/c1.png', 'path': 'stim/c1.png'},
    {'name': 'stim/d1.png', 'path': 'stim/d1.png'},
    {'name': 'stim/scen_2.png', 'path': 'stim/scen_2.png'},
    {'name': 'stim/a2.png', 'path': 'stim/a2.png'},
    {'name': 'stim/b2.png', 'path': 'stim/b2.png'},
    {'name': 'stim/c2.png', 'path': 'stim/c2.png'},
    {'name': 'stim/d2.png', 'path': 'stim/d2.png'},
    {'name': 'stim/scen_3.png', 'path': 'stim/scen_3.png'},
    {'name': 'stim/a3.png', 'path': 'stim/a3.png'},
    {'name': 'stim/b3.png', 'path': 'stim/b3.png'},
    {'name': 'stim/c3.png', 'path': 'stim/c3.png'},
    {'name': 'stim/d3.png', 'path': 'stim/d3.png'},
    {'name': 'stim/scen_4.png', 'path': 'stim/scen_4.png'},
    {'name': 'stim/a4.png', 'path': 'stim/a4.png'},
    {'name': 'stim/b4.png', 'path': 'stim/b4.png'},
    {'name': 'stim/c4.png', 'path': 'stim/c4.png'},
    {'name': 'stim/d4.png', 'path': 'stim/d4.png'},
    {'name': 'stim/scen_5.png', 'path': 'stim/scen_5.png'},
    {'name': 'stim/a5.png', 'path': 'stim/a5.png'},
    {'name': 'stim/b5.png', 'path': 'stim/b5.png'},
    {'name': 'stim/c5.png', 'path': 'stim/c5.png'},
    {'name': 'stim/d5.png', 'path': 'stim/d5.png'},
    {'name': 'stim/scen_6.png', 'path': 'stim/scen_6.png'},
    {'name': 'stim/a6.png', 'path': 'stim/a6.png'},
    {'name': 'stim/b6.png', 'path': 'stim/b6.png'},
    {'name': 'stim/c6.png', 'path': 'stim/c6.png'},
    {'name': 'stim/d6.png', 'path': 'stim/d6.png'},
    {'name': 'stim/scen_7.png', 'path': 'stim/scen_7.png'},
    {'name': 'stim/a7.png', 'path': 'stim/a7.png'},
    {'name': 'stim/b7.png', 'path': 'stim/b7.png'},
    {'name': 'stim/c7.png', 'path': 'stim/c7.png'},
    {'name': 'stim/d7.png', 'path': 'stim/d7.png'},
    {'name': 'stim/scen_8.png', 'path': 'stim/scen_8.png'},
    {'name': 'stim/a8.png', 'path': 'stim/a8.png'},
    {'name': 'stim/b8.png', 'path': 'stim/b8.png'},
    {'name': 'stim/c8.png', 'path': 'stim/c8.png'},
    {'name': 'stim/d8.png', 'path': 'stim/d8.png'},
    {'name': 'stim/scen_9.png', 'path': 'stim/scen_9.png'},
    {'name': 'stim/a9.png', 'path': 'stim/a9.png'},
    {'name': 'stim/b9.png', 'path': 'stim/b9.png'},
    {'name': 'stim/c9.png', 'path': 'stim/c9.png'},
    {'name': 'stim/d9.png', 'path': 'stim/d9.png'},
    {'name': 'stim/scen_10.png', 'path': 'stim/scen_10.png'},
    {'name': 'stim/a10.png', 'path': 'stim/a10.png'},
    {'name': 'stim/b10.png', 'path': 'stim/b10.png'},
    {'name': 'stim/c10.png', 'path': 'stim/c10.png'},
    {'name': 'stim/d10.png', 'path': 'stim/d10.png'},
    {'name': 'demdet_csv.xlsx', 'path': 'demdet_csv.xlsx'},
    {'name': 'iri_csv.xlsx', 'path': 'iri_csv.xlsx'},
    {'name': 'stim/instructions.png', 'path': 'stim/instructions.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var consent_routineClock;
var image;
var yes_btn;
var no_btn;
var demo_routineClock;
var demo_form;
var demo_button;
var iri_routineClock;
var iri_form;
var iri_button;
var instructions_routineClock;
var instructions;
var instruc_resp;
var scenario_routineClock;
var scen_view;
var scen_resp;
var choice_routineClock;
var top_left;
var top_right;
var bottom_left;
var bottom_right;
var mouse_resp;
var end_routineClock;
var textbox;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "consent_routine"
  consent_routineClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'height', 
    image : 'stim/Description & Consent.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.01], 
    draggable: false,
    size : [null, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  yes_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'yes_btn',
    text: 'I consent.',
    font: 'Arvo',
    pos: [(- 0.25), (- 0.35)],
    size: [0.35, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'green',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.025,
    bold: true,
    italic: false,
  });
  yes_btn.clock = new util.Clock();
  
  no_btn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'no_btn',
    text: 'I do not consent.',
    font: 'Arvo',
    pos: [0.25, (- 0.35)],
    size: [0.35, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'darkred',
    borderColor: null,
    colorSpace: 'named',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.025,
    bold: true,
    italic: false,
  });
  no_btn.clock = new util.Clock();
  
  // Initialize components for Routine "demo_routine"
  demo_routineClock = new util.Clock();
  demo_form = new visual.Form({
    win : psychoJS.window, name:'demo_form',
    items : 'demdet_csv.xlsx',
    textHeight : 0.025,
    font : 'Noto Sans',
    randomize : false,
    size : [1.35, 0.8],
    pos : [0, 0.08],
    style : 'light',
    itemPadding : 0.05,
    depth : 0
  });
  demo_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'demo_button',
    text: 'To pretest >>',
    font: 'Arvo',
    pos: [0, (- 0.42)],
    size: [0.5, 0.07],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'navy',
    borderColor: null,
    colorSpace: 'named',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.025,
    bold: true,
    italic: false,
  });
  demo_button.clock = new util.Clock();
  
  // Initialize components for Routine "iri_routine"
  iri_routineClock = new util.Clock();
  iri_form = new visual.Form({
    win : psychoJS.window, name:'iri_form',
    items : 'iri_csv.xlsx',
    textHeight : 0.025,
    font : 'Noto Sans',
    randomize : false,
    size : [1.35, 0.8],
    pos : [0, 0.08],
    style : 'light',
    itemPadding : 0.05,
    depth : 0
  });
  iri_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'iri_button',
    text: 'To main task >>',
    font: 'Arvo',
    pos: [0, (- 0.42)],
    size: [0.5, 0.07],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: 'white',
    fillColor: 'navy',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.025,
    bold: true,
    italic: false,
  });
  iri_button.clock = new util.Clock();
  
  // Initialize components for Routine "instructions_routine"
  instructions_routineClock = new util.Clock();
  instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.1], 
    draggable: false,
    size : [null, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruc_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "scenario_routine"
  scenario_routineClock = new util.Clock();
  scen_view = new visual.ImageStim({
    win : psychoJS.window,
    name : 'scen_view', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.1], 
    draggable: false,
    size : [null, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  scen_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "choice_routine"
  choice_routineClock = new util.Clock();
  top_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'top_left', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.26), 0.22], 
    draggable: false,
    size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  top_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'top_right', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.26, 0.22], 
    draggable: false,
    size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  bottom_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bottom_left', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.26), (- 0.22)], 
    draggable: false,
    size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  bottom_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bottom_right', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.26, (- 0.22)], 
    draggable: false,
    size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_resp = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp.mouseClock = new util.Clock();
  // Initialize components for Routine "end_routine"
  end_routineClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: 'You have reached the end of this experiment. Thank you for your participation!\n\nPlease wait while we save your results. Do NOT close this tab yet.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.75, 0.5],  units: 'height', 
    ori: 0.0,
    color: 'blue', colorSpace: 'named',
    fillColor: 'yellow', borderColor: 'blue',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var consent_routineMaxDurationReached;
var consent_routineMaxDuration;
var consent_routineComponents;
function consent_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_routineClock.reset();
    routineTimer.reset();
    consent_routineMaxDurationReached = false;
    // update component parameters for each repeat
    // reset yes_btn to account for continued clicks & clear times on/off
    yes_btn.reset()
    // reset no_btn to account for continued clicks & clear times on/off
    no_btn.reset()
    psychoJS.experiment.addData('consent_routine.started', globalClock.getTime());
    consent_routineMaxDuration = null
    // keep track of which components have finished
    consent_routineComponents = [];
    consent_routineComponents.push(image);
    consent_routineComponents.push(yes_btn);
    consent_routineComponents.push(no_btn);
    
    for (const thisComponent of consent_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_routine' ---
    // get current time
    t = consent_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *yes_btn* updates
    if (t >= 0.5 && yes_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_btn.tStart = t;  // (not accounting for frame time here)
      yes_btn.frameNStart = frameN;  // exact frame index
      
      yes_btn.setAutoDraw(true);
    }
    
    
    // if yes_btn is active this frame...
    if (yes_btn.status === PsychoJS.Status.STARTED) {
    }
    
    if (yes_btn.status === PsychoJS.Status.STARTED) {
      // check whether yes_btn has been pressed
      if (yes_btn.isClicked) {
        if (!yes_btn.wasClicked) {
          // store time of first click
          yes_btn.timesOn.push(yes_btn.clock.getTime());
          // store time clicked until
          yes_btn.timesOff.push(yes_btn.clock.getTime());
        } else {
          // update time clicked until;
          yes_btn.timesOff[yes_btn.timesOff.length - 1] = yes_btn.clock.getTime();
        }
        if (!yes_btn.wasClicked) {
          // end routine when yes_btn is clicked
          continueRoutine = false;
          
        }
        // if yes_btn is still clicked next frame, it is not a new click
        yes_btn.wasClicked = true;
      } else {
        // if yes_btn is clicked next frame, it is a new click
        yes_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if yes_btn hasn't started / has finished
      yes_btn.clock.reset();
      // if yes_btn is clicked next frame, it is a new click
      yes_btn.wasClicked = false;
    }
    
    // *no_btn* updates
    if (t >= 0.5 && no_btn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_btn.tStart = t;  // (not accounting for frame time here)
      no_btn.frameNStart = frameN;  // exact frame index
      
      no_btn.setAutoDraw(true);
    }
    
    
    // if no_btn is active this frame...
    if (no_btn.status === PsychoJS.Status.STARTED) {
    }
    
    if (no_btn.status === PsychoJS.Status.STARTED) {
      // check whether no_btn has been pressed
      if (no_btn.isClicked) {
        if (!no_btn.wasClicked) {
          // store time of first click
          no_btn.timesOn.push(no_btn.clock.getTime());
          // store time clicked until
          no_btn.timesOff.push(no_btn.clock.getTime());
        } else {
          // update time clicked until;
          no_btn.timesOff[no_btn.timesOff.length - 1] = no_btn.clock.getTime();
        }
        if (!no_btn.wasClicked) {
          // end routine when no_btn is clicked
          continueRoutine = false;
          
        }
        // if no_btn is still clicked next frame, it is not a new click
        no_btn.wasClicked = true;
      } else {
        // if no_btn is clicked next frame, it is a new click
        no_btn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if no_btn hasn't started / has finished
      no_btn.clock.reset();
      // if no_btn is clicked next frame, it is a new click
      no_btn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_routine' ---
    for (const thisComponent of consent_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_routine.stopped', globalClock.getTime());
    psychoJS.experiment.addData('yes_btn.numClicks', yes_btn.numClicks);
    psychoJS.experiment.addData('yes_btn.timesOn', yes_btn.timesOn);
    psychoJS.experiment.addData('yes_btn.timesOff', yes_btn.timesOff);
    psychoJS.experiment.addData('no_btn.numClicks', no_btn.numClicks);
    psychoJS.experiment.addData('no_btn.timesOn', no_btn.timesOn);
    psychoJS.experiment.addData('no_btn.timesOff', no_btn.timesOff);
    // the Routine "consent_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_routineMaxDurationReached;
var demo_routineMaxDuration;
var demo_routineComponents;
function demo_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    demo_routineClock.reset();
    routineTimer.reset();
    demo_routineMaxDurationReached = false;
    // update component parameters for each repeat
    // reset demo_button to account for continued clicks & clear times on/off
    demo_button.reset()
    psychoJS.experiment.addData('demo_routine.started', globalClock.getTime());
    demo_routineMaxDuration = null
    // keep track of which components have finished
    demo_routineComponents = [];
    demo_routineComponents.push(demo_form);
    demo_routineComponents.push(demo_button);
    
    for (const thisComponent of demo_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demo_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_routine' ---
    // get current time
    t = demo_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demo_form* updates
    if (t >= 0.0 && demo_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_form.tStart = t;  // (not accounting for frame time here)
      demo_form.frameNStart = frameN;  // exact frame index
      
      demo_form.setAutoDraw(true);
    }
    
    
    // if demo_form is active this frame...
    if (demo_form.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *demo_button* updates
    if ((demo_form.complete) && demo_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_button.tStart = t;  // (not accounting for frame time here)
      demo_button.frameNStart = frameN;  // exact frame index
      
      demo_button.setAutoDraw(true);
    }
    
    
    // if demo_button is active this frame...
    if (demo_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (demo_button.status === PsychoJS.Status.STARTED) {
      // check whether demo_button has been pressed
      if (demo_button.isClicked) {
        if (!demo_button.wasClicked) {
          // store time of first click
          demo_button.timesOn.push(demo_button.clock.getTime());
          // store time clicked until
          demo_button.timesOff.push(demo_button.clock.getTime());
        } else {
          // update time clicked until;
          demo_button.timesOff[demo_button.timesOff.length - 1] = demo_button.clock.getTime();
        }
        if (!demo_button.wasClicked) {
          // end routine when demo_button is clicked
          continueRoutine = false;
          
        }
        // if demo_button is still clicked next frame, it is not a new click
        demo_button.wasClicked = true;
      } else {
        // if demo_button is clicked next frame, it is a new click
        demo_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if demo_button hasn't started / has finished
      demo_button.clock.reset();
      // if demo_button is clicked next frame, it is a new click
      demo_button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_routine' ---
    for (const thisComponent of demo_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_routine.stopped', globalClock.getTime());
    demo_form.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('demo_button.numClicks', demo_button.numClicks);
    psychoJS.experiment.addData('demo_button.timesOn', demo_button.timesOn);
    psychoJS.experiment.addData('demo_button.timesOff', demo_button.timesOff);
    // the Routine "demo_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iri_routineMaxDurationReached;
var iri_routineMaxDuration;
var iri_routineComponents;
function iri_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'iri_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    iri_routineClock.reset();
    routineTimer.reset();
    iri_routineMaxDurationReached = false;
    // update component parameters for each repeat
    // reset iri_button to account for continued clicks & clear times on/off
    iri_button.reset()
    psychoJS.experiment.addData('iri_routine.started', globalClock.getTime());
    iri_routineMaxDuration = null
    // keep track of which components have finished
    iri_routineComponents = [];
    iri_routineComponents.push(iri_form);
    iri_routineComponents.push(iri_button);
    
    for (const thisComponent of iri_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function iri_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'iri_routine' ---
    // get current time
    t = iri_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iri_form* updates
    if (t >= 0.0 && iri_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iri_form.tStart = t;  // (not accounting for frame time here)
      iri_form.frameNStart = frameN;  // exact frame index
      
      iri_form.setAutoDraw(true);
    }
    
    
    // if iri_form is active this frame...
    if (iri_form.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *iri_button* updates
    if ((iri_form.complete) && iri_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iri_button.tStart = t;  // (not accounting for frame time here)
      iri_button.frameNStart = frameN;  // exact frame index
      
      iri_button.setAutoDraw(true);
    }
    
    
    // if iri_button is active this frame...
    if (iri_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (iri_button.status === PsychoJS.Status.STARTED) {
      // check whether iri_button has been pressed
      if (iri_button.isClicked) {
        if (!iri_button.wasClicked) {
          // store time of first click
          iri_button.timesOn.push(iri_button.clock.getTime());
          // store time clicked until
          iri_button.timesOff.push(iri_button.clock.getTime());
        } else {
          // update time clicked until;
          iri_button.timesOff[iri_button.timesOff.length - 1] = iri_button.clock.getTime();
        }
        if (!iri_button.wasClicked) {
          // end routine when iri_button is clicked
          continueRoutine = false;
          
        }
        // if iri_button is still clicked next frame, it is not a new click
        iri_button.wasClicked = true;
      } else {
        // if iri_button is clicked next frame, it is a new click
        iri_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if iri_button hasn't started / has finished
      iri_button.clock.reset();
      // if iri_button is clicked next frame, it is a new click
      iri_button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of iri_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function iri_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'iri_routine' ---
    for (const thisComponent of iri_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('iri_routine.stopped', globalClock.getTime());
    iri_form.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('iri_button.numClicks', iri_button.numClicks);
    psychoJS.experiment.addData('iri_button.timesOn', iri_button.timesOn);
    psychoJS.experiment.addData('iri_button.timesOff', iri_button.timesOff);
    // the Routine "iri_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_routineMaxDurationReached;
var _instruc_resp_allKeys;
var instructions_routineMaxDuration;
var instructions_routineComponents;
function instructions_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructions_routineClock.reset();
    routineTimer.reset();
    instructions_routineMaxDurationReached = false;
    // update component parameters for each repeat
    instructions.setImage('stim/instructions.png');
    instruc_resp.keys = undefined;
    instruc_resp.rt = undefined;
    _instruc_resp_allKeys = [];
    psychoJS.experiment.addData('instructions_routine.started', globalClock.getTime());
    instructions_routineMaxDuration = null
    // keep track of which components have finished
    instructions_routineComponents = [];
    instructions_routineComponents.push(instructions);
    instructions_routineComponents.push(instruc_resp);
    
    for (const thisComponent of instructions_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_routine' ---
    // get current time
    t = instructions_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }
    
    
    // if instructions is active this frame...
    if (instructions.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instruc_resp* updates
    if (t >= 0 && instruc_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruc_resp.tStart = t;  // (not accounting for frame time here)
      instruc_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruc_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruc_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruc_resp.clearEvents(); });
    }
    
    // if instruc_resp is active this frame...
    if (instruc_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruc_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _instruc_resp_allKeys = _instruc_resp_allKeys.concat(theseKeys);
      if (_instruc_resp_allKeys.length > 0) {
        instruc_resp.keys = _instruc_resp_allKeys[_instruc_resp_allKeys.length - 1].name;  // just the last key pressed
        instruc_resp.rt = _instruc_resp_allKeys[_instruc_resp_allKeys.length - 1].rt;
        instruc_resp.duration = _instruc_resp_allKeys[_instruc_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_routine' ---
    for (const thisComponent of instructions_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_routine.stopped', globalClock.getTime());
    instruc_resp.stop();
    // the Routine "instructions_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ref_sheet.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(scenario_routineRoutineBegin(snapshot));
      trialsLoopScheduler.add(scenario_routineRoutineEachFrame());
      trialsLoopScheduler.add(scenario_routineRoutineEnd(snapshot));
      trialsLoopScheduler.add(choice_routineRoutineBegin(snapshot));
      trialsLoopScheduler.add(choice_routineRoutineEachFrame());
      trialsLoopScheduler.add(choice_routineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var scenario_routineMaxDurationReached;
var _scen_resp_allKeys;
var scenario_routineMaxDuration;
var scenario_routineComponents;
function scenario_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'scenario_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    scenario_routineClock.reset();
    routineTimer.reset();
    scenario_routineMaxDurationReached = false;
    // update component parameters for each repeat
    scen_view.setImage(scen_ID);
    scen_resp.keys = undefined;
    scen_resp.rt = undefined;
    _scen_resp_allKeys = [];
    psychoJS.experiment.addData('scenario_routine.started', globalClock.getTime());
    scenario_routineMaxDuration = null
    // keep track of which components have finished
    scenario_routineComponents = [];
    scenario_routineComponents.push(scen_view);
    scenario_routineComponents.push(scen_resp);
    
    for (const thisComponent of scenario_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function scenario_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'scenario_routine' ---
    // get current time
    t = scenario_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *scen_view* updates
    if (t >= 0 && scen_view.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scen_view.tStart = t;  // (not accounting for frame time here)
      scen_view.frameNStart = frameN;  // exact frame index
      
      scen_view.setAutoDraw(true);
    }
    
    
    // if scen_view is active this frame...
    if (scen_view.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *scen_resp* updates
    if (t >= 0 && scen_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scen_resp.tStart = t;  // (not accounting for frame time here)
      scen_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { scen_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { scen_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { scen_resp.clearEvents(); });
    }
    
    // if scen_resp is active this frame...
    if (scen_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = scen_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _scen_resp_allKeys = _scen_resp_allKeys.concat(theseKeys);
      if (_scen_resp_allKeys.length > 0) {
        scen_resp.keys = _scen_resp_allKeys[_scen_resp_allKeys.length - 1].name;  // just the last key pressed
        scen_resp.rt = _scen_resp_allKeys[_scen_resp_allKeys.length - 1].rt;
        scen_resp.duration = _scen_resp_allKeys[_scen_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scenario_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'scenario_routine' ---
    for (const thisComponent of scenario_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('scenario_routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(scen_resp.corr, level);
    }
    psychoJS.experiment.addData('scen_resp.keys', scen_resp.keys);
    if (typeof scen_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('scen_resp.rt', scen_resp.rt);
        psychoJS.experiment.addData('scen_resp.duration', scen_resp.duration);
        routineTimer.reset();
        }
    
    scen_resp.stop();
    // the Routine "scenario_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choice_routineMaxDurationReached;
var gotValidClick;
var choice_routineMaxDuration;
var choice_routineComponents;
function choice_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    choice_routineClock.reset();
    routineTimer.reset();
    choice_routineMaxDurationReached = false;
    // update component parameters for each repeat
    top_left.setImage(img_1);
    top_right.setImage(img_2);
    bottom_left.setImage(img_3);
    bottom_right.setImage(img_4);
    // setup some python lists for storing info about the mouse_resp
    // current position of the mouse:
    mouse_resp.x = [];
    mouse_resp.y = [];
    mouse_resp.leftButton = [];
    mouse_resp.midButton = [];
    mouse_resp.rightButton = [];
    mouse_resp.time = [];
    mouse_resp.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_resp.mouseClock.reset();
    psychoJS.experiment.addData('choice_routine.started', globalClock.getTime());
    choice_routineMaxDuration = null
    // keep track of which components have finished
    choice_routineComponents = [];
    choice_routineComponents.push(top_left);
    choice_routineComponents.push(top_right);
    choice_routineComponents.push(bottom_left);
    choice_routineComponents.push(bottom_right);
    choice_routineComponents.push(mouse_resp);
    
    for (const thisComponent of choice_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function choice_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice_routine' ---
    // get current time
    t = choice_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *top_left* updates
    if (t >= 0 && top_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_left.tStart = t;  // (not accounting for frame time here)
      top_left.frameNStart = frameN;  // exact frame index
      
      top_left.setAutoDraw(true);
    }
    
    
    // if top_left is active this frame...
    if (top_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *top_right* updates
    if (t >= 0 && top_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_right.tStart = t;  // (not accounting for frame time here)
      top_right.frameNStart = frameN;  // exact frame index
      
      top_right.setAutoDraw(true);
    }
    
    
    // if top_right is active this frame...
    if (top_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bottom_left* updates
    if (t >= 0 && bottom_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bottom_left.tStart = t;  // (not accounting for frame time here)
      bottom_left.frameNStart = frameN;  // exact frame index
      
      bottom_left.setAutoDraw(true);
    }
    
    
    // if bottom_left is active this frame...
    if (bottom_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bottom_right* updates
    if (t >= 0 && bottom_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bottom_right.tStart = t;  // (not accounting for frame time here)
      bottom_right.frameNStart = frameN;  // exact frame index
      
      bottom_right.setAutoDraw(true);
    }
    
    
    // if bottom_right is active this frame...
    if (bottom_right.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_resp* updates
    if (t >= 0 && mouse_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp.tStart = t;  // (not accounting for frame time here)
      mouse_resp.frameNStart = frameN;  // exact frame index
      
      mouse_resp.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_resp.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_resp is active this frame...
    if (mouse_resp.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_resp.clickableObjects = eval([top_left, top_right, bottom_left, bottom_right])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_resp.clickableObjects)) {
              mouse_resp.clickableObjects = [mouse_resp.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_resp.clickableObjects) {
              if (obj.contains(mouse_resp)) {
                  gotValidClick = true;
                  mouse_resp.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_resp.clicked_name.push(null);
          }
          _mouseXYs = mouse_resp.getPos();
          mouse_resp.x.push(_mouseXYs[0]);
          mouse_resp.y.push(_mouseXYs[1]);
          mouse_resp.leftButton.push(_mouseButtons[0]);
          mouse_resp.midButton.push(_mouseButtons[1]);
          mouse_resp.rightButton.push(_mouseButtons[2]);
          mouse_resp.time.push(mouse_resp.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choice_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choice_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice_routine' ---
    for (const thisComponent of choice_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('choice_routine.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_resp.x', mouse_resp.x);
    psychoJS.experiment.addData('mouse_resp.y', mouse_resp.y);
    psychoJS.experiment.addData('mouse_resp.leftButton', mouse_resp.leftButton);
    psychoJS.experiment.addData('mouse_resp.midButton', mouse_resp.midButton);
    psychoJS.experiment.addData('mouse_resp.rightButton', mouse_resp.rightButton);
    psychoJS.experiment.addData('mouse_resp.time', mouse_resp.time);
    psychoJS.experiment.addData('mouse_resp.clicked_name', mouse_resp.clicked_name);
    
    // the Routine "choice_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_routineMaxDurationReached;
var end_routineMaxDuration;
var end_routineComponents;
function end_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    end_routineClock.reset();
    routineTimer.reset();
    end_routineMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_routine.started', globalClock.getTime());
    end_routineMaxDuration = null
    // keep track of which components have finished
    end_routineComponents = [];
    end_routineComponents.push(textbox);
    
    for (const thisComponent of end_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_routine' ---
    // get current time
    t = end_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // if textbox is active this frame...
    if (textbox.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_routine' ---
    for (const thisComponent of end_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_routine.stopped', globalClock.getTime());
    // the Routine "end_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // Disable downloading results to browser
  psychoJS._saveResults = 0;
  
  // Generate filename for results
  let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
  
  // Extract data object from experiment
  let dataObj = psychoJS._experiment._trialsData;
  
  // Convert data object to CSV
  let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
      return Object.values(it).toString()
  }).join('\n');
  
  // Send data to OSF via DataPipe
  console.log('Saving data...');
  fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
      },
      body: JSON.stringify({
          experimentID: '8za7cNfQEb4d', // ★ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ★
          filename: filename,
          data: data,
      }),
  }).then(response => response.json()).then(data => {
      // Log response and force experiment end
      console.log(data);
      quitPsychoJS();
  })
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
