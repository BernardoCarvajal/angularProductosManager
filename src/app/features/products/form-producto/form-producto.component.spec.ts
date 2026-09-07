import { ProductsModule } from '../../products.module';
import { provideRouter } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductoComponent } from './form-producto.component';

describe('FormProductoComponent', () => {
  let component: FormProductoComponent;
  let fixture: ComponentFixture<FormProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsModule],
      providers: [provideRouter([]), provideNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
