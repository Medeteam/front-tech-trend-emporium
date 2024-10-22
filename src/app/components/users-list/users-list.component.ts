import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { User } from '../../interfaces/user';
import { UserResponse } from '../../interfaces/user-response';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersList {
  userList: User[] = [];
  isModalVisible: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe({
      next: (data: UserResponse) =>{
        this.userList = data.users;
        console.log(this.userList);
            
      },
      error: (err) => {
        console.log("An error occurred: " + err);        
      }
    });
  }

  onStateChange(visibility: boolean) {    
    this.isModalVisible = visibility;
    if(!visibility){
      // this.getProducts();
    }
  }

  openModal(){   
    this.isModalVisible = true;
  }

  // closeModal(){
  //   this.isModalVisible = false;
  // }
}
