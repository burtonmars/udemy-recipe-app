import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is some stuff that tastes good', 'https://s2.glbimg.com/p4woJsv77EAsvuL7_wdf3WXKR5k=/0x0:448x299/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/10/15/23_46_36_130_Estrogonof.jpg'),
    new Recipe('A Test Recipe', 'This is some stuff that tastes good', 'https://s2.glbimg.com/p4woJsv77EAsvuL7_wdf3WXKR5k=/0x0:448x299/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/10/15/23_46_36_130_Estrogonof.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
