# Challenge for job opportunity: Front-end test assignment

# The Solution: **Git Guru**

## An overview:

The WebApp was made with react and redux, also using redux-sagas as a redux middleware. The connection with the API was done with axios. And to handle the timezone convertion moments.js was used.

Instead of listing my own repository (longvision) or 'reactjs' repository, I chose to let the user input the desired username into the form and this way have the repositories listed for that user.

After typing the repository's username, a list of repositories appears as a list.
Clicking on the 'Commits' button, another screen appears and the last 20 commits of the same repository appears in another list.

## ES6 Features:

Used ternary operators to avoid using _`if else`_ statements:

```
{repo.loading && <Loading> Carregando...</Loading>}
```

Also used Template Literals:

```
export function* listCommits(action) {
  try {

    const response = yield call(api.get, `/repos/${action.payload.full_name}/commits`);
    yield put(loadCommitsSuccess(response.data));

    history.push('/commits');
    console.tron.log('sucesso');
  } catch (err) {
    console.tron.log('error');
  }
}
```

Used Class Inheritances instead of Prototypes:

```
class Main extends Component {
state = {
repositoryInput: '',
};

}
...

```

## Filtering commits

By typing any letter of word in the input field, it is possible to filter the commits by description that contains the same input as typed before.
You can filter through the last 20 items.

The logo was also my creation too :).

## Installing the project and running the webapp.

1. Download the repository in your computer.
2. Unzip the file.
3. Open the file in your code editor.
4. Run the following command in the application folder, inside your terminal to install `node_modules` folder (npm dependencies):

   > `yarn install`

5. Run below command on the terminal to lauch the application:
   > `yarn start`

## Tests and TDD

I didn't created any tests to develop this app.
All tests were done by using the app live, with react's consoles browser's alerts.
The tests functionality is available but no tests are written.
To test redux and track the state changes I used the Reactotron to log and show Redux's changes.

# The problem:

## What is expected

An app that connect to the Github API, and list all public repositories from an user, and the last commits for the repositories.

## Tasks

### 1. Connect to github API

Connect to Github API, and list all public repositories from your user. Alternatively use the `reactjs` user.
Create a page that list the public repositories.

### 2. Load commits

After a repository is clicked, the user must be shown a page with the last 20 commits on that repository, also a search field for filtering the commits by the term inserted into the field.

```

Feel free to choose if you are going to use the Rest API or the GraphQL API, and what subset of information you gonna show into each page.

```

## Bonus Tasks

- Use some modern css solution (CSS Modules, Styled-components, etc);
- Endless scrolling for the commits page;
- Make it possible to change the order the repositories are shown (By stars, name, etc);
- Component Library (Storybook.js, Styleguidist, etc);
- Server side rendering.

## The requested solution

- Use `reactjs`, you can start with a simple `create-react-app` structure and work from there;
- Use some state managing solution;
- Use ES6+ features and write down in the readme why you used and for what, for at least 2 of them;
- Write unit tests and any other test you may find helpful or important to have;
- Keep performance and corner cases in mind;
- Be creative and show us what you got.

## Delivery

- **Don't** fork this project. Create a new repository in your account and send us the URL;
- Create a readme file with the instructions to run the project and the tests, and add any comment that you think is relevant.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

```

```
