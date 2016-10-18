import 'core-js/client/core.min';
import 'zone.js/dist/zone.min';
import 'hammerjs';

import { enableProdMode } from '@angular/core';

import { platformBrowser }    from '@angular/platform-browser';

import { AppModuleNgFactory } from '../build/src/app/app-module.ngfactory';


function load() {
	enableProdMode();
	platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
}

if (document.readyState === 'complete') {
    load();
} else {
    document.addEventListener('DOMContentLoaded', ()  => load());
}