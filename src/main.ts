import 'core-js/client/core.min';
import 'zone.js/dist/zone.min';
import 'hammerjs';

import { enableProdMode } from '@angular/core';

//import { platformBrowser }    from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModuleNgFactory } from '../build/src/app/app.ngfactory';
import { AppModule } from './app/app';


function load() {
	enableProdMode();
	//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
	platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
    load();
} else {
    document.addEventListener('DOMContentLoaded', ()  => load());
}