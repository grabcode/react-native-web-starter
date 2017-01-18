import { configure } from '@kadira/storybook';

const req = require.context('../../src/stories', true);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
