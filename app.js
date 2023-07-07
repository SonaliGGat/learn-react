/**for nested html */

const parent =React.createElement('div',{id:"parent"},
[
    React.createElement('div',{id:"child"},
[React.createElement('h1',{},'I am an h1 tag here'),React.createElement('h2',{},'I am an h2 tage here')]
),
React.createElement('div',{id:"child2"},
[React.createElement('h1',{},'I am an h1 tag here'),React.createElement('h2',{},'I am an h2 tage here')]
)
]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);