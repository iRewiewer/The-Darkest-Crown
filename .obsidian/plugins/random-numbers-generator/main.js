/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  seedValue: Math.floor(Math.random() * 10 ** 12),
  lowRange: 1,
  highRange: 100,
  spaceAfterNumber: true
};
var addText = (editor, text) => {
  const cursor = editor.getCursor();
  editor.replaceRange(text, cursor);
  editor.setCursor(cursor.line, cursor.ch + text.length);
};
var generateNumberCallback = async (editor, settings) => {
  const seed = parseFloat(`0.${settings.seedValue.toString()}`);
  const randomNumber = Math.floor((Math.random() + seed) % 1 * settings.highRange + settings.lowRange);
  const space = settings.spaceAfterNumber ? " " : "";
  addText(editor, `${randomNumber}${space}`);
};
var MyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    console.log("Loading Random Number Generator [v1.0]");
    const commands = [
      {
        id: "random-int",
        name: `Generate a random integer. Range can be modified in the plugin settings.`,
        editorCallback: (editor) => generateNumberCallback(editor, this.settings)
      },
      {
        id: "toggle-space-after-number",
        name: `Toggle the addition of a space character after generating a number.`,
        callback: () => {
          this.settings.spaceAfterNumber = this.settings.spaceAfterNumber ? false : true;
          new import_obsidian.Notice(`Space after number: ${this.settings.spaceAfterNumber ? "Enabled" : "Disabled"}`);
        }
      }
    ];
    for (const command of commands) {
      this.addCommand(command);
    }
    this.addSettingTab(new SettingsTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var SettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Seed").setDesc("Leave empty for a random one. (Default: secret)").addText((text) => text.setPlaceholder("Enter seed").setValue(this.plugin.settings.seedValue.toString()).onChange(async (value) => {
      this.plugin.settings.seedValue = parseInt(value.replace(/\D/g, (match) => match.charCodeAt(0).toString())) % 10 ** 12;
      if (isNaN(this.plugin.settings.seedValue)) {
        this.plugin.settings.seedValue = 0;
      }
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Low range value").setDesc("Set the low point of the random range. (Default: 1)").addText((text) => text.setPlaceholder("Enter number").setValue(this.plugin.settings.lowRange.toString()).onChange(async (value) => {
      this.plugin.settings.lowRange = parseInt(value.replace(/\D/g, ""));
      text.setValue(this.plugin.settings.lowRange.toString());
      if (isNaN(this.plugin.settings.seedValue)) {
        this.plugin.settings.seedValue = 1;
      }
      if (text.getValue() == "NaN") {
        text.setValue("");
      }
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("High range value").setDesc("Set the high point of the random range. (Default: 100)").addText((text) => text.setPlaceholder("Enter number").setValue(this.plugin.settings.highRange.toString()).onChange(async (value) => {
      this.plugin.settings.highRange = parseInt(value.replace(/\D/g, ""));
      text.setValue(this.plugin.settings.highRange.toString());
      if (isNaN(this.plugin.settings.seedValue)) {
        this.plugin.settings.seedValue = 100;
      }
      if (text.getValue() == "NaN") {
        text.setValue("");
      }
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Space after number").setDesc("Toggle the addition of a space character after generating a number. (Default: True)").addToggle((text) => text.setValue(this.plugin.settings.spaceAfterNumber).onChange(async (value) => {
      this.plugin.settings.spaceAfterNumber = value;
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuLy8gUmVtZW1iZXIgdG8gcmVuYW1lIHRoZXNlIGNsYXNzZXMgYW5kIGludGVyZmFjZXMhXHJcblxyXG5pbnRlcmZhY2UgU2V0dGluZ3Mge1xyXG4gICAgc2VlZFZhbHVlOiBudW1iZXI7XHJcbiAgICBsb3dSYW5nZTogbnVtYmVyO1xyXG4gICAgaGlnaFJhbmdlOiBudW1iZXI7XHJcbiAgICBzcGFjZUFmdGVyTnVtYmVyOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcclxuICAgIHNlZWRWYWx1ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwICoqIDEyKSksXHJcbiAgICBsb3dSYW5nZTogMSxcclxuICAgIGhpZ2hSYW5nZTogMTAwLFxyXG4gICAgc3BhY2VBZnRlck51bWJlcjogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCBhZGRUZXh0ID0gKGVkaXRvcjogRWRpdG9yLCB0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKTtcclxuICAgIGVkaXRvci5yZXBsYWNlUmFuZ2UodGV4dCwgY3Vyc29yKTtcclxuICAgIGVkaXRvci5zZXRDdXJzb3IoY3Vyc29yLmxpbmUsIGN1cnNvci5jaCArIHRleHQubGVuZ3RoKTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlTnVtYmVyQ2FsbGJhY2sgPSBhc3luYyAoZWRpdG9yOiBFZGl0b3IsIHNldHRpbmdzOiBTZXR0aW5ncykgPT4ge1xyXG4gICAgY29uc3Qgc2VlZCA9IHBhcnNlRmxvYXQoYDAuJHtzZXR0aW5ncy5zZWVkVmFsdWUudG9TdHJpbmcoKX1gKTtcclxuICAgIC8vIFNlZWRlZCByYW5kb20gbnVtYmVyIGluIFswLDEpXHJcbiAgICBjb25zdCByYW5kb21OdW1iZXI6IG51bWJlciA9IE1hdGguZmxvb3IoKChNYXRoLnJhbmRvbSgpICsgc2VlZCkgJSAxKSAqIHNldHRpbmdzLmhpZ2hSYW5nZSArIHNldHRpbmdzLmxvd1JhbmdlKTtcclxuXHJcbiAgICBjb25zdCBzcGFjZSA9IHNldHRpbmdzLnNwYWNlQWZ0ZXJOdW1iZXIgPyAnICcgOiAnJztcclxuICAgIGFkZFRleHQoZWRpdG9yLCBgJHtyYW5kb21OdW1iZXJ9JHtzcGFjZX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cclxuICAgIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgUmFuZG9tIE51bWJlciBHZW5lcmF0b3IgW3YxLjBdXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tYW5kcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdyYW5kb20taW50JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGBHZW5lcmF0ZSBhIHJhbmRvbSBpbnRlZ2VyLiBSYW5nZSBjYW4gYmUgbW9kaWZpZWQgaW4gdGhlIHBsdWdpbiBzZXR0aW5ncy5gLFxyXG4gICAgICAgICAgICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvcikgPT4gZ2VuZXJhdGVOdW1iZXJDYWxsYmFjayhlZGl0b3IsIHRoaXMuc2V0dGluZ3MpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAndG9nZ2xlLXNwYWNlLWFmdGVyLW51bWJlcicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBgVG9nZ2xlIHRoZSBhZGRpdGlvbiBvZiBhIHNwYWNlIGNoYXJhY3RlciBhZnRlciBnZW5lcmF0aW5nIGEgbnVtYmVyLmAsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2VBZnRlck51bWJlciA9IHRoaXMuc2V0dGluZ3Muc3BhY2VBZnRlck51bWJlciA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGBTcGFjZSBhZnRlciBudW1iZXI6ICR7dGhpcy5zZXR0aW5ncy5zcGFjZUFmdGVyTnVtYmVyID8gXCJFbmFibGVkXCIgOiBcIkRpc2FibGVkXCJ9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjb21tYW5kIG9mIGNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tbWFuZChjb21tYW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoaXMgYWRkcyBhIHNldHRpbmdzIHRhYiBzbyB0aGUgdXNlciBjYW4gY29uZmlndXJlIHZhcmlvdXMgYXNwZWN0cyBvZiB0aGUgcGx1Z2luXHJcbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuICAgIHBsdWdpbjogTXlQbHVnaW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTXlQbHVnaW4pIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoJ1NlZWQnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnTGVhdmUgZW1wdHkgZm9yIGEgcmFuZG9tIG9uZS4gKERlZmF1bHQ6IHNlY3JldCknKVxyXG4gICAgICAgICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignRW50ZXIgc2VlZCcpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VlZFZhbHVlLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uIGRpZ2l0IHdpdGggYXNjaWkgdmFsdWUgbW9kdWxvIDEgdHJpbGxpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZWVkVmFsdWUgPSBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgKG1hdGNoKSA9PiBtYXRjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKCkpKSAlICgxMCAqKiAxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMucGx1Z2luLnNldHRpbmdzLnNlZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VlZFZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnTG93IHJhbmdlIHZhbHVlJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ1NldCB0aGUgbG93IHBvaW50IG9mIHRoZSByYW5kb20gcmFuZ2UuIChEZWZhdWx0OiAxKScpXHJcbiAgICAgICAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dFxyXG4gICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdFbnRlciBudW1iZXInKVxyXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmxvd1JhbmdlLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uIGRpZ2l0IHdpdGggYXNjaWkgdmFsdWUgbW9kdWxvIDEgdHJpbGxpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sb3dSYW5nZSA9IHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubG93UmFuZ2UudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMucGx1Z2luLnNldHRpbmdzLnNlZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VlZFZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQuZ2V0VmFsdWUoKSA9PSBcIk5hTlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuc2V0VmFsdWUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoJ0hpZ2ggcmFuZ2UgdmFsdWUnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnU2V0IHRoZSBoaWdoIHBvaW50IG9mIHRoZSByYW5kb20gcmFuZ2UuIChEZWZhdWx0OiAxMDApJylcclxuICAgICAgICAgICAgLmFkZFRleHQodGV4dCA9PiB0ZXh0XHJcbiAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0VudGVyIG51bWJlcicpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaGlnaFJhbmdlLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uIGRpZ2l0IHdpdGggYXNjaWkgdmFsdWUgbW9kdWxvIDEgdHJpbGxpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5oaWdoUmFuZ2UgPSBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmhpZ2hSYW5nZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZWVkVmFsdWUgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LmdldFZhbHVlKCkgPT0gXCJOYU5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnNldFZhbHVlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdTcGFjZSBhZnRlciBudW1iZXInKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnVG9nZ2xlIHRoZSBhZGRpdGlvbiBvZiBhIHNwYWNlIGNoYXJhY3RlciBhZnRlciBnZW5lcmF0aW5nIGEgbnVtYmVyLiAoRGVmYXVsdDogVHJ1ZSknKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRleHQgPT4gdGV4dFxyXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNwYWNlQWZ0ZXJOdW1iZXIpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3BhY2VBZnRlck51bWJlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7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
