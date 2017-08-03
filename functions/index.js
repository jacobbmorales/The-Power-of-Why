const functions = require('firebase-functions');
const firebase = require('firebase');

exports.admin = functions.https.onRequest((req, res) => {
    res.status(200).send('<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Admin Panel</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">Admin Panel</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="foo"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script>\n' +
        '    var config = {\n' +
        '        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",\n' +
        '        authDomain: "power-of-why.firebaseapp.com",\n' +
        '        databaseURL: "https://power-of-why.firebaseio.com/",\n' +
        '        projectId: "power-of-why",\n' +
        '        storageBucket: "power-of-why.appspot.com",\n' +
        '        messagingSenderId: "90138298651"\n' +
        '    };\n' +
        '    firebase.initializeApp(config);\n' +
        '    firebase.auth().onAuthStateChanged(function (user) {\n' +
        '        if (user) {\n' +
        '            document.getElementById("foo").innerHTML = \'<div id="admin_panel"></div>\';\n' +
        '\n' +
        '        }\n' +
        '        else{\n' +
        '            document.getElementById("foo").innerHTML = \'<div id="admin_panel"></div>\';\n' +
        '        }\n' +
        '    });\n' +
        '</script>\n' +
        '\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/signin.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/admin_panel.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>')
})

exports.admin_add = functions.https.onRequest((req, res) => {
    res.status(200).send('<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Add Content</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">Add Content</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="admin_add"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script type="text/javascript" src="/admin_add.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>')
})
exports.admin_edit = functions.https.onRequest((req, res) => {
    res.status(200).send('<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Admin Sign In</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">Category to edit</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="admin_edit"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>\n' +
        '<script>\n' +
        '    var config = {\n' +
        '        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",\n' +
        '        authDomain: "power-of-why.firebaseapp.com",\n' +
        '        databaseURL: "https://power-of-why.firebaseio.com/",\n' +
        '        projectId: "power-of-why",\n' +
        '        storageBucket: "power-of-why.appspot.com",\n' +
        '        messagingSenderId: "90138298651"\n' +
        '    };\n' +
        '    firebase.initializeApp(config);\n' +
        '    firebase.auth().onAuthStateChanged(function (user) {\n' +
        '        if (user) {\n' +
        '            authenticated = true;\n' +
        '        }\n' +
        '    })\n' +
        '</script>\n' +
        '<script>\n' +
        '    var answer_key = "{{ key }}";\n' +
        '</script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/admin_edit.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>')
})

function admin_edit_question_build(type) {
    const string = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Admin Edit</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">Edit ' + type + ' questions</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="admin_edit_questions"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script>\n' +
        '    var question_type = "{{ type }}";\n' +
        '</script>\n' +
        '<script type="text/javascript" src="/admin_edit_question.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>'
    return string;
}

exports.admin_edit_question = functions.https.onRequest((req, res) => {
    const path = req.path.split('/');
    var type = path[2]
    var config = {
        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
        authDomain: "power-of-why.firebaseapp.com",
        databaseURL: "https://power-of-why.firebaseio.com/",
        projectId: "power-of-why",
        storageBucket: "power-of-why.appspot.com",
        messagingSenderId: "90138298651"
    };
    firebase.initializeApp(config);
// Import Admin SDK
    var admin = require("firebase");
    var db = admin.database();
    var ref = db.ref();
    var postsRef = ref.child('current_type');
    postsRef.set({
        type: type,
    });
    html = admin_edit_question_build(type);
    res.status(200).send(html);
})

function admin_edit_question_specific_build(type) {
    const string = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>The Power of Why</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">Edit Question</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="admin_edit_question_specific"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script>\n' +
        '    var answer_key = "{{ key }}";\n' +
        '    var question_type = "{{ type }}";\n' +
        '</script>\n' +
        '<script type="text/javascript" src="/admin_edit_question_specific.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>'
    return string;
}

