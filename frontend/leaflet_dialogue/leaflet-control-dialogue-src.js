/*
  Leaflet.Control.Select plugin
  https://github.com/adammertel/Leaflet.Control.Select
  Adam Mertel | univie
*/
"use strict";

L.Control.Dialogue = L.Control.extend({
  options: {
    position: "topright",
    iconMain: "📓",
    //"❒",
    // {value: 'String', 'label': 'String', items?: [items]}
    id: "",
    additionalClass: "",
	content: "",
	onClick: function onSelect() {}
  },
  
  
  onAdd: function onAdd(map) {
    var opts = this.options;
    this.container = L.DomUtil.create("div", "leaflet-control leaflet-control-boxzoom leaflet-control-select".concat(this.options.additionalClass || ""));
    this.container.setAttribute("id", opts.id);
    var icon = L.DomUtil.create("a", "leaflet-control-button reena-hack", this.container);
    icon.innerHTML = opts.iconMain;
    L.DomEvent.on(icon, "click", L.DomEvent.stop);
    L.DomEvent.on(icon, "click", opts.onClick, this);
    L.DomEvent.disableClickPropagation(this.container);
    L.DomEvent.disableScrollPropagation(this.container);
    return this.container;
  },
  
});
L.Control.dialogue = function (options) {
  return new L.Control.Dialogue(options);
};