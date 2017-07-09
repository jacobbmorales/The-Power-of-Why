from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/suggestion')
def suggestion():
    return render_template('suggestion.html')


@app.route('/science')
def science():
    return render_template('science.html')


@app.route('/sports')
def sports():
    return render_template('sports.html')


@app.route('/history')
def history():
    return render_template('history.html')


@app.route('/general_knowledge')
def general_knowledge():
    return render_template('general_knowledge.html')

@app.route('/answer')
def answer():
    return render_template('answer.html')

if __name__ == '__main__':
    app.run(debug=True)