exports.admin_edit_question_specific = functions.https.onRequest((req, res) => {
    const path = req.path.split('/');
    var type = path[2]
    var question = path[3]
    var config = {
        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
        authDomain: "power-of-why.firebaseapp.com",
        databaseURL: "https://power-of-why.firebaseio.com/",
        projectId: "power-of-why",
        storageBucket: "power-of-why.appspot.com",
        messagingSenderId: "90138298651"
    };
    firebase.initializeApp(config);
// Import Admin SDK
    var admin = require("firebase");
    var db = admin.database();
    var ref = db.ref();
    var postsRef = ref.child('current_type');
    postsRef.set({
        type: type,
        question: question
    });
    html = admin_edit_question_specific_build(type);
    res.status(200).send(html);
})

function admin_question_list_build() {
    const string = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Suggestion List</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">User Suggestions</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="admin"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>\n' +
        '<script>\n' +
        '    var config = {\n' +
        '        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",\n' +
        '        authDomain: "power-of-why.firebaseapp.com",\n' +
        '        databaseURL: "https://power-of-why.firebaseio.com/",\n' +
        '        projectId: "power-of-why",\n' +
        '        storageBucket: "power-of-why.appspot.com",\n' +
        '        messagingSenderId: "90138298651"\n' +
        '    };\n' +
        '    firebase.initializeApp(config);\n' +
        '    firebase.auth().onAuthStateChanged(function (user) {\n' +
        '        if (user) {\n' +
        '            authenticated = true;\n' +
        '        }\n' +
        '    })\n' +
        '</script>\n' +
        '<script>\n' +
        '    var answer_key = "{{ key }}";\n' +
        '</script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/admin_question_list.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>'
    return string;
}

exports.admin_question_list = functions.https.onRequest((req, res) => {
    html = admin_question_list_build();
    res.status(200).send(html);
})

function admin_question_suggestion_build() {
    const string = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Admin Sign In</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">User Suggestion</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="admin_question_suggestion"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>\n' +
        '<script>\n' +
        '    var config = {\n' +
        '        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",\n' +
        '        authDomain: "power-of-why.firebaseapp.com",\n' +
        '        databaseURL: "https://power-of-why.firebaseio.com/",\n' +
        '        projectId: "power-of-why",\n' +
        '        storageBucket: "power-of-why.appspot.com",\n' +
        '        messagingSenderId: "90138298651"\n' +
        '    };\n' +
        '    firebase.initializeApp(config);\n' +
        '    firebase.auth().onAuthStateChanged(function (user) {\n' +
        '        if (user) {\n' +
        '            authenticated = true;\n' +
        '        }\n' +
        '    })\n' +
        '</script>\n' +
        '<script>\n' +
        '    var answer_key = "{{ key }}";\n' +
        '</script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/admin_question_suggestion.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>'
    return string;
}

exports.admin_question_suggestion = functions.https.onRequest((req, res) => {
    const path = req.path.split('/');
    var question = path[3]
    var config = {
        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
        authDomain: "power-of-why.firebaseapp.com",
        databaseURL: "https://power-of-why.firebaseio.com/",
        projectId: "power-of-why",
        storageBucket: "power-of-why.appspot.com",
        messagingSenderId: "90138298651"
    };
    firebase.initializeApp(config);
// Import Admin SDK
    var admin = require("firebase");
    var db = admin.database();
    var ref = db.ref();
    var postsRef = ref.child('current_type');
    postsRef.set({
        question: question
    });
    html = admin_question_suggestion_build();
    res.status(200).send(html);
})


function admin_suggestion_build() {
    const string ='<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Admin Sign In</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">User Suggestion</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="admin_suggestion"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>\n' +
        '<script>\n' +
        '    var config = {\n' +
        '        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",\n' +
        '        authDomain: "power-of-why.firebaseapp.com",\n' +
        '        databaseURL: "https://power-of-why.firebaseio.com/",\n' +
        '        projectId: "power-of-why",\n' +
        '        storageBucket: "power-of-why.appspot.com",\n' +
        '        messagingSenderId: "90138298651"\n' +
        '    };\n' +
        '    firebase.initializeApp(config);\n' +
        '    firebase.auth().onAuthStateChanged(function (user) {\n' +
        '        if (user) {\n' +
        '            authenticated = true;\n' +
        '        }\n' +
        '    })\n' +
        '</script>\n' +
        '<script>\n' +
        '    var answer_key = "{{ key }}";\n' +
        '</script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/admin_suggestion.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>'
    return string;
}

