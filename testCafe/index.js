if (!window["%hammerhead%"]) {


//SurveyEditor.StylesManager.applyTheme("orange");


  SurveyEditor.editorLocalization.currentLocale = "ru";
  Survey.Survey.cssType = "bootstrap";
  var editor = new SurveyEditor.SurveyEditor("editorElement");


  editor.haveCommercialLicense = true;
  editor.showOptions = true;
  editor.showState = true;
  window.editor = editor;


}
