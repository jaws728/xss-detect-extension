from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import re
import pickle

app = Flask(__name__)
app.config.from_object(__name__)
# api = Api(app)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/')
def hello():
    return 'Hello'

# Constants: XSS Features
URL = '(http://)|(https://)'
SYMBOLS = "[<>,\'\"/]&?\{\}"
WORDS = "(alert)|(script)|(%3c)|(%3e)|(%20)|(onerror)|(onload)|(eval)|(src=)|(prompt)|(onclick)|(document)|(window)|(iframe)|(location)|(img)|(div)|(break)|(.js)"
# Extract Features
def get_features(url):
    is_url = 1 if re.search(URL, url, re.IGNORECASE) else 0
    xss_symbol_count = len(re.findall(SYMBOLS, url, re.IGNORECASE))
    xss_word_count = len(re.findall(WORDS, url, re.IGNORECASE))
    return [len(url), is_url, xss_symbol_count, xss_word_count]


@app.route('/api/model', methods=['POST'])
def read_pkl():
    with open('D:\jaws7\Desktop\lab\code\plugin-backend\model_pkl' , 'rb') as f:
        model = pickle.load(f)
    q = request.args.get('q')
    print(q)
    # pred = model.predict([[113, 0, 0, 15]])
    pred = model.predict([get_features(q)])
    print(pred)
    if pred[0] != 0:
        return 'XSS attack founded!' #render_template('popup.html')
    return 'This site is safe.'


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


if __name__ == '__main__':
    app.run(debug=True)
    # q = 'http://xss.xiejiahe.com/level1?name=<script>alert(1)</script>'
    # with open('D:\jaws7\Desktop\lab\code\plugin-backend\model_pkl' , 'rb') as f:
    #     model = pickle.load(f)
    # f = get_features(q)
    # pred = model.predict([f])
    # print('@@', pred[0])