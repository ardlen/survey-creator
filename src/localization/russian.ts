import {editorLocalization} from "../editorLocalization";

export var russianTranslation = {
  //survey templates
  survey: {
    edit: "Редактирование",
    dropQuestion: "Создайте новый вопрос прямо здесь используя панели инструментов слева..",
    copy: "Копировать",
    addToToolbox: "Добавить в панель инструментов",
    deletePanel: "Удалить панель",
    deleteQuestion: "Удалить вопрос",
    convertTo: "Конвертировать в ..",
    drag: "Перетащить элемент"
  },
  //questionTypes
  qt: {
    default: "По умолчанию",
    checkbox: "Элемент Checkbox",
    comment: "Комментарии",
    imagepicker: "Выбор изображения",
    dropdown: "Списки Dropdown",
    file: "Файл",
    html: "Html",
    matrix: "Матрица (одиночный выбор)",
    matrixdropdown: "Матрица (множественный выбор)",
    matrixdynamic: "Матрица (динамические колонки)",
    multipletext: "Многострочный текст",
    panel: "Панель",
    paneldynamic: "Панель (динамическая)",
    radiogroup: " Элемент Radiogroup",
    rating: "Рейтинг",
    text: "Одиночный воод",
    boolean: "Логическое значение",
    expression: "Выражение",
    flowpanel: "Flow Panel"
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survey",
    settings: "Настройки опроса",
    editSurvey: "Редактировать опрос",
    addNewPage: "Добавить новую страницу",
    moveRight: "Scroll to the Right",
    moveLeft: "Scroll to the Left",
    deletePage: "Delete Page",
    editPage: "Edit Page",
    edit: "Edit",
    newPageName: "страница",
    newQuestionName: "вопрос",
    newPanelName: "панель",
    newTextItemName: "техт",
    testSurvey: "Тест опроса",
    testSurveyAgain: "Протестировать опрос снова",
    testSurveyWidth: "Survey width: ",
    embedSurvey: "Embed Survey",
    translation: "Translation",
    saveSurvey: "Сохранить опрос",
    designer: "Дизайнер опросов",
    jsonEditor: "JSON Editor",
    undo: "Отменить",
    redo: "Вернуть",
    options: "Опции",
    generateValidJSON: "Сгенерировать JSON",
    generateReadableJSON: "Сгенерировать читаемый JSON",
    toolbox: "Панель инструментов",
    toolboxGeneralCategory: "Основные",
    delSelObject: "Удалить выбранный объект",
    editSelObject: "Редактировать выбранный объект",
    correctJSON: "Поправтье пожйлуста JSON.",
    surveyResults: "Результаты опроса: ",
    surveyResultsTable: "В таблицу",
    surveyResultsJson: "Как JSON",
    resultsTitle: "Заголовок Опроса",
    resultsName: "Наименование Опроса",
    resultsValue: "Значение ответа",
    resultsDisplayValue: "Отобразить значение",
    modified: "Изменено",
    saving: "Сохранение",
    saved: "Сохранено",
    saveError: "Ошибка! Измененный контент не сохранен !.",
    translationAddLanguage: "Выберите язык перевода",
    translationShowAllStrings: "Показать все строки",
    translationShowAllPages: "Показать все страницы ",
    translationNoStrings: "Нет строк для перевода. Пожайлуста, изментите фильтр.",
    translationExportToSCVButton: "Экспорт в CSV",
    translationImportFromSCVButton: "Импорт из CSV",
    translationMergeLocaleWithDefault: "Merge {0} with default locale",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    fpAddQuestion: "Add question..."
  },
  //Property names in table headers
  pel: {
    isRequired: "Required?"
  },
  //Property Editors
  pe: {
    apply: "Применить",
    ok: "OK",
    cancel: "Отмена",
    reset: "Сброс",
    close: "Закрыть",
    delete: "Удалить",
    addNew: "Добавить новый",
    addItem: "Click to add an item...",
    removeAll: "Удалить все",
    edit: "Редактировать",
    itemValueEdit: "Visible If",
    editChoices: "Edit Choices",
    move: "Move",
    empty: "<empty>",
    notEmpty: "<edit value>",
    fastEntry: "Fast Entry",
    formEntry: "Form Entry",
    testService: "Test the service",
    conditionSelectQuestion: "Select question...",
    conditionValueQuestionTitle: "Please enter/select the value",
    conditionButtonAdd: "Add",
    conditionButtonReplace: "Replace",
    conditionHelp:
        "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
        "Please enter an expression. You may use curly brackets to get access to the question values: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    conditionShowMoreUrl:
        "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Available questions:",
    cellsEmptyRowsColumns: "There is should be at least one column or row",

    propertyIsEmpty: "Please enter a value",
    value: "Value",
    text: "Text",
    rowid: "Row ID",
    imageLink: "Image Link",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",

    url: "URL",
    path: "Path",
    valueName: "Value name",
    titleName: "Title name",

    hasOther: "Has other item",
    otherText: "Other item text",
    name: "Name",
    title: "Title",
    cellType: "Cell type",
    colCount: "Column count",
    choicesOrder: "Select choices order",
    visible: "Is visible?",
    isRequired: "Is required?",
    startWithNewLine: "Is start with new line?",
    rows: "Row count",
    placeHolder: "Input place holder",
    showPreview: "Is image preview shown?",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size in bytes",
    imageHeight: "Image height",
    imageWidth: "Image width",
    rowCount: "Row count",
    columnLayout: "Columns layout",
    addRowLocation: "Add row button location",
    addRowText: "Add row button text",
    removeRowText: "Remove row button text",
    minRateDescription: "Minimum rate description",
    maxRateDescription: "Maximum rate description",
    inputType: "Input type",
    optionsCaption: "Options caption",
    defaultValue: "Default value",
    cellsDefaultRow: "Default cells texts",

    surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "Edit: {0}",

    maxLength: "Maximum length",

    //survey
    showTitle: "Show/hide title",
    locale: "Default language",
    mode: "Mode (edit/read only)",
    clearInvisibleValues: "Clear invisible values",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "Show page titles",
    showPageNumbers: "Show page numbers",
    pagePrevText: "Page previous button text",
    pageNextText: "Page next button text",
    completeText: "Complete button text",
    startSurveyText: "Start button text",
    showNavigationButtons: "Show navigation buttons (default navigation)",
    showPrevButton: "Show previous button (user may return on previous page)",
    firstPageIsStarted: "The first page in the survey is a started page.",
    showCompletedPage: "Show the completed page at the end (completedHtml)",
    goNextPageAutomatic:
        "On answering all questions, go to the next page automatically",
    showProgressBar: "Show progress bar",
    questionTitleLocation: "Question title location",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Show question numbers",
    questionTitleTemplate:
        "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Question error location",
    focusFirstQuestionAutomatic: "Focus first question on changing the page",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "Maximum time to finish the survey",
    maxTimeToFinishPage: "Maximum time to finish a page in the survey",
    showTimerPanel: "Show timer panel",
    showTimerPanelMode: "Show timer panel mode",
    renderMode: "Render mode",
    allowAddPanel: "Allow adding a panel",
    allowRemovePanel: "Allow removing the panel",
    panelAddText: "Adding panel text",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Show all elements on one page",

    tabs: {
      general: "Основные",
      fileOptions: "Опции",
      html: "Html Редактор",
      columns: "Колонки",
      rows: "Строки",
      choices: "Выбор",
      items: "Элемент",
      visibleIf: "Visible If",
      enableIf: "Enable If",
      requiredIf: "Required If",
      rateValues: "Rate Values",
      choicesByUrl: "Choices from Web",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      validators: "Validators",
      navigation: "Navigation",
      question: "Question",
      completedHtml: "Completed Html",
      loadingHtml: "Loading Html",
      timer: "Timer/Quiz",
      triggers: "Triggers",
      templateTitle: "Template title"
    },
    editProperty: "Edit property '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Copy value from: ",
    triggerRunExpression: "Run this Expression:",
    triggerSetValue: "to: ",
    triggerIsVariable: "Do not put the variable into the survey result."
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged"
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals"
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    standard: "No bootstrap",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Select the page to test it:",
    showInvisibleElements: "Show invisible elements"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "complete survey",
    setvaluetrigger: "set value",
    copyvaluetrigger: "copy value",
    runexpressiontrigger: "run expression",
    visibletrigger: "change visibility"
  },
  //Properties
  p: {
    name: "Наименование",
    title: {
      name: "Заголовок",
      title: "Оставтье пустым, если поле 'Наименование' совпадает с заголовком"
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
    minValue: "minimum value",
    maxValue: "maximum value",
    minLength: "minimum length",
    maxLength: "maximum length",
    allowDigits: "allow digits",
    minCount: "minimum count",
    maxCount: "maximum count",
    regex: "regular expression"
  }

  };

editorLocalization.locales["ru"] = russianTranslation;
