# /flask_0/__init__.py
from flask import Flask,request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__)
app.debug = True
# model = pickle.load(open('mb.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('front.html')

    
