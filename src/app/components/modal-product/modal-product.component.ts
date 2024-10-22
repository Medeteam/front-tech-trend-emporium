import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalProductComponent {
  @Input() isVisible: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>();
  @Input() product: Product | undefined;
  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('description') descriptionInput!: ElementRef;
  @ViewChild('category') categorySelect!: ElementRef;
  @ViewChild('price') pricedInput!: ElementRef;
  @ViewChild('stock') stockInput!: ElementRef;
  categories: string[] = [];

  constructor(private productService: ProductsService, private categoriesService: CategoriesService){}

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe({
      next: (data: Category[]) => {
        data.map(c => {
          this.categories.push(c.name);
        });      
      },
      error: (err) => {
        console.log("Error fetching data " + err);        
      }
    });
  }

  getCategoryIndex(categoryName: string): number{
    return this.categories.indexOf(categoryName);
  }

  updateProduct(){
    console.log("Button pressed");    
    const title = this.titleInput.nativeElement.value;
    const description = this.descriptionInput.nativeElement.value;
    // const selectedQuestionIndex = this.questionSelect.nativeElement.selectedIndex;
    const category = this.categorySelect.nativeElement.options[this.categorySelect.nativeElement.selectedIndex].text;
    const price = this.pricedInput.nativeElement.value;
    const stock = this.stockInput.nativeElement.value;

    if(this.product){
      this.product.title = title;
      this.product.description = description;
      this.product.category = category;
      this.product.price = price;
      this.product.stock = stock;
      this.productService.updateProduct(this.product).subscribe({
        next: () =>{},
        error: (err) => {
          console.log(err);
          
        }
      });
      this.closeModal();
    }
  }

  closeModal() {
    this.isVisible = false;
    this.stateChange.emit(this.isVisible);  
  }
}
