// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firestoreConfig : {
      apiKey: "AIzaSyDcSS0nHkoqlrLgSIkE0DFDJM3KGw3Nb-s",
      authDomain: "angular5firestore.firebaseapp.com",
      databaseURL: "https://angular5firestore.firebaseio.com",
      projectId: "angular5firestore",
      storageBucket: "angular5firestore.appspot.com",
      messagingSenderId: "532365299360"
    }
};
