from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS para permitir solicitudes desde http://localhost:5173

# Datos de ejemplo
items = [
    {"id": 1, "name": "Elemento 12"},
    {"id": 2, "name": "Elemento 2"},
    {"id": 3, "name": "Elemento 3"}
]

@app.route('/api/items', methods=['GET'])
def get_items():
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)