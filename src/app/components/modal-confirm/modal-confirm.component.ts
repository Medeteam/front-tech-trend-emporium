import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.css'
})
export class ModalConfirmComponent {
  @Input() isVisible: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>();
  @Input() idProduct: string = "";

  constructor(private productsService: ProductsService){}

  deleteProduct(){
    this.productsService.deleteProduct(this.idProduct).subscribe({
      next: (data: any) => {
        console.log(data);        
      },
      error: (err) => {
        console.log(err);        
      }
    });
    this.closeModal();
  }

  closeModal() {
    this.isVisible = false;
    this.stateChange.emit(this.isVisible);
  }
}
