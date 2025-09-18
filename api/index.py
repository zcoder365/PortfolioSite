from flask import Flask, render_template

# create flask app
app = Flask(__name__, template_folder="../templates/", static_folder="../static/")

# create landing page/route
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/read-more/promptl")
def read_more_promptl():
    return render_template('more-promptl.html')

@app.route("/read-more/boggle")
def read_more_boggle():
    return render_template('more-boggle.html')

@app.route("/read-more/friendship-bracelet-visualizer")
def read_more_bracelet():
    return render_template('more-friendship-bracelets.html')

@app.route("/read-more/my-series-of-fortunate-events")
def read_more_fortunate_events():
    return render_template('more-msofe.html')

# run the app using port 5001
if __name__ == '__main__':
    app.run(debug=True, port=5001)