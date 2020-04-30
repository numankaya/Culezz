import { Component, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  jsonData: any = [];

  constructor(private recipesService: RecipesService) {
    this.initializeJSONData();
  }

  FilterJSONData(ev: any) {
    this.initializeJSONData();
    const val = ev.target.value;
    if (val && val.trim() !== "") {
      this.jsonData = this.jsonData.filter((item) => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  selectVal(val) {
    alert("You have selected=" + val);
  }

  initializeJSONData() {
    this.jsonData = [
      {
        name: "Turkey",
        code: "Tur",
      },
      {
        name: "United Kingdom",
        code: "Uk",
      },
      {
        name: "Germany",
        code: "Ger",
      },
      {
        name: "Egypt",
        code: "Egy",
      },
    ];
  }
}
