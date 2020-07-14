import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _fuseConfigService:FuseConfigService
    )
    {this._fuseConfigService.config = {
        layout: {
            style:  'horizontal-layout-1',
            navbar   : {
                 hidden: true
              
            },
            toolbar  : {
               hidden: true
            },
            footer   : {
                  hidden:true
            },
            sidepanel: {
                 hidden: true
            }
        }
    }
      
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }
}
