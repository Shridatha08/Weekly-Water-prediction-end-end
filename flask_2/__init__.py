# /flask_2/__init__.py
from flask import Flask,request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__)
app.debug = True
model = pickle.load(open('mech.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('mech.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction[0], 2)

    return render_template('mech.html', prediction_text='Water prediction should be {} litres'.format(output))


if __name__ == "__main__":
    app.run(debug=True)
    
