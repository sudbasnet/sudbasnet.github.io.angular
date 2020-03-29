const jsonText = [
    {
        "title": "Start",
        "tags": "",
        "body": "Hi.^1200 I'm Sudeep.^1200 Welcome to my website...\n[[Valar Morghulis!|valar]]\n[[Howdy!|conversation]]\n[[Hey!|conversation]]\n",
        "position": {
            "x": -868,
            "y": -337
        },
        "colorID": "2"
    },
    {
        "title": "conversation",
        "tags": "",
        "body": "hmm..\n[[Tell me about yourself.|intro]]\n[[Your website is not too bad!|idle]]\n",
        "position": {
            "x": -595,
            "y": -134
        },
        "colorID": "1"
    },
    {
        "title": "valar",
        "tags": "",
        "body": "Valar Dohaeris!\n[[hmm...|conversation]]\n",
        "position": {
            "x": -593,
            "y": -428
        },
        "colorID": "0"
    },
    {
        "title": "intro",
        "tags": "",
        "body": "Well, I have 4.5 years of professional experience in Software Dev, and I recently earned a Master's degree in Computer Science.\n[[Tell me about your professional experience.|work]]\n[[When did you graduate?|mscs]]\n[[Where did you graduate from?|mscs]]\n\n",
        "position": {
            "x": -286,
            "y": -130
        },
        "colorID": "0"
    },
    {
        "title": "mscs",
        "tags": "",
        "body": "I got my M.Sc. degree in Aug-2019 from the University of Nebraska - Lincoln.\n[[Why did you decide to get a Master's degree?|whymasters]]\n[[What was your focus on during your studies?|gradwork]]\n[[And what was your professional work about?|work]]",
        "position": {
            "x": 7,
            "y": 138
        },
        "colorID": "0"
    },
    {
        "title": "jobsearch",
        "tags": "",
        "body": "I'm looking for jobs right now.\n[[What are your interests?|interests]]",
        "position": {
            "x": 657,
            "y": -137
        },
        "colorID": "0"
    },
    {
        "title": "interests",
        "tags": "",
        "body": "My interests are in Software Development and Data Science.\n[[What kind of skills you got?|skills]]\n[[How do I contact you?|email]]",
        "position": {
            "x": 939,
            "y": -136
        },
        "colorID": "0"
    },
    {
        "title": "skills",
        "tags": "",
        "body": "I have professional experience with Java and Oracle on Windows and Linux systems. I'm pretty good with Python, Django, R, JavaScript, React, PHP and HTML/CSS as well.\n[[Lets look at your resume.|resume]]\n[[How can we get in touch?|email]]",
        "position": {
            "x": 1227,
            "y": -137
        },
        "colorID": "0"
    },
    {
        "title": "work",
        "tags": "",
        "body": "I primarily worked with Java and Oracle PL/SQL to develop ETL tools and databases for large-scale Enterprise data solutions.\n[[So, why do Masters?|whymasters]]\n[[Did you also work during your studies?|gradwork]]\n[[Where can I find more details?|resumepre]]\n",
        "position": {
            "x": 8,
            "y": -135
        },
        "colorID": "0"
    },
    {
        "title": "email",
        "tags": "",
        "body": "You can contact me through email: sudbasnet10@gmail.com\n[[Oh, and your resume? |resume]]",
        "position": {
            "x": 1061,
            "y": 142
        },
        "colorID": "0"
    },
    {
        "title": "gradwork",
        "tags": "",
        "body": "I was primarily involved in research and development on spatial-data mining and Agent-based Modeling. I used Python, Java, R, JavaScript and SQL.\n[[I'd like to know more.|resumepre]]\n[[What's next?|jobsearch]]\n",
        "position": {
            "x": 359,
            "y": -142
        },
        "colorID": 0
    },
    {
        "title": "whymasters",
        "tags": "",
        "body": "I am a career-oriented person, I decided to study to further my knowledge in Computer Science, and for better work opportunities. \n[[How did it go?|gradwork]]",
        "position": {
            "x": 355,
            "y": 139
        },
        "colorID": 0
    },
    {
        "title": "resumepre",
        "tags": "",
        "body": "Please have a look at my resume\n[[What are you up to these days?|jobsearch]]",
        "position": {
            "x": 363,
            "y": -427
        },
        "colorID": 0
    },
    {
        "title": "idle",
        "tags": "",
        "body": "Cool\n[[Ok, now tell me about yourself. |intro]]",
        "position": {
            "x": -600,
            "y": 163
        },
        "colorID": 0
    },
    {
        "title": "resume",
        "tags": "",
        "body": "Please find my resume at: \n[[RESTART! |Start]]",
        "position": {
            "x": 1413,
            "y": 139
        },
        "colorID": 0
    }
];

/* 
YARN is a software that can be used to generate a conversation-like JSON
text, we need to parse this text to use in our application
*/
function parseYarn(jsonText) {
    let conversation = {};
    jsonText.forEach(conv => {
        let body = conv["body"].split("\n");
        let qExp: RegExp = /^\[\[.*\]\]$/;
        let questions = [];
        body.forEach((q, i) => {
            if (qExp.test(q)) {
                let q_text = q.replace("[[", "").replace("]]", "");
                questions.push(
                    {
                        "id": i,
                        "question": q_text.split("|")[0],
                        "goto": q_text.split("|")[1]
                    }
                );
            }
        });
        conversation[conv["title"]] = { "tags": "", "message": body[0], "questions": questions };
    });
    return conversation;
}

export const DIALOGS = parseYarn(jsonText);
