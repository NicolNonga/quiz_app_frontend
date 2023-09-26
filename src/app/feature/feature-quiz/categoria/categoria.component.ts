import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { Icategory } from './interface/category.interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

    public categoryData: Array<Icategory> = []
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
      this.getAllCategory();
  }


  getAllCategory(){
      this.categoryService.listAll().subscribe((response)=>{
        console.log(response)
         this.categoryData= response?._value
      })
  }
}
