
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "John Reference check",
    pages: [
        {
            questions: [
                {
                    type: "text",
                    name: "question1",
                    title: "What is John Position?"
                },
                {
                    type: "text",
                    name: "question2",
                    title: "Can you describe the job responsibilities?"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "question3",
                    title: "Could I briefly review John resume?",
                    choices: [
                    {
                    value: "item1",
                    text: "Yes"
                    },
                    {
                    value: "item2",
                    text: "No"
                    }
                    ]
                },
                {
                    type: "text",
                    name: "question4",
                    title: "What was his starting and ending salary?"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "question4",
                    title: "Did he miss a lot of work?  ",
                    choices: [
                     {
                      value: "item1",
                      text: "Yes"
                     },
                     {
                      value: "item2",
                      text: "No"
                     }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question5",
                    title: "Was he frequently late? ",
                    choices: [
                    {
                    value: "item1",
                    text: "Yes"
                    },
                    {
                    value: "item2",
                    text: "No"
                    }
                    ]
                }
            ]
        },{
            questions: [
                {
                    type: "text",
                    name: "question6",
                    title: "How did John support co-workers?"
                },
                {
                    type: "radiogroup",
                    name: "question7",
                    title: "Did he prefer to work on a team or independently?",
                    choices: [
                     {
                      value: "item1",
                      text: "Team"
                     },
                     {
                      value: "item2",
                      text: "Independently"
                     },
                     {
                      value: "item3",
                      text: "Both"
                    }
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "Is he currently working in a group?",
                    choices: [
                    {
                    value: "item1",
                    text: "Yes"
                    },
                    {
                    value: "item2",
                    text: "No"
                    }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question1",
                    title: "How was long he spend everyday to do the project?",
                    hasOther: true,
                    choices: [
                    {
                    value: "item1",
                    text: "8hrs"
                    },
                    {
                    value: "item2",
                    text: "10hrs"
                    },
                    {
                    value: "item3",
                    text: "Less than 8hrs"
                    }
                    ],
                    otherText: "More than 10hrs"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });