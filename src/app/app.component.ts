import { Component} from '@angular/core';
@Component({
selector: 'app-root',
styleUrls: ['./app.component.css'],
templateUrl: './app.component.html'
})
export class AppComponent {
    next=null;
    tabId="1"

    change(value){
        console.log("value",value)
        this.tabId=value;
        console.log("tabIf",this.tabId)
    }

}
 
