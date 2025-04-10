const { shareAll, withNativeFederation } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'ng19-mfe-components',

  exposes: {
    './web-components': './src/bootstrap-web-components.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: true, 
    }),
    // Explicitly add secondary entry points that might be missed
    '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

  // skip: [ 'rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket' ]

}); 