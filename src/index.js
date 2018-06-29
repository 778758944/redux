import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todoApp } from './reducer'
import App from './container/App'
import { HashRouter, Route } from 'react-router-dom'
import Test from './container/test'
import i18next from 'i18next'

i18next.init({
	lng: 'en_US',
	debug: true,
	resources: {
		en: {
			translation: {
				"key": "hello world"
			}
		},
		de: {
			translation: {
				"key": "hello welt"
			}
		},
		dev: {
			translation: {
				"key": "hello fallback"
			}
		}
	}
}, (err, t) => {
	console.log(t);
});

console.log(i18next);

i18next.changeLanguage('de');
console.log(i18next);


class Index extends React.Component{
	render() {
		return (
			<HashRouter>
					<div>
						<h1>{i18next.t('key')}</h1>
						<Route path="/" exact component={App} />
						<Route path="/test" component={Test} />
					</div>
			</HashRouter>
		)
	}
}

let store = createStore(todoApp);
store.subscribe(() => {
	console.log(store.getState());
});

render(
	<Provider store={store}>
			<Index />
	</Provider>, 
document.getElementById('root'));
