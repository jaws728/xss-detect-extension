import re
import pandas as pd
from sklearn.model_selection import train_test_split as tts
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score
import pickle

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

def read_data(file, x, y, isXss):
    with open(file) as f:
        for line in f:
            x.append(get_features(line))
            if isXss: y.append(1)
            else: y.append(0)
    return x


# Evaluate model
def evaluate(name, y_test, y_pred):  
    """Calculate the main metrics supporting multi-target cases for a given model.  

    Args:
        name (str): The trained model's name
        y_test (series): Contains the ground truth values (aka y_true)
        y_pred (series): Contains the predicted values for the test set
        
    Returns:
        df_metrics (DataFrame): The predicted metrics in a DataFrame
        
    """
    dict_metrics = {
        'Accuracy Score': accuracy_score(y_test, y_pred),
        'Confusion Matrix': confusion_matrix(y_test, y_pred),
        'Precision Score': precision_score(y_test, y_pred),
        'Recall Score': recall_score(y_test, y_pred),
        'F1 Score': f1_score(y_test, y_pred)
    }
    #df_metrics = pd.DataFrame.from_dict
    df_metrics = pd.DataFrame.from_dict(dict_metrics, orient="index")
    df_metrics.columns = [name]
    return df_metrics


# 1. Create x and y to store datas
x = []
y = []

# 2. Read datas and get features: scrapy + github
read_data("/Users/p/Desktop/thesis/lab/datasets/gitee/xss-200000.txt", x, y, 1)
read_data("/Users/p/Desktop/thesis/lab/datasets/gitee/good-xss-200000.txt", x, y, 0)

# 3. Split datas into test and train: 0.6 of data using for train
x_train, x_test, y_train, y_test = tts(x, y, test_size=0.4, random_state=0)

knn = KNeighborsClassifier(n_neighbors=10, weights='distance')
dt = DecisionTreeClassifier(random_state=0)
knn_dt = VotingClassifier(estimators=[('knn', knn), ('dt', dt)], voting='hard')
y_pred_knn_dt = knn_dt.fit(x_train, y_train).predict(x_test)
print(evaluate("KNN + DT", y_test, y_pred_knn_dt))
with open('model_pkl', 'wb') as files:
    pickle.dump(knn_dt, files)

# load saved model and check
with open('model_pkl' , 'rb') as f:
    lr = pickle.load(f)
# lr.predict(x_test)
print(evaluate("PKL-MODEL", y_test, lr.predict(x_test)))
print(x_test)