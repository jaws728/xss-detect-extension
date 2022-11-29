URL = '(http://)|(https://)'
SYMBOLS = "[<>,\'\"/]&?\{\}"
WORDS = "(alert)|(script)|(%3c)|(%3e)|(%20)|(onerror)|(onload)|(eval)|(src=)|(prompt)|(onclick)|(document)|(window)|(iframe)|(location)|(img)|(div)|(break)|(.js)"

def get_features(url):
    is_url = 1 if re.search(URL, url, re.IGNORECASE) else 0
    xss_symbol_count = len(re.findall(SYMBOLS, url, re.IGNORECASE))
    xss_word_count = len(re.findall(WORDS, url, re.IGNORECASE))
    return [len(url), is_url, xss_symbol_count, xss_word_count]

@app.route('/api', methods=['POST'])
def read_pkl():
    with open('model_path' , 'rb') as f:
        model = pickle.load(f)
    q = request.args.get('q')
    print(q)
    pred = model.predict([get_features(q)])
    print(pred)
    if pred[0] != 0:
        return 'There is a XSS attack!'
    return 'This site is safe.'