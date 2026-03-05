import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IpInfoService } from '../ip-info.service';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ip-info.html',
  styleUrl: './ip-info.css'
})
export class IpInfoComponent {
  private ipInfoService = inject(IpInfoService);
  
  ip: string = '';
  country: string = '';
  error: string = '';

  check(): void {
    if (this.ip.trim()) {
      this.ipInfoService.getIpInfo(this.ip).subscribe({
        next: (data: any) => {
          this.country = data.country;
          this.error = '';
        },
        error: () => {
          this.error = 'Nie udało się pobrać danych';
          this.country = '';
        }
      });
    }
  }
}