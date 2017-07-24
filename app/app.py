from flask import Flask, render_template
from firebase import firebase
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/suggestion')
def suggestion():
    return render_template('suggestion.html')

@app.route('/admin/suggestion/<string:key>')
def admin_suggestion(key):
    key=key
    return render_template('admin_suggestion.html', key=key)

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/<string:type>', methods=['GET'])
def question(type):
    type = type;
    return render_template('question.html', type=type)

@app.route('/<string:type>/answer/<string:key>', methods=['GET'])
def answer(type,key):
    type = type;
    key = key;
    return render_template('answer.html', key=key, type=type)

if __name__ == '__main__':
    app.run(debug=True)
