import 'core-js/client/core.min';
import 'zone.js/dist/zone.min';
import 'hammerjs';

import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app-module';


function load() {
	enableProdMode();
	platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
    load();
} else {
    document.addEventListener('DOMContentLoaded', ()  => load());
}