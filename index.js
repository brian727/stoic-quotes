var quotes = [
    '"Waste no more time arguing what a good man should be. Be one." -Marcus Aurelius',
    '"We are more often frightened than hurt; and we suffer more in imagination than in reality." –Seneca',
    '"Curb your desire—don’t set your heart on so many things and you will get what you need." –Epictetus',
    '"I begin to speak only when I’m certain what I’ll say isn’t better left unsaid." –Cato',
    '"Progress is not achieved by luck or accident, but by working on yourself daily." -Epictetus',
    '“We suffer more in imagination than in reality.” -Seneca',
    '“To be calm is the highest achievement of the self.” Zen Proverb',
    '“Between stimulus and response, there is a space. In that space is our power to choose our response.” -Viktor Frankl',
    '“Life is very short and anxious for those who forget the past, neglect the present, and fear the future.” -Seneca',
    '“The whole future lies in uncertainty: live immediately.” -Seneca,',
    '“It’s not that we have little time, but more that we waste a good deal of it.” -Seneca',
    '“The willing are led by fate, the reluctant dragged.” -Cleanthes',

]


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}