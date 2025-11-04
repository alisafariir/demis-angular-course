import {
  AfterViewInit,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
  OnInit,
  Signal,
  signal,
  viewChild,
} from '@angular/core';
import { CardComponent } from '../../components/card/card';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
})
export class TestComponent implements AfterViewInit {
  products = signal<any[]>([]);

  testService = inject(TestService);

  limit = signal(10);
  skip = signal(0);
  total = signal(0);

  ngAfterViewInit(): void {
    this.loadProducts();
  }

  effect = effect(() => {
    console.log(this.products());
  });

  loadProducts() {
    this.testService.getProducts(this.limit(), this.skip()).subscribe({
      next: (response: any) => {
        this.total.set(response.total);
        this.products.update((oldValues) => [...oldValues, ...response.products]);
      },
    });
  }

  handleLoadMore() {
    this.skip.update((skip) => skip + this.limit());
    this.loadProducts();
  }
}
