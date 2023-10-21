import { Component, OnInit, ViewChild } from "@angular/core";
import { CategoryService } from "src/app/core/services/category/category.service";
import { ICategoryDTO, Icategory } from "./interface/category.interface";
import { NotificationService } from "src/app/core/services/notification/notification.service";
import { LoadingJsFile } from "src/app/core/services/loadingJs/loadingJs.service";
import { CreateOrEditCategoriaComponent } from "./create-or-edit-categoria/create-or-edit-categoria.component";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html",
  styleUrls: ["./categoria.component.css"],
})
export class CategoriaComponent implements OnInit {
  public categoryData: Array<Icategory> = [];
  public categoryToFiter: Array<Icategory> =  [];
  public placeholderText = "procurar nome da categoria";
  @ViewChild(CreateOrEditCategoriaComponent, {static: true})
  public createOrEditCategory!: CreateOrEditCategoriaComponent
  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private loadingJs: LoadingJsFile, 
  ) {
    this.loadingJs.loadingMainJs('assets/js/app.bundle.min.js' )
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.listAll().subscribe((response) => {
      this.categoryData = response?._value;
      this.categoryToFiter= this.categoryData;
    });
  }

  public createCategory(event: ICategoryDTO) {
    this.categoryService.create(event).subscribe((response) => {
      if (response) {
        this.notificationService.showSucess("Categoria Criado com sucesso");
         this.getAllCategory()
      }
    });
  }

  public searchCategory(value: string){
           this.categoryData= [];
           this.categoryData= this.categoryService.searchCateryName(this.categoryToFiter, value)
  }

  public  updateCategory(category: Icategory){

       this.createOrEditCategory.editCategory(category)
  }

    public submiteUpdateCategory(event:Icategory){
       this.categoryService.update(event).subscribe((response)=>{
        if(response){
          this.notificationService.showSucess("Categoria Actualizado com sucesso")
          this.getAllCategory()
        }
       })
    }
}
