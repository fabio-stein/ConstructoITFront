import { Component, OnInit } from '@angular/core';
import { NbIconLibraries, NbThemeService } from '@nebular/theme';
import { environment } from '../environments/environment';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private iconLibraries: NbIconLibraries, private themeService: NbThemeService) {
    this.iconLibraries.registerFontPack('font-awesome', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.setDefaultPack('font-awesome');

    let theme = localStorage.getItem("currentTheme");
    if(theme!=null){
      themeService.changeTheme(theme);
    }
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
    })
  }

  ngOnInit() {
  }
}
