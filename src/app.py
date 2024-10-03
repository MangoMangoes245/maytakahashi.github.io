from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') #if someone visits the homepage 
def home():
    return render_template('index.html') #returns index.html. 
        #render_template auto-looks in a templates folder

if __name__ == "__main__":
    app.run(debug=True) #starts the server
