import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router'
import { dataFake } from '../../../data/datafake';
@Component({
  selector: "app-content",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.css",
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string ="";
  private id: string | null = null;

  constructor(
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    })

    if (this.id) {
      this.setValuesToComponent(this.id);
    }
  }

  setValuesToComponent(id: string) {
    const result = dataFake.filter((article) => article.id === Number(id));

    console.log('result', result);

    if (result) {
      this.photoCover = result[0].photo;
      this.contentTitle = result[0].title;
      this.contentDescription = result[0].description;
    }
  }
}
