import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  scripts_tree_structure = [
      {
        'folder': 'Root',
        'contents': [
                      {
                        'contents': [
                                    {'Name': 'Java'},
                                    {'Name':'C#'},
                                    {'Name': 'Python'}
                        ]
                      }
                    ]
      }
  ];
}
