import 'core-js/client/core.min';
import 'zone.js/dist/zone.min';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app';


function load() {
	enableProdMode();
	platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
    load();
} // or listen for some event