exports.admin_suggestion = functions.https.onRequest((req, res) => {
    const path = req.path.split('/');
    var question = path[3]
    var config = {
        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
        authDomain: "power-of-why.firebaseapp.com",
        databaseURL: "https://power-of-why.firebaseio.com/",
        projectId: "power-of-why",
        storageBucket: "power-of-why.appspot.com",
        messagingSenderId: "90138298651"
    };
    firebase.initializeApp(config);
// Import Admin SDK
    var admin = require("firebase");
    var db = admin.database();
    var ref = db.ref();
    var postsRef = ref.child('current_type');
    postsRef.set({
        question: question
    });
    html = admin_suggestion_build();
    res.status(200).send(html);
})

function answer_build(type) {
    const string = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>The Power of Why</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div id="answer"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script type="text/javascript" src="/answer.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>'
    return string;
}

exports.answer = functions.https.onRequest((req, res) => {
    const path = req.path.split('/');
    var type = path[2]
    var question = path[4]
    var config = {
        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
        authDomain: "power-of-why.firebaseapp.com",
        databaseURL: "https://power-of-why.firebaseio.com/",
        projectId: "power-of-why",
        storageBucket: "power-of-why.appspot.com",
        messagingSenderId: "90138298651"
    };
    firebase.initializeApp(config);
// Import Admin SDK
    var admin = require("firebase");
    var db = admin.database();
    var ref = db.ref();
    var postsRef = ref.child('current_type');
    postsRef.set({
        type: type,
        question: question
    });
    html = answer_build(type);
    res.status(200).send(html);
})

function question_list_build(type) {
    const string = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>The Power of Why</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">' + type + ' questions</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="questions"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script type="text/javascript" src="/question_list.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>';
    return string;
}

exports.question_list = functions.https.onRequest((req, res) => {
    const path = req.path.split('/');
    var type = path[2]
    var config = {
        apiKey: "AIzaSyAoMDi3nrfpQgE3rtbptQF4vLVSzd-GE-4",
        authDomain: "power-of-why.firebaseapp.com",
        databaseURL: "https://power-of-why.firebaseio.com/",
        projectId: "power-of-why",
        storageBucket: "power-of-why.appspot.com",
        messagingSenderId: "90138298651"
    };
    firebase.initializeApp(config);
// Import Admin SDK
    var admin = require("firebase");
    var db = admin.database();
    var ref = db.ref();
    var postsRef = ref.child('current_type');
    postsRef.set({
        type: type
    });
    html = question_list_build(type);
    res.status(200).send(html);
})

exports.question_suggestion = functions.https.onRequest((req, res) => {
    res.status(200).send('<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Add a question</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">Suggest a Question for Review</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="question_suggestion"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script type="text/javascript" src="/question_suggestion.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>'
    );
})

exports.suggestion = functions.https.onRequest((req, res) => {
    res.status(200).send('<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <link rel="stylesheet" type="text/css" href="/style">\n' +
        '    <title>Add a question</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="navbar"></div>\n' +
        '<div class="border">\n' +
        '    <div class=\'margin\'>\n' +
        '        <div class="text">\n' +
        '            <center>\n' +
        '                <h1 style="text-transform: uppercase">Suggest a Question for Review</h1>\n' +
        '            </center>\n' +
        '        </div>\n' +
        '        <div id="suggestion"></div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script type="text/javascript" src="/suggestion.bundle.js"></script>\n' +
        '<script type="text/javascript" src="/navbar.bundle.js"></script>\n' +
        '</body>\n' +
        '</html>\n');
})
