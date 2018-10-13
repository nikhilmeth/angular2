import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    onMediItemDelete(mediaItem){
        
    }

    firstMediaItem = {
        id:1,
        name:"That 70s Show",
        medium: "Series",
        category: "Comedy",
        year: 1997,
        watchedOn: true,
        isFavorite: true
    }
}
