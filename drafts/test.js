
// Constants: XSS features
URL = '(http://)|(https://)'
SYMBOLS = "[<>,\'\"/]&?\{\}"
WORDS = "(alert)|(script)|(%3c)|(%3e)|(%20)|(onerror)|(onload)|(eval)|(src=)|(prompt)|(onclick)|(document)|(window)|(iframe)|(location)|(img)|(div)|(break)|(.js)"

let train = (file, isXss) => {
    let x = [], y = []
    const reader = new FileReader()
    if (file) {
        let f = reader.readAsText(file)
    }
    return x, y
}

// Voting
import {
VotingClassifier,
DecisionTreeClassifier,
KNeighborsClassifier
} from 'scikitjs'

const X = [
[1, 2],
[2, 1],
[2, 2],
[3, 1],
[4, 4]
]

const y = [0, 0, 1, 1, 1]
const voter = new VotingClassifier({
estimators: [
    ['knn', new KNeighborsClassifier({nNeighbor: 10, weights: "distance"})],
    ['dt', new DecisionTreeClassifier()]
]
})

await voter.fit(X, y)
assert.deepEqual(voter.predict(X).arraySync(), [1, 1, 1, 1, 1])

module.exports = function(data) {
    return voter.predict(data)
}