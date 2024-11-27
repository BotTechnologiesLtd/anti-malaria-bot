from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load("malaria_model.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    symptoms = np.array([data['Fever'], data['Chills'], data['Headache'], data['Nausea'], data['Fatigue']]).reshape(1, -1)
    prediction = model.predict_proba(symptoms)[0][1]
    return jsonify({"Malaria Risk": round(prediction * 100, 2)})

if __name__ == '__main__':
    app.run(debug=True)
