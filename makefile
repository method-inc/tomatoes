setup:
	npm install

test:
	NODE_ENV='test' node_modules/.bin/mocha -R list -t 4000 test/*.test.js

publish: test
	git push github master
	npm prune
	npm publish

link:
	sudo npm link

.PHONY: setup test publish link