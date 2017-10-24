import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

// check if https active, because that would cause trouble with the backend
if (location.protocol != 'http:')
{
  location.href = 'http:' + window.location.href.substring(window.location.protocol.length);
}

platformBrowserDynamic().bootstrapModule(AppModule);
