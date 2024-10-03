from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') #whenever someone visits the homepage
def home():
    return render_template('index.html') #returns index.html. 
        #render_template auto-looks in a templates folder
@app.route('/about') 
def home():
    return render_template('about.html')
@app.route('/events')
def home():
    return render_template('events.html') 

if __name__ == "__main__":
    app.run(debug=True) #starts the server