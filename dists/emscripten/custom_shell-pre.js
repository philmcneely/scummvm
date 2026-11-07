/*global Module*/
Module["arguments"] = [];

// Add all parameters passed via the fragment identifier
if (window.location.hash.length > 0) {
    params = decodeURI(window.location.hash.substring(1)).split(" ")
    params.forEach((param) => {
        Module["arguments"].push(param);
    })
}

// MIDI support: not requested. The Web MIDI permission prompt (hardware sysex access) is not wanted on a hosted
// instance; midiOutputMap stays undefined and the webmidi backend lists no devices (see backends/midi/webmidi.cpp).
var midiOutputMap;
