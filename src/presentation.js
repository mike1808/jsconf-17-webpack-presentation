/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import styled from 'react-emotion';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  GoToAction,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Fit,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide-forked';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

import Header from './components/Header';

// Require CSS
require('normalize.css');
require('./custom.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#03A9FC',
  },
  {
    primary: 'Barlow Condensed',
    secondary: 'Helvetica',
  }
);

const slideTransition = ['slide'];
const codeFontSize = 24;

const images = {
  optimization: require('./images/opt.jpg'),
  me: 'https://jsconf.am/static/SpeakerMichaelManukyan.jpg',
  teamable: require('./images/teamable.png'),
  webpack: require('./images/webpack2.png'),
  vendor1: require('./images/vendor-no-commons.png'),
  vendor2: require('./images/vendor-commons.png'),
};

preloader(images);

const Links = styled(List)`
  position: absolute;
  list-style: none;
`;

export default class Presentation extends Component {
  render() {
    return (
      <div>
        <Header />
        <Deck
          transition={slideTransition}
          transitionDuration={500}
          theme={theme}
          progress="number"
          contentWidth={1200}
        >
          <Slide transition={slideTransition}>
            <Heading size={1} lineHeight={1} textColor="tertiary">
              Creating Webpack 3 Config for Production From Scratch
            </Heading>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" width="100vw">
            <Layout>
              <Fit width={300} margin="0 10">
                <Heading size={4} textColor="primary">
                  <code>whoami</code>
                </Heading>
                <Image src={images.me} alt="me" />
              </Fit>
              <Fill margin="0 100">
                <List>
                  <ListItem>
                    <Text size={4} textColor="primary">
                      software engineer
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text size={4} textColor="primary">
                      mostly JavaScript
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text size={4} textColor="primary">
                      Product Team Lead at Teamable
                    </Text>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Agenda
            </Heading>
            <Layout>
              <Fill>
                <List ordered>
                  <ListItem>
                    <Link href="#overview">Overview</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#concepts">Concepts</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#coding">Coding Session</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#intro">Project Intro</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#workspace">Workspace</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#optimization">Otimization</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#styles">Styles Optimization</Link>
                  </ListItem>
                </List>
              </Fill>
              <Fill>
                <List ordered start={8}>
                  <ListItem>
                    <Link href="#styles">Styles Optimization</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#extra1">Extra 1</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#bundle-splitting">Bundle Splitting</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#caching">Caching</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#code-splitting">Code Splitting</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#extra2">Extra 2</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#analyze">Analyze</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#links">Further Materials</Link>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="overview">
            <Heading caps size={2} textColor="tertiary">
              Overview
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              JavaScript Modules
            </Heading>
            <List>
              <Appear><ListItem>Reusable</ListItem></Appear>
              <Appear><ListItem>Encapsulated</ListItem></Appear>
              <Appear><ListItem>Don't pollute the global scope</ListItem></Appear>
              <Appear><ListItem>Convenient</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              How to use JavaScript Modules?
            </Heading>
            <List>
              <Appear><ListItem>Script Tags</ListItem></Appear>
              <Appear><ListItem>Global Variable</ListItem></Appear>
              <Appear><ListItem>Namespace (require/import)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Varieties
            </Heading>
            <List>
              <Appear><ListItem>CommonJS</ListItem></Appear>
              <Appear><ListItem>AMD</ListItem></Appear>
              <Appear><ListItem>CommonJ + AMD (UMD)</ListItem></Appear>
              <Appear><ListItem>ES2015 modules</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Problems
            </Heading>
            <List>
              <Appear><ListItem>Every library use one of those approaches</ListItem></Appear>
              <Appear><ListItem>And they all have their dependencies</ListItem></Appear>
              <Appear><ListItem>They should work in the browser</ListItem></Appear>
              <Appear><ListItem>Solution: <strong>Webpack</strong></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Webpack
            </Heading>
            <List>
              <Appear><ListItem>
                Bundler, <em>not</em> a task runner
              </ListItem></Appear>
              <Appear><ListItem>
                Every asset becomes a <em>dependency</em> (js, css, html, png, etc)
              </ListItem></Appear>
              <Appear><ListItem>
                Static build (don't live in the runtime)
              </ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary">
            <Image src={images.webpack} />
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="concepts">
            <Heading caps size={2} textColor="tertiary">
              Concepts
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading caps>
              Core Concepts
            </Heading>
            <List>
              <Appear><ListItem><b>Entries</b> - Where to start bundling?</ListItem></Appear>
              <Appear><ListItem><b>Output</b> - Where to output?</ListItem></Appear>
              <Appear><ListItem><b>Loaders</b> - How to transform?</ListItem></Appear>
              <Appear><ListItem><b>Plugins</b> - How to bundle?</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Entries
            </Heading>
            <List>
              <Appear><ListItem>Where to start and follows the graph of dependencies</ListItem></Appear>
              <Appear><ListItem>Contextual root of what you want bundled</ListItem></Appear>
              <Appear>
                <CodePane
                  textSize={codeFontSize}
                  lang="javascript"
                  source={require('!raw-loader!./examples/entry.example')}
                />
              </Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Output
            </Heading>
            <List>
              <Appear><ListItem>Where to emit¹ the bundles²</ListItem></Appear>
              <Appear><ListItem>Has many configurable features</ListItem></Appear>
              <Appear>
                <CodePane
                  textSize={codeFontSize}
                  lang="javascript"
                  source={require('!raw-loader!./examples/output.example')}
                />
              </Appear>
            </List>
            <Appear>
              <Text textAlign="left">
                ¹ emit - produce
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                ² bundle - file containing the final versions of source files that have already
                undergone the loading and compilation process.
              </Text>
            </Appear>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Output Placeholders
            </Heading>
            <List>
              <Appear><ListItem><code>[path]</code> - Returns an entry path</ListItem></Appear>
              <Appear><ListItem><code>[name]</code> - Returns an entry name</ListItem></Appear>
              <Appear><ListItem><code>[ext]</code> - Returns an extension</ListItem></Appear>
              <Appear><ListItem><code>[hash]</code> - Returns the build hash</ListItem></Appear>
              <Appear><ListItem><code>[chunkhash]</code> - Returns a chunk¹ specific hash</ListItem></Appear>
            </List>
            <Appear>
              <Text textAlign="left">
                ¹ chunk - container for modules which typically becomes a bundle
              </Text>
            </Appear>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Loaders
            </Heading>
            <List>
              <Appear><ListItem>Webpack only understands JS files</ListItem></Appear>
              <Appear><ListItem>Tells how to create modules from other file formats</ListItem></Appear>
              <Appear><ListItem>Transform assets from form to another</ListItem></Appear>
              <Appear><ListItem><code>use: ['style-loader', 'css-loader']</code></ListItem></Appear>
              <Appear><ListItem>Read as <code>style(css(input))</code></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Loaders
            </Heading>
            <CodePane
              textSize={codeFontSize}
              lang="javascript"
              source={require('!raw-loader!./examples/loaders.example')}
            />
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Plugins
            </Heading>
            <List>
              <Appear><ListItem>Backbone of Wepback</ListItem></Appear>
              <Appear><ListItem>Have access to Webpack lifecycle hooks</ListItem></Appear>
              <Appear><ListItem>
                Can perform a wide range of tasks, e.g. optimization, minification
              </ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Plugins
            </Heading>
            <CodePane
              textSize={codeFontSize}
              lang="javascript"
              source={require('!raw-loader!./examples/plugins.example')}
            />
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="coding">
            <Heading caps size={2} textColor="tertiary">
              Coding Session!
            </Heading>
            <Link textSize={38} textColor="tertiary" href="https://github.com/mike1808/jsconf-17-webpack"
                  target="_blank">
              https://github.com/mike1808/jsconf-17-webpack
            </Link>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="intro">
            <Heading caps size={2} textColor="tertiary">
              Project Intro
            </Heading>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="workspace">
            <Heading caps size={2} textColor="tertiary">
              Workspace
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Configuration
            </Heading>
            <List>
              <Appear><ListItem>Split into common, developer and production config</ListItem></Appear>
              <Appear><ListItem>Merge configuration using webpack-merge</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Minimal Configuration
            </Heading>
            <Appear><Text>We will have two files:</Text></Appear>
            <List ordered>
              <Appear><ListItem><code>webpack.config.js</code> containing configuration in a higher level of abstraction</ListItem></Appear>
              <Appear><ListItem><code>webpack.parts.config.js</code> containing consumable
                configuration</ListItem></Appear>
            </List>
          </Slide>
          <CodeSlide
            maxWidth="100vw"
            textSize="24px"
            transition={slideTransition}
            lang="javascript"
            code={require('!raw-loader!./examples/webpack.config.example')}
            ranges={[
              { loc: [0, 81], title: 'webpack.config.js' },
              { loc: [0, 4], note: 'requirements' },
              { loc: [8, 14], note: 'paths of our files/folders' },
              { loc: [15, 60], title: 'common config' },
              { loc: [17, 18], note: 'building for browser' },
              { loc: [18, 19], note: 'our paths will be relative to context' },
              { loc: [19, 22], note: 'entry config' },
              { loc: [20, 21], note: '"app" entry chunk with entry path' },
              { loc: [22, 27], note: 'output config' },
              { loc: [23, 24], note: 'name of bundle with placeholders' },
              { loc: [24, 25], note: 'path to prepend in URL in app' },
              { loc: [25, 26], note: 'where to save our bundle and assets' },
              { loc: [27, 30], note: 'resolve config' },
              { loc: [28, 29], note: 'extensions which can be not specified' },
              { loc: [30, 38], note: 'module loaders config' },
              { loc: [32, 36], note: 'how to load .txt files' },
              { loc: [33, 34], note: 'regexp to match .txt files' },
              { loc: [34, 35], note: 'loader to use for loading' },
              { loc: [38, 44], note: 'list of used plugins' },
              { loc: [39, 42], note: 'inject our assets into HTML' },
              { loc: [42, 43], note: 'don\'t ignore case in import paths (case insensitive FS)' },
              { loc: [46, 59], note: 'loader for compiling JS files with Babel (will dive into in the next slides)' },
              { loc: [62, 67], title: 'configs for development' },
              { loc: [63, 64], note: 'use inline source maps' },
              { loc: [64, 65], note: 'webpack-dev-server configs' },
              { loc: [65, 67], note: 'set process.env.NODE_ENV in our modules' },
              { loc: [68, 73], title: 'configs for production' },
              { loc: [69, 70], title: 'use .map source maps' },
              { loc: [70, 71], title: 'remove our dist folder before build' },
              { loc: [71, 72], note: 'set process.env.NODE_ENV in our modules' },
              { loc: [74, 81], title: 'default export' },
              { loc: [75, 78], note: 'for production env merge common config with production one' },
              { loc: [79, 80], note: 'for other envs merge common config with development one' },
            ]}
            showLineNumbers={false}
          />
          <CodeSlide
            maxWidth="100vw"
            textSize="24px"
            transition={slideTransition}
            lang="javascript"
            code={require('!raw-loader!./examples/webpack.parts.config.example')}
            ranges={[
              { loc: [0, 50], title: 'webpack.parts.config.example' },
              { loc: [0, 2], note: 'requirements' },
              { loc: [3, 14], note: 'configs for webpack-dev-server' },
              { loc: [15, 22], note: 'replace process.env.NODE_ENV with our env in modules' },
              { loc: [23, 28], note: 'plugin for removing the specified file/folder' },
              { loc: [29, 45], note: 'loader for .js and .jsx files' },
              { loc: [33, 34], note: 'regexp for matching our files' },
              {
                loc: [34, 35],
                note: 'don\'t compile modules in node_modules, we assume that there are already compiled with babel'
              },
              { loc: [36, 40], note: 'use babel-loader with the specified options' },
              { loc: [46, 50], note: 'config for the source maps generation method' },
            ]}
            showLineNumbers={false}
          />
          <Slide transition={slideTransition} id="optimization">
            <Heading caps size={2}>
              Optimization
            </Heading>
            <Image src={images.optimization} />
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Minification
            </Heading>
            <List>
              <Appear><ListItem>Removing redundant parts w/o chaning its functionality</ListItem></Appear>
              <Appear><ListItem>
                <Link href="https://github.com/webpack-contrib/uglifyjs-webpack-plugin" target="_blank">UglifyJS
                  Plugin</Link>
              </ListItem></Appear>
              <Appear><ListItem>
                <Link href="https://github.com/webpack-contrib/css-loader#options" target="_blank">css-loader
                  minimize:true</Link>
              </ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Tree Shaking
            </Heading>
            <List>
              <Appear><ListItem>aka Dead Code Elimination</ListItem></Appear>
              <Appear><ListItem>Removing unused code by static analysis</ListItem></Appear>
              <Appear><ListItem>Webpack marks source code and UglifyJS removes those pieces</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Environment Variables
            </Heading>
            <List>
              <Appear><ListItem>Some libraries have code that runs only in development</ListItem></Appear>
              <Appear><ListItem>It can be removed by using env vars</ListItem></Appear>
              <Appear><ListItem>
                <Link href="https://webpack.js.org/plugins/define-plugin/"
                      target="_blank">DefinePlugin</Link> substitutes your
                variables with its values at <em>compile</em> time
              </ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="styles">
            <Heading caps size={2} textColor="tertiary">
              Styles
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Styles 1 - CSS Extract
            </Heading>
            <List>
              <Appear><ListItem>Fewer style tags</ListItem></Appear>
              <Appear><ListItem>CSS can be cached</ListItem></Appear>
              <Appear><ListItem>Prevent flash of unstyled content by loading the styles first</ListItem></Appear>
              <Appear><ListItem>
                Achieved by using <Link
                href="https://webpack.js.org/plugins/extract-text-webpack-plugin/"
                target="_blank">ExtractTextWebpackPlugin</Link>
              </ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Styles 2 - Autoprefixer
            </Heading>
            <List>
              <Appear><ListItem>Don't write vendor prefixes by hand</ListItem></Appear>
              <Appear><ListItem>Use <Link href="https://www.npmjs.com/package/autoprefixer"
                                          target="_blank">autoprefixer</Link></ListItem></Appear>
              <Appear><ListItem>Specify supported browser using <Link
                href="https://github.com/ai/browserslist" target="_blank">browserslist</Link></ListItem></Appear>
              <Appear><ListItem>Hook up to Webpack using <Link
                href="https://webpack.js.org/loaders/postcss-loader/"
                target="_blank">postcss-loader</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Styles 3 - Unused rules
            </Heading>
            <List>
              <Appear><ListItem>Libraries contain many unused rules</ListItem></Appear>
              <Appear><ListItem>They can be removed using <Link
                href="https://github.com/webpack-contrib/purifycss-webpack" target="_blank">PurifyCSS
                Plugin</Link>!</ListItem></Appear>
              <Appear><ListItem>Whitelist CSS modules rules</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="extra1">
            <Heading caps size={2} textColor="tertiary">
              Extra 1
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Transpilling less
            </Heading>
            <List>
              <Appear><ListItem>Include polyfills only for not supported features</ListItem></Appear>
              <Appear><ListItem>Using our <code>browserslist</code> for supported browsers</ListItem></Appear>
              <Appear><ListItem>Remove polyfills with <Link
                href="https://github.com/babel/babel/tree/master/packages/babel-preset-env"
                target="_blank">@babel/preset-env</Link> with <code>useBuiltIns:
                'entry'</code></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="bundle-splitting">
            <Heading caps size={2} textColor="tertiary">
              Bundle Splitting
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              The Problem
            </Heading>
            <List>
              <Appear><ListItem>One big JS file</ListItem></Appear>
              <Appear><ListItem>Slow initial load time</ListItem></Appear>
              <Appear><ListItem>App code change destroys the cache</ListItem></Appear>
              <Appear><ListItem><em>Solution:</em> split into several files</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Vendor bundle
            </Heading>
            <List>
              <Appear><ListItem>Create an entry specifying all your vendor modules</ListItem></Appear>
              <Appear><ListItem>It's a new entry or <strong>entry chunk</strong></ListItem></Appear>
            </List>
            <Appear><Image src={images.vendor1} /></Appear>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Vendor bundle - commons chunks
            </Heading>
            <List>
              <Appear><ListItem>Extract common modules with <Link
                href="https://webpack.js.org/plugins/commons-chunk-plugin/">CommonsChunkPlugin</Link></ListItem></Appear>
              <Appear><ListItem>Let's use <strong>minChunks</strong> option</ListItem></Appear>
            </List>
            <Appear><Image src={images.vendor2} height={400} /></Appear>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Automatic vendor bundle
            </Heading>
            <List>
              <Appear><ListItem>Extract common modules if they are in <code>node_modules</code></ListItem></Appear>
              <Appear><ListItem><code>minChunks</code> can be a function <code>(module, count) =>
                Boolean</code></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Module
            </Heading>
            <List>
              <Appear><ListItem><code>resource</code> - full path</ListItem></Appear>
              <Appear><ListItem><code>context</code> - path to the containing directory</ListItem></Appear>
              <Appear><ListItem><code>rawRequest</code> - unresolved path</ListItem></Appear>
              <Appear><ListItem><code>userRequest</code> - user request with a query</ListItem></Appear>
              <Appear><ListItem><code>chunks</code> - in which chunks this modules is contained</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="caching">
            <Heading caps size={2} textColor="tertiary">
              Caching
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Requirements
            </Heading>
            <List>
              <Appear><ListItem>Invalidate browser cache when the content is changed</ListItem></Appear>
              <Appear><ListItem>Do it as rear as possible</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Steps
            </Heading>
            <List>
              <Appear><ListItem>Use <code>[chunkhash]</code> placeholder</ListItem></Appear>
              <Appear><ListItem>Extract manifest by specifying not existing chunk name in CommonsChunkPlugin</ListItem></Appear>
              <Appear><ListItem>
                Use <Link href="https://webpack.js.org/plugins/named-modules-plugin/"
                          target="_blank">NamedModulesPlugin</Link> or
                <Link href="https://webpack.js.org/plugins/hashed-module-ids-plugin/"
                      target="_blank">HashedModuleIdsPlugin</Link> (preferable)
              </ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="code-splitting">
            <Heading caps size={2} textColor="tertiary">
              Code Splitting
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Code Splitting - key concepts
            </Heading>
            <List>
              <Appear><ListItem>Decrease the size of initial chunk</ListItem></Appear>
              <Appear><ListItem>Load chunks on demand</ListItem></Appear>
              <Appear><ListItem>For example, chunks can be loaded on click, on route match, on
                scroll</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              <code>import()</code>
            </Heading>
            <CodePane
              textSize={codeFontSize}
              lang="javascript"
              source={require('!raw-loader!./examples/import.example')}
            />
            <List>
              <Appear><ListItem>Use <Link href="https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import"
                                          target="_blank">@babel/plugin-syntax-dynamic-import</Link> to
                support <code>import()</code> syntax</ListItem></Appear>
              <Appear><ListItem>Handle module when promise is resolved</ListItem></Appear>
              <Appear><ListItem>Add <code>chunkFilename</code> to output config to control the chunk file
                name</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Code Splitting in React
            </Heading>
            <CodePane
              textSize={codeFontSize}
              lang="javascript"
              source={require('!raw-loader!./examples/react-code-splitting.example')}
            />
            <List>
              <Appear><ListItem>Use <Link href="https://github.com/thejameskyle/react-loadable"
                                          target="_blank">react-loadable</Link> to
                render the loaded components</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Async Common Chunks
            </Heading>
            <List>
              <Appear><ListItem>You can extract common modules of your async chunks</ListItem></Appear>
              <Appear><ListItem>It will create one more async chunk that will be loaded with its
                parent</ListItem></Appear>
              <Appear><ListItem>Use <code>async</code> and <code>children</code> properties of
                CommonsChunkPlugin</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="extra2">
            <Heading caps size={2} textColor="tertiary">
              Extra 2
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Scope Hoisting
            </Heading>
            <List>
              <Appear><ListItem>Webpack wraps modules into closures</ListItem></Appear>
              <Appear><ListItem>It slows down code execution</ListItem></Appear>
              <Appear><ListItem><em>Solution:</em> Try to group modules (if possible) in fewer
                closures</ListItem></Appear>
              <Appear><ListItem>Use <Link href="https://webpack.js.org/plugins/module-concatenation-plugin/"
                                          target="_blank">ModuleConcatenationPlugin</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Image Optimization
            </Heading>
            <List>
              <Appear><ListItem>Optimize your images (png, jpeg, gif, svg)</ListItem></Appear>
              <Appear><ListItem>Sometimes significantly reduces the assets size</ListItem></Appear>
              <Appear><ListItem>Use <Link href="https://github.com/tcoopman/image-webpack-loader"
                                          target="_blank">image-loader</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Versioning
            </Heading>
            <List>
              <Appear><ListItem>Attach Git tag or commit hash for easier debug</ListItem></Appear>
              <Appear><ListItem>Use <Link href="https://webpack.js.org/plugins/banner-plugin/"
                                          target="_blank">BannerPlugin</Link> with <Link
                href="https://github.com/pirelenito/git-revision-webpack-plugin" target="_blank">Git Revision Webpack
                Plugin</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="analyze">
            <Heading caps size={2} textColor="tertiary">
              Analyze
            </Heading>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading>
              Build Analysis
            </Heading>
            <List>
              <Appear><ListItem>Analyze your bundles</ListItem></Appear>
              <Appear><ListItem>Find common modules and extract</ListItem></Appear>
              <Appear><ListItem>Find wrong modules in your chunks</ListItem></Appear>
              <Appear><ListItem>Tools:</ListItem></Appear>
              <List>
                <Appear><ListItem>Dependency Graph: <Link href="http://webpack.github.io/analyse/#modules"
                                                          target="_blank">link</Link></ListItem></Appear>
                <Appear><ListItem>Bundle Analyzer: <Link
                  href="https://github.com/webpack-contrib/webpack-bundle-analyzer"
                  target="_blank">link</Link></ListItem></Appear>
              </List>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary" id="links">
            <Heading caps size={2} textColor="tertiary">
              Further Materials
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading>
              Further Materials
            </Heading>
            <List>
              <ListItem>
                <Link href="https://webpack.js.org/concepts/" target="_blank">Official Webpack Documentation</Link>
              </ListItem>
              <ListItem>
                <Link href="https://webpack.js.org/glossary/" target="_blank">Webpack Glossary</Link>
              </ListItem>
              <ListItem>
                <Link href="https://survivejs.com/webpack/foreword/" target="_blank">SurviveJS - Webpack</Link>
              </ListItem>
              <ListItem>
                <Link href="https://medium.com/webpack" target="_blank">Medium Webpack</Link>
              </ListItem>
              <ListItem>
                <Link href="https://twitter.com/TheLarkInn" target="_blank">@TheLarkInn - Webpack maintainer</Link>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading caps size={2} textColor="tertiary">
              Q/A
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading caps size={2} textColor="tertiary">
              Thank you! Happy bundling!
            </Heading>
            <Link textColor="white" href="https://github.com/mike1808/jsconf-17-webpack-presentation"
                  target="_blank">Source code</Link>
          </Slide>

        </Deck>
      </div>
    );
  }
}
