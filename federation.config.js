const { shareAll, withNativeFederation } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'ng19-mfe-components',

  exposes: {
    './widget-a': './src/bootstrap-widget-a.ts',
    './widget-b': './src/bootstrap-widget-b.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: true, 
    }),
    '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

  // skip: [ 'rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket' ]

}); 