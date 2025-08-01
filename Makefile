dev:
	rm -rf .next && npm run dev

test-lint:
	npx eslint . --ext .js,.jsx,.ts,.tsx --ignore-pattern '.next/*' --fix

format:
	npx prettier . --write

test-all:
	test-lint && npm run format