import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/core/services/category/category.service";
import { ICategoryDTO, Icategory } from "./interface/category.interface";
import { NotificationService } from "src/app/core/services/notification/notification.service";
import { LoadingJsFile } from "src/app/core/services/loadingJs/loadingJs.service";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html",
  styleUrls: ["./categoria.component.css"],
})
export class CategoriaComponent implements OnInit {
  public categoryData: Array<Icategory> = [];
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
}
