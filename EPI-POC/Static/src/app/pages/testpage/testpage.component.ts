import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        console.log("loaded testpage")
        /*fetch("/api/content?contentId=" + this.props.contentReference)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    title: json['title']
                });
            });*/
    }

}
