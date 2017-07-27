from flask import Flask, render_template
from firebase import firebase
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/suggestion')
def suggestion():
    return render_template('suggestion.html')

@app.route('/question_suggestion')
def question_suggestion():
    return render_template('question_suggestion.html')

@app.route('/admin_suggestion')
def admin_suggestion():
    return render_template('admin_question_list.html')

@app.route('/admin_edit')
def admin_edit():
    return render_template('admin_edit.html')

@app.route('/admin/suggestion/<string:key>')
def admin_suggestion_specific(key):
    key=key
    return render_template('admin_suggestion.html', key=key)

@app.route('/admin/question_suggestion/<string:key>')
def admin_question_suggestion(key):
    key=key
    return render_template('admin_question_suggestion.html', key=key)

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/admin_add')
def admin_add():
    return render_template('admin_add.html')

@app.route('/<string:type>', methods=['GET'])
def question(type):
    type = type;
    return render_template('question.html', type=type)

@app.route('/admin_edit/<string:type>', methods=['GET'])
def admin_edit_question(type):
    type = type;
    return render_template('admin_edit_question.html', type=type)

@app.route('/admin_edit/<string:type>/<string:key>', methods=['GET'])
def admin_edit_question_specific(type, key):
    type = type;
    key = key;
    return render_template('admin_edit_question_specific.html', key=key, type=type)

@app.route('/<string:type>/answer/<string:key>', methods=['GET'])
def answer(type,key):
    type = type;
    key = key;
    return render_template('answer.html', key=key, type=type)

if __name__ == '__main__':
    app.run(debug=True)
